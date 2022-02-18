var model = null;
var links = null;

var goals = [];

var goalColours = {
    'true' : '#6CFA4B',
    'false': '#FA7267'
};

function proccessTree() {
    //loadNames();
    console.log("começa")
    readTree();
    let a;
    a = isExequivel(goals[0]);
    console.log("Calculando ");
    calculateGoalPriority(goals[0])
   // let totalPriorities =  sumPriorities(goals[0]);
    let pending=[];
    let failed=[];
    //getPendingFailed(goals[0], pending, failed)
    //console.log(pending);
    //console.log(failed)


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
//benefit
//weight benefit
//complexity
//weight complexity

//get benefit and complexity from Goal
    //if benefit or complexity not valid = 0 


//get weights

    //if one weight not present: Complete with next weight
    //if two weights not present: 50 50

    //
    //first node
    // debugger
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
            // debugger;
          
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

function isExequivel(goal) {
    var result = false;
    goal.teste = "Ola";
    goal.result = null;
    
    for (let i = 0; i < goal.children.length; i++) {
	
	let c = goal.children[i];
	
        if (c.type == 'Goal') {
            result = isExequivel(c);
        } else {
	    var result = 'PENDING';
        var value = c.name;
            debugger
	    result = getTaskResult(c.id);
            
            ui.changeColorElement(getColour(result), istar.getCellById(c.id));
            
	    result = getResult(result);
    }
    let linkarray=[]
    debugger

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
            // debugger;
          
        }
        
    }
    return;
    
    


}

$(document).ready(function () {
    $('#menu-button-examples').parent().append('<a id="menu-button-proccess" class="btn btn-default" onclick="proccessTree();">Verificar Alcançabilidade</a>');
});
