# Clear plots
if(!is.null(dev.list())) dev.off()

# Clear console
cat("\014") 

# Clean workspace
rm(list=ls())

# Set working directory 
# setwd("/home/z/Devel/zero/lealfb/bdd2Goal/R")

matriz <- read.csv(file="matriz.csv", header=FALSE, sep=",")

#print(matriz)

peso_skipped 	<- 0
peso_fail		<- 1
peso_success	<- 2

colnames(matriz) <- c('Sprint', 'Features', 'Complexidade', 'Skipped', 'Fail', 'Success',
  'Total Cenários', 'Status Atual', 'Status Ideal', 'Satisfação', 'DT Local')

# matriz <- as.data.frame(t(matriz))

total_complexidade <- 0
total_status_atual <- 0
total_status_ideal <- 0
total_satisfacao <- 0
total_dt <- 0

maximo_sprints <- 0

for ( i in 1:nrow(matriz) ) {

	calc_skipped <- as.numeric(matriz[i,4]) * peso_skipped
	calc_fail <- as.numeric(matriz[i,5]) * peso_fail
	calc_success <- as.numeric(matriz[i,6]) * peso_success
	complexidade <- as.numeric(matriz[i,3])
	
	total_cenarios <- as.numeric(matriz[i,7])

	status_atual <- (calc_skipped + calc_fail + calc_success) * complexidade
	status_ideal <- (total_cenarios * peso_success) * complexidade
	satisfacao <- (status_atual*100)/status_ideal
	dt_local <- 1 - (status_atual/status_ideal)

	matriz[i,8] <- status_atual
	matriz[i,9] <- status_ideal
	matriz[i,10] <- satisfacao
	matriz[i,11] <- dt_local

	total_complexidade <- complexidade + total_complexidade
	total_status_atual <- status_atual + total_status_atual
	total_status_ideal <- status_ideal + total_status_ideal
	
	if (as.integer(matriz[i,1]) > maximo_sprints) {
		maximo_sprints <- as.integer(matriz[i,1])
	}
}

total_satisfacao <- total_status_atual * 100 / total_status_ideal
total_dt <- 1 - (total_status_atual/total_status_ideal)

evolucao_dt <- rbind()

for ( i in 1:maximo_sprints ) {
	
	atual <- 0
	
	for ( j in 1:nrow(matriz) ) {
		if (as.integer(matriz[j,1]) > i) {
			break
		}
		atual <- atual + as.integer(matriz[j,8])
	}

	sprint <- c(i, atual, as.integer(total_status_ideal), 
		(atual/total_status_ideal),
		1-(atual/total_status_ideal)
	)
	
	evolucao_dt <- rbind(evolucao_dt, sprint[1:5])
}

evolucao_dt <- as.data.frame(evolucao_dt)

colnames(evolucao_dt) <- c('Sprint', 'Atual', 'Ideal', 'Satisfação', 'DT Global')

#svg(filename="grafico_1.svg", width=5, height=4, pointsize=12)

plot(evolucao_dt[,1], evolucao_dt[,4], type = "b", 
      pch = 15, col = "blue", xlab = "Sprints", ylab = "", xaxt="n")
lines(evolucao_dt[,1], evolucao_dt[,5], type = "b", 
      pch = 19, col = "red", xlab = "Sprints", ylab = "", xaxt="n")
legend("top", legend=c("Satisfação", "DT Global"), 
       col=c("blue", "red"), lty = 1:1, cex=0.8)
axis(side=1, at=0:maximo_sprints, labels=0:maximo_sprints)

save.image()

#dev.off()
