var model = null;
var links = null;

var goals = [];
var tasks = new Array();

let allGoals=[];

var goalColours = {
    'true' : '#6CFA4B',
    'false': '#FA7267'
};

function proccessTree() {
    //loadNames();

    let totalPriority;
    let totalGoals;
    console.log("começa")
    tasks = [];
    allGoals = [];
    readTree();

    let a;


    a = isExequivel(goals[0]);
    console.log("Calculando ");
    calculateGoalPriority(goals[0])
    totalPriority = getTotalPriority();
    totalGoals = allGoals.length;
    //Pegar do goal 0, pra
    // let myParents = getTasksParents();
    // for(var key in myParents){
    //     console.log(key, myParents[key]);
    // 
    //pegar do goal 0 e fazer a somatória até chegar na task, aproveita e já soma


    //calculateTaskSumCoverage(goals[0], 0, 0);
  
    // getTasksRelatedGoals(goals[0], [])
    getChildrenGoals(goals[0]);
    getTaskGoals();
    getAllTaskNodes();
    calculateTaskProperties()
    console.log("Priority:", tasks);
    debugger;
   // let totalPriorities =  sumPriorities(goals[0]);
    let pending=[];
    let failed=[];
    //getPendingFailed(goals[0], pending, failed)
    //console.log(pending);
    //console.log(failed)


}
function doesIncludesId(id, goal){
    let c = goal.children.find(child => child.id == id)
    
    if(!c) return false;
    return true;

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


function getGoalstoTaskfromBFS(task){
    let visited = new Object();
    allGoals.forEach(goal =>{
        visited[goal.id] = false;
    })

    let queue = []
    //populando queue
    if(!task.relatedGoals){
        getTaskParentT(task);
        console.log("parent;",task);
        getRelatedGoalsFromParent(task);
    }
    task.relatedGoals.forEach(g => queue.push(g));
    while(queue.length>0){
        let current = queue.shift();
        allGoals.forEach(g =>{
            if(!visited[g.id]){
                if(doesIncludesId(current.id, g)){
                    visited[g.id] = true;
                    if(!queue.includes(g)){//se não estiver na fila
                        queue.push(g);//enfia na fila
    
                    }
                    if(!task.relatedGoals.includes(g)){//se não estiver na lista
                        task.relatedGoals.push(g)
                    }
                }

            }

        })
    }

}

function copyGoalstoChildren(task){
    
    if(task.children && task.children.length>0){

        for(let i=0; i<task.children.length;i++){
            let t = task.children[i];
            t.relatedGoals = task.relatedGoals
            copyGoalstoChildren(t);
        }
    }
}

function getTaskNodes(){
    //get 1st order relationships
    let nodes = allGoals.concat(tasks)
    tasks.forEach(function(task){
        allGoals.forEach(function(goal){

            if(doesIncludesId(task.id, goal)){
                console.log("Inclui : ", goal.name, task);
                if(!task.relatedGoals) task.relatedGoals = [];
                task.relatedGoals.push(goal);
                
            }
        })
        copyGoalstoChildren(task);
    })
    console.log(tasks)
    tasks.forEach(task => getGoalstoTaskfromBFS(task));

}

function getTaskParentT(task){
    tasks.forEach(function(t){
        if(doesIncludesId(task.id, t)){
            if(!task.parent) task.parent=[];
            task.parent.push(t);
        }
    })

}

function getTaskGoals(){
    //get 1st order relationships
    tasks.forEach(function(task){
        allGoals.forEach(function(goal){
            if(doesIncludesId(task.id, goal)){
                console.log("Inclui : ", goal.name, task);
                if(!task.relatedGoals) task.relatedGoals = [];
                task.relatedGoals.push(goal);
                
            }
        })


    })
    console.log(tasks)
    tasks.forEach(task => getGoalstoTaskfromBFS(task));

}

function pushDifference(task, array){
    missingGoals = array.forEach(arrayGoal =>{
        if(!task.relatedGoals.includes(arrayGoal)){//se não incluir
            task.relatedGoals.push(arrayGoal);
        }
    })
}

function getChildrenGoals(goal){
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

// function getTasksRelatedGoals(goal, array){
//     thisarray = array;
//     if(goal.type == 'Goal'){
//         thisarray.push(goal);
//     }

//     for (let i = 0; i < goal.children.length; i++) {
	
//         let c = goal.children[i];

//         if (c.type == 'Goal') {
//             console.log("goal priority",c.name);
//             result = getTasksRelatedGoals(c, thisarray);
//         } else {

//             //if task tiver filhos ela nao tera bdd
//             console.log("tasks", tasks);
//             tasks.forEach(function(t){
//                 console.log("compare", c, t);
//                 if(c.id == t.id){
//                     if(!t.arrayGoals){
//                         t.arrayGoals = thisarray;
//                     }
//                     else{
//                         pushDifference(t, thisarray);
//                     }

//                     if(t.children.length>0){
//                         c.children = t.children;
//                         getTasksRelatedGoals(c, thisarray);
//                     }
//                     thisarray = [];
//                 }
//             })
//         }

//     }
    

// }

function calculateTaskProperties(){
    tasks.forEach(function (t){
        if(!t.sum) t.sum = 0;
        t.relatedGoals.forEach(g =>{
            let gpriority = getFactorValue(g.id, "priority");
            t.sum = t.sum + parseFloat(gpriority);
        })
        let numGoals = t.relatedGoals.length;
        debugger;
        t.coverage = numGoals;

    })
}

function calculateTaskSumCoverage(goal, sum, numLinks){
    if(goal.type == 'Goal'){
        let priority = getFactorValue(goal.id, "priority");
        sum = sum + parseFloat(priority);
        numLinks = numLinks+1;
        console.log("goal: ", goal.name, sum, numLinks);
    }
        
    for (let i = 0; i < goal.children.length; i++) {
	
        let c = goal.children[i];
        
            if (c.type == 'Goal') {
                console.log("goal priority",c.name);
                result = calculateTaskSumCoverage(c, sum, numLinks);
            } else {
                console.log("task", c)

                //if task tiver filhos ela nao tera bdd
                console.log("tasks", tasks);
                tasks.forEach(function(t){
                    console.log("compare", c, t);
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
        console.log(value);
        sum = sum + value;
    })

    return sum;
}

function getFactorValue(nodeId, factor){

    var node = istar.getCellById(nodeId);
    var keys = Object.keys(node.attributes.customProperties);

    var value = '';

    value = node.attributes.customProperties[factor];
    console.log("value ", factor, " -- ", value);
    return value;
}

function calculateGoalPriority(goal){

    if(!goal.priority){
        let benefit = getFactorValue(goal.id, "Benefit");
        let complexity = getFactorValue(goal.id, "Complexity");
        let weightBenefit = getFactorValue(goal.id, "Weight_Benefit")
        let weightComplexity = getFactorValue(goal.id, "Weight_Complexity")
        //Preparing values
        if(isNaN(benefit)){
            benefit = 1;
        }
        if(isNaN(complexity)){
            complexity = 1;
        }

        if(isNaN(weightBenefit)){//se não for um número
            if(isNaN(weightComplexity)){
                weightBenefit = 50;
                weightComplexity = 50;
            }
            else{
                weightComplexity = parseFloat(weightComplexity);
                weightBenefit = 100 - weightComplexity;
            }

        }
        else if(isNaN(weightComplexity)){
            weightBenefit = parseFloat(weightBenefit);
            weightComplexity = 100 - weightBenefit;
        }

        //Calculating values
        let weightBValue = weightBenefit/100;
        let weightCValue = weightComplexity/100;

        let priority = (benefit*weightBValue) + (complexity*weightCValue);
        ui.changeCustomPropertyValue(istar.getCellById(goal.id), 'priority', priority);


    }

    for (let i = 0; i < goal.children.length; i++) {
	
        let c = goal.children[i];
        
            if (c.type == 'Goal') {
                if(!c.priority){
                    let priority = getFactorValue(c.id, "Benefit");
                    ui.changeCustomPropertyValue(istar.getCellById(c.id), 'priority', priority);


                }

                result = calculateGoalPriority(c);
            } 
    }

}

function changeColorByPriority(pending, failed){
    

}

function getPendingFailed(goal, pending, failed){

    for (let i = 0; i < goal.children.length; i++) {
	
        let c = goal.children[i];
        if(c.type == 'Goal'){
            //so fazer isso se o goal for failed
            //atribuir depois uma cor diferente pros goals que passaram mas cujas tasks estao failed
            // var keys = Object.keys(c.attributes.customProperties);
            console.log("gOAL");

            console.log(c);
            if(c.result== false){
                getPendingFailed(c, pending, failed);

            }
            

        }else{
            console.log("task\n");
            console.log(c);


            var result = 'PENDING';

	        result = getTaskResult(c.id);
            console.log("aqui ", result);
            if(result==="PENDING") pending.push(c);
            if(result=="FAILURE") failed.push(c);
          
        }
        
    }

    return;

}
function sumPriorities(goal){
    let sumarray = [];
    const sum =(prevValue=0, currentVal)=> prevValue+currentVal;
    getPriorities(goal, sumarray);
    let result = sumarray.reduce(sum);
    return result;






}

function isOrRefinement(goal, linkarray){
    var currentLinksFromSource = istar.graph.getConnectedLinks(goal);
    _.forEach(currentLinksFromSource, function (link) {
        if(link.attributes.type =="OrRefinementLink"){
            linkarray.push(link);
        }


    });

}

function getTasksParents(){
    //pegar todas as tasks
    //pegar os goals
    //para cada goal verificar o filho
    
    goals.forEach(function(g) {
        g.children = getGoalChildren(g);
    });
    let taskHash= {};

    goals.forEach(function(parentGoal){
        for(let i = 0; i<parentGoal.children.length; i++){
            let child = parentGoal.children[i];
            if(child.type == "Task"){
                if(!taskHash[child.id]){//if this key is null
                    taskHash[child.id] = []
                }
                taskHash[child.id].push(parentGoal);
            }
        }      

    })


    return taskHash;
}

function isExequivel(goal) {
    var result = false;
    goal.result = null;
    
    for (let i = 0; i < goal.children.length; i++) {
	
    let c = goal.children[i];
	
        if (c.type == 'Goal') {
            console.log("goal",c);
            result = isExequivel(c);
        } else {
            console.log("task", c)
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
            //console.log(e);
        }
    }else{
        console.log("no keys");
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
    console.log(tasks);

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

function getPriorities(goal, sumarray){
    for (let i = 0; i < goal.children.length; i++) {
	
        let c = goal.children[i];
        if(c.type == 'Goal'){
            getPriorities(c, sumarray);

        }else{
            let priority = getPriorityValue(c.id)
            sumarray.push(priority);
          
        }
        
    }
    return;
    
    


}

$(document).ready(function () {
    $('#menu-button-examples').parent().append('<a id="menu-button-proccess" class="btn btn-default" onclick="proccessTree();">Verificar Alcançabilidade</a>');
});
