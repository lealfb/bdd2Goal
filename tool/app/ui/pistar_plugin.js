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
    
    $('.modal-button-load-example').click(function () {
       var titulos_fixo = JSON.parse('[{"name":"Atualizar Tipo de Boletim Sucesso","result":"SUCCESS"},{"name":"Atualizar Organizacao Militar Falha sigla obrigatoria","result":"PENDING"},{"name":"Excluir Categoria inexistente","result":"SUCCESS"},{"name":"Atualizar Posto/Graduacao Falha nome obrigatorio","result":"SUCCESS"},{"name":"Cadastrar Secao Falha sigla vazia","result":"PENDING"},{"name":"Atualizar Organizacao Militar Falha localizacao obrigatoria","result":"PENDING"},{"name":"Criar Posto/Graduação com mesmo nome, porem com letra maiúscula em um dos casos","result":"FAILURE"},{"name":"Visualizar Secao inexistente","result":"PENDING"},{"name":"Atualizar Secao Boletim Falha Parte obrigatoria","result":"FAILURE"},{"name":"Visualizar Qualificacao Militar inexistente","result":"SUCCESS"},{"name":"Atualizar Parte Boletim Sucesso","result":"SUCCESS"},{"name":"Criar Tipo de Boletim","result":"SUCCESS"},{"name":"Deve mostrar erro ao tentar remover Texto de Fechamento","result":"SUCCESS"},{"name":"Excluir Posto/Graduacao inexistente","result":"SUCCESS"},{"name":"Atualizar Secao Boletim Sucesso","result":"FAILURE"},{"name":"Excluir Militar inexistente","result":"PENDING"},{"name":"Visualizar Parte Boletim caminho feliz","result":"SUCCESS"},{"name":"Atualizar Organizacao Militar Falha guarnicao obrigatoria","result":"PENDING"},{"name":"Atualizar Funcao Falha om obrigatoria","result":"PENDING"},{"name":"Atualizar Parte Boletim Falha campos obrigatorios","result":"SUCCESS"},{"name":"Atualizar Assunto Geral Falha nome obrigatorio","result":"FAILURE"},{"name":"Excluir Funcao Inexistente","result":"PENDING"},{"name":"Visualizar Organizacao Militar caminho feliz","result":"PENDING"},{"name":"Excluir Nota do Boletim inexistente","result":"PENDING"},{"name":"Atualizar Funcao Falha periodo obrigatorio","result":"PENDING"},{"name":"Atualizar Assunto Especifico Falha nome obrigatorio","result":"SUCCESS"},{"name":"Cadastrar Funcao Sucesso","result":"PENDING"},{"name":"Criar Qualificacao Militar com codigo repetido","result":"SUCCESS"},{"name":"Criar Assunto Especifico sucesso","result":"SUCCESS"},{"name":"Excluir Funcao Sucesso","result":"PENDING"},{"name":"Visualizar Assunto Especifico caminho feliz","result":"SUCCESS"},{"name":"Chefe de Cmt/Ch/Dir aprova Nota e a envia para o Boletim","result":"SUCCESS"},{"name":"Visualizar Tipo de Documento caminho feliz","result":"SUCCESS"},{"name":"Cadastrar Militar Sucesso","result":"PENDING"},{"name":"Cadastrar Militar Falha antiguidade vazia","result":"PENDING"},{"name":"Atualizar Tipo de Documento Sucesso","result":"SUCCESS"},{"name":"Cadastrar Secao Sucesso","result":"PENDING"},{"name":"Excluir Qualificacao Militar inexistente","result":"SUCCESS"},{"name":"Visualizar Funcao Sucesso","result":"PENDING"},{"name":"Deve criar Nota","result":"SUCCESS"},{"name":"Atualizar Tipo de Boletim Falha campos obrigatorios","result":"SUCCESS"},{"name":"Deve mostrar erro ao tentar remover Texto de Abertura","result":"SUCCESS"},{"name":"Visualizar Secao Boletim caminho triste","result":"SUCCESS"},{"name":"Criar Assunto Geral sucesso secao nula","result":"SUCCESS"},{"name":"Cadastrar Militar Falha sexo vazio","result":"PENDING"},{"name":"Atualizar Assunto Especifico Sucesso","result":"SUCCESS"},{"name":"Visualizar Militar Sucesso","result":"PENDING"},{"name":"Criar Organizacao Militar com localizacao vazia","result":"PENDING"},{"name":"Criar Secao Boletim","result":"SUCCESS"},{"name":"Atualizar Secao Falha sigla obrigatoria","result":"PENDING"},{"name":"Cadastrar Militar Falha nome vazio","result":"PENDING"},{"name":"Cadastrar Militar Falha nascimento vazio","result":"PENDING"},{"name":"Criar Assunto Especifico Sucesso nome nulo","result":"SUCCESS"},{"name":"Cadastrar Funcao Falha","result":"PENDING"},{"name":"Visualizar Militar inexistente","result":"PENDING"},{"name":"Atualizar Funcao Falha descricao obrigatoria","result":"PENDING"},{"name":"Visualizar Assunto Especifico caminho triste","result":"SUCCESS"},{"name":"Deve alterar Texto de Abertura","result":"SUCCESS"},{"name":"Visualizar Categoria caminho triste","result":"SUCCESS"},{"name":"Atualizar Funcao Falha nome obrigatorio","result":"PENDING"},{"name":"Atualizar Militar Falha Funcao vazia","result":"PENDING"},{"name":"Atualizar Secao Falha nome obrigatorio","result":"PENDING"},{"name":"Excluir Tipo de Boletim inexistente","result":"SUCCESS"},{"name":"Excluir Qualificacao Militar caminho feliz","result":"SUCCESS"},{"name":"Excluir Secao Boletim inexistente","result":"SUCCESS"},{"name":"Excluir Assunto Especifico caminho feliz","result":"SUCCESS"},{"name":"Atualizar Militar Falha antiguidade vazia","result":"PENDING"},{"name":"Atualizar Militar Falha nomeGuerra vazio","result":"PENDING"},{"name":"Excluir Militar Sucesso","result":"PENDING"},{"name":"Visualizar Tipo de Boletim caminho feliz","result":"SUCCESS"},{"name":"Chefe de SU/Div/Sec aprova Nota e a envia para Publicação","result":"SUCCESS"},{"name":"Criar Organizacao Militar com guarnicao vazia","result":"PENDING"},{"name":"Excluir Nota caminho feliz","result":"SUCCESS"},{"name":"Operador envia Nota para Aprovação","result":"SUCCESS"},{"name":"Criar Qualificacao Militar caminho feliz","result":"SUCCESS"},{"name":"Atualizar Organizacao Militar Sucesso","result":"PENDING"},{"name":"Excluir Boletim caminho feliz","result":"SUCCESS"},{"name":"Deve mostrar erro ao tentar Cadastrar Nota sem Texto de Fechamento","result":"SUCCESS"},{"name":"Excluir Categoria caminho feliz","result":"SUCCESS"},{"name":"Excluir Secao inexistente","result":"PENDING"},{"name":"Criar Organizacao Militar com sigla vazia","result":"PENDING"},{"name":"Criar Tipo de Boletim com campos vazios","result":"SUCCESS"},{"name":"Excluir Secao caminho feliz","result":"PENDING"},{"name":"Excluir Nota do Boletim caminho feliz","result":"PENDING"},{"name":"Visualizar Assunto Geral caminho feliz","result":"FAILURE"},{"name":"Deve mostrar erro ao tentar Boletim sem Data de Publicação","result":"SUCCESS"},{"name":"Atualizar Organizacao Militar Falha ano obrigatoria","result":"PENDING"},{"name":"Deve mostrar erro ao tentar Cadastrar Nota sem Data","result":"SUCCESS"},{"name":"Visualizar Tipo de Documento caminho triste","result":"SUCCESS"},{"name":"Visualizar Organizacao Militar inexistente","result":"PENDING"},{"name":"Excluir Assunto Geral inexistente","result":"SUCCESS"},{"name":"Atualizar Categoria Falha descricao obrigatoria","result":"SUCCESS"},{"name":"Excluir Organizacao Militar inexistente","result":"PENDING"},{"name":"Criar Categoria","result":"SUCCESS"},{"name":"Criar Tipo de Documento","result":"SUCCESS"},{"name":"Atualizar Funcao Falha titular obrigatorio","result":"PENDING"},{"name":"Atualizar Tipo de Boletim Falha abreviatura obrigatorio","result":"SUCCESS"},{"name":"Atualizar Categoria Falha nome obrigatorio","result":"SUCCESS"},{"name":"Visualizar Posto/Graduacao caminho triste","result":"SUCCESS"},{"name":"Deve alterar Data de Publicação Boletim","result":"SUCCESS"},{"name":"Atualizar Militar Sucesso","result":"PENDING"},{"name":"Excluir Tipo de Documento inexistente","result":"SUCCESS"},{"name":"Criar Organizacao Militar caminho feliz","result":"PENDING"},{"name":"Atualizar Militar Falha identidade vazia","result":"PENDING"},{"name":"Associar Notas já Publicadas a um Boletim Interno Reservado","result":"ERROR"},{"name":"Excluir Parte Boletim caminho feliz","result":"SUCCESS"},{"name":"Atualizar Assunto Geral Sucesso","result":"FAILURE"},{"name":"Criar Assunto Geral falha nome obrigatorio","result":"SUCCESS"},{"name":"Visualizar Posto/Graduacao caminho feliz","result":"SUCCESS"},{"name":"Excluir Assunto Especifico inexistente","result":"SUCCESS"},{"name":"Atualizar Secao Boletim Falha descricao obrigatoria","result":"FAILURE"},{"name":"Deve alterar Texto de Fechamento","result":"SUCCESS"},{"name":"Atualizar Militar Falha sexo vazio","result":"PENDING"},{"name":"Atualizar Posto/Graduacao Sucesso","result":"SUCCESS"},{"name":"Deve criar Boletim","result":"SUCCESS"},{"name":"Deve mostrar erro ao tentar remover Data de Publicação","result":"SUCCESS"},{"name":"Atualizar Tipo de Boletim Falha descricao obrigatoria","result":"SUCCESS"},{"name":"Visualizar Assunto Geral caminho triste","result":"SUCCESS"},{"name":"Atualizar Militar falha qualificacao Vazia","result":"PENDING"},{"name":"Criar Organizacao Militar com nome vazio","result":"PENDING"},{"name":"Atualizar Secao Sucesso","result":"PENDING"},{"name":"Atualizar Qualificacao Militar Falha descricao obrigatoria","result":"SUCCESS"},{"name":"Associar Notas já Publicadas a um Boletim Interno","result":"FAILURE"},{"name":"Visualizar Secao caminho feliz","result":"PENDING"},{"name":"Excluir Tipo de Boletim caminho feliz","result":"SUCCESS"},{"name":"Criar Posto/Graduação com nome repetido","result":"SUCCESS"},{"name":"Visualizar Funcao Inexistente","result":"PENDING"},{"name":"Atualizar Secao Boletim Falha posicao obrigatoria","result":"FAILURE"},{"name":"Excluir Nota inexistente","result":"SUCCESS"},{"name":"Atualizar Militar Falha Secao vazia","result":"PENDING"},{"name":"Visualizar Parte Boletim caminho triste","result":"SUCCESS"},{"name":"Atualizar Qualificacao Militar Sucesso","result":"SUCCESS"},{"name":"Cadastrar Militar Falha posto vazio","result":"PENDING"},{"name":"Criar Assunto Geral sucesso","result":"FAILURE"},{"name":"Criar Tipo de Boletim sem descricao","result":"SUCCESS"},{"name":"Cadastrar Militar Falha ativado vazio","result":"PENDING"},{"name":"Cadastrar Militar Falha cpf vazio","result":"PENDING"},{"name":"Atualizar Categoria Sucesso","result":"SUCCESS"},{"name":"Atualizar Categoria Falha campos obrigatorios","result":"SUCCESS"},{"name":"Cadastrar Militar Falha secao vazia","result":"PENDING"},{"name":"Cadastrar Militar Falha qm vazia","result":"PENDING"},{"name":"Excluir Tipo de Documento caminho feliz","result":"SUCCESS"},{"name":"Atualizar Militar Falha nome vazio","result":"PENDING"},{"name":"Visualizar Secao Boletim caminho feliz","result":"FAILURE"},{"name":"Excluir Boletim inexistente","result":"SUCCESS"},{"name":"Criar Posto/Graduação caminho feliz","result":"SUCCESS"},{"name":"Atualizar Parte Boletim Falha posicao obrigatoria","result":"SUCCESS"},{"name":"Atualizar Tipo de Documento Falha nome obrigatorio","result":"SUCCESS"},{"name":"Atualizar Categoria Falha secao obrigatoria","result":"FAILURE"},{"name":"Visualizar Tipo de Boletim caminho triste","result":"SUCCESS"},{"name":"Cadastrar Secao Falha nome vazio","result":"PENDING"},{"name":"Excluir Posto/Graduacao caminho feliz","result":"SUCCESS"},{"name":"Criar Posto/Graduação com nome vazio","result":"SUCCESS"},{"name":"Visualizar Qualificacao Militar caminho feliz","result":"SUCCESS"},{"name":"Excluir Parte Boletim inexistente","result":"SUCCESS"},{"name":"Atualizar Organizacao Militar Falha nome obrigatorio","result":"PENDING"},{"name":"Deve mostrar erro ao tentar Cadastrar Nota sem Texto de Abertura","result":"SUCCESS"},{"name":"Excluir Assunto Geral caminho feliz","result":"FAILURE"},{"name":"Atualizar Militar Falha ativado vazio","result":"PENDING"},{"name":"Atualizar Funcao Sucesso","result":"PENDING"},{"name":"Criar Tipo de Boletim sem abreviatura","result":"SUCCESS"},{"name":"Excluir Organizacao Militar caminho feliz","result":"PENDING"},{"name":"Criar Parte Boletim","result":"SUCCESS"},{"name":"Cadastrar Militar Falha identidade vazia","result":"PENDING"},{"name":"Cadastrar Militar Falha funcao vazia","result":"PENDING"},{"name":"Visualizar Categoria caminho feliz","result":"SUCCESS"},{"name":"Cadastrar Militar Falha om vazia","result":"PENDING"},{"name":"Cadastrar Militar Falha nomeGuerra vazio","result":"PENDING"},{"name":"Atualizar Militar Falha posto vazio","result":"PENDING"},{"name":"Atualizar Parte Boletim Falha descricao obrigatoria","result":"SUCCESS"},{"name":"Criar Organizacao Militar com ano vazio","result":"PENDING"},{"name":"Criar Qualificacao Militar com descricao vazia","result":"SUCCESS"},{"name":"Excluir Secao Boletim caminho feliz","result":"FAILURE"}]');
       titulos = titulos_fixo;
    });
});
