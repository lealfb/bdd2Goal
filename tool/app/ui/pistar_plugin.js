var fList = new Array();
var titulos = new Array();

var colours = [
    {colour: 'SUCCESS', hex: '#6CFA4B'},
    {colour: 'FAILURE', hex: '#FA7267'},
    {colour: 'PENDING', hex: '#B4B8FA'},
    {colour: 'SKIPPED', hex: '#B4B8FA'},
];

$.ajax({
    url: "json/",
    success: function (data) {
        //return false;
        $(data).find("a").each(function (a, b) {
            if (/.+\.json/.test(b.href)) {
                var href = b.href;
                var base = href.replace(/\/[a-f|A-F|0-9]+.json$/, '');
                var href = href.replace(base, '');
                fList.push('json' + href);
            }
        });
    }
});

function loadNames(userStory) {
    let loaded = [];
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
                titulos.push({
                    //name: data.name.replace("'", ' '),
                    name: name,
                    result: data.result,
                    oldLabel: data.name.replace("'", ' '),
                    newLabel: data.userStory.storyName.replace("'", ' '),
                });
            }
            
            loaded.push(name);
        });
    });
	
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

        switch (keys.indexOf(propertyName)) {
            case 1:
                customTemplate = renderCustomPropertyTemplate(propertyName, this.model.prop('customProperties/' + propertyName));
                break;
            case 2:
                customTemplate = renderComplexityTemplate(propertyName, this.model.prop('customProperties/' + propertyName));
                break;
            default:
                customTemplate = this.template({
                    propertyName: propertyName,
                    propertyValue: this.model.prop('customProperties/' + propertyName),
                    dataType: 'textarea'
                });
        }

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

function loadJsonData(source) {
	var list = source.files;
	
	titulos = new Array();
	
	$.each(list, function(i, j) {
		var reader = new FileReader();
	
		reader.onload = function(fileLoadedEvent){
			var content = fileLoadedEvent.target.result;
			
			var data = JSON.parse(content);
			
			titulos.push({name: data.name.replace("'", ' '), result: data.result});
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
});
