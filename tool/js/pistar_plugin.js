/* 
 * L.L
 */

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
    var selectbox = "<select name='" + propertyName + "' onchange='customChangeValue(this);'>";

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
	    '<td class="property-name">' + propertyName + '</td>' +
	    '<td class="property-value custom-property-value">' +
	    selectbox + '</td></tr>';

    return template;
}

function renderCustomPropertyTemplate(propertyName, propertyValue) {

    titulos.sort();

    var selectbox = "<select name='" + propertyName + "' onchange='customChangeValue(this);'>";

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
	    '<td class="property-name">' + propertyName + '</td>' +
	    '<td class="property-value custom-property-value">' +
	    selectbox + '</td></tr>';

    return template;
}

function customChangeValue(source) {
    changeCustomPropertyValue(ui.getSelectedElement(), $(source).prop('name'), $(source).val());
}

uiC.PropertiesTableView.prototype.renderCustomProperty = function (propertyName) {

    if (this.model.attributes.type == 'istar.Task') {

	//console.log(this.model);

	var customProperties = this.model.attributes.customProperties;

	var keys = Object.keys(customProperties);
	
	var customTemplate = null;

	switch (keys.indexOf(propertyName)) {
	    case 0:
		customTemplate = renderCustomPropertyTemplate(propertyName, this.model.prop('customProperties/' + propertyName));
		break;
	    case 1:
		customTemplate = renderComplexityTemplate(propertyName, this.model.prop('customProperties/' + propertyName));
		break;
	    default:
		customTemplate = this.template({
		    'propertyName': propertyName,
		    'propertyValue': this.model.prop('customProperties/' + propertyName)
		});
	}


    } else {
	customTemplate = this.template({
	    'propertyName': propertyName,
	    'propertyValue': this.model.prop('customProperties/' + propertyName)
	});
    }

    this.$table.find('tbody').append(customTemplate);
};

$(document).ready(function () {
    setTimeout('loadNames()', 500);
});