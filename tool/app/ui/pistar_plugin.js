var fList = new Array();
var titulos = new Array();

$.ajax({
    url: "json/",
    success: function (data) {
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
	    titulos.push(data.name);
	});
    });
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

	listValue = listValue.replace("'", ' ');

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
    ui.changeCustomPropertyValue(selectedElement, $(source).prop('name'), $(source).val());
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

$(document).ready(function () {
    setTimeout('loadNames()', 500);
});