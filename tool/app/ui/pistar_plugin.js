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
    
    $('.modal-button-load-example').click(function () {
       var titulos_fixo = JSON.parse('[{"name":"Atualizar Tipo de Boletim Sucesso","result":"SUCCESS"},{"name":"Atualizar Organizacao Militar Falha sigla obrigatoria","result":"PENDING"},{"name":"Excluir Categoria inexistente","result":"SUCCESS"},{"name":"Atualizar Posto/Graduacao Falha nome obrigatorio","result":"SUCCESS"},{"name":"Cadastrar Secao Falha sigla vazia","result":"PENDING"},{"name":"Atualizar Organizacao Militar Falha localizacao obrigatoria","result":"PENDING"},{"name":"Criar Posto/Graduação com mesmo nome, porem com letra maiúscula em um dos casos","result":"FAILURE"},{"name":"Visualizar Secao inexistente","result":"PENDING"},{"name":"Atualizar Secao Boletim Falha Parte obrigatoria","result":"FAILURE"},{"name":"Visualizar Qualificacao Militar inexistente","result":"SUCCESS"},{"name":"Atualizar Parte Boletim Sucesso","result":"SUCCESS"},{"name":"Criar Tipo de Boletim","result":"SUCCESS"},{"name":"Deve mostrar erro ao tentar remover Texto de Fechamento","result":"SUCCESS"},{"name":"Excluir Posto/Graduacao inexistente","result":"SUCCESS"},{"name":"Atualizar Secao Boletim Sucesso","result":"FAILURE"},{"name":"Excluir Militar inexistente","result":"PENDING"},{"name":"Visualizar Parte Boletim caminho feliz","result":"SUCCESS"},{"name":"Atualizar Organizacao Militar Falha guarnicao obrigatoria","result":"PENDING"},{"name":"Atualizar Funcao Falha om obrigatoria","result":"PENDING"},{"name":"Atualizar Parte Boletim Falha campos obrigatorios","result":"SUCCESS"},{"name":"Atualizar Assunto Geral Falha nome obrigatorio","result":"FAILURE"},{"name":"Excluir Funcao Inexistente","result":"PENDING"},{"name":"Visualizar Organizacao Militar caminho feliz","result":"PENDING"},{"name":"Excluir Nota do Boletim inexistente","result":"PENDING"},{"name":"Atualizar Funcao Falha periodo obrigatorio","result":"PENDING"},{"name":"Atualizar Assunto Especifico Falha nome obrigatorio","result":"SUCCESS"},{"name":"Cadastrar Funcao Sucesso","result":"PENDING"},{"name":"Criar Qualificacao Militar com codigo repetido","result":"SUCCESS"},{"name":"Criar Assunto Especifico sucesso","result":"SUCCESS"},{"name":"Excluir Funcao Sucesso","result":"PENDING"},{"name":"Visualizar Assunto Especifico caminho feliz","result":"SUCCESS"},{"name":"Chefe de Cmt/Ch/Dir aprova Nota e a envia para o Boletim","result":"SUCCESS"},{"name":"Visualizar Tipo de Documento caminho feliz","result":"SUCCESS"},{"name":"Cadastrar Militar Sucesso","result":"PENDING"},{"name":"Cadastrar Militar Falha antiguidade vazia","result":"PENDING"},{"name":"Atualizar Tipo de Documento Sucesso","result":"SUCCESS"},{"name":"Cadastrar Secao Sucesso","result":"PENDING"},{"name":"Excluir Qualificacao Militar inexistente","result":"SUCCESS"},{"name":"Visualizar Funcao Sucesso","result":"PENDING"},{"name":"Deve criar Nota","result":"SUCCESS"},{"name":"Atualizar Tipo de Boletim Falha campos obrigatorios","result":"SUCCESS"},{"name":"Deve mostrar erro ao tentar remover Texto de Abertura","result":"SUCCESS"},{"name":"Visualizar Secao Boletim caminho triste","result":"SUCCESS"},{"name":"Criar Assunto Geral sucesso secao nula","result":"SUCCESS"},{"name":"Cadastrar Militar Falha sexo vazio","result":"PENDING"},{"name":"Atualizar Assunto Especifico Sucesso","result":"SUCCESS"},{"name":"Visualizar Militar Sucesso","result":"PENDING"},{"name":"Criar Organizacao Militar com localizacao vazia","result":"PENDING"},{"name":"Criar Secao Boletim","result":"SUCCESS"},{"name":"Atualizar Secao Falha sigla obrigatoria","result":"PENDING"},{"name":"Cadastrar Militar Falha nome vazio","result":"PENDING"},{"name":"Cadastrar Militar Falha nascimento vazio","result":"PENDING"},{"name":"Criar Assunto Especifico Sucesso nome nulo","result":"SUCCESS"},{"name":"Cadastrar Funcao Falha","result":"PENDING"},{"name":"Visualizar Militar inexistente","result":"PENDING"},{"name":"Atualizar Funcao Falha descricao obrigatoria","result":"PENDING"},{"name":"Visualizar Assunto Especifico caminho triste","result":"SUCCESS"},{"name":"Deve alterar Texto de Abertura","result":"SUCCESS"},{"name":"Visualizar Categoria caminho triste","result":"SUCCESS"},{"name":"Atualizar Funcao Falha nome obrigatorio","result":"PENDING"},{"name":"Atualizar Militar Falha Funcao vazia","result":"PENDING"},{"name":"Atualizar Secao Falha nome obrigatorio","result":"PENDING"},{"name":"Excluir Tipo de Boletim inexistente","result":"SUCCESS"},{"name":"Excluir Qualificacao Militar caminho feliz","result":"SUCCESS"},{"name":"Excluir Secao Boletim inexistente","result":"SUCCESS"},{"name":"Excluir Assunto Especifico caminho feliz","result":"SUCCESS"},{"name":"Atualizar Militar Falha antiguidade vazia","result":"PENDING"},{"name":"Atualizar Militar Falha nomeGuerra vazio","result":"PENDING"},{"name":"Excluir Militar Sucesso","result":"PENDING"},{"name":"Visualizar Tipo de Boletim caminho feliz","result":"SUCCESS"},{"name":"Chefe de SU/Div/Sec aprova Nota e a envia para Publicação","result":"SUCCESS"},{"name":"Criar Organizacao Militar com guarnicao vazia","result":"PENDING"},{"name":"Excluir Nota caminho feliz","result":"SUCCESS"},{"name":"Operador envia Nota para Aprovação","result":"SUCCESS"},{"name":"Criar Qualificacao Militar caminho feliz","result":"SUCCESS"},{"name":"Atualizar Organizacao Militar Sucesso","result":"PENDING"},{"name":"Excluir Boletim caminho feliz","result":"SUCCESS"},{"name":"Deve mostrar erro ao tentar Cadastrar Nota sem Texto de Fechamento","result":"SUCCESS"},{"name":"Excluir Categoria caminho feliz","result":"SUCCESS"},{"name":"Excluir Secao inexistente","result":"PENDING"},{"name":"Criar Organizacao Militar com sigla vazia","result":"PENDING"},{"name":"Criar Tipo de Boletim com campos vazios","result":"SUCCESS"},{"name":"Excluir Secao caminho feliz","result":"PENDING"},{"name":"Excluir Nota do Boletim caminho feliz","result":"PENDING"},{"name":"Visualizar Assunto Geral caminho feliz","result":"FAILURE"},{"name":"Deve mostrar erro ao tentar Boletim sem Data de Publicação","result":"SUCCESS"},{"name":"Atualizar Organizacao Militar Falha ano obrigatoria","result":"PENDING"},{"name":"Deve mostrar erro ao tentar Cadastrar Nota sem Data","result":"SUCCESS"},{"name":"Visualizar Tipo de Documento caminho triste","result":"SUCCESS"},{"name":"Visualizar Organizacao Militar inexistente","result":"PENDING"},{"name":"Excluir Assunto Geral inexistente","result":"SUCCESS"},{"name":"Atualizar Categoria Falha descricao obrigatoria","result":"SUCCESS"},{"name":"Excluir Organizacao Militar inexistente","result":"PENDING"},{"name":"Criar Categoria","result":"SUCCESS"},{"name":"Criar Tipo de Documento","result":"SUCCESS"},{"name":"Atualizar Funcao Falha titular obrigatorio","result":"PENDING"},{"name":"Atualizar Tipo de Boletim Falha abreviatura obrigatorio","result":"SUCCESS"},{"name":"Atualizar Categoria Falha nome obrigatorio","result":"SUCCESS"},{"name":"Visualizar Posto/Graduacao caminho triste","result":"SUCCESS"},{"name":"Deve alterar Data de Publicação Boletim","result":"SUCCESS"},{"name":"Atualizar Militar Sucesso","result":"PENDING"},{"name":"Excluir Tipo de Documento inexistente","result":"SUCCESS"},{"name":"Criar Organizacao Militar caminho feliz","result":"PENDING"},{"name":"Atualizar Militar Falha identidade vazia","result":"PENDING"},{"name":"Associar Notas já Publicadas a um Boletim Interno Reservado","result":"ERROR"},{"name":"Excluir Parte Boletim caminho feliz","result":"SUCCESS"},{"name":"Atualizar Assunto Geral Sucesso","result":"FAILURE"},{"name":"Criar Assunto Geral falha nome obrigatorio","result":"SUCCESS"},{"name":"Visualizar Posto/Graduacao caminho feliz","result":"SUCCESS"},{"name":"Excluir Assunto Especifico inexistente","result":"SUCCESS"},{"name":"Atualizar Secao Boletim Falha descricao obrigatoria","result":"FAILURE"},{"name":"Deve alterar Texto de Fechamento","result":"SUCCESS"},{"name":"Atualizar Militar Falha sexo vazio","result":"PENDING"},{"name":"Atualizar Posto/Graduacao Sucesso","result":"SUCCESS"},{"name":"Deve criar Boletim","result":"SUCCESS"},{"name":"Deve mostrar erro ao tentar remover Data de Publicação","result":"SUCCESS"},{"name":"Atualizar Tipo de Boletim Falha descricao obrigatoria","result":"SUCCESS"},{"name":"Visualizar Assunto Geral caminho triste","result":"SUCCESS"},{"name":"Atualizar Militar falha qualificacao Vazia","result":"PENDING"},{"name":"Criar Organizacao Militar com nome vazio","result":"PENDING"},{"name":"Atualizar Secao Sucesso","result":"PENDING"},{"name":"Atualizar Qualificacao Militar Falha descricao obrigatoria","result":"SUCCESS"},{"name":"Associar Notas já Publicadas a um Boletim Interno","result":"FAILURE"},{"name":"Visualizar Secao caminho feliz","result":"PENDING"},{"name":"Excluir Tipo de Boletim caminho feliz","result":"SUCCESS"},{"name":"Criar Posto/Graduação com nome repetido","result":"SUCCESS"},{"name":"Visualizar Funcao Inexistente","result":"PENDING"},{"name":"Atualizar Secao Boletim Falha posicao obrigatoria","result":"FAILURE"},{"name":"Excluir Nota inexistente","result":"SUCCESS"},{"name":"Atualizar Militar Falha Secao vazia","result":"PENDING"},{"name":"Visualizar Parte Boletim caminho triste","result":"SUCCESS"},{"name":"Atualizar Qualificacao Militar Sucesso","result":"SUCCESS"},{"name":"Cadastrar Militar Falha posto vazio","result":"PENDING"},{"name":"Criar Assunto Geral sucesso","result":"FAILURE"},{"name":"Criar Tipo de Boletim sem descricao","result":"SUCCESS"},{"name":"Cadastrar Militar Falha ativado vazio","result":"PENDING"},{"name":"Cadastrar Militar Falha cpf vazio","result":"PENDING"},{"name":"Atualizar Categoria Sucesso","result":"SUCCESS"},{"name":"Atualizar Categoria Falha campos obrigatorios","result":"SUCCESS"},{"name":"Cadastrar Militar Falha secao vazia","result":"PENDING"},{"name":"Cadastrar Militar Falha qm vazia","result":"PENDING"},{"name":"Excluir Tipo de Documento caminho feliz","result":"SUCCESS"},{"name":"Atualizar Militar Falha nome vazio","result":"PENDING"},{"name":"Visualizar Secao Boletim caminho feliz","result":"FAILURE"},{"name":"Excluir Boletim inexistente","result":"SUCCESS"},{"name":"Criar Posto/Graduação caminho feliz","result":"SUCCESS"},{"name":"Atualizar Parte Boletim Falha posicao obrigatoria","result":"SUCCESS"},{"name":"Atualizar Tipo de Documento Falha nome obrigatorio","result":"SUCCESS"},{"name":"Atualizar Categoria Falha secao obrigatoria","result":"FAILURE"},{"name":"Visualizar Tipo de Boletim caminho triste","result":"SUCCESS"},{"name":"Cadastrar Secao Falha nome vazio","result":"PENDING"},{"name":"Excluir Posto/Graduacao caminho feliz","result":"SUCCESS"},{"name":"Criar Posto/Graduação com nome vazio","result":"SUCCESS"},{"name":"Visualizar Qualificacao Militar caminho feliz","result":"SUCCESS"},{"name":"Excluir Parte Boletim inexistente","result":"SUCCESS"},{"name":"Atualizar Organizacao Militar Falha nome obrigatorio","result":"PENDING"},{"name":"Deve mostrar erro ao tentar Cadastrar Nota sem Texto de Abertura","result":"SUCCESS"},{"name":"Excluir Assunto Geral caminho feliz","result":"FAILURE"},{"name":"Atualizar Militar Falha ativado vazio","result":"PENDING"},{"name":"Atualizar Funcao Sucesso","result":"PENDING"},{"name":"Criar Tipo de Boletim sem abreviatura","result":"SUCCESS"},{"name":"Excluir Organizacao Militar caminho feliz","result":"PENDING"},{"name":"Criar Parte Boletim","result":"SUCCESS"},{"name":"Cadastrar Militar Falha identidade vazia","result":"PENDING"},{"name":"Cadastrar Militar Falha funcao vazia","result":"PENDING"},{"name":"Visualizar Categoria caminho feliz","result":"SUCCESS"},{"name":"Cadastrar Militar Falha om vazia","result":"PENDING"},{"name":"Cadastrar Militar Falha nomeGuerra vazio","result":"PENDING"},{"name":"Atualizar Militar Falha posto vazio","result":"PENDING"},{"name":"Atualizar Parte Boletim Falha descricao obrigatoria","result":"SUCCESS"},{"name":"Criar Organizacao Militar com ano vazio","result":"PENDING"},{"name":"Criar Qualificacao Militar com descricao vazia","result":"SUCCESS"},{"name":"Excluir Secao Boletim caminho feliz","result":"FAILURE"}]');
       titulos = titulos_fixo;
    });
});

istar.models.fabio = {
  "actors": [
    {
      "id": "dbe6cf9f-877d-4600-bac9-8f7bbde93426",
      "text": "Sistema",
      "type": "istar.Agent",
      "x": 29,
      "y": 85,
      "nodes": [
        {
          "id": "ab99b45b-ee62-4a1c-9d4d-1312dbfd3d7d",
          "text": "G0: Gerir Publicações",
          "type": "istar.Goal",
          "x": 865,
          "y": 137,
          "customProperties": {
            "Description": "Be able to modify existing elements"
          }
        },
        {
          "id": "b46a33b8-ac2a-4cd1-8500-e746c0c85218",
          "text": "G9: Manter Workflow",
          "type": "istar.Goal",
          "x": 1385,
          "y": 286,
          "customProperties": {
            "Description": ""
          }
        },
        {
          "id": "6387ad89-8fff-4612-a7aa-21116cf24e9f",
          "text": "G4: Controlar Configurações",
          "type": "istar.Goal",
          "x": 1756,
          "y": 146,
          "customProperties": {
            "Description": ""
          }
        },
        {
          "id": "bd5e481f-e93b-4dfe-8daf-3d1fc91e6a04",
          "text": "G3: Elaborar Boletins",
          "type": "istar.Goal",
          "x": 867,
          "y": 258,
          "customProperties": {
            "Description": ""
          }
        },
        {
          "id": "0472d403-efab-48f7-aed5-8a14190ad71a",
          "text": "G1: Gerir Alterações",
          "type": "istar.Goal",
          "x": 655,
          "y": 222,
          "customProperties": {
            "Description": ""
          }
        },
        {
          "id": "77b3f119-bd4e-42be-9b84-552a22bf44c5",
          "text": "Criar workflow",
          "type": "istar.Task",
          "x": 1359,
          "y": 380,
          "customProperties": {
            "Description": ""
          }
        },
        {
          "id": "1a71e4f7-e126-46fe-a3db-b7523c20168f",
          "text": "Atualizar workflow",
          "type": "istar.Task",
          "x": 1430,
          "y": 381,
          "customProperties": {
            "Description": ""
          }
        },
        {
          "id": "e081d04a-7921-4091-9129-cb0fe269be45",
          "text": "Excluir workflow",
          "type": "istar.Task",
          "x": 1459,
          "y": 339,
          "customProperties": {
            "Description": ""
          }
        },
        {
          "id": "21927ac9-33c0-4302-b8e8-b1a28b02793e",
          "text": "Visualizar workflow",
          "type": "istar.Task",
          "x": 1330,
          "y": 338,
          "customProperties": {
            "Description": ""
          }
        },
        {
          "id": "e7eb3f41-7912-430e-bf3a-b2e0576d543b",
          "text": "G2: Configurar Workflow",
          "type": "istar.Goal",
          "x": 1299,
          "y": 226,
          "customProperties": {
            "Description": ""
          }
        },
        {
          "id": "61ca99d1-6d04-4225-9407-dd781f85edfc",
          "text": "G8: Navegar pelo Workflow",
          "type": "istar.Goal",
          "x": 1218,
          "y": 289,
          "customProperties": {
            "Description": ""
          }
        },
        {
          "id": "a98c2a57-3103-4996-a040-027e2fa7b5c9",
          "text": "Enviar notas para aprovação",
          "type": "istar.Task",
          "x": 1214,
          "y": 362,
          "customProperties": {
            "Description": ""
          }
        },
        {
          "id": "9f263aa4-58c7-4900-9da9-59e0f3a49d90",
          "text": "G7: Manter Histórico",
          "type": "istar.Goal",
          "x": 634,
          "y": 368,
          "customProperties": {
            "Description": ""
          }
        },
        {
          "id": "730c43f4-cb00-4db4-8571-939244e85803",
          "text": "Alterar historico",
          "type": "istar.Task",
          "x": 687,
          "y": 417,
          "customProperties": {
            "Description": ""
          }
        },
        {
          "id": "849e8f32-a215-45c3-a85a-e900f6cdc7e8",
          "text": "Criar historico",
          "type": "istar.Task",
          "x": 610,
          "y": 420,
          "customProperties": {
            "Description": ""
          }
        },
        {
          "id": "afa3db48-55e4-4f1c-9208-42d0335e3ccb",
          "text": "G5: Manter Alterações",
          "type": "istar.Goal",
          "x": 438,
          "y": 308,
          "customProperties": {
            "Description": ""
          }
        },
        {
          "id": "c88bec8e-2a41-4747-b11c-6d34fe678d6b",
          "text": "Atualizar alteração",
          "type": "istar.Task",
          "x": 481,
          "y": 410,
          "customProperties": {
            "Description": ""
          }
        },
        {
          "id": "c0bf8e95-dc7a-4fbd-bcf7-3063599ba897",
          "text": "Criar alteração",
          "type": "istar.Task",
          "x": 402,
          "y": 410,
          "customProperties": {
            "Description": ""
          }
        },
        {
          "id": "db0e6179-34a2-4039-b724-41d106878f29",
          "text": "Visualizar alteração",
          "type": "istar.Task",
          "x": 367,
          "y": 370,
          "customProperties": {
            "Description": ""
          }
        },
        {
          "id": "3adbe37b-23c8-4a63-b037-2b8ee41e234d",
          "text": "Excluir alteração",
          "type": "istar.Task",
          "x": 514,
          "y": 368,
          "customProperties": {
            "Description": ""
          }
        },
        {
          "id": "6cb6089f-01a3-467f-a9c1-290cdd511a5f",
          "text": "Gerar PDF",
          "type": "istar.Task",
          "x": 587,
          "y": 309,
          "customProperties": {
            "Description": ""
          }
        },
        {
          "id": "0d840cbe-8560-4d92-bfad-3e05102d3d9b",
          "text": "Manter Posto/Graduação",
          "type": "istar.Goal",
          "x": 1583,
          "y": 281,
          "customProperties": {
            "Description": ""
          }
        },
        {
          "id": "14c11dd2-55c1-456a-b9b7-2c169975fee3",
          "text": "Manter Qualificação Militar",
          "type": "istar.Goal",
          "x": 1739,
          "y": 398,
          "customProperties": {
            "Description": ""
          }
        },
        {
          "id": "5d39cf50-4b49-4256-a4e3-6b9d4f1f3332",
          "text": "Manter Categoria",
          "type": "istar.Goal",
          "x": 1951,
          "y": 405,
          "customProperties": {
            "Description": ""
          }
        },
        {
          "id": "13f545ed-effc-4a45-a3cb-2667cfe776db",
          "text": "Manter OM",
          "type": "istar.Goal",
          "x": 2008,
          "y": 271,
          "customProperties": {
            "Description": ""
          }
        },
        {
          "id": "652ead7a-1d51-4f5c-bb03-c713ec416dfb",
          "text": "Manter Função",
          "type": "istar.Goal",
          "x": 2161,
          "y": 297,
          "customProperties": {
            "Description": ""
          }
        },
        {
          "id": "3800ce9d-26e7-49ca-bebf-a5bb542eb689",
          "text": "Criar Posto/Grad",
          "type": "istar.Task",
          "x": 1567,
          "y": 379,
          "customProperties": {
            "Description": ""
          }
        },
        {
          "id": "7797320b-7785-4279-b652-ba73d1b854d1",
          "text": "Visualizar Postos/Grad",
          "type": "istar.Task",
          "x": 1529,
          "y": 339,
          "customProperties": {
            "Description": ""
          }
        },
        {
          "id": "1cd6e8e4-997b-4d19-b278-70287bfa5e66",
          "text": "Excluir Posto/Grad",
          "type": "istar.Task",
          "x": 1674,
          "y": 339,
          "customProperties": {
            "Description": ""
          }
        },
        {
          "id": "9b7a67ec-8a8b-4922-b067-17c74ba7db19",
          "text": "Atualizar Posto/Grad",
          "type": "istar.Task",
          "x": 1655,
          "y": 379,
          "customProperties": {
            "Description": ""
          }
        },
        {
          "id": "563ed521-20f5-4591-a806-ca4300cdd9cc",
          "text": "Visualizar qualificações militar",
          "type": "istar.Task",
          "x": 1653,
          "y": 459,
          "customProperties": {
            "Description": ""
          }
        },
        {
          "id": "0b3d1c92-f285-40c9-82bb-357db78dd3a9",
          "text": "Excluir qualificação militar",
          "type": "istar.Task",
          "x": 1819,
          "y": 459,
          "customProperties": {
            "Description": ""
          }
        },
        {
          "id": "433d2d12-4897-432b-944d-145339dcf6ad",
          "text": "Visualizar categoria",
          "type": "istar.Task",
          "x": 1905,
          "y": 460,
          "customProperties": {
            "Description": ""
          }
        },
        {
          "id": "c5eb9f84-cc3c-46cf-b18c-dea09df2d320",
          "text": "Atualizar qualificação militar",
          "type": "istar.Task",
          "x": 1786,
          "y": 503,
          "customProperties": {
            "Description": ""
          }
        },
        {
          "id": "d11712ef-2617-4805-9709-ebfa849a22ab",
          "text": "Criar qualificação militar",
          "type": "istar.Task",
          "x": 1699,
          "y": 501,
          "customProperties": {
            "Description": ""
          }
        },
        {
          "id": "bc50f072-ff5f-48be-ade2-c8a389423457",
          "text": "Excluir categoria",
          "type": "istar.Task",
          "x": 2029,
          "y": 457,
          "customProperties": {
            "Description": ""
          }
        },
        {
          "id": "8308812a-242c-4153-996e-6d39cfa9eb6d",
          "text": "Atualizar categoria",
          "type": "istar.Task",
          "x": 2005,
          "y": 499,
          "customProperties": {
            "Description": ""
          }
        },
        {
          "id": "57396091-c7da-40d8-b709-a8cbc67ed3bd",
          "text": "Visualizar OM",
          "type": "istar.Task",
          "x": 1951,
          "y": 318,
          "customProperties": {
            "Description": ""
          }
        },
        {
          "id": "79189087-e77a-4157-af5b-d0b655c84087",
          "text": "Criar OM",
          "type": "istar.Task",
          "x": 1984,
          "y": 358,
          "customProperties": {
            "Description": ""
          }
        },
        {
          "id": "5c447ebe-427c-4520-a4bc-a0fc89747c56",
          "text": "Excluir OM",
          "type": "istar.Task",
          "x": 2070,
          "y": 319,
          "customProperties": {
            "Description": ""
          }
        },
        {
          "id": "926bdd1f-0d56-40bd-aa52-e009528a8b18",
          "text": "Criar categoria",
          "type": "istar.Task",
          "x": 1940,
          "y": 502,
          "customProperties": {
            "Description": ""
          }
        },
        {
          "id": "8234aacf-9d18-46ab-a4fd-43fc5e0bfb80",
          "text": "Atualizar OM",
          "type": "istar.Task",
          "x": 2039,
          "y": 358,
          "customProperties": {
            "Description": ""
          }
        },
        {
          "id": "d8c62d3b-12f3-4225-bda6-a39875779963",
          "text": "Excluir Função",
          "type": "istar.Task",
          "x": 2238,
          "y": 361,
          "customProperties": {
            "Description": ""
          }
        },
        {
          "id": "70b901d7-4314-4a9e-99de-e7836fc561a3",
          "text": "Visualizar Função",
          "type": "istar.Task",
          "x": 2116,
          "y": 364,
          "customProperties": {
            "Description": ""
          }
        },
        {
          "id": "d200a2b3-4554-4cb4-ba7c-9a1a6efbca63",
          "text": "Cadastrar Função",
          "type": "istar.Task",
          "x": 2140,
          "y": 404,
          "customProperties": {
            "Description": ""
          }
        },
        {
          "id": "8f9b96df-733e-4b4f-b268-a3eda1981970",
          "text": "Atualizar Função",
          "type": "istar.Task",
          "x": 2215,
          "y": 402,
          "customProperties": {
            "Description": ""
          }
        },
        {
          "id": "03db365e-4a50-4264-b262-a29abe45e861",
          "text": "Notas",
          "type": "istar.Goal",
          "x": 1423,
          "y": 542,
          "customProperties": {
            "Description": ""
          }
        },
        {
          "id": "082fdbb5-7211-4b41-88fa-84b0f337d6a7",
          "text": "G10: Estruturar Boletim",
          "type": "istar.Goal",
          "x": 868,
          "y": 396,
          "customProperties": {
            "Description": ""
          }
        },
        {
          "id": "f1e36a11-6ead-4610-bd1f-cdea39328782",
          "text": "Excluir nota",
          "type": "istar.Task",
          "x": 1505,
          "y": 603,
          "customProperties": {
            "Description": ""
          }
        },
        {
          "id": "cd9f7383-49c5-413b-863b-ed27ab7a030b",
          "text": "Alterar nota",
          "type": "istar.Task",
          "x": 1485,
          "y": 645,
          "customProperties": {
            "Description": ""
          }
        },
        {
          "id": "b6fad3f3-f4a6-4ef1-a810-edf8075230b9",
          "text": "Desassociar notas publicadas de um boletim",
          "type": "istar.Task",
          "x": 1771,
          "y": 569,
          "customProperties": {
            "Description": ""
          }
        },
        {
          "id": "4feda6ce-ab3b-4307-82e8-bd2be387d9f5",
          "text": "Gerar PDF",
          "type": "istar.Task",
          "x": 982,
          "y": 260,
          "customProperties": {
            "Description": ""
          }
        },
        {
          "id": "5f7c3633-1c1d-405b-b1ba-b55fb7b24d81",
          "text": "Manter Boletim",
          "type": "istar.Goal",
          "x": 1648,
          "y": 562,
          "customProperties": {
            "Description": ""
          }
        },
        {
          "id": "b3593241-9261-4747-96d1-07111d797a5f",
          "text": "Alterar Boletim",
          "type": "istar.Task",
          "x": 1689,
          "y": 660,
          "customProperties": {
            "Description": ""
          }
        },
        {
          "id": "a4063774-76dd-4abe-9985-16cab637385a",
          "text": "Excluir Boletim",
          "type": "istar.Task",
          "x": 1724,
          "y": 621,
          "customProperties": {
            "Description": ""
          }
        },
        {
          "id": "258525fb-62db-4b18-a690-b286e227fb61",
          "text": "Criar Boletim",
          "type": "istar.Task",
          "x": 1630,
          "y": 663,
          "customProperties": {
            "Description": ""
          }
        },
        {
          "id": "dae48757-bc8f-4e8a-a52c-1653edd2d8a8",
          "text": "Visualizar Boletim",
          "type": "istar.Task",
          "x": 1581,
          "y": 625,
          "customProperties": {
            "Description": ""
          }
        },
        {
          "id": "73aa8b9c-7ad4-4328-a317-7c97a5c8f070",
          "text": "Manter Seção Boletim",
          "type": "istar.Goal",
          "x": 1042,
          "y": 579,
          "customProperties": {
            "Description": ""
          }
        },
        {
          "id": "ad38ed43-2c72-415f-9ead-2dfc675b6e63",
          "text": "Visualizar Seção Boletim",
          "type": "istar.Task",
          "x": 996,
          "y": 634,
          "customProperties": {
            "Description": ""
          }
        },
        {
          "id": "67c155ea-d2b2-4044-bf94-419d3226e75d",
          "text": "Excluir Seção Boletim",
          "type": "istar.Task",
          "x": 1127,
          "y": 631,
          "customProperties": {
            "Description": ""
          }
        },
        {
          "id": "38b683c0-067c-44f6-a1b7-692d424519c8",
          "text": "Criar Seção Boletim",
          "type": "istar.Task",
          "x": 1025,
          "y": 677,
          "customProperties": {
            "Description": ""
          }
        },
        {
          "id": "51d3d103-64b8-4baa-a858-a8127819be34",
          "text": "Atualizar Seção Boletim",
          "type": "istar.Task",
          "x": 1096,
          "y": 676,
          "customProperties": {
            "Description": ""
          }
        },
        {
          "id": "af1d9884-2ea6-43b3-bcec-544c34acf4be",
          "text": "Manter Parte Boletim",
          "type": "istar.Goal",
          "x": 1248,
          "y": 546,
          "customProperties": {
            "Description": ""
          }
        },
        {
          "id": "03e2bb09-08f8-433b-b595-8aa48344bc9d",
          "text": "Manter Seção",
          "type": "istar.Goal",
          "x": 2121,
          "y": 152,
          "customProperties": {
            "Description": ""
          }
        },
        {
          "id": "afe3a0a7-1bae-434b-8e2c-44d4514505cd",
          "text": "Excluir Seção",
          "type": "istar.Task",
          "x": 2196,
          "y": 206,
          "customProperties": {
            "Description": ""
          }
        },
        {
          "id": "95293d9c-792e-4e6e-80c3-40795e78f0ec",
          "text": "Atualizar Seção",
          "type": "istar.Task",
          "x": 2170,
          "y": 244,
          "customProperties": {
            "Description": ""
          }
        },
        {
          "id": "a8b85060-b6c1-426e-aa97-81901a3194f3",
          "text": "Visualizar Seção",
          "type": "istar.Task",
          "x": 2051,
          "y": 198,
          "customProperties": {
            "Description": ""
          }
        },
        {
          "id": "4fa00662-bd2d-42ea-be8f-edcaaf98ad17",
          "text": "Cadastrar Seção",
          "type": "istar.Task",
          "x": 2093,
          "y": 243,
          "customProperties": {
            "Description": ""
          }
        },
        {
          "id": "55dbb959-ba5e-4000-a850-cc0a646f414c",
          "text": "Visualizar parte boletim",
          "type": "istar.Task",
          "x": 1197,
          "y": 592,
          "customProperties": {
            "Description": ""
          }
        },
        {
          "id": "99d33f77-e6b2-4eaa-87c6-ec22f7b524e7",
          "text": "Excluir parte boletim",
          "type": "istar.Task",
          "x": 1317,
          "y": 596,
          "customProperties": {
            "Description": ""
          }
        },
        {
          "id": "c323e003-f33b-4f64-be47-af325143335b",
          "text": "Atualizar parte boletim",
          "type": "istar.Task",
          "x": 1288,
          "y": 642,
          "customProperties": {
            "Description": ""
          }
        },
        {
          "id": "9e6b1c43-cd00-451b-bd8a-f9799f711cae",
          "text": "Criar parte boletim",
          "type": "istar.Task",
          "x": 1218,
          "y": 640,
          "customProperties": {
            "Description": ""
          }
        },
        {
          "id": "4027113f-ff41-448e-ae93-d772c2894919",
          "text": "Manter Tipos de Boletim",
          "type": "istar.Goal",
          "x": 821,
          "y": 610,
          "customProperties": {
            "Description": ""
          }
        },
        {
          "id": "0a67b1d7-b996-43ae-992d-becd42f9ed43",
          "text": "Excluir tipo de boletim",
          "type": "istar.Task",
          "x": 909,
          "y": 665,
          "customProperties": {
            "Description": ""
          }
        },
        {
          "id": "3c4dc525-cf9a-434e-990e-ebaaf22ce441",
          "text": "Visualizar tipos de boletim",
          "type": "istar.Task",
          "x": 752,
          "y": 666,
          "customProperties": {
            "Description": ""
          }
        },
        {
          "id": "0c53906d-f5b1-4979-a2d5-8c2ff5a248c2",
          "text": "Cadastrar tipo de boletim",
          "type": "istar.Task",
          "x": 788,
          "y": 707,
          "customProperties": {
            "Description": ""
          }
        },
        {
          "id": "e90cf177-f74e-44b9-9e1e-12d9996e6341",
          "text": "Atualizar tipo de boletim",
          "type": "istar.Task",
          "x": 886,
          "y": 707,
          "customProperties": {
            "Description": ""
          }
        },
        {
          "id": "36999bfa-ab41-4407-abad-126affb42631",
          "text": "Manter Tipo de Documento",
          "type": "istar.Goal",
          "x": 610,
          "y": 531,
          "customProperties": {
            "Description": ""
          }
        },
        {
          "id": "433ce46d-1ebe-4ba1-9df9-dc80c64fdede",
          "text": "Cadastrar tipo de documento",
          "type": "istar.Task",
          "x": 561,
          "y": 636,
          "customProperties": {
            "Description": ""
          }
        },
        {
          "id": "30851dec-60b3-41a9-97ec-99224d5f66f4",
          "text": "Visualizar tipo de documento",
          "type": "istar.Task",
          "x": 524,
          "y": 595,
          "customProperties": {
            "Description": ""
          }
        },
        {
          "id": "ce2a3380-c5b4-4b6a-9a00-f086c3f0c1c0",
          "text": "Excluir tipo de documento",
          "type": "istar.Task",
          "x": 693,
          "y": 593,
          "customProperties": {
            "Description": ""
          }
        },
        {
          "id": "af30e0ff-f527-47d5-a6f3-a418746749a2",
          "text": "Atualizar tipo de documento",
          "type": "istar.Task",
          "x": 661,
          "y": 632,
          "customProperties": {
            "Description": ""
          }
        },
        {
          "id": "8454e6a5-43bb-474f-aa4c-885c5b6d5c5c",
          "text": "Manter Assuntos",
          "type": "istar.Goal",
          "x": 249,
          "y": 566,
          "customProperties": {
            "Description": ""
          }
        },
        {
          "id": "c0d4f45f-1973-40c7-9d1e-1562f262f439",
          "text": "Manter Assunto Geral",
          "type": "istar.Goal",
          "x": 148,
          "y": 636,
          "customProperties": {
            "Description": ""
          }
        },
        {
          "id": "4715f6a4-d580-4bd6-81fa-f93a944769b0",
          "text": "Manter Assunto Específico",
          "type": "istar.Goal",
          "x": 355,
          "y": 640,
          "customProperties": {
            "Description": ""
          }
        },
        {
          "id": "19093fd8-37d3-4c92-9e6c-86730e98c3c3",
          "text": "Visualizar assunto geral",
          "type": "istar.Task",
          "x": 77,
          "y": 689,
          "customProperties": {
            "Description": ""
          }
        },
        {
          "id": "adaa2619-47f9-462e-b20e-ae9e7e7dc87e",
          "text": "Atualizar assunto geral",
          "type": "istar.Task",
          "x": 186,
          "y": 746,
          "customProperties": {
            "Description": ""
          }
        },
        {
          "id": "16e66b0e-52fe-4c28-9b73-7acd8acf5e16",
          "text": "Excluir assunto geral",
          "type": "istar.Task",
          "x": 228,
          "y": 706,
          "customProperties": {
            "Description": ""
          }
        },
        {
          "id": "6732ed01-8212-41aa-baa6-32b74cf9c89e",
          "text": "Criar assunto geral",
          "type": "istar.Task",
          "x": 120,
          "y": 746,
          "customProperties": {
            "Description": ""
          }
        },
        {
          "id": "a9edf335-563d-498d-a488-1425992ad3c1",
          "text": "Cadastrar assunto específico",
          "type": "istar.Task",
          "x": 334,
          "y": 755,
          "customProperties": {
            "Description": ""
          }
        },
        {
          "id": "5231331f-0ff9-498c-9c6e-2b00a9339fe2",
          "text": "Excluir assunto específico",
          "type": "istar.Task",
          "x": 440,
          "y": 708,
          "customProperties": {
            "Description": ""
          }
        },
        {
          "id": "1552dab6-78ed-4d71-b92c-e7ac9bbc0a7b",
          "text": "Visualizar assunto específico",
          "type": "istar.Task",
          "x": 303,
          "y": 705,
          "customProperties": {
            "Description": ""
          }
        },
        {
          "id": "ff70869e-a164-44f7-87d5-78925dfc7f47",
          "text": "Atualizar assunto específico",
          "type": "istar.Task",
          "x": 413,
          "y": 756,
          "customProperties": {
            "Description": ""
          }
        },
        {
          "id": "d8ae94bf-dce8-4e13-8518-dada0531acac",
          "text": "Criar notas",
          "type": "istar.Task",
          "x": 1417,
          "y": 643,
          "customProperties": {
            "Description": ""
          }
        },
        {
          "id": "6ddb376a-c167-4b52-8478-48ecffc8117c",
          "text": "Visualizar notas",
          "type": "istar.Task",
          "x": 1387,
          "y": 599,
          "customProperties": {
            "Description": ""
          }
        },
        {
          "id": "3d016f63-b215-4f8e-96eb-11b1fa1e184d",
          "text": "G6: Manter Tempo de Serviço",
          "type": "istar.Goal",
          "x": 171,
          "y": 396,
          "customProperties": {
            "Description": ""
          }
        },
        {
          "id": "2a7c0ae0-3489-4bc7-bca2-5978dc4baf80",
          "text": "Atualizar Tempo de Serviço",
          "type": "istar.Task",
          "x": 178,
          "y": 480,
          "customProperties": {
            "Description": ""
          }
        },
        {
          "id": "76bb72ac-22bc-41b9-ae16-a8b68c3608ab",
          "text": "Excluir Tempo de Serviço",
          "type": "istar.Task",
          "x": 276,
          "y": 480,
          "customProperties": {
            "Description": ""
          }
        },
        {
          "id": "121a9626-5a8f-4ecf-85a4-41aec411cc94",
          "text": "Visualizar Tempo de Serviço",
          "type": "istar.Task",
          "x": 53,
          "y": 424,
          "customProperties": {
            "Description": ""
          }
        },
        {
          "id": "05d72456-cb34-442d-b098-11cabdd8b5d1",
          "text": "Cadastrar Tempo de Serviço",
          "type": "istar.Task",
          "x": 83,
          "y": 477,
          "customProperties": {
            "Description": "",
            "Tarefa": "Associar Notas já Publicadas a um Boletim Interno",
            "Complexidade": "8"
          }
        },
        {
          "id": "8d88934e-edbf-431d-a32b-3abb3f7d8b8b",
          "text": "Gerar PDF",
          "type": "istar.Task",
          "x": 302,
          "y": 434,
          "customProperties": {
            "Description": ""
          }
        },
        {
          "id": "d9a6c28a-a72f-4fb0-9840-78114e7825c6",
          "text": "Associar Notas a Boletim",
          "type": "istar.Goal",
          "x": 1483,
          "y": 463,
          "customProperties": {
            "Description": ""
          }
        },
        {
          "id": "fe1c46f4-f696-4aa9-ba7b-94426a8aab5b",
          "text": "Gerir Militar",
          "type": "istar.Goal",
          "x": 1698,
          "y": 260,
          "customProperties": {
            "Description": ""
          }
        },
        {
          "id": "4f637d55-6146-492b-a6f4-3a8f7c2bb17f",
          "text": "Manter Militar",
          "type": "istar.Goal",
          "x": 1945,
          "y": 562,
          "customProperties": {
            "Description": ""
          }
        },
        {
          "id": "6edeb91f-1017-4082-a932-2f86c1da672e",
          "text": "Visualizar Militar",
          "type": "istar.Task",
          "x": 1858,
          "y": 626,
          "customProperties": {
            "Description": ""
          }
        },
        {
          "id": "17c6f1f8-d5b6-489d-b096-ebe3f7adf12c",
          "text": "Cadastrar Militar",
          "type": "istar.Task",
          "x": 1915,
          "y": 651,
          "customProperties": {
            "Description": ""
          }
        },
        {
          "id": "03a204df-155c-4c9a-ba2e-d2fe22f62f5b",
          "text": "Atualizar Militar",
          "type": "istar.Task",
          "x": 1985,
          "y": 651,
          "customProperties": {
            "Description": ""
          }
        },
        {
          "id": "b0be57cb-81ca-4886-810d-f8e331470194",
          "text": "Excluir Militar",
          "type": "istar.Task",
          "x": 2039,
          "y": 609,
          "customProperties": {
            "Description": ""
          }
        },
        {
          "id": "1a3dd5d1-0c3e-453f-9bb2-7f79d3392098",
          "text": "Enviar notas para publicação",
          "type": "istar.Task",
          "x": 1105,
          "y": 359,
          "customProperties": {
            "Description": ""
          }
        },
        {
          "id": "5ee54c8b-8cd8-4965-8f7b-e2f599ea4039",
          "text": "Enviar notas",
          "type": "istar.Task",
          "x": 1440,
          "y": 686,
          "customProperties": {
            "Description": ""
          }
        },
        {
          "id": "0651d65c-f216-42d0-9998-1b4cb5b9b42f",
          "text": "Assossiar notas publicadas de um boletim",
          "type": "istar.Task",
          "x": 1541,
          "y": 539,
          "customProperties": {
            "Description": ""
          }
        }
      ]
    }
  ],
  "orphans": [],
  "dependencies": [],
  "links": [
    {
      "id": "0d2f24e1-dbac-4c24-bce7-392e17f604ba",
      "type": "istar.AndRefinementLink",
      "source": "0472d403-efab-48f7-aed5-8a14190ad71a",
      "target": "ab99b45b-ee62-4a1c-9d4d-1312dbfd3d7d"
    },
    {
      "id": "ff27798e-2e72-4272-afe2-4be9dae42cee",
      "type": "istar.AndRefinementLink",
      "source": "6387ad89-8fff-4612-a7aa-21116cf24e9f",
      "target": "ab99b45b-ee62-4a1c-9d4d-1312dbfd3d7d"
    },
    {
      "id": "c20b0022-1d74-4540-8851-b6c6463fe5de",
      "type": "istar.AndRefinementLink",
      "source": "bd5e481f-e93b-4dfe-8daf-3d1fc91e6a04",
      "target": "ab99b45b-ee62-4a1c-9d4d-1312dbfd3d7d"
    },
    {
      "id": "4578781b-b98e-403c-b800-068755529c00",
      "type": "istar.AndRefinementLink",
      "source": "77b3f119-bd4e-42be-9b84-552a22bf44c5",
      "target": "b46a33b8-ac2a-4cd1-8500-e746c0c85218"
    },
    {
      "id": "ef243bd4-398e-4283-bb95-2110db051e0b",
      "type": "istar.AndRefinementLink",
      "source": "1a71e4f7-e126-46fe-a3db-b7523c20168f",
      "target": "b46a33b8-ac2a-4cd1-8500-e746c0c85218"
    },
    {
      "id": "d72e1e0a-841c-4be9-859f-73c2ed90cfbb",
      "type": "istar.AndRefinementLink",
      "source": "e081d04a-7921-4091-9129-cb0fe269be45",
      "target": "b46a33b8-ac2a-4cd1-8500-e746c0c85218"
    },
    {
      "id": "e26e46b8-81b9-4e47-b511-29369d4183ea",
      "type": "istar.AndRefinementLink",
      "source": "21927ac9-33c0-4302-b8e8-b1a28b02793e",
      "target": "b46a33b8-ac2a-4cd1-8500-e746c0c85218"
    },
    {
      "id": "f527847b-aabc-4bfe-bef2-e1388e768b37",
      "type": "istar.AndRefinementLink",
      "source": "b46a33b8-ac2a-4cd1-8500-e746c0c85218",
      "target": "e7eb3f41-7912-430e-bf3a-b2e0576d543b"
    },
    {
      "id": "734a5a10-c32a-4dc9-8e4c-9518e3733967",
      "type": "istar.AndRefinementLink",
      "source": "a98c2a57-3103-4996-a040-027e2fa7b5c9",
      "target": "61ca99d1-6d04-4225-9407-dd781f85edfc"
    },
    {
      "id": "e3ee7f00-92c5-44a7-a39d-dd82bff15bcc",
      "type": "istar.AndRefinementLink",
      "source": "61ca99d1-6d04-4225-9407-dd781f85edfc",
      "target": "e7eb3f41-7912-430e-bf3a-b2e0576d543b"
    },
    {
      "id": "4080ac85-46b1-4065-84ae-bb99863c78ea",
      "type": "istar.AndRefinementLink",
      "source": "e7eb3f41-7912-430e-bf3a-b2e0576d543b",
      "target": "ab99b45b-ee62-4a1c-9d4d-1312dbfd3d7d"
    },
    {
      "id": "354d1a93-4331-48ba-be61-46db50f06a67",
      "type": "istar.AndRefinementLink",
      "source": "9f263aa4-58c7-4900-9da9-59e0f3a49d90",
      "target": "849e8f32-a215-45c3-a85a-e900f6cdc7e8"
    },
    {
      "id": "8de9e4e9-26d4-48e9-9ad9-e6266baca301",
      "type": "istar.AndRefinementLink",
      "source": "9f263aa4-58c7-4900-9da9-59e0f3a49d90",
      "target": "730c43f4-cb00-4db4-8571-939244e85803"
    },
    {
      "id": "abcb123c-6be1-4d17-b355-8a92a78313a9",
      "type": "istar.AndRefinementLink",
      "source": "db0e6179-34a2-4039-b724-41d106878f29",
      "target": "afa3db48-55e4-4f1c-9208-42d0335e3ccb"
    },
    {
      "id": "3d6eb2d4-cab4-43d3-9d44-274612f2d509",
      "type": "istar.AndRefinementLink",
      "source": "c0bf8e95-dc7a-4fbd-bcf7-3063599ba897",
      "target": "afa3db48-55e4-4f1c-9208-42d0335e3ccb"
    },
    {
      "id": "359b632f-617c-4948-bc99-bbb762c779eb",
      "type": "istar.AndRefinementLink",
      "source": "c88bec8e-2a41-4747-b11c-6d34fe678d6b",
      "target": "afa3db48-55e4-4f1c-9208-42d0335e3ccb"
    },
    {
      "id": "46822f73-0cc6-4d9b-a7b0-e8ffdd8ee18f",
      "type": "istar.AndRefinementLink",
      "source": "3adbe37b-23c8-4a63-b037-2b8ee41e234d",
      "target": "afa3db48-55e4-4f1c-9208-42d0335e3ccb"
    },
    {
      "id": "2f6ae2b1-4a51-4231-9aec-e1f9287247e4",
      "type": "istar.AndRefinementLink",
      "source": "afa3db48-55e4-4f1c-9208-42d0335e3ccb",
      "target": "6cb6089f-01a3-467f-a9c1-290cdd511a5f"
    },
    {
      "id": "55e7cc62-e32f-4a11-aaeb-ea61b7d21e35",
      "type": "istar.AndRefinementLink",
      "source": "5d39cf50-4b49-4256-a4e3-6b9d4f1f3332",
      "target": "6387ad89-8fff-4612-a7aa-21116cf24e9f"
    },
    {
      "id": "74ef8e96-1f62-48f3-8141-f414a7a73d77",
      "type": "istar.AndRefinementLink",
      "source": "13f545ed-effc-4a45-a3cb-2667cfe776db",
      "target": "6387ad89-8fff-4612-a7aa-21116cf24e9f"
    },
    {
      "id": "5f8f8f0a-9def-4ee3-a7b3-716c7418da1e",
      "type": "istar.AndRefinementLink",
      "source": "652ead7a-1d51-4f5c-bb03-c713ec416dfb",
      "target": "6387ad89-8fff-4612-a7aa-21116cf24e9f"
    },
    {
      "id": "0f2239cd-05cb-4e8a-9146-14674b663e3f",
      "type": "istar.AndRefinementLink",
      "source": "3800ce9d-26e7-49ca-bebf-a5bb542eb689",
      "target": "0d840cbe-8560-4d92-bfad-3e05102d3d9b"
    },
    {
      "id": "6e922caf-f6e8-4407-a2a3-db4b3fe3ed94",
      "type": "istar.AndRefinementLink",
      "source": "7797320b-7785-4279-b652-ba73d1b854d1",
      "target": "0d840cbe-8560-4d92-bfad-3e05102d3d9b"
    },
    {
      "id": "2cbb2ca8-1563-4869-b94a-941a1aea8ce2",
      "type": "istar.AndRefinementLink",
      "source": "1cd6e8e4-997b-4d19-b278-70287bfa5e66",
      "target": "0d840cbe-8560-4d92-bfad-3e05102d3d9b"
    },
    {
      "id": "17b5216b-2277-427a-8663-10ad4a4d7f4c",
      "type": "istar.AndRefinementLink",
      "source": "9b7a67ec-8a8b-4922-b067-17c74ba7db19",
      "target": "0d840cbe-8560-4d92-bfad-3e05102d3d9b"
    },
    {
      "id": "6516b1eb-8534-47f8-b5c0-798e93942654",
      "type": "istar.AndRefinementLink",
      "source": "563ed521-20f5-4591-a806-ca4300cdd9cc",
      "target": "14c11dd2-55c1-456a-b9b7-2c169975fee3"
    },
    {
      "id": "e53727f1-40ee-4ad9-99aa-0290146949da",
      "type": "istar.AndRefinementLink",
      "source": "d11712ef-2617-4805-9709-ebfa849a22ab",
      "target": "14c11dd2-55c1-456a-b9b7-2c169975fee3"
    },
    {
      "id": "8b2d491b-6953-4f30-9423-4a05b11f3446",
      "type": "istar.AndRefinementLink",
      "source": "0b3d1c92-f285-40c9-82bb-357db78dd3a9",
      "target": "14c11dd2-55c1-456a-b9b7-2c169975fee3"
    },
    {
      "id": "1ae0703d-115d-4422-9c3d-d02fc50da018",
      "type": "istar.AndRefinementLink",
      "source": "c5eb9f84-cc3c-46cf-b18c-dea09df2d320",
      "target": "14c11dd2-55c1-456a-b9b7-2c169975fee3"
    },
    {
      "id": "258d21ab-4e7e-4330-8bae-0a5f8a517820",
      "type": "istar.AndRefinementLink",
      "source": "433d2d12-4897-432b-944d-145339dcf6ad",
      "target": "5d39cf50-4b49-4256-a4e3-6b9d4f1f3332"
    },
    {
      "id": "ea6be0a4-fa68-443f-af2d-e0414ebd75c1",
      "type": "istar.AndRefinementLink",
      "source": "bc50f072-ff5f-48be-ade2-c8a389423457",
      "target": "5d39cf50-4b49-4256-a4e3-6b9d4f1f3332"
    },
    {
      "id": "fd2bbd1b-3bdb-4413-b973-9348f2faeba4",
      "type": "istar.AndRefinementLink",
      "source": "8308812a-242c-4153-996e-6d39cfa9eb6d",
      "target": "5d39cf50-4b49-4256-a4e3-6b9d4f1f3332"
    },
    {
      "id": "5a8c1d74-1521-49d0-8ed2-2640edb2af73",
      "type": "istar.AndRefinementLink",
      "source": "926bdd1f-0d56-40bd-aa52-e009528a8b18",
      "target": "5d39cf50-4b49-4256-a4e3-6b9d4f1f3332"
    },
    {
      "id": "2394f8e7-3aff-4afa-945b-5521d0816b7a",
      "type": "istar.AndRefinementLink",
      "source": "79189087-e77a-4157-af5b-d0b655c84087",
      "target": "13f545ed-effc-4a45-a3cb-2667cfe776db"
    },
    {
      "id": "4ebd4053-eb7b-4d34-9bb4-5ce5b847a278",
      "type": "istar.AndRefinementLink",
      "source": "8234aacf-9d18-46ab-a4fd-43fc5e0bfb80",
      "target": "13f545ed-effc-4a45-a3cb-2667cfe776db"
    },
    {
      "id": "7b9c99ed-5efa-4c05-8362-a9f168a16a1a",
      "type": "istar.AndRefinementLink",
      "source": "57396091-c7da-40d8-b709-a8cbc67ed3bd",
      "target": "13f545ed-effc-4a45-a3cb-2667cfe776db"
    },
    {
      "id": "cac9a764-d658-4de0-8ac4-27a9fb5294e4",
      "type": "istar.AndRefinementLink",
      "source": "5c447ebe-427c-4520-a4bc-a0fc89747c56",
      "target": "13f545ed-effc-4a45-a3cb-2667cfe776db"
    },
    {
      "id": "c066f86d-94e6-4d12-9b1c-5e89e4244e3c",
      "type": "istar.AndRefinementLink",
      "source": "d8c62d3b-12f3-4225-bda6-a39875779963",
      "target": "652ead7a-1d51-4f5c-bb03-c713ec416dfb"
    },
    {
      "id": "39290d91-f316-4c63-bb90-7f8c615344f9",
      "type": "istar.AndRefinementLink",
      "source": "d200a2b3-4554-4cb4-ba7c-9a1a6efbca63",
      "target": "652ead7a-1d51-4f5c-bb03-c713ec416dfb"
    },
    {
      "id": "a7a6d3e8-63a1-4d2f-aaf9-bc35b2eb4440",
      "type": "istar.AndRefinementLink",
      "source": "8f9b96df-733e-4b4f-b268-a3eda1981970",
      "target": "652ead7a-1d51-4f5c-bb03-c713ec416dfb"
    },
    {
      "id": "debc458b-a32a-4b2b-83b2-3f8182dc1dc5",
      "type": "istar.AndRefinementLink",
      "source": "70b901d7-4314-4a9e-99de-e7836fc561a3",
      "target": "652ead7a-1d51-4f5c-bb03-c713ec416dfb"
    },
    {
      "id": "4788a1ee-e6b7-47d2-9871-96e06f6adfb6",
      "type": "istar.AndRefinementLink",
      "source": "f1e36a11-6ead-4610-bd1f-cdea39328782",
      "target": "03db365e-4a50-4264-b262-a29abe45e861"
    },
    {
      "id": "e8296901-dfc6-488e-9341-7247b4a8d708",
      "type": "istar.AndRefinementLink",
      "source": "cd9f7383-49c5-413b-863b-ed27ab7a030b",
      "target": "03db365e-4a50-4264-b262-a29abe45e861"
    },
    {
      "id": "68412872-3e61-49b5-9833-e71f5b306706",
      "type": "istar.AndRefinementLink",
      "source": "4feda6ce-ab3b-4307-82e8-bd2be387d9f5",
      "target": "bd5e481f-e93b-4dfe-8daf-3d1fc91e6a04"
    },
    {
      "id": "e67e64c3-ab17-474c-be6a-facc6ee20249",
      "type": "istar.AndRefinementLink",
      "source": "5f7c3633-1c1d-405b-b1ba-b55fb7b24d81",
      "target": "b6fad3f3-f4a6-4ef1-a810-edf8075230b9"
    },
    {
      "id": "5fc5f03d-ad52-4c09-91b0-5b448e90a6db",
      "type": "istar.AndRefinementLink",
      "source": "b3593241-9261-4747-96d1-07111d797a5f",
      "target": "5f7c3633-1c1d-405b-b1ba-b55fb7b24d81"
    },
    {
      "id": "86ff9676-b1d7-46f2-b560-de611e035344",
      "type": "istar.AndRefinementLink",
      "source": "a4063774-76dd-4abe-9985-16cab637385a",
      "target": "5f7c3633-1c1d-405b-b1ba-b55fb7b24d81"
    },
    {
      "id": "3734339b-3827-401a-aaf1-54d0fc3ba64e",
      "type": "istar.AndRefinementLink",
      "source": "258525fb-62db-4b18-a690-b286e227fb61",
      "target": "5f7c3633-1c1d-405b-b1ba-b55fb7b24d81"
    },
    {
      "id": "830877cd-f835-4f10-bb0e-3c07cf25d25a",
      "type": "istar.AndRefinementLink",
      "source": "dae48757-bc8f-4e8a-a52c-1653edd2d8a8",
      "target": "5f7c3633-1c1d-405b-b1ba-b55fb7b24d81"
    },
    {
      "id": "9a03807a-aed2-44e4-9f0f-c07c399a8095",
      "type": "istar.AndRefinementLink",
      "source": "ad38ed43-2c72-415f-9ead-2dfc675b6e63",
      "target": "73aa8b9c-7ad4-4328-a317-7c97a5c8f070"
    },
    {
      "id": "74e28a5a-096d-4690-9a43-dacc35def7a4",
      "type": "istar.AndRefinementLink",
      "source": "67c155ea-d2b2-4044-bf94-419d3226e75d",
      "target": "73aa8b9c-7ad4-4328-a317-7c97a5c8f070"
    },
    {
      "id": "20cd9c27-0054-44a6-b71e-fd36c1331cc3",
      "type": "istar.AndRefinementLink",
      "source": "38b683c0-067c-44f6-a1b7-692d424519c8",
      "target": "73aa8b9c-7ad4-4328-a317-7c97a5c8f070"
    },
    {
      "id": "2faa6b50-579f-411c-ad7a-7bd4c136dddd",
      "type": "istar.AndRefinementLink",
      "source": "51d3d103-64b8-4baa-a858-a8127819be34",
      "target": "73aa8b9c-7ad4-4328-a317-7c97a5c8f070"
    },
    {
      "id": "a6741c9d-3499-428b-a3f5-75bf038341f1",
      "type": "istar.AndRefinementLink",
      "source": "4fa00662-bd2d-42ea-be8f-edcaaf98ad17",
      "target": "03e2bb09-08f8-433b-b595-8aa48344bc9d"
    },
    {
      "id": "feb334d7-fb77-4f5f-8057-eeb5146c1400",
      "type": "istar.AndRefinementLink",
      "source": "afe3a0a7-1bae-434b-8e2c-44d4514505cd",
      "target": "03e2bb09-08f8-433b-b595-8aa48344bc9d"
    },
    {
      "id": "92f9035b-7052-44b0-a314-53ebd06a43ab",
      "type": "istar.AndRefinementLink",
      "source": "a8b85060-b6c1-426e-aa97-81901a3194f3",
      "target": "03e2bb09-08f8-433b-b595-8aa48344bc9d"
    },
    {
      "id": "8fc29be5-873f-4f9c-9d48-a7c0d8354a77",
      "type": "istar.AndRefinementLink",
      "source": "95293d9c-792e-4e6e-80c3-40795e78f0ec",
      "target": "03e2bb09-08f8-433b-b595-8aa48344bc9d"
    },
    {
      "id": "e4ec40a6-20db-489c-b6e0-82d79278d863",
      "type": "istar.AndRefinementLink",
      "source": "03e2bb09-08f8-433b-b595-8aa48344bc9d",
      "target": "6387ad89-8fff-4612-a7aa-21116cf24e9f"
    },
    {
      "id": "9709e485-3476-41ac-801d-399c5d0ae4cc",
      "type": "istar.AndRefinementLink",
      "source": "73aa8b9c-7ad4-4328-a317-7c97a5c8f070",
      "target": "082fdbb5-7211-4b41-88fa-84b0f337d6a7"
    },
    {
      "id": "6bb692a8-f084-43bb-a6c7-c9f2d1c1c628",
      "type": "istar.AndRefinementLink",
      "source": "af1d9884-2ea6-43b3-bcec-544c34acf4be",
      "target": "082fdbb5-7211-4b41-88fa-84b0f337d6a7"
    },
    {
      "id": "c7c9f364-b6ce-4fc9-afe4-e56670ebb533",
      "type": "istar.AndRefinementLink",
      "source": "9e6b1c43-cd00-451b-bd8a-f9799f711cae",
      "target": "af1d9884-2ea6-43b3-bcec-544c34acf4be"
    },
    {
      "id": "51d976ce-0375-4db8-9137-57c07379cc54",
      "type": "istar.AndRefinementLink",
      "source": "c323e003-f33b-4f64-be47-af325143335b",
      "target": "af1d9884-2ea6-43b3-bcec-544c34acf4be"
    },
    {
      "id": "ce7968c2-a330-4006-8c54-421c30bcaea7",
      "type": "istar.AndRefinementLink",
      "source": "99d33f77-e6b2-4eaa-87c6-ec22f7b524e7",
      "target": "af1d9884-2ea6-43b3-bcec-544c34acf4be"
    },
    {
      "id": "89bcac27-7690-466a-9bdc-60dac3ec3471",
      "type": "istar.AndRefinementLink",
      "source": "55dbb959-ba5e-4000-a850-cc0a646f414c",
      "target": "af1d9884-2ea6-43b3-bcec-544c34acf4be"
    },
    {
      "id": "fa8df55e-1425-4290-8fd2-1fa77c3723e0",
      "type": "istar.AndRefinementLink",
      "source": "3c4dc525-cf9a-434e-990e-ebaaf22ce441",
      "target": "4027113f-ff41-448e-ae93-d772c2894919"
    },
    {
      "id": "529fb5ed-3159-4492-8f39-4d1084799ddb",
      "type": "istar.AndRefinementLink",
      "source": "0c53906d-f5b1-4979-a2d5-8c2ff5a248c2",
      "target": "4027113f-ff41-448e-ae93-d772c2894919"
    },
    {
      "id": "6ec4f6fc-e7cf-4d46-8088-0fb89a07fea4",
      "type": "istar.AndRefinementLink",
      "source": "e90cf177-f74e-44b9-9e1e-12d9996e6341",
      "target": "4027113f-ff41-448e-ae93-d772c2894919"
    },
    {
      "id": "68f821fd-37ba-468d-a9f4-ac5a3ce6ab4a",
      "type": "istar.AndRefinementLink",
      "source": "0a67b1d7-b996-43ae-992d-becd42f9ed43",
      "target": "4027113f-ff41-448e-ae93-d772c2894919"
    },
    {
      "id": "b0d3b08c-9d3b-449f-9694-a28eb359bb21",
      "type": "istar.AndRefinementLink",
      "source": "4027113f-ff41-448e-ae93-d772c2894919",
      "target": "082fdbb5-7211-4b41-88fa-84b0f337d6a7"
    },
    {
      "id": "c2ce7269-0afb-4509-8371-74dee09834f3",
      "type": "istar.AndRefinementLink",
      "source": "ce2a3380-c5b4-4b6a-9a00-f086c3f0c1c0",
      "target": "36999bfa-ab41-4407-abad-126affb42631"
    },
    {
      "id": "3ce462e1-2ad8-483b-95c4-5decf3685441",
      "type": "istar.AndRefinementLink",
      "source": "30851dec-60b3-41a9-97ec-99224d5f66f4",
      "target": "36999bfa-ab41-4407-abad-126affb42631"
    },
    {
      "id": "d86b488a-f0ad-45e6-9f8d-eac64ae7410c",
      "type": "istar.AndRefinementLink",
      "source": "af30e0ff-f527-47d5-a6f3-a418746749a2",
      "target": "36999bfa-ab41-4407-abad-126affb42631"
    },
    {
      "id": "eb2fa821-309e-4c60-bace-1ddcb961eb5c",
      "type": "istar.AndRefinementLink",
      "source": "433ce46d-1ebe-4ba1-9df9-dc80c64fdede",
      "target": "36999bfa-ab41-4407-abad-126affb42631"
    },
    {
      "id": "7e9c4604-db0b-4478-a998-5be6c9f6789b",
      "type": "istar.AndRefinementLink",
      "source": "36999bfa-ab41-4407-abad-126affb42631",
      "target": "082fdbb5-7211-4b41-88fa-84b0f337d6a7"
    },
    {
      "id": "42fd827d-54d0-498c-810a-d37d1954a724",
      "type": "istar.AndRefinementLink",
      "source": "c0d4f45f-1973-40c7-9d1e-1562f262f439",
      "target": "8454e6a5-43bb-474f-aa4c-885c5b6d5c5c"
    },
    {
      "id": "8f65ea94-d69b-4d6e-8ad3-3cd797dafd84",
      "type": "istar.AndRefinementLink",
      "source": "4715f6a4-d580-4bd6-81fa-f93a944769b0",
      "target": "8454e6a5-43bb-474f-aa4c-885c5b6d5c5c"
    },
    {
      "id": "4d0884cf-b803-4d1b-b377-f7fd48de5ab7",
      "type": "istar.AndRefinementLink",
      "source": "8454e6a5-43bb-474f-aa4c-885c5b6d5c5c",
      "target": "082fdbb5-7211-4b41-88fa-84b0f337d6a7"
    },
    {
      "id": "6f918617-8834-48ab-8539-28adcb1ee8f6",
      "type": "istar.AndRefinementLink",
      "source": "1552dab6-78ed-4d71-b92c-e7ac9bbc0a7b",
      "target": "4715f6a4-d580-4bd6-81fa-f93a944769b0"
    },
    {
      "id": "d0134081-2dc7-4528-ac4b-6787fa389063",
      "type": "istar.AndRefinementLink",
      "source": "5231331f-0ff9-498c-9c6e-2b00a9339fe2",
      "target": "4715f6a4-d580-4bd6-81fa-f93a944769b0"
    },
    {
      "id": "4f3838ce-31e2-4a10-9e88-81baee7b396e",
      "type": "istar.AndRefinementLink",
      "source": "a9edf335-563d-498d-a488-1425992ad3c1",
      "target": "4715f6a4-d580-4bd6-81fa-f93a944769b0"
    },
    {
      "id": "9f0d54e1-16b2-46a1-9e27-34a817fd4ac4",
      "type": "istar.AndRefinementLink",
      "source": "ff70869e-a164-44f7-87d5-78925dfc7f47",
      "target": "4715f6a4-d580-4bd6-81fa-f93a944769b0"
    },
    {
      "id": "2aca3265-55b4-499c-a287-4c6baee3e28b",
      "type": "istar.AndRefinementLink",
      "source": "6732ed01-8212-41aa-baa6-32b74cf9c89e",
      "target": "c0d4f45f-1973-40c7-9d1e-1562f262f439"
    },
    {
      "id": "7f97662c-2858-41f0-8aad-955c67858c43",
      "type": "istar.AndRefinementLink",
      "source": "19093fd8-37d3-4c92-9e6c-86730e98c3c3",
      "target": "c0d4f45f-1973-40c7-9d1e-1562f262f439"
    },
    {
      "id": "3bd8f3d7-60d8-4769-8b5a-b1f9f0d81c88",
      "type": "istar.AndRefinementLink",
      "source": "adaa2619-47f9-462e-b20e-ae9e7e7dc87e",
      "target": "c0d4f45f-1973-40c7-9d1e-1562f262f439"
    },
    {
      "id": "05762440-75f1-4949-9cf9-8eb534e57351",
      "type": "istar.AndRefinementLink",
      "source": "16e66b0e-52fe-4c28-9b73-7acd8acf5e16",
      "target": "c0d4f45f-1973-40c7-9d1e-1562f262f439"
    },
    {
      "id": "e8712471-8531-4bf3-81b9-65017b248592",
      "type": "istar.AndRefinementLink",
      "source": "d8ae94bf-dce8-4e13-8518-dada0531acac",
      "target": "03db365e-4a50-4264-b262-a29abe45e861"
    },
    {
      "id": "5b1dff3c-c909-4be7-abcd-0c1b0982cf97",
      "type": "istar.AndRefinementLink",
      "source": "6ddb376a-c167-4b52-8478-48ecffc8117c",
      "target": "03db365e-4a50-4264-b262-a29abe45e861"
    },
    {
      "id": "c17577ed-faf5-4895-a4f9-e954e814de62",
      "type": "istar.AndRefinementLink",
      "source": "8d88934e-edbf-431d-a32b-3abb3f7d8b8b",
      "target": "3d016f63-b215-4f8e-96eb-11b1fa1e184d"
    },
    {
      "id": "26da931f-de41-4a97-995a-c6aa3f3a4260",
      "type": "istar.AndRefinementLink",
      "source": "05d72456-cb34-442d-b098-11cabdd8b5d1",
      "target": "3d016f63-b215-4f8e-96eb-11b1fa1e184d"
    },
    {
      "id": "9ae7d09b-70d9-4043-8dad-df6ca1b868ae",
      "type": "istar.AndRefinementLink",
      "source": "121a9626-5a8f-4ecf-85a4-41aec411cc94",
      "target": "3d016f63-b215-4f8e-96eb-11b1fa1e184d"
    },
    {
      "id": "b2c1b1d2-253a-474d-b3fe-49bfae673082",
      "type": "istar.AndRefinementLink",
      "source": "76bb72ac-22bc-41b9-ae16-a8b68c3608ab",
      "target": "3d016f63-b215-4f8e-96eb-11b1fa1e184d"
    },
    {
      "id": "23f4b8c2-237e-4de4-b19a-12921927e973",
      "type": "istar.AndRefinementLink",
      "source": "2a7c0ae0-3489-4bc7-bca2-5978dc4baf80",
      "target": "3d016f63-b215-4f8e-96eb-11b1fa1e184d"
    },
    {
      "id": "8c5e4d4e-078e-4fab-9b5d-ccddd192fd42",
      "type": "istar.AndRefinementLink",
      "source": "afa3db48-55e4-4f1c-9208-42d0335e3ccb",
      "target": "0472d403-efab-48f7-aed5-8a14190ad71a"
    },
    {
      "id": "8abe4b62-5698-4e06-bdca-7c300c591734",
      "type": "istar.AndRefinementLink",
      "source": "3d016f63-b215-4f8e-96eb-11b1fa1e184d",
      "target": "afa3db48-55e4-4f1c-9208-42d0335e3ccb"
    },
    {
      "id": "ad91ffe9-c2e4-432b-bfb9-9fc3929796f9",
      "type": "istar.AndRefinementLink",
      "source": "9f263aa4-58c7-4900-9da9-59e0f3a49d90",
      "target": "afa3db48-55e4-4f1c-9208-42d0335e3ccb"
    },
    {
      "id": "11d647ab-26b4-4b7a-a2d0-a0af6550a886",
      "type": "istar.AndRefinementLink",
      "source": "082fdbb5-7211-4b41-88fa-84b0f337d6a7",
      "target": "bd5e481f-e93b-4dfe-8daf-3d1fc91e6a04"
    },
    {
      "id": "682cb9ab-05e4-4351-ab1e-975ad602f655",
      "type": "istar.AndRefinementLink",
      "source": "d9a6c28a-a72f-4fb0-9840-78114e7825c6",
      "target": "082fdbb5-7211-4b41-88fa-84b0f337d6a7"
    },
    {
      "id": "829c4c67-e30c-4549-9a24-fe759a56f335",
      "type": "istar.AndRefinementLink",
      "source": "03db365e-4a50-4264-b262-a29abe45e861",
      "target": "d9a6c28a-a72f-4fb0-9840-78114e7825c6"
    },
    {
      "id": "1d8f7e64-6a96-4f76-8eee-7c1da42b7231",
      "type": "istar.AndRefinementLink",
      "source": "5f7c3633-1c1d-405b-b1ba-b55fb7b24d81",
      "target": "d9a6c28a-a72f-4fb0-9840-78114e7825c6"
    },
    {
      "id": "892f09d1-98c6-40ae-b524-45ff6cc68116",
      "type": "istar.AndRefinementLink",
      "source": "fe1c46f4-f696-4aa9-ba7b-94426a8aab5b",
      "target": "6387ad89-8fff-4612-a7aa-21116cf24e9f"
    },
    {
      "id": "939589e7-7788-4caa-8acd-583d1c9da9d4",
      "type": "istar.AndRefinementLink",
      "source": "0d840cbe-8560-4d92-bfad-3e05102d3d9b",
      "target": "fe1c46f4-f696-4aa9-ba7b-94426a8aab5b"
    },
    {
      "id": "e289823e-db7c-49a2-a827-485cac919e4e",
      "type": "istar.AndRefinementLink",
      "source": "14c11dd2-55c1-456a-b9b7-2c169975fee3",
      "target": "fe1c46f4-f696-4aa9-ba7b-94426a8aab5b"
    },
    {
      "id": "346fe19c-cd7c-4d97-a746-2fb115e986ec",
      "type": "istar.AndRefinementLink",
      "source": "4f637d55-6146-492b-a6f4-3a8f7c2bb17f",
      "target": "fe1c46f4-f696-4aa9-ba7b-94426a8aab5b"
    },
    {
      "id": "324ae0ff-a84d-40e4-b403-bd5cf942d94e",
      "type": "istar.AndRefinementLink",
      "source": "6edeb91f-1017-4082-a932-2f86c1da672e",
      "target": "4f637d55-6146-492b-a6f4-3a8f7c2bb17f"
    },
    {
      "id": "25d09b84-6cf5-42ac-b23b-4022a6effebd",
      "type": "istar.AndRefinementLink",
      "source": "17c6f1f8-d5b6-489d-b096-ebe3f7adf12c",
      "target": "4f637d55-6146-492b-a6f4-3a8f7c2bb17f"
    },
    {
      "id": "7deb998a-3ec0-4056-bb7e-44e751857970",
      "type": "istar.AndRefinementLink",
      "source": "03a204df-155c-4c9a-ba2e-d2fe22f62f5b",
      "target": "4f637d55-6146-492b-a6f4-3a8f7c2bb17f"
    },
    {
      "id": "3e22a730-0437-4056-8854-c27921181c27",
      "type": "istar.AndRefinementLink",
      "source": "b0be57cb-81ca-4886-810d-f8e331470194",
      "target": "4f637d55-6146-492b-a6f4-3a8f7c2bb17f"
    },
    {
      "id": "6969e630-65a4-4f5e-8490-998b3a804b6c",
      "type": "istar.AndRefinementLink",
      "source": "1a3dd5d1-0c3e-453f-9bb2-7f79d3392098",
      "target": "61ca99d1-6d04-4225-9407-dd781f85edfc"
    },
    {
      "id": "c1d3be36-d363-4261-bee9-00a73fa7f24b",
      "type": "istar.AndRefinementLink",
      "source": "5ee54c8b-8cd8-4965-8f7b-e2f599ea4039",
      "target": "03db365e-4a50-4264-b262-a29abe45e861"
    },
    {
      "id": "a182deb4-6319-40c8-a148-b85935008de4",
      "type": "istar.AndRefinementLink",
      "source": "0651d65c-f216-42d0-9998-1b4cb5b9b42f",
      "target": "5f7c3633-1c1d-405b-b1ba-b55fb7b24d81"
    }
  ],
  "display": {
    "dbe6cf9f-877d-4600-bac9-8f7bbde93426": {
      "backgroundColor": "#FAF511"
    },
    "ab99b45b-ee62-4a1c-9d4d-1312dbfd3d7d": {
      "backgroundColor": "#FAF511"
    },
    "b46a33b8-ac2a-4cd1-8500-e746c0c85218": {
      "backgroundColor": "#FAF511"
    },
    "6387ad89-8fff-4612-a7aa-21116cf24e9f": {
      "backgroundColor": "#FAF511",
      "width": 104.203125,
      "height": 39.5
    },
    "bd5e481f-e93b-4dfe-8daf-3d1fc91e6a04": {
      "backgroundColor": "#FAF511"
    },
    "0472d403-efab-48f7-aed5-8a14190ad71a": {
      "backgroundColor": "#FAF511"
    },
    "77b3f119-bd4e-42be-9b84-552a22bf44c5": {
      "width": 66.29998779296875,
      "height": 36.116668701171875
    },
    "1a71e4f7-e126-46fe-a3db-b7523c20168f": {
      "width": 71.29998779296875,
      "height": 34.116668701171875
    },
    "e081d04a-7921-4091-9129-cb0fe269be45": {
      "width": 63.29998779296875,
      "height": 37.116668701171875
    },
    "21927ac9-33c0-4302-b8e8-b1a28b02793e": {
      "width": 73.29998779296875,
      "height": 37.116668701171875
    },
    "e7eb3f41-7912-430e-bf3a-b2e0576d543b": {
      "backgroundColor": "#FAF511"
    },
    "61ca99d1-6d04-4225-9407-dd781f85edfc": {
      "backgroundColor": "#FAF511"
    },
    "9f263aa4-58c7-4900-9da9-59e0f3a49d90": {
      "backgroundColor": "#FAF511"
    },
    "730c43f4-cb00-4db4-8571-939244e85803": {
      "width": 70.29998779296875,
      "height": 34.116668701171875
    },
    "849e8f32-a215-45c3-a85a-e900f6cdc7e8": {
      "width": 64.29998779296875,
      "height": 32.116668701171875
    },
    "afa3db48-55e4-4f1c-9208-42d0335e3ccb": {
      "backgroundColor": "#FAF511"
    },
    "c88bec8e-2a41-4747-b11c-6d34fe678d6b": {
      "width": 69.29998779296875,
      "height": 32.116668701171875
    },
    "c0bf8e95-dc7a-4fbd-bcf7-3063599ba897": {
      "width": 72.29998779296875,
      "height": 36.116668701171875
    },
    "db0e6179-34a2-4039-b724-41d106878f29": {
      "width": 80.29998779296875,
      "height": 34.116668701171875
    },
    "3adbe37b-23c8-4a63-b037-2b8ee41e234d": {
      "width": 72.29998779296875,
      "height": 32.116668701171875
    },
    "6cb6089f-01a3-467f-a9c1-290cdd511a5f": {
      "width": 53.29998779296875,
      "height": 30.116668701171875
    },
    "0d840cbe-8560-4d92-bfad-3e05102d3d9b": {
      "backgroundColor": "#FAF511"
    },
    "14c11dd2-55c1-456a-b9b7-2c169975fee3": {
      "backgroundColor": "#FAF511"
    },
    "5d39cf50-4b49-4256-a4e3-6b9d4f1f3332": {
      "backgroundColor": "#FAF511"
    },
    "13f545ed-effc-4a45-a3cb-2667cfe776db": {
      "backgroundColor": "#FAF511",
      "width": 62.979156494140625,
      "height": 33.84722900390625
    },
    "652ead7a-1d51-4f5c-bb03-c713ec416dfb": {
      "backgroundColor": "#FAF511"
    },
    "3800ce9d-26e7-49ca-bebf-a5bb542eb689": {
      "width": 83.75698852539062,
      "height": 36.84722900390625
    },
    "7797320b-7785-4279-b652-ba73d1b854d1": {
      "width": 84.75698852539062,
      "height": 35.84722900390625
    },
    "1cd6e8e4-997b-4d19-b278-70287bfa5e66": {
      "width": 96.203125,
      "height": 33
    },
    "9b7a67ec-8a8b-4922-b067-17c74ba7db19": {
      "width": 76.75698852539062,
      "height": 35.84722900390625
    },
    "0b3d1c92-f285-40c9-82bb-357db78dd3a9": {
      "width": 81.29998779296875,
      "height": 38.516693115234375
    },
    "433d2d12-4897-432b-944d-145339dcf6ad": {
      "width": 70.53469848632812,
      "height": 36.84722900390625
    },
    "c5eb9f84-cc3c-46cf-b18c-dea09df2d320": {
      "width": 82.29998779296875,
      "height": 38.116668701171875
    },
    "d11712ef-2617-4805-9709-ebfa849a22ab": {
      "width": 79.29998779296875,
      "height": 39.116668701171875
    },
    "bc50f072-ff5f-48be-ade2-c8a389423457": {
      "width": 63.534698486328125,
      "height": 35.84722900390625
    },
    "8308812a-242c-4153-996e-6d39cfa9eb6d": {
      "width": 69.53469848632812,
      "height": 35.84722900390625
    },
    "57396091-c7da-40d8-b709-a8cbc67ed3bd": {
      "width": 65.97915649414062,
      "height": 34.84722900390625
    },
    "79189087-e77a-4157-af5b-d0b655c84087": {
      "width": 48.979156494140625,
      "height": 35.84722900390625
    },
    "5c447ebe-427c-4520-a4bc-a0fc89747c56": {
      "width": 56.979156494140625,
      "height": 34.84722900390625
    },
    "926bdd1f-0d56-40bd-aa52-e009528a8b18": {
      "width": 61.29998779296875,
      "height": 33.116668701171875
    },
    "8234aacf-9d18-46ab-a4fd-43fc5e0bfb80": {
      "width": 56.979156494140625,
      "height": 36.84722900390625
    },
    "d8c62d3b-12f3-4225-bda6-a39875779963": {
      "width": 60.090240478515625,
      "height": 36.84722900390625
    },
    "70b901d7-4314-4a9e-99de-e7836fc561a3": {
      "width": 67.09024047851562,
      "height": 35.84722900390625
    },
    "d200a2b3-4554-4cb4-ba7c-9a1a6efbca63": {
      "width": 70.09024047851562,
      "height": 32.84722900390625
    },
    "8f9b96df-733e-4b4f-b268-a3eda1981970": {
      "width": 63.090240478515625,
      "height": 36.84722900390625
    },
    "03db365e-4a50-4264-b262-a29abe45e861": {
      "backgroundColor": "#FAF511"
    },
    "082fdbb5-7211-4b41-88fa-84b0f337d6a7": {
      "backgroundColor": "#FAF511"
    },
    "f1e36a11-6ead-4610-bd1f-cdea39328782": {
      "width": 64.20144653320312,
      "height": 33.06944274902344
    },
    "cd9f7383-49c5-413b-863b-ed27ab7a030b": {
      "width": 59.201446533203125,
      "height": 35.06944274902344
    },
    "b6fad3f3-f4a6-4ef1-a810-edf8075230b9": {
      "width": 105.42361450195312,
      "height": 48.51390075683594
    },
    "4feda6ce-ab3b-4307-82e8-bd2be387d9f5": {
      "width": 58.29998779296875,
      "height": 33.116668701171875
    },
    "5f7c3633-1c1d-405b-b1ba-b55fb7b24d81": {
      "backgroundColor": "#FAF511"
    },
    "b3593241-9261-4747-96d1-07111d797a5f": {
      "width": 61.423614501953125,
      "height": 35.09028625488281
    },
    "a4063774-76dd-4abe-9985-16cab637385a": {
      "width": 61.423614501953125,
      "height": 35.51390075683594
    },
    "258525fb-62db-4b18-a690-b286e227fb61": {
      "width": 54.423614501953125,
      "height": 32.51390075683594
    },
    "dae48757-bc8f-4e8a-a52c-1653edd2d8a8": {
      "width": 72.42361450195312,
      "height": 34.09028625488281
    },
    "73aa8b9c-7ad4-4328-a317-7c97a5c8f070": {
      "backgroundColor": "#FAF511"
    },
    "ad38ed43-2c72-415f-9ead-2dfc675b6e63": {
      "width": 69.29998779296875,
      "height": 37.316680908203125
    },
    "67c155ea-d2b2-4044-bf94-419d3226e75d": {
      "width": 63.29998779296875,
      "height": 41.116668701171875
    },
    "38b683c0-067c-44f6-a1b7-692d424519c8": {
      "width": 67.29998779296875,
      "height": 39.116668701171875
    },
    "51d3d103-64b8-4baa-a858-a8127819be34": {
      "width": 71.29998779296875,
      "height": 37.416656494140625
    },
    "af1d9884-2ea6-43b3-bcec-544c34acf4be": {
      "backgroundColor": "#FAF511"
    },
    "03e2bb09-08f8-433b-b595-8aa48344bc9d": {
      "backgroundColor": "#FAF511"
    },
    "afe3a0a7-1bae-434b-8e2c-44d4514505cd": {
      "width": 52.29998779296875,
      "height": 33.116668701171875
    },
    "95293d9c-792e-4e6e-80c3-40795e78f0ec": {
      "width": 63.29998779296875,
      "height": 31.116668701171875
    },
    "a8b85060-b6c1-426e-aa97-81901a3194f3": {
      "width": 64.97915649414062,
      "height": 35.84722900390625
    },
    "4fa00662-bd2d-42ea-be8f-edcaaf98ad17": {
      "width": 71.97915649414062,
      "height": 30.84722900390625
    },
    "55dbb959-ba5e-4000-a850-cc0a646f414c": {
      "width": 68.29998779296875,
      "height": 42.116668701171875
    },
    "99d33f77-e6b2-4eaa-87c6-ec22f7b524e7": {
      "width": 64.29998779296875,
      "height": 41.116668701171875
    },
    "c323e003-f33b-4f64-be47-af325143335b": {
      "width": 64.29998779296875,
      "height": 40.116668701171875
    },
    "9e6b1c43-cd00-451b-bd8a-f9799f711cae": {
      "width": 63.29998779296875,
      "height": 40.116668701171875
    },
    "4027113f-ff41-448e-ae93-d772c2894919": {
      "backgroundColor": "#FAF511"
    },
    "36999bfa-ab41-4407-abad-126affb42631": {
      "backgroundColor": "#FAF511",
      "width": 97.203125,
      "height": 44
    },
    "ce2a3380-c5b4-4b6a-9a00-f086c3f0c1c0": {
      "width": 93.29998779296875,
      "height": 36.116668701171875
    },
    "af30e0ff-f527-47d5-a6f3-a418746749a2": {
      "width": 98.203125,
      "height": 43
    },
    "8454e6a5-43bb-474f-aa4c-885c5b6d5c5c": {
      "backgroundColor": "#FAF511"
    },
    "c0d4f45f-1973-40c7-9d1e-1562f262f439": {
      "backgroundColor": "#FAF511",
      "width": 99.203125,
      "height": 41
    },
    "4715f6a4-d580-4bd6-81fa-f93a944769b0": {
      "backgroundColor": "#FAF511",
      "width": 101.203125,
      "height": 42.5
    },
    "19093fd8-37d3-4c92-9e6c-86730e98c3c3": {
      "width": 74.97915649414062,
      "height": 45.06944274902344
    },
    "adaa2619-47f9-462e-b20e-ae9e7e7dc87e": {
      "width": 65.97915649414062,
      "height": 42.06944274902344
    },
    "16e66b0e-52fe-4c28-9b73-7acd8acf5e16": {
      "width": 69.97915649414062,
      "height": 35.77397155761719
    },
    "6732ed01-8212-41aa-baa6-32b74cf9c89e": {
      "width": 61.979156494140625,
      "height": 36.37400817871094
    },
    "a9edf335-563d-498d-a488-1425992ad3c1": {
      "width": 73.97915649414062,
      "height": 39.95835876464844
    },
    "5231331f-0ff9-498c-9c6e-2b00a9339fe2": {
      "width": 82.97915649414062,
      "height": 37.95835876464844
    },
    "1552dab6-78ed-4d71-b92c-e7ac9bbc0a7b": {
      "width": 77.97915649414062,
      "height": 41.95835876464844
    },
    "ff70869e-a164-44f7-87d5-78925dfc7f47": {
      "width": 84.97915649414062,
      "height": 37.95835876464844
    },
    "d8ae94bf-dce8-4e13-8518-dada0531acac": {
      "width": 60.201446533203125,
      "height": 34.06944274902344
    },
    "6ddb376a-c167-4b52-8478-48ecffc8117c": {
      "width": 65.20144653320312,
      "height": 39.06944274902344
    },
    "3d016f63-b215-4f8e-96eb-11b1fa1e184d": {
      "backgroundColor": "#FAF511",
      "width": 97.203125,
      "height": 45.5
    },
    "2a7c0ae0-3489-4bc7-bca2-5978dc4baf80": {
      "width": 94.29998779296875,
      "height": 39.116668701171875
    },
    "76bb72ac-22bc-41b9-ae16-a8b68c3608ab": {
      "width": 95.29998779296875,
      "height": 38.116668701171875
    },
    "121a9626-5a8f-4ecf-85a4-41aec411cc94": {
      "width": 99.703125,
      "height": 43
    },
    "05d72456-cb34-442d-b098-11cabdd8b5d1": {
      "width": 89.29998779296875,
      "height": 43.116668701171875
    },
    "8d88934e-edbf-431d-a32b-3abb3f7d8b8b": {
      "width": 56.29998779296875,
      "height": 34.116668701171875
    },
    "d9a6c28a-a72f-4fb0-9840-78114e7825c6": {
      "backgroundColor": "#FAF511"
    },
    "fe1c46f4-f696-4aa9-ba7b-94426a8aab5b": {
      "backgroundColor": "#FAF511"
    },
    "4f637d55-6146-492b-a6f4-3a8f7c2bb17f": {
      "backgroundColor": "#FAF511",
      "width": 71.375,
      "height": 33.666656494140625
    },
    "6edeb91f-1017-4082-a932-2f86c1da672e": {
      "width": 60.375,
      "height": 39.33333206176758
    },
    "17c6f1f8-d5b6-489d-b096-ebe3f7adf12c": {
      "width": 66.375,
      "height": 39.33333206176758
    },
    "03a204df-155c-4c9a-ba2e-d2fe22f62f5b": {
      "width": 71.375,
      "height": 39.33333206176758
    },
    "b0be57cb-81ca-4886-810d-f8e331470194": {
      "width": 58.375,
      "height": 44.33333206176758
    },
    "1a3dd5d1-0c3e-453f-9bb2-7f79d3392098": {
      "width": 102.375,
      "height": 42.99999237060547
    },
    "0651d65c-f216-42d0-9998-1b4cb5b9b42f": {
      "width": 90.375,
      "height": 57.666656494140625
    },
    "92f9035b-7052-44b0-a314-53ebd06a43ab": {
      "vertices": [
        {
          "x": 2111,
          "y": 193
        }
      ]
    }
  },
  "tool": "pistar.2.0.0",
  "istar": "2.0",
  "saveDate": "Thu, 04 Jul 2019 23:25:24 GMT",
  "diagram": {
    "width": 3886,
    "height": 1388,
    "name": "Welcome Model",
    "customProperties": {
      "Description": "Welcome to the piStar tool! This model describe some of the recent improvements in the tool.\n\nFor help using this tool, please check the Help menu above"
    }
  }
};

