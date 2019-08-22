$(document).ready(function () {
    $('.modal-button-load-example').click(function () {
       //var titulos_fixo  = JSON.parse('[{"name":"Associar Notas já Publicadas a um Boletim Interno","result":"FAILURE"},{"name":"Associar Notas já Publicadas a um Boletim Interno Reservado","result":"ERROR"},{"name":"Atualizar Assunto Especifico Falha nome obrigatorio","result":"SUCCESS"},{"name":"Atualizar Assunto Especifico Sucesso","result":"SUCCESS"},{"name":"Atualizar Assunto Geral Falha nome obrigatorio","result":"FAILURE"},{"name":"Atualizar Assunto Geral Sucesso","result":"FAILURE"},{"name":"Atualizar Categoria Falha campos obrigatorios","result":"SUCCESS"},{"name":"Atualizar Categoria Falha descricao obrigatoria","result":"SUCCESS"},{"name":"Atualizar Categoria Falha nome obrigatorio","result":"SUCCESS"},{"name":"Atualizar Categoria Falha secao obrigatoria","result":"FAILURE"},{"name":"Atualizar Categoria Sucesso","result":"SUCCESS"},{"name":"Atualizar Funcao Falha descricao obrigatoria","result":"PENDING"},{"name":"Atualizar Funcao Falha nome obrigatorio","result":"PENDING"},{"name":"Atualizar Funcao Falha om obrigatoria","result":"PENDING"},{"name":"Atualizar Funcao Falha periodo obrigatorio","result":"PENDING"},{"name":"Atualizar Funcao Falha titular obrigatorio","result":"PENDING"},{"name":"Atualizar Funcao Sucesso","result":"PENDING"},{"name":"Atualizar Militar Falha Funcao vazia","result":"PENDING"},{"name":"Atualizar Militar Falha Secao vazia","result":"PENDING"},{"name":"Atualizar Militar Falha antiguidade vazia","result":"PENDING"},{"name":"Atualizar Militar Falha ativado vazio","result":"PENDING"},{"name":"Atualizar Militar Falha identidade vazia","result":"PENDING"},{"name":"Atualizar Militar Falha nome vazio","result":"PENDING"},{"name":"Atualizar Militar Falha nomeGuerra vazio","result":"PENDING"},{"name":"Atualizar Militar Falha posto vazio","result":"PENDING"},{"name":"Atualizar Militar Falha sexo vazio","result":"PENDING"},{"name":"Atualizar Militar Sucesso","result":"PENDING"},{"name":"Atualizar Militar falha qualificacao Vazia","result":"PENDING"},{"name":"Atualizar OM","result":"SUCCESS"},{"name":"Atualizar Organizacao Militar Falha ano obrigatoria","result":"PENDING"},{"name":"Atualizar Organizacao Militar Falha guarnicao obrigatoria","result":"PENDING"},{"name":"Atualizar Organizacao Militar Falha localizacao obrigatoria","result":"PENDING"},{"name":"Atualizar Organizacao Militar Falha nome obrigatorio","result":"PENDING"},{"name":"Atualizar Organizacao Militar Falha sigla obrigatoria","result":"PENDING"},{"name":"Atualizar Organizacao Militar Sucesso","result":"PENDING"},{"name":"Atualizar Parte Boletim Falha campos obrigatorios","result":"SUCCESS"},{"name":"Atualizar Parte Boletim Falha descricao obrigatoria","result":"SUCCESS"},{"name":"Atualizar Parte Boletim Falha posicao obrigatoria","result":"SUCCESS"},{"name":"Atualizar Parte Boletim Sucesso","result":"SUCCESS"},{"name":"Atualizar Posto/Graduacao Falha nome obrigatorio","result":"SUCCESS"},{"name":"Atualizar Posto/Graduacao Sucesso","result":"SUCCESS"},{"name":"Atualizar Qualificacao Militar Falha descricao obrigatoria","result":"SUCCESS"},{"name":"Atualizar Qualificacao Militar Sucesso","result":"SUCCESS"},{"name":"Atualizar Secao Boletim Falha Parte obrigatoria","result":"FAILURE"},{"name":"Atualizar Secao Boletim Falha descricao obrigatoria","result":"FAILURE"},{"name":"Atualizar Secao Boletim Falha posicao obrigatoria","result":"FAILURE"},{"name":"Atualizar Secao Boletim Sucesso","result":"FAILURE"},{"name":"Atualizar Secao Falha nome obrigatorio","result":"PENDING"},{"name":"Atualizar Secao Falha sigla obrigatoria","result":"PENDING"},{"name":"Atualizar Secao Sucesso","result":"PENDING"},{"name":"Atualizar Tipo de Boletim Falha abreviatura obrigatorio","result":"SUCCESS"},{"name":"Atualizar Tipo de Boletim Falha campos obrigatorios","result":"SUCCESS"},{"name":"Atualizar Tipo de Boletim Falha descricao obrigatoria","result":"SUCCESS"},{"name":"Atualizar Tipo de Boletim Sucesso","result":"SUCCESS"},{"name":"Atualizar Tipo de Documento Falha nome obrigatorio","result":"SUCCESS"},{"name":"Atualizar Tipo de Documento Sucesso","result":"SUCCESS"},{"name":"Atualizar tempo de serviço","result":"SUCCESS"},{"name":"Atualizar tempo de serviço","result":"SUCCESS"},{"name":"Atualizar workflow","result":"SUCCESS"},{"name":"Atualizar workflow","result":"SUCCESS"},{"name":"Atualizar workflow","result":"SUCCESS"},{"name":"Cadastrar Funcao Falha","result":"PENDING"},{"name":"Cadastrar Funcao Sucesso","result":"PENDING"},{"name":"Cadastrar Militar Falha antiguidade vazia","result":"PENDING"},{"name":"Cadastrar Militar Falha ativado vazio","result":"PENDING"},{"name":"Cadastrar Militar Falha cpf vazio","result":"PENDING"},{"name":"Cadastrar Militar Falha funcao vazia","result":"PENDING"},{"name":"Cadastrar Militar Falha identidade vazia","result":"PENDING"},{"name":"Cadastrar Militar Falha nascimento vazio","result":"PENDING"},{"name":"Cadastrar Militar Falha nome vazio","result":"PENDING"},{"name":"Cadastrar Militar Falha nomeGuerra vazio","result":"PENDING"},{"name":"Cadastrar Militar Falha om vazia","result":"PENDING"},{"name":"Cadastrar Militar Falha posto vazio","result":"PENDING"},{"name":"Cadastrar Militar Falha qm vazia","result":"PENDING"},{"name":"Cadastrar Militar Falha secao vazia","result":"PENDING"},{"name":"Cadastrar Militar Falha sexo vazio","result":"PENDING"},{"name":"Cadastrar Militar Sucesso","result":"PENDING"},{"name":"Cadastrar Secao Falha nome vazio","result":"PENDING"},{"name":"Cadastrar Secao Falha sigla vazia","result":"PENDING"},{"name":"Cadastrar Secao Sucesso","result":"PENDING"},{"name":"Chefe de Cmt/Ch/Dir aprova Nota e a envia para o Boletim","result":"SUCCESS"},{"name":"Chefe de SU/Div/Sec aprova Nota e a envia para Publicação","result":"SUCCESS"},{"name":"Criar Assunto Especifico Sucesso nome nulo","result":"SUCCESS"},{"name":"Criar Assunto Especifico sucesso","result":"SUCCESS"},{"name":"Criar Assunto Geral falha nome obrigatorio","result":"SUCCESS"},{"name":"Criar Assunto Geral sucesso","result":"FAILURE"},{"name":"Criar Assunto Geral sucesso secao nula","result":"SUCCESS"},{"name":"Criar Categoria","result":"SUCCESS"},{"name":"Criar OM","result":"SUCCESS"},{"name":"Criar Organizacao Militar caminho feliz","result":"PENDING"},{"name":"Criar Organizacao Militar com ano vazio","result":"PENDING"},{"name":"Criar Organizacao Militar com guarnicao vazia","result":"PENDING"},{"name":"Criar Organizacao Militar com localizacao vazia","result":"PENDING"},{"name":"Criar Organizacao Militar com nome vazio","result":"PENDING"},{"name":"Criar Organizacao Militar com sigla vazia","result":"PENDING"},{"name":"Criar Parte Boletim","result":"SUCCESS"},{"name":"Criar Posto/Graduação caminho feliz","result":"SUCCESS"},{"name":"Criar Posto/Graduação com mesmo nome, porem com letra maiúscula em um dos casos","result":"FAILURE"},{"name":"Criar Posto/Graduação com nome repetido","result":"SUCCESS"},{"name":"Criar Posto/Graduação com nome vazio","result":"SUCCESS"},{"name":"Criar Qualificacao Militar caminho feliz","result":"SUCCESS"},{"name":"Criar Qualificacao Militar com codigo repetido","result":"SUCCESS"},{"name":"Criar Qualificacao Militar com descricao vazia","result":"SUCCESS"},{"name":"Criar Secao Boletim","result":"SUCCESS"},{"name":"Criar Tipo de Boletim","result":"SUCCESS"},{"name":"Criar Tipo de Boletim com campos vazios","result":"SUCCESS"},{"name":"Criar Tipo de Boletim sem abreviatura","result":"SUCCESS"},{"name":"Criar Tipo de Boletim sem descricao","result":"SUCCESS"},{"name":"Criar Tipo de Documento","result":"SUCCESS"},{"name":"Criar workflow","result":"SUCCESS"},{"name":"Dessassociar notas publicadas a um boletim","result":"SUCCESS"},{"name":"Deve alterar Data de Publicação Boletim","result":"SUCCESS"},{"name":"Deve alterar Texto de Abertura","result":"SUCCESS"},{"name":"Deve alterar Texto de Fechamento","result":"SUCCESS"},{"name":"Deve criar Boletim","result":"SUCCESS"},{"name":"Deve criar Nota","result":"SUCCESS"},{"name":"Deve mostrar erro ao tentar Boletim sem Data de Publicação","result":"SUCCESS"},{"name":"Deve mostrar erro ao tentar Cadastrar Nota sem Data","result":"SUCCESS"},{"name":"Deve mostrar erro ao tentar Cadastrar Nota sem Texto de Abertura","result":"SUCCESS"},{"name":"Deve mostrar erro ao tentar Cadastrar Nota sem Texto de Fechamento","result":"SUCCESS"},{"name":"Deve mostrar erro ao tentar remover Data de Publicação","result":"SUCCESS"},{"name":"Deve mostrar erro ao tentar remover Texto de Abertura","result":"SUCCESS"},{"name":"Deve mostrar erro ao tentar remover Texto de Fechamento","result":"SUCCESS"},{"name":"Excluir Assunto Especifico caminho feliz","result":"SUCCESS"},{"name":"Excluir Assunto Especifico inexistente","result":"SUCCESS"},{"name":"Excluir Assunto Geral caminho feliz","result":"FAILURE"},{"name":"Excluir Assunto Geral inexistente","result":"SUCCESS"},{"name":"Excluir Boletim caminho feliz","result":"SUCCESS"},{"name":"Excluir Boletim inexistente","result":"SUCCESS"},{"name":"Excluir Categoria caminho feliz","result":"SUCCESS"},{"name":"Excluir Categoria inexistente","result":"SUCCESS"},{"name":"Excluir Funcao Inexistente","result":"PENDING"},{"name":"Excluir Funcao Sucesso","result":"PENDING"},{"name":"Excluir Militar Sucesso","result":"PENDING"},{"name":"Excluir Militar inexistente","result":"PENDING"},{"name":"Excluir Nota caminho feliz","result":"SUCCESS"},{"name":"Excluir Nota do Boletim caminho feliz","result":"PENDING"},{"name":"Excluir Nota do Boletim inexistente","result":"PENDING"},{"name":"Excluir Nota inexistente","result":"SUCCESS"},{"name":"Excluir OM","result":"SUCCESS"},{"name":"Excluir Organizacao Militar caminho feliz","result":"PENDING"},{"name":"Excluir Organizacao Militar inexistente","result":"PENDING"},{"name":"Excluir Parte Boletim caminho feliz","result":"SUCCESS"},{"name":"Excluir Parte Boletim inexistente","result":"SUCCESS"},{"name":"Excluir Posto/Graduacao caminho feliz","result":"SUCCESS"},{"name":"Excluir Posto/Graduacao inexistente","result":"SUCCESS"},{"name":"Excluir Qualificacao Militar caminho feliz","result":"SUCCESS"},{"name":"Excluir Qualificacao Militar inexistente","result":"SUCCESS"},{"name":"Excluir Secao Boletim caminho feliz","result":"FAILURE"},{"name":"Excluir Secao Boletim inexistente","result":"SUCCESS"},{"name":"Excluir Secao caminho feliz","result":"PENDING"},{"name":"Excluir Secao inexistente","result":"PENDING"},{"name":"Excluir Tipo de Boletim caminho feliz","result":"SUCCESS"},{"name":"Excluir Tipo de Boletim inexistente","result":"SUCCESS"},{"name":"Excluir Tipo de Documento caminho feliz","result":"SUCCESS"},{"name":"Excluir Tipo de Documento inexistente","result":"SUCCESS"},{"name":"Excluir tempo de serviço","result":"SUCCESS"},{"name":"Gerar PDF","result":"SUCCESS"},{"name":"Operador envia Nota para Aprovação","result":"SUCCESS"},{"name":"Visualizar Assunto Especifico caminho feliz","result":"SUCCESS"},{"name":"Visualizar Assunto Especifico caminho triste","result":"SUCCESS"},{"name":"Visualizar Assunto Geral caminho feliz","result":"FAILURE"},{"name":"Visualizar Assunto Geral caminho triste","result":"SUCCESS"},{"name":"Visualizar Categoria caminho feliz","result":"SUCCESS"},{"name":"Visualizar Categoria caminho triste","result":"SUCCESS"},{"name":"Visualizar Funcao Inexistente","result":"PENDING"},{"name":"Visualizar Funcao Sucesso","result":"PENDING"},{"name":"Visualizar Militar Sucesso","result":"PENDING"},{"name":"Visualizar Militar inexistente","result":"PENDING"},{"name":"Visualizar Organizacao Militar caminho feliz","result":"PENDING"},{"name":"Visualizar Organizacao Militar inexistente","result":"PENDING"},{"name":"Visualizar Parte Boletim caminho feliz","result":"SUCCESS"},{"name":"Visualizar Parte Boletim caminho triste","result":"SUCCESS"},{"name":"Visualizar Posto/Graduacao caminho feliz","result":"SUCCESS"},{"name":"Visualizar Posto/Graduacao caminho triste","result":"SUCCESS"},{"name":"Visualizar Qualificacao Militar caminho feliz","result":"SUCCESS"},{"name":"Visualizar Qualificacao Militar inexistente","result":"SUCCESS"},{"name":"Visualizar Secao Boletim caminho feliz","result":"FAILURE"},{"name":"Visualizar Secao Boletim caminho triste","result":"SUCCESS"},{"name":"Visualizar Secao caminho feliz","result":"PENDING"},{"name":"Visualizar Secao inexistente","result":"PENDING"},{"name":"Visualizar Tipo de Boletim caminho feliz","result":"SUCCESS"},{"name":"Visualizar Tipo de Boletim caminho triste","result":"SUCCESS"},{"name":"Visualizar Tipo de Documento caminho feliz","result":"SUCCESS"},{"name":"Visualizar Tipo de Documento caminho triste","result":"SUCCESS"},{"name":"Visualizar tempo de serviço","result":"SUCCESS"},{"name":"Visualizar workflow","result":"SUCCESS"}]');
       var titulos_fixo = JSON.parse('[{"name":"Atualizar Tipo de Boletim","result":"SUCCESS","oldLabel":"Atualizar Tipo de Boletim Sucesso","newLabel":"Atualizar Tipo de Boletim"},{"name":"Atualizar Organizacao Militar","result":"PENDING","oldLabel":"Atualizar Organizacao Militar Falha sigla obrigatoria","newLabel":"Atualizar Organizacao Militar"},{"name":"Excluir Categoria","result":"SUCCESS","oldLabel":"Excluir Categoria inexistente","newLabel":"Excluir Categoria"},{"name":"Cadastrar Secao","result":"PENDING","oldLabel":"Cadastrar Secao Falha sigla vazia","newLabel":"Cadastrar Secao"},{"name":"Atualizar Posto/Graduacao","result":"SUCCESS","oldLabel":"Atualizar Posto/Graduacao Falha nome obrigatorio","newLabel":"Atualizar Posto/Graduacao"},{"name":"Visualizar Secao","result":"PENDING","oldLabel":"Visualizar Secao inexistente","newLabel":"Visualizar Secao"},{"name":"Atualizar Parte Boletim","result":"SUCCESS","oldLabel":"Atualizar Parte Boletim Sucesso","newLabel":"Atualizar Parte Boletim"},{"name":"Criar Tipo de Boletim","result":"SUCCESS","oldLabel":"Criar Tipo de Boletim","newLabel":"Criar Tipo de Boletim"},{"name":"Atualizar Secao Boletim","result":"FAILURE","oldLabel":"Atualizar Secao Boletim Falha Parte obrigatoria","newLabel":"Atualizar Secao Boletim"},{"name":"Criar Notas para Boletim","result":"SUCCESS","oldLabel":"Deve mostrar erro ao tentar remover Texto de Fechamento","newLabel":"Criar Notas para Boletim"},{"name":"Excluir Militar","result":"PENDING","oldLabel":"Excluir Militar inexistente","newLabel":"Excluir Militar"},{"name":"Visualizar Parte Boletim","result":"SUCCESS","oldLabel":"Visualizar Parte Boletim caminho feliz","newLabel":"Visualizar Parte Boletim"},{"name":"Atualizar Funcao","result":"PENDING","oldLabel":"Atualizar Funcao Falha om obrigatoria","newLabel":"Atualizar Funcao"},{"name":"Visualizar Organizacao Militar","result":"PENDING","oldLabel":"Visualizar Organizacao Militar caminho feliz","newLabel":"Visualizar Organizacao Militar"},{"name":"Excluir Funcao","result":"PENDING","oldLabel":"Excluir Funcao Inexistente","newLabel":"Excluir Funcao"},{"name":"Excluir Nota do Boletim","result":"PENDING","oldLabel":"Excluir Nota do Boletim inexistente","newLabel":"Excluir Nota do Boletim"},{"name":"Criar Qualificacao Militar","result":"SUCCESS","oldLabel":"Criar Qualificacao Militar com codigo repetido","newLabel":"Criar Qualificacao Militar"},{"name":"Cadastrar Militar","result":"PENDING","oldLabel":"Cadastrar Militar Sucesso","newLabel":"Cadastrar Militar"},{"name":"Visualizar Assunto Especifico","result":"SUCCESS","oldLabel":"Visualizar Assunto Especifico caminho feliz","newLabel":"Visualizar Assunto Especifico"},{"name":"Enviar Notas para o Boletim","result":"SUCCESS","oldLabel":"Chefe de Cmt/Ch/Dir aprova Nota e a envia para o Boletim","newLabel":"Enviar Notas para o Boletim"},{"name":"Atualizar Secao","result":"PENDING","oldLabel":"Atualizar Secao Falha sigla obrigatoria","newLabel":"Atualizar Secao"},{"name":"Criar Assunto Especifico","result":"SUCCESS","oldLabel":"Criar Assunto Especifico Sucesso nome nulo","newLabel":"Criar Assunto Especifico"},{"name":"Cadastrar Funcao","result":"PENDING","oldLabel":"Cadastrar Funcao Falha","newLabel":"Cadastrar Funcao"},{"name":"Visualizar Militar","result":"PENDING","oldLabel":"Visualizar Militar inexistente","newLabel":"Visualizar Militar"},{"name":"Visualizar Categoria","result":"SUCCESS","oldLabel":"Visualizar Categoria caminho triste","newLabel":"Visualizar Categoria"},{"name":"Excluir Tipo de Boletim","result":"SUCCESS","oldLabel":"Excluir Tipo de Boletim inexistente","newLabel":"Excluir Tipo de Boletim"},{"name":"Atualizar Militar","result":"PENDING","oldLabel":"Atualizar Militar Falha nomeGuerra vazio","newLabel":"Atualizar Militar"},{"name":"Excluir Qualificacao Militar","result":"SUCCESS","oldLabel":"Excluir Qualificacao Militar caminho feliz","newLabel":"Excluir Qualificacao Militar"},{"name":"Enviar Notas para publicação","result":"SUCCESS","oldLabel":"Chefe de SU/Div/Sec aprova Nota e a envia para Publicação","newLabel":"Enviar Notas para publicação"},{"name":"Excluir Secao Boletim","result":"SUCCESS","oldLabel":"Excluir Secao Boletim inexistente","newLabel":"Excluir Secao Boletim"},{"name":"Enviar Notas para aprovação","result":"SUCCESS","oldLabel":"Operador envia Nota para Aprovação","newLabel":"Enviar Notas para aprovação"},{"name":"Excluir Boletim","result":"SUCCESS","oldLabel":"Excluir Boletim caminho feliz","newLabel":"Excluir Boletim"},{"name":"Excluir Secao","result":"PENDING","oldLabel":"Excluir Secao inexistente","newLabel":"Excluir Secao"},{"name":"Visualizar Posto/Graduacao","result":"SUCCESS","oldLabel":"Visualizar Posto/Graduacao caminho triste","newLabel":"Visualizar Posto/Graduacao"},{"name":"Visualizar Qualificacao Militar","result":"SUCCESS","oldLabel":"Visualizar Qualificacao Militar inexistente","newLabel":"Visualizar Qualificacao Militar"},{"name":"Visualizar Assunto Geral","result":"FAILURE","oldLabel":"Visualizar Assunto Geral caminho feliz","newLabel":"Visualizar Assunto Geral"},{"name":"Criar Boletins","result":"SUCCESS","oldLabel":"Deve mostrar erro ao tentar Boletim sem Data de Publicação","newLabel":"Criar Boletins"},{"name":"Criar Organizacao Militar","result":"PENDING","oldLabel":"Criar Organizacao Militar caminho feliz","newLabel":"Criar Organizacao Militar"},{"name":"Excluir Tipo de Documento","result":"SUCCESS","oldLabel":"Excluir Tipo de Documento inexistente","newLabel":"Excluir Tipo de Documento"},{"name":"Excluir Parte Boletim","result":"SUCCESS","oldLabel":"Excluir Parte Boletim caminho feliz","newLabel":"Excluir Parte Boletim"},{"name":"Associar Notas Publicadas a um Boletim","result":"ERROR","oldLabel":"Associar Notas já Publicadas a um Boletim Interno Reservado","newLabel":"Associar Notas Publicadas a um Boletim"},{"name":"Criar Assunto Geral","result":"SUCCESS","oldLabel":"Criar Assunto Geral falha nome obrigatorio","newLabel":"Criar Assunto Geral"},{"name":"Excluir Assunto Especifico","result":"SUCCESS","oldLabel":"Excluir Assunto Especifico inexistente","newLabel":"Excluir Assunto Especifico"},{"name":"Atualizar Assunto Geral","result":"FAILURE","oldLabel":"Atualizar Assunto Geral Sucesso","newLabel":"Atualizar Assunto Geral"},{"name":"Atualizar Qualificacao Militar","result":"SUCCESS","oldLabel":"Atualizar Qualificacao Militar Falha descricao obrigatoria","newLabel":"Atualizar Qualificacao Militar"},{"name":"Criar Posto/Graduação","result":"SUCCESS","oldLabel":"Criar Posto/Graduação com nome repetido","newLabel":"Criar Posto/Graduação"},{"name":"Visualizar Funcao","result":"PENDING","oldLabel":"Visualizar Funcao Inexistente","newLabel":"Visualizar Funcao"},{"name":"Excluir Nota","result":"SUCCESS","oldLabel":"Excluir Nota inexistente","newLabel":"Excluir Nota"},{"name":"Atualizar Categoria","result":"SUCCESS","oldLabel":"Atualizar Categoria Sucesso","newLabel":"Atualizar Categoria"},{"name":"Visualizar Secao Boletim","result":"FAILURE","oldLabel":"Visualizar Secao Boletim caminho feliz","newLabel":"Visualizar Secao Boletim"},{"name":"Atualizar Tipo de Documento","result":"SUCCESS","oldLabel":"Atualizar Tipo de Documento Falha nome obrigatorio","newLabel":"Atualizar Tipo de Documento"},{"name":"Visualizar Tipo de Boletim","result":"SUCCESS","oldLabel":"Visualizar Tipo de Boletim caminho triste","newLabel":"Visualizar Tipo de Boletim"},{"name":"Excluir Posto/Graduacao","result":"SUCCESS","oldLabel":"Excluir Posto/Graduacao caminho feliz","newLabel":"Excluir Posto/Graduacao"},{"name":"Excluir Assunto Geral","result":"FAILURE","oldLabel":"Excluir Assunto Geral caminho feliz","newLabel":"Excluir Assunto Geral"},{"name":"Excluir Organizacao Militar","result":"PENDING","oldLabel":"Excluir Organizacao Militar caminho feliz","newLabel":"Excluir Organizacao Militar"},{"name":"Criar Parte Boletim","result":"SUCCESS","oldLabel":"Criar Parte Boletim","newLabel":"Criar Parte Boletim"},{"name":"Atualizar Assunto Especifico","result":"SUCCESS","oldLabel":"Atualizar Assunto Especifico Falha nome obrigatorio","newLabel":"Atualizar Assunto Especifico"},{"name":"Visualizar Tipo de Documento","result":"SUCCESS","oldLabel":"Visualizar Tipo de Documento caminho feliz","newLabel":"Visualizar Tipo de Documento"},{"name":"Criar Secao Boletim","result":"SUCCESS","oldLabel":"Criar Secao Boletim","newLabel":"Criar Secao Boletim"},{"name":"Criar Categoria","result":"SUCCESS","oldLabel":"Criar Categoria","newLabel":"Criar Categoria"},{"name":"Criar Tipo de Documento","result":"SUCCESS","oldLabel":"Criar Tipo de Documento","newLabel":"Criar Tipo de Documento"}]');
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
            "Description": "",
            "Tarefa": "Criar workflow"
          }
        },
        {
          "id": "1a71e4f7-e126-46fe-a3db-b7523c20168f",
          "text": "Atualizar workflow",
          "type": "istar.Task",
          "x": 1430,
          "y": 381,
          "customProperties": {
            "Description": "",
            "Tarefa": "Atualizar workflow"
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
            "Description": "",
            "Tarefa": "Visualizar workflow"
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
            "Description": "",
            "Tarefa": "Enviar Notas para aprovação"
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
            "Description": "",
            "Tarefa": "Atualizar Secao"
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
            "Description": "",
            "Tarefa": "Visualizar Secao"
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
            "Description": "",
            "Tarefa": "Gerar PDF"
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
            "Description": "",
            "Tarefa": "Criar Posto/Graduação"
          }
        },
        {
          "id": "7797320b-7785-4279-b652-ba73d1b854d1",
          "text": "Visualizar Postos/Grad",
          "type": "istar.Task",
          "x": 1529,
          "y": 339,
          "customProperties": {
            "Description": "",
            "Tarefa": "Visualizar Posto/Graduacao"
          }
        },
        {
          "id": "1cd6e8e4-997b-4d19-b278-70287bfa5e66",
          "text": "Excluir Posto/Grad",
          "type": "istar.Task",
          "x": 1674,
          "y": 339,
          "customProperties": {
            "Description": "",
            "Tarefa": "Excluir Posto/Graduacao"
          }
        },
        {
          "id": "9b7a67ec-8a8b-4922-b067-17c74ba7db19",
          "text": "Atualizar Posto/Grad",
          "type": "istar.Task",
          "x": 1655,
          "y": 379,
          "customProperties": {
            "Description": "",
            "Tarefa": "Atualizar Posto/Graduacao"
          }
        },
        {
          "id": "563ed521-20f5-4591-a806-ca4300cdd9cc",
          "text": "Visualizar qualificações militar",
          "type": "istar.Task",
          "x": 1653,
          "y": 459,
          "customProperties": {
            "Description": "",
            "Tarefa": "Visualizar Qualificacao Militar"
          }
        },
        {
          "id": "0b3d1c92-f285-40c9-82bb-357db78dd3a9",
          "text": "Excluir qualificação militar",
          "type": "istar.Task",
          "x": 1819,
          "y": 459,
          "customProperties": {
            "Description": "",
            "Tarefa": "Excluir Qualificacao Militar"
          }
        },
        {
          "id": "433d2d12-4897-432b-944d-145339dcf6ad",
          "text": "Visualizar categoria",
          "type": "istar.Task",
          "x": 1905,
          "y": 460,
          "customProperties": {
            "Description": "",
            "Tarefa": "Visualizar Categoria"
          }
        },
        {
          "id": "c5eb9f84-cc3c-46cf-b18c-dea09df2d320",
          "text": "Atualizar qualificação militar",
          "type": "istar.Task",
          "x": 1786,
          "y": 503,
          "customProperties": {
            "Description": "",
            "Tarefa": "Atualizar Qualificacao Militar"
          }
        },
        {
          "id": "d11712ef-2617-4805-9709-ebfa849a22ab",
          "text": "Criar qualificação militar",
          "type": "istar.Task",
          "x": 1699,
          "y": 501,
          "customProperties": {
            "Description": "",
            "Tarefa": "Criar Qualificacao Militar"
          }
        },
        {
          "id": "bc50f072-ff5f-48be-ade2-c8a389423457",
          "text": "Excluir categoria",
          "type": "istar.Task",
          "x": 2029,
          "y": 457,
          "customProperties": {
            "Description": "",
            "Tarefa": "Excluir Categoria"
          }
        },
        {
          "id": "8308812a-242c-4153-996e-6d39cfa9eb6d",
          "text": "Atualizar categoria",
          "type": "istar.Task",
          "x": 2005,
          "y": 499,
          "customProperties": {
            "Description": "",
            "Tarefa": "Atualizar Categoria"
          }
        },
        {
          "id": "57396091-c7da-40d8-b709-a8cbc67ed3bd",
          "text": "Visualizar OM",
          "type": "istar.Task",
          "x": 1951,
          "y": 318,
          "customProperties": {
            "Description": "",
            "Tarefa": "Atualizar OM"
          }
        },
        {
          "id": "79189087-e77a-4157-af5b-d0b655c84087",
          "text": "Criar OM",
          "type": "istar.Task",
          "x": 1984,
          "y": 358,
          "customProperties": {
            "Description": "",
            "Tarefa": "Criar OM"
          }
        },
        {
          "id": "5c447ebe-427c-4520-a4bc-a0fc89747c56",
          "text": "Excluir OM",
          "type": "istar.Task",
          "x": 2070,
          "y": 319,
          "customProperties": {
            "Description": "",
            "Tarefa": "Excluir OM"
          }
        },
        {
          "id": "926bdd1f-0d56-40bd-aa52-e009528a8b18",
          "text": "Criar categoria",
          "type": "istar.Task",
          "x": 1940,
          "y": 502,
          "customProperties": {
            "Description": "",
            "Tarefa": "Criar Categoria"
          }
        },
        {
          "id": "8234aacf-9d18-46ab-a4fd-43fc5e0bfb80",
          "text": "Atualizar OM",
          "type": "istar.Task",
          "x": 2039,
          "y": 358,
          "customProperties": {
            "Description": "",
            "Tarefa": "Atualizar OM"
          }
        },
        {
          "id": "d8c62d3b-12f3-4225-bda6-a39875779963",
          "text": "Excluir Função",
          "type": "istar.Task",
          "x": 2238,
          "y": 361,
          "customProperties": {
            "Description": "",
            "Tarefa": "Excluir Funcao"
          }
        },
        {
          "id": "70b901d7-4314-4a9e-99de-e7836fc561a3",
          "text": "Visualizar Função",
          "type": "istar.Task",
          "x": 2116,
          "y": 364,
          "customProperties": {
            "Description": "",
            "Tarefa": "Visualizar Funcao"
          }
        },
        {
          "id": "d200a2b3-4554-4cb4-ba7c-9a1a6efbca63",
          "text": "Cadastrar Função",
          "type": "istar.Task",
          "x": 2140,
          "y": 404,
          "customProperties": {
            "Description": "",
            "Tarefa": "Cadastrar Funcao"
          }
        },
        {
          "id": "8f9b96df-733e-4b4f-b268-a3eda1981970",
          "text": "Atualizar Função",
          "type": "istar.Task",
          "x": 2215,
          "y": 402,
          "customProperties": {
            "Description": "",
            "Tarefa": "Atualizar Funcao"
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
            "Description": "",
            "Tarefa": "Excluir Nota"
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
            "Description": "",
            "Tarefa": "Dessassociar notas publicadas a um boletim"
          }
        },
        {
          "id": "4feda6ce-ab3b-4307-82e8-bd2be387d9f5",
          "text": "Gerar PDF",
          "type": "istar.Task",
          "x": 982,
          "y": 260,
          "customProperties": {
            "Description": "",
            "Tarefa": "Gerar PDF"
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
            "Description": "",
            "Tarefa": "Excluir Boletim"
          }
        },
        {
          "id": "258525fb-62db-4b18-a690-b286e227fb61",
          "text": "Criar Boletim",
          "type": "istar.Task",
          "x": 1630,
          "y": 663,
          "customProperties": {
            "Description": "",
            "Tarefa": "Criar Boletins"
          }
        },
        {
          "id": "dae48757-bc8f-4e8a-a52c-1653edd2d8a8",
          "text": "Visualizar Boletim",
          "type": "istar.Task",
          "x": 1581,
          "y": 625,
          "customProperties": {
            "Description": "",
            "Tarefa": "Visualizar Parte Boletim"
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
            "Description": "",
            "Tarefa": "Visualizar Secao Boletim"
          }
        },
        {
          "id": "67c155ea-d2b2-4044-bf94-419d3226e75d",
          "text": "Excluir Seção Boletim",
          "type": "istar.Task",
          "x": 1127,
          "y": 631,
          "customProperties": {
            "Description": "",
            "Tarefa": "Excluir Secao Boletim"
          }
        },
        {
          "id": "38b683c0-067c-44f6-a1b7-692d424519c8",
          "text": "Criar Seção Boletim",
          "type": "istar.Task",
          "x": 1025,
          "y": 677,
          "customProperties": {
            "Description": "",
            "Tarefa": "Criar Secao Boletim"
          }
        },
        {
          "id": "51d3d103-64b8-4baa-a858-a8127819be34",
          "text": "Atualizar Seção Boletim",
          "type": "istar.Task",
          "x": 1096,
          "y": 676,
          "customProperties": {
            "Description": "",
            "Tarefa": "Atualizar Secao Boletim"
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
            "Description": "",
            "Tarefa": "Excluir Secao"
          }
        },
        {
          "id": "95293d9c-792e-4e6e-80c3-40795e78f0ec",
          "text": "Atualizar Seção",
          "type": "istar.Task",
          "x": 2170,
          "y": 244,
          "customProperties": {
            "Description": "",
            "Tarefa": "Atualizar Secao"
          }
        },
        {
          "id": "a8b85060-b6c1-426e-aa97-81901a3194f3",
          "text": "Visualizar Seção",
          "type": "istar.Task",
          "x": 2051,
          "y": 198,
          "customProperties": {
            "Description": "",
            "Tarefa": "Visualizar Secao"
          }
        },
        {
          "id": "4fa00662-bd2d-42ea-be8f-edcaaf98ad17",
          "text": "Cadastrar Seção",
          "type": "istar.Task",
          "x": 2093,
          "y": 243,
          "customProperties": {
            "Description": "",
            "Tarefa": "Cadastrar Secao"
          }
        },
        {
          "id": "55dbb959-ba5e-4000-a850-cc0a646f414c",
          "text": "Visualizar parte boletim",
          "type": "istar.Task",
          "x": 1197,
          "y": 592,
          "customProperties": {
            "Description": "",
            "Tarefa": "Visualizar Parte Boletim"
          }
        },
        {
          "id": "99d33f77-e6b2-4eaa-87c6-ec22f7b524e7",
          "text": "Excluir parte boletim",
          "type": "istar.Task",
          "x": 1317,
          "y": 596,
          "customProperties": {
            "Description": "",
            "Tarefa": "Excluir Parte Boletim"
          }
        },
        {
          "id": "c323e003-f33b-4f64-be47-af325143335b",
          "text": "Atualizar parte boletim",
          "type": "istar.Task",
          "x": 1288,
          "y": 642,
          "customProperties": {
            "Description": "",
            "Tarefa": "Atualizar Parte Boletim"
          }
        },
        {
          "id": "9e6b1c43-cd00-451b-bd8a-f9799f711cae",
          "text": "Criar parte boletim",
          "type": "istar.Task",
          "x": 1218,
          "y": 640,
          "customProperties": {
            "Description": "",
            "Tarefa": "Criar Parte Boletim"
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
            "Description": "",
            "Tarefa": "Excluir Tipo de Boletim"
          }
        },
        {
          "id": "3c4dc525-cf9a-434e-990e-ebaaf22ce441",
          "text": "Visualizar tipos de boletim",
          "type": "istar.Task",
          "x": 752,
          "y": 666,
          "customProperties": {
            "Description": "",
            "Tarefa": "Visualizar Tipo de Boletim"
          }
        },
        {
          "id": "0c53906d-f5b1-4979-a2d5-8c2ff5a248c2",
          "text": "Cadastrar tipo de boletim",
          "type": "istar.Task",
          "x": 788,
          "y": 707,
          "customProperties": {
            "Description": "",
            "Tarefa": "Atualizar Tipo de Boletim"
          }
        },
        {
          "id": "e90cf177-f74e-44b9-9e1e-12d9996e6341",
          "text": "Atualizar tipo de boletim",
          "type": "istar.Task",
          "x": 886,
          "y": 707,
          "customProperties": {
            "Description": "",
            "Tarefa": "Atualizar Tipo de Boletim"
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
            "Description": "",
            "Tarefa": "Atualizar Tipo de Documento"
          }
        },
        {
          "id": "30851dec-60b3-41a9-97ec-99224d5f66f4",
          "text": "Visualizar tipo de documento",
          "type": "istar.Task",
          "x": 524,
          "y": 595,
          "customProperties": {
            "Description": "",
            "Tarefa": "Visualizar Tipo de Documento"
          }
        },
        {
          "id": "ce2a3380-c5b4-4b6a-9a00-f086c3f0c1c0",
          "text": "Excluir tipo de documento",
          "type": "istar.Task",
          "x": 693,
          "y": 593,
          "customProperties": {
            "Description": "",
            "Tarefa": "Excluir Tipo de Documento"
          }
        },
        {
          "id": "af30e0ff-f527-47d5-a6f3-a418746749a2",
          "text": "Atualizar tipo de documento",
          "type": "istar.Task",
          "x": 661,
          "y": 632,
          "customProperties": {
            "Description": "",
            "Tarefa": "Atualizar Tipo de Documento"
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
            "Description": "",
            "Tarefa": "Visualizar Assunto Geral"
          }
        },
        {
          "id": "adaa2619-47f9-462e-b20e-ae9e7e7dc87e",
          "text": "Atualizar assunto geral",
          "type": "istar.Task",
          "x": 186,
          "y": 746,
          "customProperties": {
            "Description": "",
            "Tarefa": "Atualizar Assunto Geral"
          }
        },
        {
          "id": "16e66b0e-52fe-4c28-9b73-7acd8acf5e16",
          "text": "Excluir assunto geral",
          "type": "istar.Task",
          "x": 228,
          "y": 706,
          "customProperties": {
            "Description": "",
            "Tarefa": "Excluir Assunto Geral"
          }
        },
        {
          "id": "6732ed01-8212-41aa-baa6-32b74cf9c89e",
          "text": "Criar assunto geral",
          "type": "istar.Task",
          "x": 120,
          "y": 746,
          "customProperties": {
            "Description": "",
            "Tarefa": "Criar Assunto Geral"
          }
        },
        {
          "id": "a9edf335-563d-498d-a488-1425992ad3c1",
          "text": "Cadastrar assunto específico",
          "type": "istar.Task",
          "x": 334,
          "y": 755,
          "customProperties": {
            "Description": "",
            "Tarefa": "Criar Assunto Especifico"
          }
        },
        {
          "id": "5231331f-0ff9-498c-9c6e-2b00a9339fe2",
          "text": "Excluir assunto específico",
          "type": "istar.Task",
          "x": 440,
          "y": 708,
          "customProperties": {
            "Description": "",
            "Tarefa": "Excluir Assunto Especifico"
          }
        },
        {
          "id": "1552dab6-78ed-4d71-b92c-e7ac9bbc0a7b",
          "text": "Visualizar assunto específico",
          "type": "istar.Task",
          "x": 303,
          "y": 705,
          "customProperties": {
            "Description": "",
            "Tarefa": "Visualizar Assunto Especifico"
          }
        },
        {
          "id": "ff70869e-a164-44f7-87d5-78925dfc7f47",
          "text": "Atualizar assunto específico",
          "type": "istar.Task",
          "x": 413,
          "y": 756,
          "customProperties": {
            "Description": "",
            "Tarefa": "Atualizar Assunto Especifico"
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
            "Description": "",
            "Tarefa": "Visualizar Secao"
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
            "Description": "",
            "Tarefa": "Atualizar tempo de serviço"
          }
        },
        {
          "id": "76bb72ac-22bc-41b9-ae16-a8b68c3608ab",
          "text": "Excluir Tempo de Serviço",
          "type": "istar.Task",
          "x": 276,
          "y": 480,
          "customProperties": {
            "Description": "",
            "Tarefa": "Excluir tempo de serviço"
          }
        },
        {
          "id": "121a9626-5a8f-4ecf-85a4-41aec411cc94",
          "text": "Visualizar Tempo de Serviço",
          "type": "istar.Task",
          "x": 53,
          "y": 424,
          "customProperties": {
            "Description": "",
            "Tarefa": "Visualizar tempo de serviço"
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
            "Tarefa": "Atualizar tempo de serviço",
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
            "Description": "",
            "Tarefa": "Gerar PDF"
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
            "Description": "",
            "Tarefa": "Visualizar Militar"
          }
        },
        {
          "id": "17c6f1f8-d5b6-489d-b096-ebe3f7adf12c",
          "text": "Cadastrar Militar",
          "type": "istar.Task",
          "x": 1915,
          "y": 651,
          "customProperties": {
            "Description": "",
            "Tarefa": "Cadastrar Militar"
          }
        },
        {
          "id": "03a204df-155c-4c9a-ba2e-d2fe22f62f5b",
          "text": "Atualizar Militar",
          "type": "istar.Task",
          "x": 1985,
          "y": 651,
          "customProperties": {
            "Description": "",
            "Tarefa": "Atualizar Militar"
          }
        },
        {
          "id": "b0be57cb-81ca-4886-810d-f8e331470194",
          "text": "Excluir Militar",
          "type": "istar.Task",
          "x": 2039,
          "y": 609,
          "customProperties": {
            "Description": "",
            "Tarefa": "Excluir Militar"
          }
        },
        {
          "id": "1a3dd5d1-0c3e-453f-9bb2-7f79d3392098",
          "text": "Enviar notas para publicação",
          "type": "istar.Task",
          "x": 1105,
          "y": 359,
          "customProperties": {
            "Description": "",
            "Tarefa": "Enviar Notas para publicação"
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
            "Description": "",
            "Tarefa": "Associar Notas Publicadas a um Boletim"
          }
        }
      ]
    }
  ],
  "orphans": [],
  "dependencies": [],
  "links": [
    {
      "id": "6d63e50c-8ad8-45b1-bc85-6490b54cd98a",
      "type": "istar.AndRefinementLink",
      "source": "0472d403-efab-48f7-aed5-8a14190ad71a",
      "target": "ab99b45b-ee62-4a1c-9d4d-1312dbfd3d7d"
    },
    {
      "id": "27d97c28-2829-4792-9535-8d945371283d",
      "type": "istar.AndRefinementLink",
      "source": "6387ad89-8fff-4612-a7aa-21116cf24e9f",
      "target": "ab99b45b-ee62-4a1c-9d4d-1312dbfd3d7d"
    },
    {
      "id": "627c4e81-67f1-4310-98b1-48cfbbd5d732",
      "type": "istar.AndRefinementLink",
      "source": "bd5e481f-e93b-4dfe-8daf-3d1fc91e6a04",
      "target": "ab99b45b-ee62-4a1c-9d4d-1312dbfd3d7d"
    },
    {
      "id": "236d9901-07ce-4ed0-9ec5-ffca66bc5396",
      "type": "istar.AndRefinementLink",
      "source": "77b3f119-bd4e-42be-9b84-552a22bf44c5",
      "target": "b46a33b8-ac2a-4cd1-8500-e746c0c85218"
    },
    {
      "id": "29550b87-fa95-4579-a551-06ad754aec92",
      "type": "istar.AndRefinementLink",
      "source": "1a71e4f7-e126-46fe-a3db-b7523c20168f",
      "target": "b46a33b8-ac2a-4cd1-8500-e746c0c85218"
    },
    {
      "id": "f1b88e91-0cf2-4ee3-bff6-0f90b43b2ddf",
      "type": "istar.AndRefinementLink",
      "source": "e081d04a-7921-4091-9129-cb0fe269be45",
      "target": "b46a33b8-ac2a-4cd1-8500-e746c0c85218"
    },
    {
      "id": "0859ece2-f25b-4a7f-ae6f-2ee2eca109ee",
      "type": "istar.AndRefinementLink",
      "source": "21927ac9-33c0-4302-b8e8-b1a28b02793e",
      "target": "b46a33b8-ac2a-4cd1-8500-e746c0c85218"
    },
    {
      "id": "880b6977-720c-4432-981c-feb09fe2187f",
      "type": "istar.AndRefinementLink",
      "source": "b46a33b8-ac2a-4cd1-8500-e746c0c85218",
      "target": "e7eb3f41-7912-430e-bf3a-b2e0576d543b"
    },
    {
      "id": "4010602b-1e82-4712-9a29-eb565ac52a7f",
      "type": "istar.AndRefinementLink",
      "source": "a98c2a57-3103-4996-a040-027e2fa7b5c9",
      "target": "61ca99d1-6d04-4225-9407-dd781f85edfc"
    },
    {
      "id": "8a2b5acf-3482-460b-b7ab-2ae8fcc09e1b",
      "type": "istar.AndRefinementLink",
      "source": "61ca99d1-6d04-4225-9407-dd781f85edfc",
      "target": "e7eb3f41-7912-430e-bf3a-b2e0576d543b"
    },
    {
      "id": "a3b057bc-7856-442a-8843-bc90734d1ddb",
      "type": "istar.AndRefinementLink",
      "source": "e7eb3f41-7912-430e-bf3a-b2e0576d543b",
      "target": "ab99b45b-ee62-4a1c-9d4d-1312dbfd3d7d"
    },
    {
      "id": "9010e60f-fd23-4141-a1a4-610a1b182b98",
      "type": "istar.AndRefinementLink",
      "source": "9f263aa4-58c7-4900-9da9-59e0f3a49d90",
      "target": "849e8f32-a215-45c3-a85a-e900f6cdc7e8"
    },
    {
      "id": "30c20e3d-f690-4e6c-bbb7-3feebf15b05c",
      "type": "istar.AndRefinementLink",
      "source": "9f263aa4-58c7-4900-9da9-59e0f3a49d90",
      "target": "730c43f4-cb00-4db4-8571-939244e85803"
    },
    {
      "id": "aea15abf-a37d-4fe4-89a0-e2492912f1f7",
      "type": "istar.AndRefinementLink",
      "source": "db0e6179-34a2-4039-b724-41d106878f29",
      "target": "afa3db48-55e4-4f1c-9208-42d0335e3ccb"
    },
    {
      "id": "ab12a5c0-3c74-4f67-82bd-882b7dee13bb",
      "type": "istar.AndRefinementLink",
      "source": "c0bf8e95-dc7a-4fbd-bcf7-3063599ba897",
      "target": "afa3db48-55e4-4f1c-9208-42d0335e3ccb"
    },
    {
      "id": "6d898e4b-b26b-45cf-a043-15a38afdf660",
      "type": "istar.AndRefinementLink",
      "source": "c88bec8e-2a41-4747-b11c-6d34fe678d6b",
      "target": "afa3db48-55e4-4f1c-9208-42d0335e3ccb"
    },
    {
      "id": "f12de801-1b2c-4303-b02d-77e656a685bf",
      "type": "istar.AndRefinementLink",
      "source": "3adbe37b-23c8-4a63-b037-2b8ee41e234d",
      "target": "afa3db48-55e4-4f1c-9208-42d0335e3ccb"
    },
    {
      "id": "813c590a-71d1-4fb8-b8f4-640080df2986",
      "type": "istar.AndRefinementLink",
      "source": "afa3db48-55e4-4f1c-9208-42d0335e3ccb",
      "target": "6cb6089f-01a3-467f-a9c1-290cdd511a5f"
    },
    {
      "id": "62ec34c7-1a25-422c-8128-b6f5132239fa",
      "type": "istar.AndRefinementLink",
      "source": "5d39cf50-4b49-4256-a4e3-6b9d4f1f3332",
      "target": "6387ad89-8fff-4612-a7aa-21116cf24e9f"
    },
    {
      "id": "31acd8ca-16d6-4218-96b8-2e35c4487e27",
      "type": "istar.AndRefinementLink",
      "source": "13f545ed-effc-4a45-a3cb-2667cfe776db",
      "target": "6387ad89-8fff-4612-a7aa-21116cf24e9f"
    },
    {
      "id": "ec7e5514-368a-404e-8d5e-e4c8d15a7972",
      "type": "istar.AndRefinementLink",
      "source": "652ead7a-1d51-4f5c-bb03-c713ec416dfb",
      "target": "6387ad89-8fff-4612-a7aa-21116cf24e9f"
    },
    {
      "id": "724352f1-e3e0-476b-adcd-65f2ef4876b4",
      "type": "istar.AndRefinementLink",
      "source": "3800ce9d-26e7-49ca-bebf-a5bb542eb689",
      "target": "0d840cbe-8560-4d92-bfad-3e05102d3d9b"
    },
    {
      "id": "376f4c9f-85bf-4816-95fc-23f4d949b3e9",
      "type": "istar.AndRefinementLink",
      "source": "7797320b-7785-4279-b652-ba73d1b854d1",
      "target": "0d840cbe-8560-4d92-bfad-3e05102d3d9b"
    },
    {
      "id": "24ff4f07-1dce-41a2-bf1e-5d39eae15897",
      "type": "istar.AndRefinementLink",
      "source": "1cd6e8e4-997b-4d19-b278-70287bfa5e66",
      "target": "0d840cbe-8560-4d92-bfad-3e05102d3d9b"
    },
    {
      "id": "3fee41ba-c9c9-48f0-b263-8fbc09f55fd8",
      "type": "istar.AndRefinementLink",
      "source": "9b7a67ec-8a8b-4922-b067-17c74ba7db19",
      "target": "0d840cbe-8560-4d92-bfad-3e05102d3d9b"
    },
    {
      "id": "58ed5260-bb83-4d05-9202-3c3771d340c3",
      "type": "istar.AndRefinementLink",
      "source": "563ed521-20f5-4591-a806-ca4300cdd9cc",
      "target": "14c11dd2-55c1-456a-b9b7-2c169975fee3"
    },
    {
      "id": "15ccb432-bf58-42c4-864d-119fb21f276c",
      "type": "istar.AndRefinementLink",
      "source": "d11712ef-2617-4805-9709-ebfa849a22ab",
      "target": "14c11dd2-55c1-456a-b9b7-2c169975fee3"
    },
    {
      "id": "5b69f439-f268-4312-a242-6de6e3e17d5e",
      "type": "istar.AndRefinementLink",
      "source": "0b3d1c92-f285-40c9-82bb-357db78dd3a9",
      "target": "14c11dd2-55c1-456a-b9b7-2c169975fee3"
    },
    {
      "id": "368361f8-13f9-4fc0-8a75-87c67930b24a",
      "type": "istar.AndRefinementLink",
      "source": "c5eb9f84-cc3c-46cf-b18c-dea09df2d320",
      "target": "14c11dd2-55c1-456a-b9b7-2c169975fee3"
    },
    {
      "id": "61d2c4cb-c0da-4620-91c1-a54bcc96d49b",
      "type": "istar.AndRefinementLink",
      "source": "433d2d12-4897-432b-944d-145339dcf6ad",
      "target": "5d39cf50-4b49-4256-a4e3-6b9d4f1f3332"
    },
    {
      "id": "ae52bb70-52dc-4ca1-aa5e-bfcca6d1e926",
      "type": "istar.AndRefinementLink",
      "source": "bc50f072-ff5f-48be-ade2-c8a389423457",
      "target": "5d39cf50-4b49-4256-a4e3-6b9d4f1f3332"
    },
    {
      "id": "f8b60f57-9e27-4225-b709-303ece3da9e2",
      "type": "istar.AndRefinementLink",
      "source": "8308812a-242c-4153-996e-6d39cfa9eb6d",
      "target": "5d39cf50-4b49-4256-a4e3-6b9d4f1f3332"
    },
    {
      "id": "541295ac-03d8-4d0b-858e-14cb440cb64d",
      "type": "istar.AndRefinementLink",
      "source": "926bdd1f-0d56-40bd-aa52-e009528a8b18",
      "target": "5d39cf50-4b49-4256-a4e3-6b9d4f1f3332"
    },
    {
      "id": "0a9c5205-9e5a-4ea9-a522-d4aee4b4146f",
      "type": "istar.AndRefinementLink",
      "source": "79189087-e77a-4157-af5b-d0b655c84087",
      "target": "13f545ed-effc-4a45-a3cb-2667cfe776db"
    },
    {
      "id": "d77391c6-a6c7-42dd-9a1b-5a6383dc902f",
      "type": "istar.AndRefinementLink",
      "source": "8234aacf-9d18-46ab-a4fd-43fc5e0bfb80",
      "target": "13f545ed-effc-4a45-a3cb-2667cfe776db"
    },
    {
      "id": "ea52c3a5-3294-455b-96e4-68f4a2e58ffb",
      "type": "istar.AndRefinementLink",
      "source": "57396091-c7da-40d8-b709-a8cbc67ed3bd",
      "target": "13f545ed-effc-4a45-a3cb-2667cfe776db"
    },
    {
      "id": "09c7a917-2e00-4062-bd4e-0d73d42ffe40",
      "type": "istar.AndRefinementLink",
      "source": "5c447ebe-427c-4520-a4bc-a0fc89747c56",
      "target": "13f545ed-effc-4a45-a3cb-2667cfe776db"
    },
    {
      "id": "d9bfb4a6-d974-4a31-95f7-94a601f7b96c",
      "type": "istar.AndRefinementLink",
      "source": "d8c62d3b-12f3-4225-bda6-a39875779963",
      "target": "652ead7a-1d51-4f5c-bb03-c713ec416dfb"
    },
    {
      "id": "3ad6c5e8-5843-4131-91e7-e53ecb9a3d40",
      "type": "istar.AndRefinementLink",
      "source": "d200a2b3-4554-4cb4-ba7c-9a1a6efbca63",
      "target": "652ead7a-1d51-4f5c-bb03-c713ec416dfb"
    },
    {
      "id": "41bc9348-3860-417a-9148-c533d9be00de",
      "type": "istar.AndRefinementLink",
      "source": "8f9b96df-733e-4b4f-b268-a3eda1981970",
      "target": "652ead7a-1d51-4f5c-bb03-c713ec416dfb"
    },
    {
      "id": "b762db11-592a-4b79-93ae-4ac72d75f7fc",
      "type": "istar.AndRefinementLink",
      "source": "70b901d7-4314-4a9e-99de-e7836fc561a3",
      "target": "652ead7a-1d51-4f5c-bb03-c713ec416dfb"
    },
    {
      "id": "d77b2d4a-8821-4eb6-b5f9-311488b23610",
      "type": "istar.AndRefinementLink",
      "source": "f1e36a11-6ead-4610-bd1f-cdea39328782",
      "target": "03db365e-4a50-4264-b262-a29abe45e861"
    },
    {
      "id": "a90c3c02-a354-41c6-a8f8-c1659b23027a",
      "type": "istar.AndRefinementLink",
      "source": "cd9f7383-49c5-413b-863b-ed27ab7a030b",
      "target": "03db365e-4a50-4264-b262-a29abe45e861"
    },
    {
      "id": "99c6a93f-1420-4401-9343-605b8318b057",
      "type": "istar.AndRefinementLink",
      "source": "4feda6ce-ab3b-4307-82e8-bd2be387d9f5",
      "target": "bd5e481f-e93b-4dfe-8daf-3d1fc91e6a04"
    },
    {
      "id": "38509bd1-be57-414c-b4b8-cf5964f72208",
      "type": "istar.AndRefinementLink",
      "source": "5f7c3633-1c1d-405b-b1ba-b55fb7b24d81",
      "target": "b6fad3f3-f4a6-4ef1-a810-edf8075230b9"
    },
    {
      "id": "d7a004f8-fbeb-4c0a-b278-172b66dff912",
      "type": "istar.AndRefinementLink",
      "source": "b3593241-9261-4747-96d1-07111d797a5f",
      "target": "5f7c3633-1c1d-405b-b1ba-b55fb7b24d81"
    },
    {
      "id": "6a9d1186-18de-4138-8fda-b21cd0c1cdef",
      "type": "istar.AndRefinementLink",
      "source": "a4063774-76dd-4abe-9985-16cab637385a",
      "target": "5f7c3633-1c1d-405b-b1ba-b55fb7b24d81"
    },
    {
      "id": "00d89c0e-9011-437f-9885-759729046f9c",
      "type": "istar.AndRefinementLink",
      "source": "258525fb-62db-4b18-a690-b286e227fb61",
      "target": "5f7c3633-1c1d-405b-b1ba-b55fb7b24d81"
    },
    {
      "id": "2fd56116-ef5a-452c-ba4b-b7934c5d4970",
      "type": "istar.AndRefinementLink",
      "source": "dae48757-bc8f-4e8a-a52c-1653edd2d8a8",
      "target": "5f7c3633-1c1d-405b-b1ba-b55fb7b24d81"
    },
    {
      "id": "ce62fe0d-e604-48e6-95c2-24a11fe35ee1",
      "type": "istar.AndRefinementLink",
      "source": "ad38ed43-2c72-415f-9ead-2dfc675b6e63",
      "target": "73aa8b9c-7ad4-4328-a317-7c97a5c8f070"
    },
    {
      "id": "8ee208ba-d627-42b6-b75f-f171f6679c02",
      "type": "istar.AndRefinementLink",
      "source": "67c155ea-d2b2-4044-bf94-419d3226e75d",
      "target": "73aa8b9c-7ad4-4328-a317-7c97a5c8f070"
    },
    {
      "id": "e46e09a5-ddc1-4637-99a3-248c69f4b323",
      "type": "istar.AndRefinementLink",
      "source": "38b683c0-067c-44f6-a1b7-692d424519c8",
      "target": "73aa8b9c-7ad4-4328-a317-7c97a5c8f070"
    },
    {
      "id": "4332ca12-2da8-424a-b85e-9a2e71da9da7",
      "type": "istar.AndRefinementLink",
      "source": "51d3d103-64b8-4baa-a858-a8127819be34",
      "target": "73aa8b9c-7ad4-4328-a317-7c97a5c8f070"
    },
    {
      "id": "0a3fd3d6-ffe6-46b9-9a04-0bbde53e8ca5",
      "type": "istar.AndRefinementLink",
      "source": "4fa00662-bd2d-42ea-be8f-edcaaf98ad17",
      "target": "03e2bb09-08f8-433b-b595-8aa48344bc9d"
    },
    {
      "id": "d333f412-8ee6-4a79-892b-fe321ee6f82a",
      "type": "istar.AndRefinementLink",
      "source": "afe3a0a7-1bae-434b-8e2c-44d4514505cd",
      "target": "03e2bb09-08f8-433b-b595-8aa48344bc9d"
    },
    {
      "id": "927ab09f-9a82-448d-acd8-5e0276321d14",
      "type": "istar.AndRefinementLink",
      "source": "a8b85060-b6c1-426e-aa97-81901a3194f3",
      "target": "03e2bb09-08f8-433b-b595-8aa48344bc9d"
    },
    {
      "id": "1eb22282-92f9-4d85-9c2b-68ace95dc1ab",
      "type": "istar.AndRefinementLink",
      "source": "95293d9c-792e-4e6e-80c3-40795e78f0ec",
      "target": "03e2bb09-08f8-433b-b595-8aa48344bc9d"
    },
    {
      "id": "467c55b0-1fb3-4e5d-aba4-56614f577d33",
      "type": "istar.AndRefinementLink",
      "source": "03e2bb09-08f8-433b-b595-8aa48344bc9d",
      "target": "6387ad89-8fff-4612-a7aa-21116cf24e9f"
    },
    {
      "id": "1ad7f21c-6bfe-4d39-b84e-233b2ee5a711",
      "type": "istar.AndRefinementLink",
      "source": "73aa8b9c-7ad4-4328-a317-7c97a5c8f070",
      "target": "082fdbb5-7211-4b41-88fa-84b0f337d6a7"
    },
    {
      "id": "d4e9a58c-9c6c-4718-8174-0cf7f16cf0e7",
      "type": "istar.AndRefinementLink",
      "source": "af1d9884-2ea6-43b3-bcec-544c34acf4be",
      "target": "082fdbb5-7211-4b41-88fa-84b0f337d6a7"
    },
    {
      "id": "ea43730f-5cf6-42e3-a24f-6d79adbf9d48",
      "type": "istar.AndRefinementLink",
      "source": "9e6b1c43-cd00-451b-bd8a-f9799f711cae",
      "target": "af1d9884-2ea6-43b3-bcec-544c34acf4be"
    },
    {
      "id": "adf855a5-03db-4d7a-9d05-cf51848a321d",
      "type": "istar.AndRefinementLink",
      "source": "c323e003-f33b-4f64-be47-af325143335b",
      "target": "af1d9884-2ea6-43b3-bcec-544c34acf4be"
    },
    {
      "id": "f7e7e5b2-a5ba-4424-9ff6-11e4d7c04d30",
      "type": "istar.AndRefinementLink",
      "source": "99d33f77-e6b2-4eaa-87c6-ec22f7b524e7",
      "target": "af1d9884-2ea6-43b3-bcec-544c34acf4be"
    },
    {
      "id": "0fbe3549-f983-4f7a-a5ed-8f0b5daf6fe4",
      "type": "istar.AndRefinementLink",
      "source": "55dbb959-ba5e-4000-a850-cc0a646f414c",
      "target": "af1d9884-2ea6-43b3-bcec-544c34acf4be"
    },
    {
      "id": "204b5f32-1bc0-4d7c-be62-1ce2d9378f74",
      "type": "istar.AndRefinementLink",
      "source": "3c4dc525-cf9a-434e-990e-ebaaf22ce441",
      "target": "4027113f-ff41-448e-ae93-d772c2894919"
    },
    {
      "id": "0e63b4ad-d0a3-461d-8bcc-9c66c1b5523a",
      "type": "istar.AndRefinementLink",
      "source": "0c53906d-f5b1-4979-a2d5-8c2ff5a248c2",
      "target": "4027113f-ff41-448e-ae93-d772c2894919"
    },
    {
      "id": "e5ec3fe9-1f3d-4b94-ab99-99f166fd6e9b",
      "type": "istar.AndRefinementLink",
      "source": "e90cf177-f74e-44b9-9e1e-12d9996e6341",
      "target": "4027113f-ff41-448e-ae93-d772c2894919"
    },
    {
      "id": "2159d84c-dfa5-47c6-bfc4-62116239bfb7",
      "type": "istar.AndRefinementLink",
      "source": "0a67b1d7-b996-43ae-992d-becd42f9ed43",
      "target": "4027113f-ff41-448e-ae93-d772c2894919"
    },
    {
      "id": "c561029c-1564-48e9-be62-0fe7c5b53a02",
      "type": "istar.AndRefinementLink",
      "source": "4027113f-ff41-448e-ae93-d772c2894919",
      "target": "082fdbb5-7211-4b41-88fa-84b0f337d6a7"
    },
    {
      "id": "827e80fc-892f-42ea-8a51-9a08c493a195",
      "type": "istar.AndRefinementLink",
      "source": "ce2a3380-c5b4-4b6a-9a00-f086c3f0c1c0",
      "target": "36999bfa-ab41-4407-abad-126affb42631"
    },
    {
      "id": "bedc5e3d-b7bd-4e5b-a9c8-a999d8e92d01",
      "type": "istar.AndRefinementLink",
      "source": "30851dec-60b3-41a9-97ec-99224d5f66f4",
      "target": "36999bfa-ab41-4407-abad-126affb42631"
    },
    {
      "id": "e1731912-da5c-45dc-be43-8e6f50b9e080",
      "type": "istar.AndRefinementLink",
      "source": "af30e0ff-f527-47d5-a6f3-a418746749a2",
      "target": "36999bfa-ab41-4407-abad-126affb42631"
    },
    {
      "id": "ffab4157-ba30-40c5-ada3-3d6eca3a016c",
      "type": "istar.AndRefinementLink",
      "source": "433ce46d-1ebe-4ba1-9df9-dc80c64fdede",
      "target": "36999bfa-ab41-4407-abad-126affb42631"
    },
    {
      "id": "46fb26ad-a7c7-4d1c-b188-296b78896907",
      "type": "istar.AndRefinementLink",
      "source": "36999bfa-ab41-4407-abad-126affb42631",
      "target": "082fdbb5-7211-4b41-88fa-84b0f337d6a7"
    },
    {
      "id": "eef97a77-89b1-4736-833b-ceb965339403",
      "type": "istar.AndRefinementLink",
      "source": "c0d4f45f-1973-40c7-9d1e-1562f262f439",
      "target": "8454e6a5-43bb-474f-aa4c-885c5b6d5c5c"
    },
    {
      "id": "c892fc59-6da8-4129-88d8-dbbff2bf0bb1",
      "type": "istar.AndRefinementLink",
      "source": "4715f6a4-d580-4bd6-81fa-f93a944769b0",
      "target": "8454e6a5-43bb-474f-aa4c-885c5b6d5c5c"
    },
    {
      "id": "af60843f-a52b-4b07-bfbb-8ec2312b8207",
      "type": "istar.AndRefinementLink",
      "source": "8454e6a5-43bb-474f-aa4c-885c5b6d5c5c",
      "target": "082fdbb5-7211-4b41-88fa-84b0f337d6a7"
    },
    {
      "id": "78453e36-f9dd-455b-8ba8-ff2236823116",
      "type": "istar.AndRefinementLink",
      "source": "1552dab6-78ed-4d71-b92c-e7ac9bbc0a7b",
      "target": "4715f6a4-d580-4bd6-81fa-f93a944769b0"
    },
    {
      "id": "61038b04-e15e-454c-a9a9-2c95623b1515",
      "type": "istar.AndRefinementLink",
      "source": "5231331f-0ff9-498c-9c6e-2b00a9339fe2",
      "target": "4715f6a4-d580-4bd6-81fa-f93a944769b0"
    },
    {
      "id": "e2b7eb70-1214-43a4-8ce6-5b58cbcb8b4c",
      "type": "istar.AndRefinementLink",
      "source": "a9edf335-563d-498d-a488-1425992ad3c1",
      "target": "4715f6a4-d580-4bd6-81fa-f93a944769b0"
    },
    {
      "id": "c054e151-e96f-47f8-9bfe-68684d3cf282",
      "type": "istar.AndRefinementLink",
      "source": "ff70869e-a164-44f7-87d5-78925dfc7f47",
      "target": "4715f6a4-d580-4bd6-81fa-f93a944769b0"
    },
    {
      "id": "2f8bac8e-51b1-4724-a71b-0a74fc9d85a7",
      "type": "istar.AndRefinementLink",
      "source": "6732ed01-8212-41aa-baa6-32b74cf9c89e",
      "target": "c0d4f45f-1973-40c7-9d1e-1562f262f439"
    },
    {
      "id": "6da9ba5a-922b-487d-aa65-678cf79a7618",
      "type": "istar.AndRefinementLink",
      "source": "19093fd8-37d3-4c92-9e6c-86730e98c3c3",
      "target": "c0d4f45f-1973-40c7-9d1e-1562f262f439"
    },
    {
      "id": "63eb6823-34f5-4331-8180-98097ebb747a",
      "type": "istar.AndRefinementLink",
      "source": "adaa2619-47f9-462e-b20e-ae9e7e7dc87e",
      "target": "c0d4f45f-1973-40c7-9d1e-1562f262f439"
    },
    {
      "id": "d8c119dc-666b-4608-9b34-0fd71f547c73",
      "type": "istar.AndRefinementLink",
      "source": "16e66b0e-52fe-4c28-9b73-7acd8acf5e16",
      "target": "c0d4f45f-1973-40c7-9d1e-1562f262f439"
    },
    {
      "id": "d180e033-2ad3-4e59-b88d-afe75fd2d279",
      "type": "istar.AndRefinementLink",
      "source": "d8ae94bf-dce8-4e13-8518-dada0531acac",
      "target": "03db365e-4a50-4264-b262-a29abe45e861"
    },
    {
      "id": "c1c37a1a-a043-4314-9652-30d1d2d61cce",
      "type": "istar.AndRefinementLink",
      "source": "6ddb376a-c167-4b52-8478-48ecffc8117c",
      "target": "03db365e-4a50-4264-b262-a29abe45e861"
    },
    {
      "id": "deeb4b60-e4b4-4e1d-b336-af6f0002e06c",
      "type": "istar.AndRefinementLink",
      "source": "8d88934e-edbf-431d-a32b-3abb3f7d8b8b",
      "target": "3d016f63-b215-4f8e-96eb-11b1fa1e184d"
    },
    {
      "id": "b1cf5675-cecb-45d1-b9cd-ecb6f291ac3c",
      "type": "istar.AndRefinementLink",
      "source": "05d72456-cb34-442d-b098-11cabdd8b5d1",
      "target": "3d016f63-b215-4f8e-96eb-11b1fa1e184d"
    },
    {
      "id": "6541fd16-e0a1-4a17-beba-77e83efc328f",
      "type": "istar.AndRefinementLink",
      "source": "121a9626-5a8f-4ecf-85a4-41aec411cc94",
      "target": "3d016f63-b215-4f8e-96eb-11b1fa1e184d"
    },
    {
      "id": "3e13d054-e0db-458a-bc18-72738d894d9f",
      "type": "istar.AndRefinementLink",
      "source": "76bb72ac-22bc-41b9-ae16-a8b68c3608ab",
      "target": "3d016f63-b215-4f8e-96eb-11b1fa1e184d"
    },
    {
      "id": "b78b2c38-c425-4724-80a0-1685a9df833f",
      "type": "istar.AndRefinementLink",
      "source": "2a7c0ae0-3489-4bc7-bca2-5978dc4baf80",
      "target": "3d016f63-b215-4f8e-96eb-11b1fa1e184d"
    },
    {
      "id": "5dceddb8-f443-427e-8fcd-395239d15a94",
      "type": "istar.AndRefinementLink",
      "source": "afa3db48-55e4-4f1c-9208-42d0335e3ccb",
      "target": "0472d403-efab-48f7-aed5-8a14190ad71a"
    },
    {
      "id": "2c4d6a72-581f-49e3-af46-03564b2556f9",
      "type": "istar.AndRefinementLink",
      "source": "3d016f63-b215-4f8e-96eb-11b1fa1e184d",
      "target": "afa3db48-55e4-4f1c-9208-42d0335e3ccb"
    },
    {
      "id": "845d1091-745b-46f1-8b8c-376d7d40327e",
      "type": "istar.AndRefinementLink",
      "source": "9f263aa4-58c7-4900-9da9-59e0f3a49d90",
      "target": "afa3db48-55e4-4f1c-9208-42d0335e3ccb"
    },
    {
      "id": "ede7ac75-5899-4fdd-8543-4e69b523fcc2",
      "type": "istar.AndRefinementLink",
      "source": "082fdbb5-7211-4b41-88fa-84b0f337d6a7",
      "target": "bd5e481f-e93b-4dfe-8daf-3d1fc91e6a04"
    },
    {
      "id": "501e6ba6-e276-49d1-8b54-1f454b25609f",
      "type": "istar.AndRefinementLink",
      "source": "d9a6c28a-a72f-4fb0-9840-78114e7825c6",
      "target": "082fdbb5-7211-4b41-88fa-84b0f337d6a7"
    },
    {
      "id": "5786cc2b-9eed-4ba9-a2fb-e7a34903f26a",
      "type": "istar.AndRefinementLink",
      "source": "03db365e-4a50-4264-b262-a29abe45e861",
      "target": "d9a6c28a-a72f-4fb0-9840-78114e7825c6"
    },
    {
      "id": "58f9dab1-0ab2-4edf-a234-fb4fcbb3ffd7",
      "type": "istar.AndRefinementLink",
      "source": "5f7c3633-1c1d-405b-b1ba-b55fb7b24d81",
      "target": "d9a6c28a-a72f-4fb0-9840-78114e7825c6"
    },
    {
      "id": "24b79be9-6624-4bab-b05b-3a4f74eda241",
      "type": "istar.AndRefinementLink",
      "source": "fe1c46f4-f696-4aa9-ba7b-94426a8aab5b",
      "target": "6387ad89-8fff-4612-a7aa-21116cf24e9f"
    },
    {
      "id": "96225684-f33a-4b99-8395-0b4f8606eca9",
      "type": "istar.AndRefinementLink",
      "source": "0d840cbe-8560-4d92-bfad-3e05102d3d9b",
      "target": "fe1c46f4-f696-4aa9-ba7b-94426a8aab5b"
    },
    {
      "id": "7c1cc9e1-8951-4a00-a781-43bb5e89c17c",
      "type": "istar.AndRefinementLink",
      "source": "14c11dd2-55c1-456a-b9b7-2c169975fee3",
      "target": "fe1c46f4-f696-4aa9-ba7b-94426a8aab5b"
    },
    {
      "id": "eb0764f9-b593-4edf-9c27-d257839a3721",
      "type": "istar.AndRefinementLink",
      "source": "4f637d55-6146-492b-a6f4-3a8f7c2bb17f",
      "target": "fe1c46f4-f696-4aa9-ba7b-94426a8aab5b"
    },
    {
      "id": "081a45c1-be9a-4052-98bf-32098ae87fc7",
      "type": "istar.AndRefinementLink",
      "source": "6edeb91f-1017-4082-a932-2f86c1da672e",
      "target": "4f637d55-6146-492b-a6f4-3a8f7c2bb17f"
    },
    {
      "id": "4a5403ed-99f8-4b7e-ab01-c983bd4e58e3",
      "type": "istar.AndRefinementLink",
      "source": "17c6f1f8-d5b6-489d-b096-ebe3f7adf12c",
      "target": "4f637d55-6146-492b-a6f4-3a8f7c2bb17f"
    },
    {
      "id": "f015f931-7715-429d-8435-3d0c192588ab",
      "type": "istar.AndRefinementLink",
      "source": "03a204df-155c-4c9a-ba2e-d2fe22f62f5b",
      "target": "4f637d55-6146-492b-a6f4-3a8f7c2bb17f"
    },
    {
      "id": "1baa20c6-fe7d-4870-b9ab-2d4ae909c4d8",
      "type": "istar.AndRefinementLink",
      "source": "b0be57cb-81ca-4886-810d-f8e331470194",
      "target": "4f637d55-6146-492b-a6f4-3a8f7c2bb17f"
    },
    {
      "id": "4756c616-4aaf-4550-8ecd-2fed2e31302c",
      "type": "istar.AndRefinementLink",
      "source": "1a3dd5d1-0c3e-453f-9bb2-7f79d3392098",
      "target": "61ca99d1-6d04-4225-9407-dd781f85edfc"
    },
    {
      "id": "dd4e9707-6576-472a-94c7-f751102e635b",
      "type": "istar.AndRefinementLink",
      "source": "5ee54c8b-8cd8-4965-8f7b-e2f599ea4039",
      "target": "03db365e-4a50-4264-b262-a29abe45e861"
    },
    {
      "id": "262043ee-5dbc-4af8-acba-7ac8001ea827",
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
    "927ab09f-9a82-448d-acd8-5e0276321d14": {
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
  "saveDate": "Thu, 22 Aug 2019 01:10:34 GMT",
  "diagram": {
    "width": 3886,
    "height": 1388,
    "name": "Welcome Model",
    "customProperties": {
      "Description": "Welcome to the piStar tool! This model describe some of the recent improvements in the tool.\n\nFor help using this tool, please check the Help menu above"
    }
  }
}
