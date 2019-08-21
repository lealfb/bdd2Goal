var model = null;
var links = null;

var goals = [];

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

function calcGoal(goal) {
    
    goal.result = [];
    
    goal.children.forEach(function(c){
        if (c.type == 'Goal') {
            calcGoal(c);
        }
        goal.result.push(c.result);
    });
}

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
    
    return orphanGoals;
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

// DEBUG ABAIXO

var missing = [];
var tasks = [];

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
