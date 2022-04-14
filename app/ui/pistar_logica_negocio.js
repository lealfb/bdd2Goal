var model = null;
var links = null;

var goals = [];
var tasks = new Array();

let allGoals=[];

let penaltyW=1;
let benefitW=2;
let costW=1;
let riskW=0.5;

var goalColours = {
    'true' : '#6CFA4B',
    'false': '#FA7267'
};

function getBenefitWeight(weight){
    benefitW = weight;
    console.log("benefit", benefitW)

}

function getPenaltyWeight(weight){
    penaltyW = weight;
    console.log("penalty ", penaltyW)

}

function getCostWeight(weight){
    costW = weight;
    console.log("cost ", costW)


}
function getRiskWeight(weight){
    riskW = weight;
    console.log("risk ", riskW)

}

function priorityTree(){
    // m= ["T1.1", "T2.1", "T13.1", "G5"]
    // m.sort(naturalCompare);
    // console.log(m)
    // debugger;


    let totalPriority;
    let totalGoals;

    tasks = [];
    allGoals = [];
    readTree();

    let a;
    calculateTaskProperties(penaltyW, benefitW, costW, riskW);
    propagatePriority(goals[0])
    let paths = [];

    let i = {number:0}
    pathDFD2(goals[0], paths, [], [], i)
    console.log("PATHS")
    paths.forEach(p => console.log(p))
    debugger

}


function proccessTree() {

    let totalPriority;
    let totalGoals;

    tasks = [];
    allGoals = [];
    readTree();

    let a;
    a = isExequivel(goals[0]);


    //
    // calculateGoalPriority(goals[0])
    // totalPriority = getTotalPriority();
    // totalGoals = allGoals.length;
    // portTaskPreparation();
    // portCalculation(totalPriority, totalGoals);
    // let paths = [];

    // let i = {number:0}
    // pathDFD2(goals[0], paths, [], [], i)
    

    


}
function propagatePriority(goal){
    //pegar das folhas e subir
    let result= 0;
    let goalChildren = goal.children.filter((c) => c.type == 'Goal')


    while(goalChildren.length>0){
        let g = goalChildren.pop();
        propagatePriority(g);
    }

    //considering only tasks or that goals have already priority
    let isAnd = false;
    for (let i = 0; i < goal.children.length; i++){
        //first we need to find all children that are goals

        //after all goal children are found we go to task children
        let c = goal.children[i];
        if(c.type == 'Goal'){
            result = parseFloat(c.priority);
        }
        else{
            result = parseFloat(getFactorValue(c.id, "priority"))  

        }
      
        let linkarray=[]

        isOrRefinement(goal, linkarray);
        if(linkarray.length>0){//if relationship is OR
            if(goal.priority==null){
                //At OR if goal.result = null it needes to receive the first task result
                goal.priority = result
            }
            else{
                if(goal.priority<result){
                    goal.priority = result;
                }
            }

        }
        else{//if relationship is AND
            if(goal.priority==null){
                //At OR if goal.result = null it needes to receive the first task result
                goal.priority = result;
            }
            else{
                isAnd = true;
                goal.priority = ((parseFloat(goal.priority)) + (result));

            }

        }      
        
    }
    goal.priority = goal.priority.toFixed(2)
    ui.changeCustomPropertyValue(istar.getCellById(goal.id), 'priority', String(goal.priority));
    return goal.priority;

}
/*PORT FUNCTIONS

function portTaskPreparation(){
    getChildrenGoals(goals[0])
    getTaskGoals();
    getAllTaskNodes();

}

function portCalculation(totalPriority, totalGoals){
    calculateTaskProperties()
    // calculateTaskPriority(totalPriority, totalGoals)

}
*/

function doesIncludesId(id, goal){
    let c = goal.children.find(child => child.id == id)
    
    if(!c) return false;
    return true;

}

function naturalCompare(a,b){
    //reference
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/localeCompare
    return a.name.localeCompare(b.name, 'en', {numeric: true, ignorePunctuation: true})

}


function pathDFD2(goal, paths, visited, queue, i){
    queue.push(goal);
    visited.push(goal.id)

    if(!goal.children){//se for folha

        if(!paths[i.number]){
            paths[i]=[]
        }
        let aux = [];
        queue.forEach(q => aux.push(q));
        paths.push(aux)
        i.number++
        queue.pop();
        return;

    }
    //Natural sort pra organizar quem vem primeiro
    goal.children.sort(naturalCompare)



     let linkarray=[];
     isOrRefinement(goal, linkarray);
     if(linkarray.length>0){//if is type OR
        let child = getHighestPriorityNode(goal.children);
     

        debugger
        pathDFD2(child, paths, visited, queue, i)

        queue.pop();//substituir num futuro proximo
        return;


     }
   
    else{
        goal.children.forEach(child =>{
            console.log(child)
            if(child.type == 'Goal'){
                result= getFactorValue(child.id, "RESULT")
                if(result=="Negativo"){
                    result = false;
                }
                else{
                    result=true;
                }
                console.log("goal result ", result)
    
            }
            if(child.type=='Task'){
                result = getTaskResult(child.id);
                result = getResult(result);
                console.log("task result ", result)   
    
            }
            debugger
            if(result){
                visited.push(child.id)
            }
            else{
                pathDFD2(child, paths, visited, queue, i)

            }

        } )
    
    }

    //verify if visited
    let c =goal.children.filter(child => !visited.includes(child.id))
    if(c.length == 0){
        queue.pop();
        return;

    }

     //     let tempPaths = [];
    //         decideORPath(child, tempPaths, visited, queue, i);

            //Soluções para a parte OR
            //1-  a mais facil: Usar decideORPath p criar paths temporários, decidir qual é o com mais peso entre eles e usar isso la dentro
            //2 pegar todos os caminhos independentes e marcar os caminhos que são OR como OR
            // tendo todos os caminhos em paths eu posso entrar em paths, verificar todos os nodes que tenham ligações OR
            //ter todos os caminhos
            ///fazer uma função p comparar os caminhos. se os caminhos possuirem nodes com decomposição or:
            //Buscar o node com decomposição OR mais proximo da folha, definir o maior caminho
            //e a partir daí fazer o mesmo para os nodes menos proximos da folha

    // }
}

function getHighestPriorityNode(children){
    let result = null;
    let resultPriority = 0;
    children.forEach(child =>{
        childPrio= getFactorValue(child.id, "priority")
        if(childPrio>resultPriority){
            resultPriority = childPrio
            result = child;
        }
    })

    return result;
}

function pathsDFS(goal, paths){
    let visited = [];
    let nodes = allGoals.concat(tasks)
    nodes.forEach(node =>{
        visited[node.id] = false;
    })

    let stack = [];

    stack.push(goal)

    visited.push(goal.id)
    let copy = [];
    let i = 0;
    while(stack.length>0){
        let n = stack.pop();
        copy.push(n);

        if(n.children){
            n.children.filter( child => !visited.includes(child.id))
            .forEach(child =>{
                visited.push(child.id);
                stack.push(child);
            })

            let tryChild = n.children.filter( child => !visited.includes(child.id))
            if(tryChild.length==0){
                copy.pop();
            }

        }
        else{
            copy.forEach(el=>{
                if(!paths[i]){
                    paths[i]=[];

                }
                paths[i].push(el);
            })
            i++

            copy.pop();

        }


    }



}

function getAllTaskNodes(){
    tasks.forEach(task => getNodesTaskfromBFS(task));
}


function getNodesTaskfromBFS(task){
    let visited = new Object();
    let nodes = allGoals.concat(tasks)
    nodes.forEach(node =>{
        visited[node.id] = false;
    })

    let queue = []
    //populando 
    nodes.forEach(node =>{
        if(node.id!= task.id){
            if(doesIncludesId(task.id, node)){
                if(!task.relatedNodes){
                    task.relatedNodes = []
                }
                if(!task.relatedNodes.includes(node)){
                    task.relatedNodes.push(node);
                }
                if(!queue.includes(node)){
                    queue.push(node);
                }
            }
        }
    })

    while(queue.length>0){
        let current = queue.shift();
        nodes.forEach(n =>{
            if(!visited[n.id]){
                if(doesIncludesId(current.id, n)){
                    visited[n.id] = true;
                    if(!queue.includes(n)){//se não estiver na fila
                        queue.push(n);//enfia na fila
    
                    }
                    if(!task.relatedNodes.includes(n)){//se não estiver na lista
                        task.relatedNodes.push(n)
                    }
                }

            }

        })
    }

}

function getRelatedGoalsFromParent(task){
    task.parent.forEach(p =>{
        if(!task.relatedGoals){
            task.relatedGoals = p.relatedGoals;
        }
        else{
            pushDifference(task, p.relatedGoals);
        }
    })
}


// function getGoalstoTaskfromBFS(task){
//     let visited = new Object();
//     allGoals.forEach(goal =>{
//         visited[goal.id] = false;
//     })

//     let queue = []
//     //populando queue
//     if(!task.relatedGoals){
//         getTaskParentT(task);
//         getRelatedGoalsFromParent(task);
//     }
//     task.relatedGoals.forEach(g => queue.push(g));
//     while(queue.length>0){
//         let current = queue.shift();
//         allGoals.forEach(g =>{
//             if(!visited[g.id]){
//                 if(doesIncludesId(current.id, g)){
//                     visited[g.id] = true;
//                     if(!queue.includes(g)){//se não estiver na fila
//                         queue.push(g);//enfia na fila
    
//                     }
//                     if(!task.relatedGoals.includes(g)){//se não estiver na lista
//                         task.relatedGoals.push(g)
//                     }
//                 }

//             }

//         })
//     }

// }

// function copyGoalstoChildren(task){
    
//     if(task.children && task.children.length>0){

//         for(let i=0; i<task.children.length;i++){
//             let t = task.children[i];
//             t.relatedGoals = task.relatedGoals
//             copyGoalstoChildren(t);
//         }
//     }
// }

// function getTaskNodes(){
//     //get 1st order relationships
//     let nodes = allGoals.concat(tasks)
//     tasks.forEach(function(task){
//         allGoals.forEach(function(goal){

//             if(doesIncludesId(task.id, goal)){
//                 if(!task.relatedGoals) task.relatedGoals = [];
//                 task.relatedGoals.push(goal);
                
//             }
//         })
//         copyGoalstoChildren(task);
//     })
//     tasks.forEach(task => getGoalstoTaskfromBFS(task));

// }

function getTaskParentT(task){
    tasks.forEach(function(t){
        if(doesIncludesId(task.id, t)){
            if(!task.parent) task.parent=[];
            task.parent.push(t);
        }
    })

}

// function getTaskGoals(){
//     //get 1st order relationships
//     tasks.forEach(function(task){
//         allGoals.forEach(function(goal){
//             if(doesIncludesId(task.id, goal)){
//                 if(!task.relatedGoals) task.relatedGoals = [];
//                 task.relatedGoals.push(goal);                
//             }
//         })


//     })
//     tasks.forEach(task => getGoalstoTaskfromBFS(task));

// }

function pushDifference(task, array){
    missingGoals = array.forEach(arrayGoal =>{
        if(!task.relatedGoals.includes(arrayGoal)){//se não incluir
            task.relatedGoals.push(arrayGoal);
        }
    })
}

function getChildrenGoals(goal){//guarantees that each goal in allGoals has their children
    if(goal.type == 'Goal'){
        let actualGoal =  allGoals.find(g =>{
            if(g.id == goal.id) return g;
        })
    
        actualGoal.children = goal.children;
    
        for (let i = 0; i < goal.children.length; i++){
            let c  = goal.children[i];
            getChildrenGoals(c);
        }

    }

}



function calculateWeighted(costA, riskA, valueA, penaltyW, benefitW, costW, riskW){
    tasks.forEach(function (t){
        if(!t.priority) t.priority = 0;
        let benefit = getFactorValue(t.id, "benefit");
        let penalty = getFactorValue(t.id, "penalty");
        let cost = getFactorValue(t.id, "cost");
        let risk = getFactorValue(t.id, "risk");
        

        t.tValue = ((benefit*benefitW) + (penalty *penaltyW)).toFixed(2)
        console.log(t.tValue);
        t.Wcost = (cost * costW).toFixed(2);
        t.Wrisk = (risk * riskW).toFixed(2);
        valueA.push(t.tValue);
        costA.push(t.Wcost)
        riskA.push(t.Wrisk);
        createPropertiesTask(t.id, t.tValue, "totalValue")
        createPropertiesTask(t.id, t.Wcost, "weightedCost")
        createPropertiesTask(t.id, t.Wrisk, "weightedRisk")        

    })

}

function sumArray(arrayName){
    let result  = arrayName.reduce((previous, current)=>{
        if(Number.isNaN(current)){
            current = 0;
        }
        return parseFloat(previous) + parseFloat(current);

    }, 0)

    return result
}

function calculatePercentage(value, total){
    return ((value/total)*100)
}

function calculateTaskProperties(penaltyW, benefitW, costW, riskW){
    console.log("penalty:", penaltyW)
    let costArray = [];
    let riskArray = [];
    let valueArray = [];
    calculateWeighted(costArray, riskArray, valueArray, penaltyW, benefitW, costW, riskW);
    let totalCost = sumArray(costArray);
    let totalRisk = sumArray(riskArray);
    let totalValue = sumArray(valueArray);
    tasks.forEach(function (t){
        t.pValue = calculatePercentage(t.tValue, totalValue);
        t.pCost = calculatePercentage(t.Wcost,totalCost);
        t.pRisk = calculatePercentage(t.Wrisk,totalRisk);
       
        let priority = (t.pValue / ((t.pCost * costW) + (t.pRisk * riskW))).toFixed(2);
        t.priority = priority;
        console.log("P:", t.priority)

        createPropertiesTask(t.id, priority, "priority")
        createPropertiesTask(t.id, t.pValue, "ValueP")
        createPropertiesTask(t.id, t.pCost, "CostP")
        createPropertiesTask(t.id, t.pRisk, "RiskP")



    })
}

function calculateTaskSumCoverage(goal, sum, numLinks){
    if(goal.type == 'Goal'){
        let priority = getFactorValue(goal.id, "priority");
        sum = sum + parseFloat(priority);
        numLinks = numLinks+1;
    }
        
    for (let i = 0; i < goal.children.length; i++) {
	
        let c = goal.children[i];
        
            if (c.type == 'Goal') {
                result = calculateTaskSumCoverage(c, sum, numLinks);
            } else {

                //if task tiver filhos ela nao tera bdd
                tasks.forEach(function(t){
                    if(c.id == t.id){
                        if(!t.sum) t.sum = 0;
                        t.sum = t.sum + sum;
                        if(!t.coverage) t.coverage = 0;
                        t.coverage = t.coverage + numLinks;

                        if(t.children.length>0){
                            c.children = t.children;
                            sum = sum + task.sum;
                            calculateTaskSumCoverage(c, sum, numLinks);
                        }
                    }
                })
    
        }

        
    }
    return;
}

function getTotalPriority(){
    let sum = 0;

    _.map(istar.getElements(), function(node) { 
        if (node.attributes.type == 'Goal') {
            allGoals.push({
                id: node.attributes.id,
                name: node.attributes.name,
                type: node.attributes.type,
            });
        }
    });

    allGoals.forEach(function(goal){
        var node = istar.getCellById(goal.id);
        value = parseFloat(node.attributes.customProperties["priority"])
        sum = sum + value;
    })

    return sum;
}

// function createPropertiesTask(taskId, priority){
//     var node = istar.getCellById(taskId);
//     var keys = Object.keys(node.attributes.customProperties);
//     // if(keys.length==1){
//     //     ui.changeCustomPropertyValue(istar.getCellById(taskId), 'test', "");

//     // }
//     // ui.changeCustomPropertyValue(istar.getCellById(taskId), 'priority', priority);


// }

function createPropertiesTask(taskId, propvalue, propname){
    var node = istar.getCellById(taskId);
    var keys = Object.keys(node.attributes.customProperties);
    // if(keys.length==1){
    //     ui.changeCustomPropertyValue(istar.getCellById(taskId), 'test', "");

    // }
     ui.changeCustomPropertyValue(istar.getCellById(taskId), propname, propvalue);


}


function getFactorValue(nodeId, factor){

    var node = istar.getCellById(nodeId);
    var keys = Object.keys(node.attributes.customProperties);

    var value = '';

    value = node.attributes.customProperties[factor];
    return value;
}
//old goal priority calculation
// function calculateGoalPriority(goal){

//     if(!goal.priority){
//         let benefit = getFactorValue(goal.id, "Benefit");
//         let complexity = getFactorValue(goal.id, "Complexity");
//         let weightBenefit = getFactorValue(goal.id, "Weight_Benefit")
//         let weightComplexity = getFactorValue(goal.id, "Weight_Complexity")
//         //Preparing values
//         if(isNaN(benefit)){
//             benefit = 1;
//         }
//         if(isNaN(complexity)){
//             complexity = 1;
//         }

//         if(isNaN(weightBenefit)){//se não for um número
//             if(isNaN(weightComplexity)){
//                 weightBenefit = 50;
//                 weightComplexity = 50;
//             }
//             else{
//                 weightComplexity = parseFloat(weightComplexity);
//                 weightBenefit = 100 - weightComplexity;
//             }

//         }
//         else if(isNaN(weightComplexity)){
//             weightBenefit = parseFloat(weightBenefit);
//             weightComplexity = 100 - weightBenefit;
//         }

//         //Calculating values
//         let weightBValue = weightBenefit/100;
//         let weightCValue = weightComplexity/100;

//         let priority = (benefit*weightBValue) + (complexity*weightCValue);
//         ui.changeCustomPropertyValue(istar.getCellById(goal.id), 'priority', priority);


//     }

//     for (let i = 0; i < goal.children.length; i++) {
	
//         let c = goal.children[i];
        
//             if (c.type == 'Goal') {
//                 if(!c.priority){
//                     let priority = getFactorValue(c.id, "Benefit");
//                     ui.changeCustomPropertyValue(istar.getCellById(c.id), 'priority', priority);


//                 }

//                 result = calculateGoalPriority(c);
//             } 
//     }

// }

function changeColorByPriority(pending, failed){
    

}


function isOrRefinement(goal, linkarray){
    var currentLinksFromSource = istar.graph.getConnectedLinks(goal);
    _.forEach(currentLinksFromSource, function (link) {
        if(link.attributes.type =="OrRefinementLink"){
            linkarray.push(link);
        }


    });

}

// function getTasksParents(){
//     //pegar todas as tasks
//     //pegar os goals
//     //para cada goal verificar o filho
    
//     goals.forEach(function(g) {
//         g.children = getGoalChildren(g);
//     });
//     let taskHash= {};

//     goals.forEach(function(parentGoal){
//         for(let i = 0; i<parentGoal.children.length; i++){
//             let child = parentGoal.children[i];
//             if(child.type == "Task"){
//                 if(!taskHash[child.id]){//if this key is null
//                     taskHash[child.id] = []
//                 }
//                 taskHash[child.id].push(parentGoal);
//             }
//         }      

//     })


//     return taskHash;
// }

function isExequivel(goal) {
    var result = false;
    goal.result = null;
    
    for (let i = 0; i < goal.children.length; i++) {
	
    let c = goal.children[i];
	
        if (c.type == 'Goal') {
            result = isExequivel(c);
        } else {
            let childTask = false;
            //if task tiver filhos ela nao tera bdd
            tasks.forEach(function(t){
                if(c.id === t.id){
                    if(t.children.length>0){
                        c.children = t.children;
                        childTask = true;
                        isExequivel(c);
                    }
                }
            })
	    var result = 'PENDING';
            if(childTask){
                result = c.result;
            }
            else{
                var value = c.name;
                result = getTaskResult(c.id);
                    
                    ui.changeColorElement(getColour(result), istar.getCellById(c.id));
                    
                    result = getResult(result);

            }

    }
    let linkarray=[]

    isOrRefinement(goal, linkarray);
    if(linkarray.length>0){
        if(goal.result==null){
            //At OR if goal.result = null it needes to receive the first task result
            goal.result = result
        }
        goal.result = goal.result || result;
    }
    else{//AND
        if(goal.result == null){
            //at AND when it is null it needes to be considered true to apply AND logic
            goal.result = true;
        }
        goal.result = goal.result && result;

    }
    
        ui.changeCustomPropertyValue(istar.getCellById(goal.id), 'RESULT', goal.result ? 'Positivo' : 'Negativo');
    }
    ui.changeColorElement(goalColours[goal.result], istar.getCellById(goal.id));
    return goal.result;
}

function getResult(result) {
    switch(result) {
	case 'SUCCESS':
	    result = true;
	    break;
	case 'FAILURE':
	    result = false;
	    break;
	case 'SKIPPED':
	    result = false;
	    break;
	case 'PENDING':
	    result = false;
	    break;
	default:
	    result = false;
	    break;
    }
    
    return result;
}

function getTaskResult(nodeId) {
    
    var value = getTaskValue(nodeId);
    var result = 'PENDING';
    
    titulos.forEach(function(t){
        if (normalize(t.name) == normalize(value)) {
           
            result = t.result;
            return result;
        }
    });
    
    return result;
}

function getTaskValue(nodeId) {
    
    //"121a9626-5a8f-4ecf-85a4-41aec411cc94"
    
    var node = istar.getCellById(nodeId);
    var keys = Object.keys(node.attributes.customProperties);

    var value = '';

    if (keys.length > 1) {
        try {
            value = normalize(node.attributes.customProperties[keys[1]]);
        } catch (e) {
        }
    }else{
    }
        
    return value;
} 

function readTree() {
    
    goals = [];
    
    model = JSON.parse(istar.fileManager.saveModel());
    
    links = model.links;
    
    _.map(istar.getElements(), function(node) { 
        if (node.attributes.type == 'Goal') {
            goals.push({
                id: node.attributes.id,
                name: node.attributes.name,
                type: node.attributes.type,
            });
        }
    });
    
    goals.forEach(function(g) {
        g.children = getGoalChildren(g);
    });
    //tasks
    _.map(istar.getElements(), function(node) { 
        if (node.attributes.type == 'Task') {
            tasks.push({
                id: node.attributes.id,
                name: node.attributes.name,
                type: node.attributes.type,
                sum: 0.0,
                coverage: 0.0
            });
        }
    });

    tasks.forEach(function(t) {
        t.children = getGoalChildren(t);
    });
    let lastSize = goals.length;
    let allGoals = JSON.parse(JSON.stringify(goals));
    
    for ( let i = 0; i < goals.length; i++ ) {
        
        let children = goals[i].children;
    
        for ( let j = 0; j < children.length; j++ ) {
            if (children[j].type == 'Goal') {
                goals[i].children[j] = getGoal(children[j].id);
            }
        }
    }
    
    let orphanGoals = [];
    
    for ( let i = 0; i < goals.length; i++ ) {
        let orphan = true;
        links.forEach(function(l){
            if (l.source==goals[i].id) {
                orphan = false;
            }
        });
        
        if (orphan) {
            orphanGoals.push(goals[i]);
        }
    }
    
    goals = orphanGoals;
    //return orphanGoals;
}

function getGoalChildren(goal) {
    let children = [];
    links.forEach(function(l){
        if (l.target==goal.id) {
            children.push(getChild(l.source));
        }
    });
    
    return children;
}

function getGoal(id) {
    for (let i = 0; i < goals.length; i++) {
        if (goals[i].id == id) {
            return goals[i];
        }
    }
}

function getChild(id) {
    let child = null;
    
    _.map(istar.getElements(), function(node) { 
        if (node.attributes.id == id) {
            child = {
                id: node.attributes.id,
                name: node.attributes.name,
                type: node.attributes.type,
                result: 'N/A'
            }
        }
    });
    
    if (child.type == 'Task') {
        titulos.forEach(function(t){
            if ( compareNames(t.name, child.name) ) {
                child.result = t.result;
                return;
            }
        });
    }
    
    return child;
}

istar.getCellById = function(id) {
    
    var cell = null;
    
    istar.getCells().forEach(function(c){
        if (c.id == id) {
            cell = c;
            return;
        }
    });
    
    return cell;
}

// DEBUG ABAIXO

var missing = [];
var tasks = [];
var similar = [];

function diffTasks() {
    
    missing = [];
    similar = [];
        
    _.map(istar.getElements(), function(node) { 
        if (node.attributes.type == 'Task') {
                        
            tasks.push(node.attributes.name);
            
            var miss = true;
            
            titulos.forEach(function(t){
                if ( compareNames(t.name,node.attributes.name) ) {
                    
                    ui.changeCustomPropertyValue(node, 'Tarefa', t.name);
                    
                    miss = false;
                    return;
                }
            });
            
            if (miss) {
                
                var bestSimilarity = null;
                var lastSimilarity = 0.00;
                
                titulos.forEach(function(t) {
                    
                    let newSimilarity = similarity(t.name,node.attributes.name);
                    
                    if (lastSimilarity < newSimilarity) {
                        lastSimilarity = newSimilarity;
                        bestSimilarity = t.name;
                    }
                });
                
                if (lastSimilarity > 0.7) {
                    similar.push({
                        task: node.attributes.name, 
                        similar: bestSimilarity,
                        calc: lastSimilarity,
                    });
                    
                    ui.changeCustomPropertyValue(node, 'Tarefa', bestSimilarity);
                    
                } else {
                    missing.push(node.attributes.name);
                }
            }
        }
    });
    
    missing = missing.sort();
    
    return missing;
}

function resetGoals() {
    _.map(istar.getElements(), function(node) { 
        if (node.attributes.type == 'Goal') {
            ui.changeColorElement('#FFFF00', node);
            ui.changeCustomPropertyValue(node, 'RESULT', null);
        }
    });
}

function getPriorityValue(goalId){
    var node = istar.getCellById(goalId); 
    var keys = Object.keys(node.attributes.customProperties);
    let priority = parseInt(node.attributes.customProperties[keys[2]])

    return priority;

}

// function getPriorities(goal, sumarray){
//     for (let i = 0; i < goal.children.length; i++) {
	
//         let c = goal.children[i];
//         if(c.type == 'Goal'){
//             getPriorities(c, sumarray);

//         }else{
//             let priority = getPriorityValue(c.id)
//             sumarray.push(priority);
          
//         }
        
//     }
//     return;
    
    


// }

$(document).ready(function () {
    $('#menu-button-examples').parent().append('<a id="menu-button-proccess" class="btn btn-default" onclick="proccessTree();">Verificar Alcançabilidade</a>');
    $('#menu-button-examples').parent().append('<a id="menu-wieger-weights" class="btn btn-default" onclick="showWeightModal();">Modificar Pesos</a>');
    $('#menu-button-examples').parent().append('<a id="menu-calculate-priority" class="btn btn-default" onclick="priorityTree();">Calcular Prioridade</a>');

});
