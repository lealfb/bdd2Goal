var fList = new Array();
var titulos = new Array();

var colours = [
    {colour: 'SUCCESS', hex: '#6CFA4B'},
    {colour: 'FAILURE', hex: '#FA7267'},
    {colour: 'PENDING', hex: '#B4B8FA'},
    {colour: 'SKIPPED', hex: '#FFFFFF'},
];

$.ajax({
    url: "json/",
    success: function (data) {
		return false;
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

function loadNames() {
    fList.forEach(function (jsonFile) {
        $.getJSON(jsonFile, function (data) {
            titulos.push({name: data.name.replace("'", ' '), result: data.result});
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
		if ( upload ) {
			showJsonUploadModal();
		} else {
			alert('Você ainda pode enviar os arquivos utilizando a aba "FILE" e o botão "Load JSON Files".');
		}
	}
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

    titulos.sort();

    var selectbox = "<select class='form-control' name='" + propertyName + "' onchange='customChangeValue(this);'>";

    selectbox += "<option value=''>Selecione</option>";

    titulos.forEach(function (listValue) {
        //var label = listValue.result + ':' + listValue.name;
        var label = listValue.name;
        var value = listValue.name;
        var selected = (listValue.name == propertyValue) ? 'selected' : '';
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
        if (titulos[i].name == val) {
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

$(document).ready(function () {
    setTimeout('loadNames()', 1000);
});