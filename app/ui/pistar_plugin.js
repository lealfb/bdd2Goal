var fList = new Array();
var titulos = new Array();

var colours = [
    {colour: 'SUCCESS', hex: '#6CFA4B'},
    {colour: 'FAILURE', hex: '#FA7267'},
    {colour: 'PENDING', hex: '#B4B8FA'},
    {colour: 'SKIPPED', hex: '#B4B8FA'},
];

$.ajax({
    url: "JsonDiff/",
    success: function (data) {
        //return false;
        $(data).find("a").each(function (a, b) {
            if (/.+\.json/.test(b.href)) {
                let leng = b.baseURI.length
                var href = b.href.substring(leng-1);
                // var base = href.replace(/\/[a-f|A-F|0-9]+.json$/, '');
                // var href = href.replace(base, '');
                //fList.push('json' + href);
                fList.push('JsonDiff/' + href);

            }
        });
    }
});
async function loadText(url) {
    text = await fetch(url);
    //awaits for text.text() prop 
    //and then sends it to readText()
    readText(await text.text());
}

function readText(text){
    let remove = "Coverage report generated"
    let indexRemove = text.indexOf(remove)
    let result;
    if(indexRemove!=(-1)){
        result = text.substring(1, indexRemove-1)
       
    }
    else{
        let totalLenght = text.length
        result = text.substring(1, totalLenght-1)
        
    }


    let obj = JSON.parse(result)
    let loaded = [];
    let name =  obj.name.replace("'", ' ');
    let skips = false;
    for (let i = 0; i < loaded.length; i++) {
        if (name == loaded[i]) {
            skips = true;
            break;
        }
    }
    if(!skips){
        let elements = obj.elements;
        let scenarios  = elements.filter(element =>{
            if((element.keyword === "Scenario")||(element.keyword === "Cenário")) return true
            return false
        })
        let failedScenarios = []
        let skippedScenarios = []
        scenarios.forEach(scenario =>{
            let steps  = scenario.steps;

            let skippedStep = steps.filter(step =>{
                if((step.result.status==="skipped")||(step.result.status==="undefined")||(step.result.status==="pending")) return true;

                return false;
            })

            let failedStep = steps.filter(step =>{
                if(step.result.status==="failed") return true;

                return false
            })

        
                if(failedStep.length>0){
                failedScenarios.push(scenario)
            }
            else if(skippedStep.length>0){
                skippedScenarios.push(scenario)
            }
        })
        let caseResult;
        if(failedScenarios.length>0){
            caseResult = "FAILURE"
        }
        else if (skippedScenarios.length>0){
            caseResult = "PENDING"
        }
        else{
            caseResult = "SUCCESS"
        }

            titulos.push({
                //name: data.name.replace("'", ' '),
                name: name,
                result: caseResult,
                failScenarios: failedScenarios,
                skipScenarios: skippedScenarios,
                oldLabel: obj.name.replace("'", ' '),
                newLabel: (obj.userStory)? obj.userStory.storyName.replace("'", ' '): obj.name.replace("'", ' '),
            });

        loaded.push(name);
    }


    
    
}

function loadNames(lang = "rails") {
    let loaded = [];
    // debugger
    if(lang==="rails"){
        
        fList.forEach(function (jsonFile){
            loadText(jsonFile);
        })

    }
    else{
    fList.forEach(function (jsonFile) {
       
        $.getJSON(jsonFile, function (data) {
            
            let name =  data.name.replace("'", ' ');
            //let name = data.userStory.storyName.replace("'", ' ');
            
            let skips = false;
            
            for (let i = 0; i < loaded.length; i++) {
                if (name == loaded[i]) {
                    skips = true;
                    break;
                }
            }
            
            if (!skips) {
                debugger
                titulos.push({
                    //name: data.name.replace("'", ' '),
                    name: name,
                    result: data.result,
                    oldLabel: data.name.replace("'", ' '),
                    newLabel: (data.userStory)? data.userStory.storyName.replace("'", ' '): data.name.replace("'", ' '),
                });
            }
            
            loaded.push(name);
        });
    });
}
	
    var loadJsonButton = 
            '<a onclick="showJsonUploadModal();" class="btn btn-default button-vertical" id="menu-button-new-model" title="Create a new model in the same window">'
    + '<span class="glyphicon glyphicon glyphicon-upload" aria-hidden="true"></span><br>'
    + 'Load JSON Files'
    + '</a>';

    $('#menu-file').find('.menu-line').last().append(loadJsonButton);

    if (fList.length < 1) {
        var upload = confirm('Lista de arquivos JSON não encontrada. Deseja enviar os arquivos manualmente para esta sessão?');
        if (upload) {
            showJsonUploadModal();
        } else {
            alert('Você ainda pode enviar os arquivos utilizando a aba "FILE" e o botão "Load JSON Files".');
        }
    }
}

function sortByName(x,y) {
    return ((x.name == y.name) ? 0 : ((x.name > y.name) ? 1 : -1 ));
}

function renderComplexityTemplate(propertyName, propertyValue) {
    var selectbox = "<select class='form-control' name='" + propertyName + "' onchange='customChangeValue(this);'>";

    selectbox += "<option value=''>Selecione</option>";

    var complexities = ["1", "2", "3", "5", "8", "13"];

    complexities.forEach(function (listValue) {

        if (listValue == propertyValue) {
            selectbox += "<option selected value='" + listValue + "'>" + listValue + "</option>";
        } else {
            selectbox += "<option value='" + listValue + "'>" + listValue + "</option>";
        }
    });

    selectbox += '</select>';

    var template = '<tr>' +
            '<th scope="row" class="property-name">' + propertyName + '</th>' +
            '<td class="property-value custom-property-value">' +
            selectbox + '</td></tr>';

    return template;
}

function renderCustomPropertyTemplate(propertyName, propertyValue) {
    titulos = titulos.sort(sortByName);

    var selectbox = "<select class='form-control' name='" + propertyName + "' onchange='customChangeValue(this);'>";

    selectbox += "<option value=''>Selecione</option>";

    titulos.forEach(function (listValue) {
        //var label = listValue.result + ':' + listValue.name;
        var label = listValue.name;
        label = label.charAt(0).toUpperCase() + label.slice(1).toLowerCase();
        
        var value = normalize(listValue.name);
        var selected = (normalize(listValue.name) == normalize(propertyValue)) ? 'selected' : '';
        selectbox += "<option " + selected + " value='" + value + "'>" + label + "</option>";
    });

    selectbox += '</select>';

    var template = '<tr>' +
            '<th scope="row" class="property-name">' + propertyName + '</th>' +
            '<td class="property-value custom-property-value">' +
            selectbox + '</td></tr>';

    return template;
}

function getColour(result) {
    for (var i = 0; i < colours.length; i++) {
        if (colours[i].colour == result) {
            return colours[i].hex;
        }
    }
}

function getResultColour(val) {
    for (var i = 0; i < titulos.length; i++) {
        if (normalize(titulos[i].name) == normalize(val)) {
            return getColour(titulos[i].result);
        }
    }
}

function renderPriorityTemplate(propertyName, propertyValue) {
    var selectbox = "<select class='form-control' name='" + propertyName + "' onchange='customChangeValue(this);'>";

    selectbox += "<option value=''>Selecione</option>";

    var complexities = ["0", "1", "2", "3", "4", "5","6", "7", "8","9", "10","11","12", "13", "14","15","16","17","18","19","20"];

    complexities.forEach(function (listValue) {

        if (listValue == propertyValue) {
            selectbox += "<option selected value='" + listValue + "'>" + listValue + "</option>";
        } else {
            selectbox += "<option value='" + listValue + "'>" + listValue + "</option>";
        }
    });

    selectbox += '</select>';

    var template = '<tr>' +
            '<th scope="row" class="property-name">' + propertyName + '</th>' +
            '<td class="property-value custom-property-value">' +
            selectbox + '</td></tr>';

    return template;
}


function customChangeValue(source) {
    
    var selectedElement = ui.getSelectedCells()[0];
    var colour = getResultColour($(source).val());
    
    ui.changeCustomPropertyValue(selectedElement, $(source).prop('name'), $(source).val());
    ui.changeColorElement(colour);
}

ui.components.PropertiesTableView.prototype.renderCustomProperty = function (propertyName) {

    if (this.model.attributes.type == 'Task') {

        var customProperties = this.model.attributes.customProperties;

        var keys = Object.keys(customProperties);

        var customTemplate = null;


        if(propertyName === "feature"){
            customTemplate = renderCustomPropertyTemplate(propertyName, this.model.prop('customProperties/' + propertyName));
        }
        else{
            customTemplate = this.template({
                propertyName: propertyName,
                propertyValue: this.model.prop('customProperties/' + propertyName),
                dataType: 'textarea'
            });
            
        }

        // switch (keys.indexOf(propertyName)) {
        //     // case 1:
        //     //     customTemplate = renderCustomPropertyTemplate(propertyName, this.model.prop('customProperties/' + propertyName));
        //     //     break;
        //     // case 2:

        //     //     customTemplate = renderPriorityTemplate(propertyName, this.model.prop('customProperties/' + propertyName));
        //     //     break;

        //     // case 3:
        //     //     customTemplate = renderComplexityTemplate(propertyName, this.model.prop('customProperties/' + propertyName));
        //     //     break;
        //     default:
        //         customTemplate = this.template({
        //             propertyName: propertyName,
        //             propertyValue: this.model.prop('customProperties/' + propertyName),
        //             dataType: 'textarea'
        //         });
        // }

    } else {
        this.$table.find('tbody').append(this.template({
            propertyName: propertyName,
            propertyValue: this.model.prop('customProperties/' + propertyName),
            dataType: 'textarea'
        }));
    }

 
    this.$table.find('tbody').append(customTemplate);
    
};

function showJsonUploadModal() {
	$('.modal-json').modal('show');
}

function showWeightModal() {
	$('.modal-wieger').modal('show');
}

function treatArrayData(data){
    let obj = data[0]

    let elements = obj.elements;
    let scenarios  = elements.filter(element =>{
        if((element.keyword === "Scenario")||(element.keyword === "Cenário")) return true
        return false
    })
    let failedScenarios = []
    let skippedScenarios = []
    scenarios.forEach(scenario =>{
        let steps  = scenario.steps;

        let skippedStep = steps.filter(step =>{
            if((step.result.status==="skipped")||(step.result.status==="undefined")||(step.result.status==="pending")) return true;

            return false;
        })

        let failedStep = steps.filter(step =>{
        if(step.result.status==="failed") return true;

        return false
        })


        if(failedStep.length>0){
            failedScenarios.push(scenario)
        }
        else if(skippedStep.length>0){
            skippedScenarios.push(scenario)
        }
    })
    let caseResult;
    if(failedScenarios.length>0){
        caseResult = "FAILURE"
    }
    else if (skippedScenarios.length>0){
        caseResult = "PENDING"
    }
    else{
        caseResult = "SUCCESS"
    }

    titulos.push({
        //name: data.name.replace("'", ' '),
        name: obj.name.replace("'", ' '),
        result: caseResult,
        failScenarios: failedScenarios,
        skipScenarios: skippedScenarios,
        oldLabel: obj.name.replace("'", ' '),
        newLabel: (obj.userStory)? obj.userStory.storyName.replace("'", ' '): obj.name.replace("'", ' '),
    });


}

function loadJsonData(source) {
	var list = source.files;
	
	titulos = new Array();
	
	$.each(list, function(i, j) {
		var reader = new FileReader();
	
		reader.onload = function(fileLoadedEvent){
            var content = fileLoadedEvent.target.result;
            console.log("cansada", content)
            
            let remove = "Coverage report generated"
            let indexRemove = content.indexOf(remove)
            let result;
            if(indexRemove!=(-1)){
            debugger

                content = content.substring(1, indexRemove-1)

            }
			
            var data = JSON.parse(content);
            if(Array.isArray(data)){
                treatArrayData(data);
            }
            else{
                titulos.push({name: data.name.replace("'", ' '), result: data.result});

            }
		};
		
		reader.readAsText(list[i]);
	});
	
	$('.modal-json').modal('hide');
}

// STRING utilitarios

function similarity(s1, s2) {
    
    s1 = normalize(s1);
    s2 = normalize(s2);
    
    var longer = s1;
    var shorter = s2;
    if (s1.length < s2.length) {
        longer = s2;
        shorter = s1;
    }
    var longerLength = longer.length;
    if (longerLength == 0) {
        return 1.0;
    }
    return (longerLength - editDistance(longer, shorter)) / parseFloat(longerLength);
}

function editDistance(s1, s2) {
    s1 = s1.toLowerCase();
    s2 = s2.toLowerCase();

    var costs = new Array();
    for (var i = 0; i <= s1.length; i++) {
        var lastValue = i;
        for (var j = 0; j <= s2.length; j++) {
            if (i == 0)
                costs[j] = j;
            else {
                if (j > 0) {
                    var newValue = costs[j - 1];
                    if (s1.charAt(i - 1) != s2.charAt(j - 1))
                        newValue = Math.min(Math.min(newValue, lastValue),
                                costs[j]) + 1;
                    costs[j - 1] = lastValue;
                    lastValue = newValue;
                }
            }
        }
        if (i > 0)
            costs[s2.length] = lastValue;
    }
    return costs[s2.length];
}


function normalize(string) {
    return string.toLocaleString().replace(/\s+/g, '').trim().normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
}

function compareNames(name1, name2) {
    return normalize(name1) == normalize(name2);
}


$(document).ready(function () {
    setTimeout('loadNames()', 1000);
    // setTimeout('loadJsonData(/../)', 1000);

});
