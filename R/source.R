# Clear plots
if(!is.null(dev.list())) dev.off()

# Clear console
cat("\014") 

# Clean workspace
rm(list=ls())

# Set working directory 
setwd("/home/z/Devel/zero/lealfb/r")


peso_skipped 	<- 0
peso_fail		<- 1
peso_success	<- 2

matriz <- rbind(
	c(1,'criar assunto especifico',1,0,0,2,2,'sa','si','satis','dtlocal'),
	c(1,'criar assunto geral',1,0,0,5,5,'sa','si','satis','dtlocal'),
	c(1,'criar posto/graduação',1,0,0,3,3,'sa','si','satis','dtlocal'),
	c(1,'criar tipo de documento',1,0,0,2,2,'sa','si','satis','dtlocal'),
	c(1,'criar qualificacao militar',1,0,0,6,6,'sa','si','satis','dtlocal'),
	c(2,'visualizar assunto especifico',1,0,0,2,2,'sa','si','satis','dtlocal'),
	c(2,'visualizar assunto geral',1,0,0,1,1,'sa','si','satis','dtlocal'),
	c(2,'visualizar postos/graduações',1,0,0,1,1,'sa','si','satis','dtlocal'),
	c(2,'visualizar tipos de documento',1,0,0,1,1,'sa','si','satis','dtlocal'),
	c(2,'visualizar qualificações militar',1,0,0,1,1,'sa','si','satis','dtlocal'),
	c(3,'excluir assunto especifico',1,0,0,2,2,'sa','si','satis','dtlocal'),
	c(3,'atualizar assunto especifico',1,0,0,2,2,'sa','si','satis','dtlocal'),
	c(3,'excluir assunto geral',1,0,0,2,2,'sa','si','satis','dtlocal'),
	c(3,'atualizar assunto geral',1,0,0,6,6,'sa','si','satis','dtlocal'),
	c(3,'excluir posto/graduação',1,0,0,1,1,'sa','si','satis','dtlocal'),
	c(3,'atualizar posto/graduação',1,0,0,2,2,'sa','si','satis','dtlocal'),
	c(4,'excluir tipo de documento',1,0,0,1,1,'sa','si','satis','dtlocal'),
	c(4,'atualizar tipo de documento',1,0,0,1,1,'sa','si','satis','dtlocal'),
	c(4,'excluir qualificação militar',1,0,0,1,1,'sa','si','satis','dtlocal'),
	c(4,'atualizar qualificacao militar',1,0,0,1,1,'sa','si','satis','dtlocal'),
	c(4,'visualizar tipos de boletim',1,0,0,1,1,'sa','si','satis','dtlocal'),
	c(4,'excluir tipo de boletim',1,0,0,1,1,'sa','si','satis','dtlocal'),
	c(5,'atualizar tipo de boletim',1,0,0,2,2,'sa','si','satis','dtlocal'),
	c(5,'criar tipo de boletim',1,0,0,9,9,'sa','si','satis','dtlocal'),
	c(5,'visualizar categoria',1,0,0,2,2,'sa','si','satis','dtlocal'),
	c(5,'excluir categoria',1,0,0,2,2,'sa','si','satis','dtlocal'),
	c(6,'atualizar categoria',1,0,0,1,1,'sa','si','satis','dtlocal'),
	c(6,'criar categoria',1,0,0,4,4,'sa','si','satis','dtlocal'),
	c(6,'Visualizar Militar',1,0,0,2,2,'sa','si','satis','dtlocal'),
	c(6,'Excluir Militar',1,0,0,2,2,'sa','si','satis','dtlocal'),
	c(7,'Atualizar Militar',1,0,0,11,11,'sa','si','satis','dtlocal'),
	c(7,'Cadastrar Militar',1,0,0,14,14,'sa','si','satis','dtlocal'),
	c(7,'visualizar parte boletim',1,0,0,2,2,'sa','si','satis','dtlocal'),
	c(8,'excluir parte boletim',1,0,0,2,2,'sa','si','satis','dtlocal'),
	c(8,'atualizar parte boletim',1,0,0,2,2,'sa','si','satis','dtlocal'),
	c(8,'criar parte boletim',1,0,0,5,5,'sa','si','satis','dtlocal'),
	c(8,'visualizar secao',1,0,0,2,2,'sa','si','satis','dtlocal'),
	c(9,'atualizar secao',1,0,0,3,3,'sa','si','satis','dtlocal'),
	c(9,'excluir secao',1,0,0,2,2,'sa','si','satis','dtlocal'),
	c(9,'cadastrar secao',1,0,0,3,3,'sa','si','satis','dtlocal'),
	c(10,'visualizar organizacao militar',1,0,0,2,2,'sa','si','satis','dtlocal'),
	c(10,'excluir organizacao militar',1,0,0,2,2,'sa','si','satis','dtlocal'),
	c(10,'atualizar organizacao militar',1,0,0,6,6,'sa','si','satis','dtlocal'),
	c(10,'criar organizacao militar',1,0,0,6,6,'sa','si','satis','dtlocal'),
	c(11,'visualizar secao boletim',1,0,0,2,2,'sa','si','satis','dtlocal'),
	c(11,'excluir secao boletim',1,0,0,2,2,'sa','si','satis','dtlocal'),
	c(11,'atualizar secao boletim',1,0,0,2,2,'sa','si','satis','dtlocal'),
	c(11,'criar secao boletim',1,0,0,5,5,'sa','si','satis','dtlocal'),
	c(12,'visualizar notas',2,0,0,6,6,'sa','si','satis','dtlocal'),
	c(12,'criar notas para boletim',2,0,0,3,3,'sa','si','satis','dtlocal'),
	c(13,'criar boletins',2,0,0,2,2,'sa','si','satis','dtlocal'),
	c(13,'excluir nota',1,0,0,2,2,'sa','si','satis','dtlocal'),
	c(13,'alterar notas',1,0,0,2,2,'sa','si','satis','dtlocal'),
	c(14,'gerar pdf de nota',3,0,0,2,2,'sa','si','satis','dtlocal'),
	c(14,'visualizar funcao',1,0,0,2,2,'sa','si','satis','dtlocal'),
	c(14,'excluir funcao',1,0,0,2,2,'sa','si','satis','dtlocal'),
	c(14,'atualizar funcao',1,0,0,6,6,'sa','si','satis','dtlocal'),
	c(14,'cadastrar funcao',1,0,0,7,7,'sa','si','satis','dtlocal'),
	c(15,'enviar notas para aprovação',3,0,0,1,1,'sa','si','satis','dtlocal'),
	c(15,'Enviar Notas para publicação',2,0,0,2,2,'sa','si','satis','dtlocal'),
	c(15,'Excluir Nota do Boletim',1,0,0,2,2,'sa','si','satis','dtlocal'),
	c(15,'Enviar Notas para o Boletim',2,0,0,2,2,'sa','si','satis','dtlocal'),
	c(16,'excluir boletim',1,0,0,2,2,'sa','si','satis','dtlocal'),
	c(16,'alterar boletins',2,0,0,2,2,'sa','si','satis','dtlocal'),
	c(16,'associar notas publicadas boletim',5,0,0,4,4,'sa','si','satis','dtlocal'),
	c(16,'visualizar boletim',3,0,0,1,1,'sa','si','satis','dtlocal')
)

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
