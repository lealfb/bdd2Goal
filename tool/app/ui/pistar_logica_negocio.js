/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


var tree = null;

var model = null;
var links = null;

var goals = [];

function readTree() {
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
    
    let popList = [];
    
    for ( let i = 0; i < goals.length; i++ ) {
        
        let children = goals[i].children;
    
        for ( let j = 0; j < children.length; j++ ) {
            if (children[j].type == 'Goal') {
                popList.push(children[j].id);
                goals[i].children[j] = getGoal(children[j].id);
            }
        }
    }
    
    for ( let i = 0; i < popList.length; i++ ) {
        for( let j = 0; j < allGoals.length; j++) {
            if (allGoals[j].id == popList) {
                goals = goals.splice(j,1);
            }
        }
    }
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
            }
        }
    });
    
    if (child.type == 'Goal') {
        //return getGoalChildren(child);
    }
    
    return child;
}
