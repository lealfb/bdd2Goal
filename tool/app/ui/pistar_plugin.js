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
       //var titulos_fixo  = JSON.parse('[{"name":"Associar Notas já Publicadas a um Boletim Interno","result":"FAILURE"},{"name":"Associar Notas já Publicadas a um Boletim Interno Reservado","result":"ERROR"},{"name":"Atualizar Assunto Especifico Falha nome obrigatorio","result":"SUCCESS"},{"name":"Atualizar Assunto Especifico Sucesso","result":"SUCCESS"},{"name":"Atualizar Assunto Geral Falha nome obrigatorio","result":"FAILURE"},{"name":"Atualizar Assunto Geral Sucesso","result":"FAILURE"},{"name":"Atualizar Categoria Falha campos obrigatorios","result":"SUCCESS"},{"name":"Atualizar Categoria Falha descricao obrigatoria","result":"SUCCESS"},{"name":"Atualizar Categoria Falha nome obrigatorio","result":"SUCCESS"},{"name":"Atualizar Categoria Falha secao obrigatoria","result":"FAILURE"},{"name":"Atualizar Categoria Sucesso","result":"SUCCESS"},{"name":"Atualizar Funcao Falha descricao obrigatoria","result":"PENDING"},{"name":"Atualizar Funcao Falha nome obrigatorio","result":"PENDING"},{"name":"Atualizar Funcao Falha om obrigatoria","result":"PENDING"},{"name":"Atualizar Funcao Falha periodo obrigatorio","result":"PENDING"},{"name":"Atualizar Funcao Falha titular obrigatorio","result":"PENDING"},{"name":"Atualizar Funcao Sucesso","result":"PENDING"},{"name":"Atualizar Militar Falha Funcao vazia","result":"PENDING"},{"name":"Atualizar Militar Falha Secao vazia","result":"PENDING"},{"name":"Atualizar Militar Falha antiguidade vazia","result":"PENDING"},{"name":"Atualizar Militar Falha ativado vazio","result":"PENDING"},{"name":"Atualizar Militar Falha identidade vazia","result":"PENDING"},{"name":"Atualizar Militar Falha nome vazio","result":"PENDING"},{"name":"Atualizar Militar Falha nomeGuerra vazio","result":"PENDING"},{"name":"Atualizar Militar Falha posto vazio","result":"PENDING"},{"name":"Atualizar Militar Falha sexo vazio","result":"PENDING"},{"name":"Atualizar Militar Sucesso","result":"PENDING"},{"name":"Atualizar Militar falha qualificacao Vazia","result":"PENDING"},{"name":"Atualizar OM","result":"SUCCESS"},{"name":"Atualizar Organizacao Militar Falha ano obrigatoria","result":"PENDING"},{"name":"Atualizar Organizacao Militar Falha guarnicao obrigatoria","result":"PENDING"},{"name":"Atualizar Organizacao Militar Falha localizacao obrigatoria","result":"PENDING"},{"name":"Atualizar Organizacao Militar Falha nome obrigatorio","result":"PENDING"},{"name":"Atualizar Organizacao Militar Falha sigla obrigatoria","result":"PENDING"},{"name":"Atualizar Organizacao Militar Sucesso","result":"PENDING"},{"name":"Atualizar Parte Boletim Falha campos obrigatorios","result":"SUCCESS"},{"name":"Atualizar Parte Boletim Falha descricao obrigatoria","result":"SUCCESS"},{"name":"Atualizar Parte Boletim Falha posicao obrigatoria","result":"SUCCESS"},{"name":"Atualizar Parte Boletim Sucesso","result":"SUCCESS"},{"name":"Atualizar Posto/Graduacao Falha nome obrigatorio","result":"SUCCESS"},{"name":"Atualizar Posto/Graduacao Sucesso","result":"SUCCESS"},{"name":"Atualizar Qualificacao Militar Falha descricao obrigatoria","result":"SUCCESS"},{"name":"Atualizar Qualificacao Militar Sucesso","result":"SUCCESS"},{"name":"Atualizar Secao Boletim Falha Parte obrigatoria","result":"FAILURE"},{"name":"Atualizar Secao Boletim Falha descricao obrigatoria","result":"FAILURE"},{"name":"Atualizar Secao Boletim Falha posicao obrigatoria","result":"FAILURE"},{"name":"Atualizar Secao Boletim Sucesso","result":"FAILURE"},{"name":"Atualizar Secao Falha nome obrigatorio","result":"PENDING"},{"name":"Atualizar Secao Falha sigla obrigatoria","result":"PENDING"},{"name":"Atualizar Secao Sucesso","result":"PENDING"},{"name":"Atualizar Tipo de Boletim Falha abreviatura obrigatorio","result":"SUCCESS"},{"name":"Atualizar Tipo de Boletim Falha campos obrigatorios","result":"SUCCESS"},{"name":"Atualizar Tipo de Boletim Falha descricao obrigatoria","result":"SUCCESS"},{"name":"Atualizar Tipo de Boletim Sucesso","result":"SUCCESS"},{"name":"Atualizar Tipo de Documento Falha nome obrigatorio","result":"SUCCESS"},{"name":"Atualizar Tipo de Documento Sucesso","result":"SUCCESS"},{"name":"Atualizar tempo de serviço","result":"SUCCESS"},{"name":"Atualizar tempo de serviço","result":"SUCCESS"},{"name":"Atualizar workflow","result":"SUCCESS"},{"name":"Atualizar workflow","result":"SUCCESS"},{"name":"Atualizar workflow","result":"SUCCESS"},{"name":"Cadastrar Funcao Falha","result":"PENDING"},{"name":"Cadastrar Funcao Sucesso","result":"PENDING"},{"name":"Cadastrar Militar Falha antiguidade vazia","result":"PENDING"},{"name":"Cadastrar Militar Falha ativado vazio","result":"PENDING"},{"name":"Cadastrar Militar Falha cpf vazio","result":"PENDING"},{"name":"Cadastrar Militar Falha funcao vazia","result":"PENDING"},{"name":"Cadastrar Militar Falha identidade vazia","result":"PENDING"},{"name":"Cadastrar Militar Falha nascimento vazio","result":"PENDING"},{"name":"Cadastrar Militar Falha nome vazio","result":"PENDING"},{"name":"Cadastrar Militar Falha nomeGuerra vazio","result":"PENDING"},{"name":"Cadastrar Militar Falha om vazia","result":"PENDING"},{"name":"Cadastrar Militar Falha posto vazio","result":"PENDING"},{"name":"Cadastrar Militar Falha qm vazia","result":"PENDING"},{"name":"Cadastrar Militar Falha secao vazia","result":"PENDING"},{"name":"Cadastrar Militar Falha sexo vazio","result":"PENDING"},{"name":"Cadastrar Militar Sucesso","result":"PENDING"},{"name":"Cadastrar Secao Falha nome vazio","result":"PENDING"},{"name":"Cadastrar Secao Falha sigla vazia","result":"PENDING"},{"name":"Cadastrar Secao Sucesso","result":"PENDING"},{"name":"Chefe de Cmt/Ch/Dir aprova Nota e a envia para o Boletim","result":"SUCCESS"},{"name":"Chefe de SU/Div/Sec aprova Nota e a envia para Publicação","result":"SUCCESS"},{"name":"Criar Assunto Especifico Sucesso nome nulo","result":"SUCCESS"},{"name":"Criar Assunto Especifico sucesso","result":"SUCCESS"},{"name":"Criar Assunto Geral falha nome obrigatorio","result":"SUCCESS"},{"name":"Criar Assunto Geral sucesso","result":"FAILURE"},{"name":"Criar Assunto Geral sucesso secao nula","result":"SUCCESS"},{"name":"Criar Categoria","result":"SUCCESS"},{"name":"Criar OM","result":"SUCCESS"},{"name":"Criar Organizacao Militar caminho feliz","result":"PENDING"},{"name":"Criar Organizacao Militar com ano vazio","result":"PENDING"},{"name":"Criar Organizacao Militar com guarnicao vazia","result":"PENDING"},{"name":"Criar Organizacao Militar com localizacao vazia","result":"PENDING"},{"name":"Criar Organizacao Militar com nome vazio","result":"PENDING"},{"name":"Criar Organizacao Militar com sigla vazia","result":"PENDING"},{"name":"Criar Parte Boletim","result":"SUCCESS"},{"name":"Criar Posto/Graduação caminho feliz","result":"SUCCESS"},{"name":"Criar Posto/Graduação com mesmo nome, porem com letra maiúscula em um dos casos","result":"FAILURE"},{"name":"Criar Posto/Graduação com nome repetido","result":"SUCCESS"},{"name":"Criar Posto/Graduação com nome vazio","result":"SUCCESS"},{"name":"Criar Qualificacao Militar caminho feliz","result":"SUCCESS"},{"name":"Criar Qualificacao Militar com codigo repetido","result":"SUCCESS"},{"name":"Criar Qualificacao Militar com descricao vazia","result":"SUCCESS"},{"name":"Criar Secao Boletim","result":"SUCCESS"},{"name":"Criar Tipo de Boletim","result":"SUCCESS"},{"name":"Criar Tipo de Boletim com campos vazios","result":"SUCCESS"},{"name":"Criar Tipo de Boletim sem abreviatura","result":"SUCCESS"},{"name":"Criar Tipo de Boletim sem descricao","result":"SUCCESS"},{"name":"Criar Tipo de Documento","result":"SUCCESS"},{"name":"Criar workflow","result":"SUCCESS"},{"name":"Dessassociar notas publicadas a um boletim","result":"SUCCESS"},{"name":"Deve alterar Data de Publicação Boletim","result":"SUCCESS"},{"name":"Deve alterar Texto de Abertura","result":"SUCCESS"},{"name":"Deve alterar Texto de Fechamento","result":"SUCCESS"},{"name":"Deve criar Boletim","result":"SUCCESS"},{"name":"Deve criar Nota","result":"SUCCESS"},{"name":"Deve mostrar erro ao tentar Boletim sem Data de Publicação","result":"SUCCESS"},{"name":"Deve mostrar erro ao tentar Cadastrar Nota sem Data","result":"SUCCESS"},{"name":"Deve mostrar erro ao tentar Cadastrar Nota sem Texto de Abertura","result":"SUCCESS"},{"name":"Deve mostrar erro ao tentar Cadastrar Nota sem Texto de Fechamento","result":"SUCCESS"},{"name":"Deve mostrar erro ao tentar remover Data de Publicação","result":"SUCCESS"},{"name":"Deve mostrar erro ao tentar remover Texto de Abertura","result":"SUCCESS"},{"name":"Deve mostrar erro ao tentar remover Texto de Fechamento","result":"SUCCESS"},{"name":"Excluir Assunto Especifico caminho feliz","result":"SUCCESS"},{"name":"Excluir Assunto Especifico inexistente","result":"SUCCESS"},{"name":"Excluir Assunto Geral caminho feliz","result":"FAILURE"},{"name":"Excluir Assunto Geral inexistente","result":"SUCCESS"},{"name":"Excluir Boletim caminho feliz","result":"SUCCESS"},{"name":"Excluir Boletim inexistente","result":"SUCCESS"},{"name":"Excluir Categoria caminho feliz","result":"SUCCESS"},{"name":"Excluir Categoria inexistente","result":"SUCCESS"},{"name":"Excluir Funcao Inexistente","result":"PENDING"},{"name":"Excluir Funcao Sucesso","result":"PENDING"},{"name":"Excluir Militar Sucesso","result":"PENDING"},{"name":"Excluir Militar inexistente","result":"PENDING"},{"name":"Excluir Nota caminho feliz","result":"SUCCESS"},{"name":"Excluir Nota do Boletim caminho feliz","result":"PENDING"},{"name":"Excluir Nota do Boletim inexistente","result":"PENDING"},{"name":"Excluir Nota inexistente","result":"SUCCESS"},{"name":"Excluir OM","result":"SUCCESS"},{"name":"Excluir Organizacao Militar caminho feliz","result":"PENDING"},{"name":"Excluir Organizacao Militar inexistente","result":"PENDING"},{"name":"Excluir Parte Boletim caminho feliz","result":"SUCCESS"},{"name":"Excluir Parte Boletim inexistente","result":"SUCCESS"},{"name":"Excluir Posto/Graduacao caminho feliz","result":"SUCCESS"},{"name":"Excluir Posto/Graduacao inexistente","result":"SUCCESS"},{"name":"Excluir Qualificacao Militar caminho feliz","result":"SUCCESS"},{"name":"Excluir Qualificacao Militar inexistente","result":"SUCCESS"},{"name":"Excluir Secao Boletim caminho feliz","result":"FAILURE"},{"name":"Excluir Secao Boletim inexistente","result":"SUCCESS"},{"name":"Excluir Secao caminho feliz","result":"PENDING"},{"name":"Excluir Secao inexistente","result":"PENDING"},{"name":"Excluir Tipo de Boletim caminho feliz","result":"SUCCESS"},{"name":"Excluir Tipo de Boletim inexistente","result":"SUCCESS"},{"name":"Excluir Tipo de Documento caminho feliz","result":"SUCCESS"},{"name":"Excluir Tipo de Documento inexistente","result":"SUCCESS"},{"name":"Excluir tempo de serviço","result":"SUCCESS"},{"name":"Gerar PDF","result":"SUCCESS"},{"name":"Operador envia Nota para Aprovação","result":"SUCCESS"},{"name":"Visualizar Assunto Especifico caminho feliz","result":"SUCCESS"},{"name":"Visualizar Assunto Especifico caminho triste","result":"SUCCESS"},{"name":"Visualizar Assunto Geral caminho feliz","result":"FAILURE"},{"name":"Visualizar Assunto Geral caminho triste","result":"SUCCESS"},{"name":"Visualizar Categoria caminho feliz","result":"SUCCESS"},{"name":"Visualizar Categoria caminho triste","result":"SUCCESS"},{"name":"Visualizar Funcao Inexistente","result":"PENDING"},{"name":"Visualizar Funcao Sucesso","result":"PENDING"},{"name":"Visualizar Militar Sucesso","result":"PENDING"},{"name":"Visualizar Militar inexistente","result":"PENDING"},{"name":"Visualizar Organizacao Militar caminho feliz","result":"PENDING"},{"name":"Visualizar Organizacao Militar inexistente","result":"PENDING"},{"name":"Visualizar Parte Boletim caminho feliz","result":"SUCCESS"},{"name":"Visualizar Parte Boletim caminho triste","result":"SUCCESS"},{"name":"Visualizar Posto/Graduacao caminho feliz","result":"SUCCESS"},{"name":"Visualizar Posto/Graduacao caminho triste","result":"SUCCESS"},{"name":"Visualizar Qualificacao Militar caminho feliz","result":"SUCCESS"},{"name":"Visualizar Qualificacao Militar inexistente","result":"SUCCESS"},{"name":"Visualizar Secao Boletim caminho feliz","result":"FAILURE"},{"name":"Visualizar Secao Boletim caminho triste","result":"SUCCESS"},{"name":"Visualizar Secao caminho feliz","result":"PENDING"},{"name":"Visualizar Secao inexistente","result":"PENDING"},{"name":"Visualizar Tipo de Boletim caminho feliz","result":"SUCCESS"},{"name":"Visualizar Tipo de Boletim caminho triste","result":"SUCCESS"},{"name":"Visualizar Tipo de Documento caminho feliz","result":"SUCCESS"},{"name":"Visualizar Tipo de Documento caminho triste","result":"SUCCESS"},{"name":"Visualizar tempo de serviço","result":"SUCCESS"},{"name":"Visualizar workflow","result":"SUCCESS"}]');
       var titulos_fixo = JSON.parse('[{"name":"Atualizar Tipo de Boletim","result":"SUCCESS","oldLabel":"Atualizar Tipo de Boletim Sucesso","newLabel":"Atualizar Tipo de Boletim"},{"name":"Atualizar Organizacao Militar","result":"PENDING","oldLabel":"Atualizar Organizacao Militar Falha sigla obrigatoria","newLabel":"Atualizar Organizacao Militar"},{"name":"Excluir Categoria","result":"SUCCESS","oldLabel":"Excluir Categoria inexistente","newLabel":"Excluir Categoria"},{"name":"Cadastrar Secao","result":"PENDING","oldLabel":"Cadastrar Secao Falha sigla vazia","newLabel":"Cadastrar Secao"},{"name":"Atualizar Posto/Graduacao","result":"SUCCESS","oldLabel":"Atualizar Posto/Graduacao Falha nome obrigatorio","newLabel":"Atualizar Posto/Graduacao"},{"name":"Visualizar Secao","result":"PENDING","oldLabel":"Visualizar Secao inexistente","newLabel":"Visualizar Secao"},{"name":"Atualizar Parte Boletim","result":"SUCCESS","oldLabel":"Atualizar Parte Boletim Sucesso","newLabel":"Atualizar Parte Boletim"},{"name":"Criar Tipo de Boletim","result":"SUCCESS","oldLabel":"Criar Tipo de Boletim","newLabel":"Criar Tipo de Boletim"},{"name":"Atualizar Secao Boletim","result":"FAILURE","oldLabel":"Atualizar Secao Boletim Falha Parte obrigatoria","newLabel":"Atualizar Secao Boletim"},{"name":"Criar Notas para Boletim","result":"SUCCESS","oldLabel":"Deve mostrar erro ao tentar remover Texto de Fechamento","newLabel":"Criar Notas para Boletim"},{"name":"Excluir Militar","result":"PENDING","oldLabel":"Excluir Militar inexistente","newLabel":"Excluir Militar"},{"name":"Visualizar Parte Boletim","result":"SUCCESS","oldLabel":"Visualizar Parte Boletim caminho feliz","newLabel":"Visualizar Parte Boletim"},{"name":"Atualizar Funcao","result":"PENDING","oldLabel":"Atualizar Funcao Falha om obrigatoria","newLabel":"Atualizar Funcao"},{"name":"Visualizar Organizacao Militar","result":"PENDING","oldLabel":"Visualizar Organizacao Militar caminho feliz","newLabel":"Visualizar Organizacao Militar"},{"name":"Excluir Funcao","result":"PENDING","oldLabel":"Excluir Funcao Inexistente","newLabel":"Excluir Funcao"},{"name":"Excluir Nota do Boletim","result":"PENDING","oldLabel":"Excluir Nota do Boletim inexistente","newLabel":"Excluir Nota do Boletim"},{"name":"Criar Qualificacao Militar","result":"SUCCESS","oldLabel":"Criar Qualificacao Militar com codigo repetido","newLabel":"Criar Qualificacao Militar"},{"name":"Cadastrar Militar","result":"PENDING","oldLabel":"Cadastrar Militar Sucesso","newLabel":"Cadastrar Militar"},{"name":"Visualizar Assunto Especifico","result":"SUCCESS","oldLabel":"Visualizar Assunto Especifico caminho feliz","newLabel":"Visualizar Assunto Especifico"},{"name":"Enviar Notas para o Boletim","result":"SUCCESS","oldLabel":"Chefe de Cmt/Ch/Dir aprova Nota e a envia para o Boletim","newLabel":"Enviar Notas para o Boletim"},{"name":"Atualizar Secao","result":"PENDING","oldLabel":"Atualizar Secao Falha sigla obrigatoria","newLabel":"Atualizar Secao"},{"name":"Criar Assunto Especifico","result":"SUCCESS","oldLabel":"Criar Assunto Especifico Sucesso nome nulo","newLabel":"Criar Assunto Especifico"},{"name":"Cadastrar Funcao","result":"PENDING","oldLabel":"Cadastrar Funcao Falha","newLabel":"Cadastrar Funcao"},{"name":"Visualizar Militar","result":"PENDING","oldLabel":"Visualizar Militar inexistente","newLabel":"Visualizar Militar"},{"name":"Visualizar Categoria","result":"SUCCESS","oldLabel":"Visualizar Categoria caminho triste","newLabel":"Visualizar Categoria"},{"name":"Excluir Tipo de Boletim","result":"SUCCESS","oldLabel":"Excluir Tipo de Boletim inexistente","newLabel":"Excluir Tipo de Boletim"},{"name":"Atualizar Militar","result":"PENDING","oldLabel":"Atualizar Militar Falha nomeGuerra vazio","newLabel":"Atualizar Militar"},{"name":"Excluir Qualificacao Militar","result":"SUCCESS","oldLabel":"Excluir Qualificacao Militar caminho feliz","newLabel":"Excluir Qualificacao Militar"},{"name":"Enviar Notas para publicação","result":"SUCCESS","oldLabel":"Chefe de SU/Div/Sec aprova Nota e a envia para Publicação","newLabel":"Enviar Notas para publicação"},{"name":"Excluir Secao Boletim","result":"SUCCESS","oldLabel":"Excluir Secao Boletim inexistente","newLabel":"Excluir Secao Boletim"},{"name":"Enviar Notas para aprovação","result":"SUCCESS","oldLabel":"Operador envia Nota para Aprovação","newLabel":"Enviar Notas para aprovação"},{"name":"Excluir Boletim","result":"SUCCESS","oldLabel":"Excluir Boletim caminho feliz","newLabel":"Excluir Boletim"},{"name":"Excluir Secao","result":"PENDING","oldLabel":"Excluir Secao inexistente","newLabel":"Excluir Secao"},{"name":"Visualizar Posto/Graduacao","result":"SUCCESS","oldLabel":"Visualizar Posto/Graduacao caminho triste","newLabel":"Visualizar Posto/Graduacao"},{"name":"Visualizar Qualificacao Militar","result":"SUCCESS","oldLabel":"Visualizar Qualificacao Militar inexistente","newLabel":"Visualizar Qualificacao Militar"},{"name":"Visualizar Assunto Geral","result":"FAILURE","oldLabel":"Visualizar Assunto Geral caminho feliz","newLabel":"Visualizar Assunto Geral"},{"name":"Criar Boletins","result":"SUCCESS","oldLabel":"Deve mostrar erro ao tentar Boletim sem Data de Publicação","newLabel":"Criar Boletins"},{"name":"Criar Organizacao Militar","result":"PENDING","oldLabel":"Criar Organizacao Militar caminho feliz","newLabel":"Criar Organizacao Militar"},{"name":"Excluir Tipo de Documento","result":"SUCCESS","oldLabel":"Excluir Tipo de Documento inexistente","newLabel":"Excluir Tipo de Documento"},{"name":"Excluir Parte Boletim","result":"SUCCESS","oldLabel":"Excluir Parte Boletim caminho feliz","newLabel":"Excluir Parte Boletim"},{"name":"Associar Notas Publicadas a um Boletim","result":"ERROR","oldLabel":"Associar Notas já Publicadas a um Boletim Interno Reservado","newLabel":"Associar Notas Publicadas a um Boletim"},{"name":"Criar Assunto Geral","result":"SUCCESS","oldLabel":"Criar Assunto Geral falha nome obrigatorio","newLabel":"Criar Assunto Geral"},{"name":"Excluir Assunto Especifico","result":"SUCCESS","oldLabel":"Excluir Assunto Especifico inexistente","newLabel":"Excluir Assunto Especifico"},{"name":"Atualizar Assunto Geral","result":"FAILURE","oldLabel":"Atualizar Assunto Geral Sucesso","newLabel":"Atualizar Assunto Geral"},{"name":"Atualizar Qualificacao Militar","result":"SUCCESS","oldLabel":"Atualizar Qualificacao Militar Falha descricao obrigatoria","newLabel":"Atualizar Qualificacao Militar"},{"name":"Criar Posto/Graduação","result":"SUCCESS","oldLabel":"Criar Posto/Graduação com nome repetido","newLabel":"Criar Posto/Graduação"},{"name":"Visualizar Funcao","result":"PENDING","oldLabel":"Visualizar Funcao Inexistente","newLabel":"Visualizar Funcao"},{"name":"Excluir Nota","result":"SUCCESS","oldLabel":"Excluir Nota inexistente","newLabel":"Excluir Nota"},{"name":"Atualizar Categoria","result":"SUCCESS","oldLabel":"Atualizar Categoria Sucesso","newLabel":"Atualizar Categoria"},{"name":"Visualizar Secao Boletim","result":"FAILURE","oldLabel":"Visualizar Secao Boletim caminho feliz","newLabel":"Visualizar Secao Boletim"},{"name":"Atualizar Tipo de Documento","result":"SUCCESS","oldLabel":"Atualizar Tipo de Documento Falha nome obrigatorio","newLabel":"Atualizar Tipo de Documento"},{"name":"Visualizar Tipo de Boletim","result":"SUCCESS","oldLabel":"Visualizar Tipo de Boletim caminho triste","newLabel":"Visualizar Tipo de Boletim"},{"name":"Excluir Posto/Graduacao","result":"SUCCESS","oldLabel":"Excluir Posto/Graduacao caminho feliz","newLabel":"Excluir Posto/Graduacao"},{"name":"Excluir Assunto Geral","result":"FAILURE","oldLabel":"Excluir Assunto Geral caminho feliz","newLabel":"Excluir Assunto Geral"},{"name":"Excluir Organizacao Militar","result":"PENDING","oldLabel":"Excluir Organizacao Militar caminho feliz","newLabel":"Excluir Organizacao Militar"},{"name":"Criar Parte Boletim","result":"SUCCESS","oldLabel":"Criar Parte Boletim","newLabel":"Criar Parte Boletim"},{"name":"Atualizar Assunto Especifico","result":"SUCCESS","oldLabel":"Atualizar Assunto Especifico Falha nome obrigatorio","newLabel":"Atualizar Assunto Especifico"},{"name":"Visualizar Tipo de Documento","result":"SUCCESS","oldLabel":"Visualizar Tipo de Documento caminho feliz","newLabel":"Visualizar Tipo de Documento"},{"name":"Criar Secao Boletim","result":"SUCCESS","oldLabel":"Criar Secao Boletim","newLabel":"Criar Secao Boletim"},{"name":"Criar Categoria","result":"SUCCESS","oldLabel":"Criar Categoria","newLabel":"Criar Categoria"},{"name":"Criar Tipo de Documento","result":"SUCCESS","oldLabel":"Criar Tipo de Documento","newLabel":"Criar Tipo de Documento"}]');
       titulos = titulos_fixo;
    });
});
