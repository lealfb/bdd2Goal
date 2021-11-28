$(document).ready(function () {
    $('.modal-button-load-example').click(function () {
       //var titulos_fixo  = JSON.parse('[{"name":"Associar Notas já Publicadas a um Boletim Interno","result":"FAILURE"},{"name":"Associar Notas já Publicadas a um Boletim Interno Reservado","result":"ERROR"},{"name":"Atualizar Assunto Especifico Falha nome obrigatorio","result":"SUCCESS"},{"name":"Atualizar Assunto Especifico Sucesso","result":"SUCCESS"},{"name":"Atualizar Assunto Geral Falha nome obrigatorio","result":"FAILURE"},{"name":"Atualizar Assunto Geral Sucesso","result":"FAILURE"},{"name":"Atualizar Categoria Falha campos obrigatorios","result":"SUCCESS"},{"name":"Atualizar Categoria Falha descricao obrigatoria","result":"SUCCESS"},{"name":"Atualizar Categoria Falha nome obrigatorio","result":"SUCCESS"},{"name":"Atualizar Categoria Falha secao obrigatoria","result":"FAILURE"},{"name":"Atualizar Categoria Sucesso","result":"SUCCESS"},{"name":"Atualizar Funcao Falha descricao obrigatoria","result":"PENDING"},{"name":"Atualizar Funcao Falha nome obrigatorio","result":"PENDING"},{"name":"Atualizar Funcao Falha om obrigatoria","result":"PENDING"},{"name":"Atualizar Funcao Falha periodo obrigatorio","result":"PENDING"},{"name":"Atualizar Funcao Falha titular obrigatorio","result":"PENDING"},{"name":"Atualizar Funcao Sucesso","result":"PENDING"},{"name":"Atualizar Militar Falha Funcao vazia","result":"PENDING"},{"name":"Atualizar Militar Falha Secao vazia","result":"PENDING"},{"name":"Atualizar Militar Falha antiguidade vazia","result":"PENDING"},{"name":"Atualizar Militar Falha ativado vazio","result":"PENDING"},{"name":"Atualizar Militar Falha identidade vazia","result":"PENDING"},{"name":"Atualizar Militar Falha nome vazio","result":"PENDING"},{"name":"Atualizar Militar Falha nomeGuerra vazio","result":"PENDING"},{"name":"Atualizar Militar Falha posto vazio","result":"PENDING"},{"name":"Atualizar Militar Falha sexo vazio","result":"PENDING"},{"name":"Atualizar Militar Sucesso","result":"PENDING"},{"name":"Atualizar Militar falha qualificacao Vazia","result":"PENDING"},{"name":"Atualizar OM","result":"SUCCESS"},{"name":"Atualizar Organizacao Militar Falha ano obrigatoria","result":"PENDING"},{"name":"Atualizar Organizacao Militar Falha guarnicao obrigatoria","result":"PENDING"},{"name":"Atualizar Organizacao Militar Falha localizacao obrigatoria","result":"PENDING"},{"name":"Atualizar Organizacao Militar Falha nome obrigatorio","result":"PENDING"},{"name":"Atualizar Organizacao Militar Falha sigla obrigatoria","result":"PENDING"},{"name":"Atualizar Organizacao Militar Sucesso","result":"PENDING"},{"name":"Atualizar Parte Boletim Falha campos obrigatorios","result":"SUCCESS"},{"name":"Atualizar Parte Boletim Falha descricao obrigatoria","result":"SUCCESS"},{"name":"Atualizar Parte Boletim Falha posicao obrigatoria","result":"SUCCESS"},{"name":"Atualizar Parte Boletim Sucesso","result":"SUCCESS"},{"name":"Atualizar Posto/Graduacao Falha nome obrigatorio","result":"SUCCESS"},{"name":"Atualizar Posto/Graduacao Sucesso","result":"SUCCESS"},{"name":"Atualizar Qualificacao Militar Falha descricao obrigatoria","result":"SUCCESS"},{"name":"Atualizar Qualificacao Militar Sucesso","result":"SUCCESS"},{"name":"Atualizar Secao Boletim Falha Parte obrigatoria","result":"FAILURE"},{"name":"Atualizar Secao Boletim Falha descricao obrigatoria","result":"FAILURE"},{"name":"Atualizar Secao Boletim Falha posicao obrigatoria","result":"FAILURE"},{"name":"Atualizar Secao Boletim Sucesso","result":"FAILURE"},{"name":"Atualizar Secao Falha nome obrigatorio","result":"PENDING"},{"name":"Atualizar Secao Falha sigla obrigatoria","result":"PENDING"},{"name":"Atualizar Secao Sucesso","result":"PENDING"},{"name":"Atualizar Tipo de Boletim Falha abreviatura obrigatorio","result":"SUCCESS"},{"name":"Atualizar Tipo de Boletim Falha campos obrigatorios","result":"SUCCESS"},{"name":"Atualizar Tipo de Boletim Falha descricao obrigatoria","result":"SUCCESS"},{"name":"Atualizar Tipo de Boletim Sucesso","result":"SUCCESS"},{"name":"Atualizar Tipo de Documento Falha nome obrigatorio","result":"SUCCESS"},{"name":"Atualizar Tipo de Documento Sucesso","result":"SUCCESS"},{"name":"Atualizar tempo de serviço","result":"SUCCESS"},{"name":"Atualizar tempo de serviço","result":"SUCCESS"},{"name":"Atualizar workflow","result":"SUCCESS"},{"name":"Atualizar workflow","result":"SUCCESS"},{"name":"Atualizar workflow","result":"SUCCESS"},{"name":"Cadastrar Funcao Falha","result":"PENDING"},{"name":"Cadastrar Funcao Sucesso","result":"PENDING"},{"name":"Cadastrar Militar Falha antiguidade vazia","result":"PENDING"},{"name":"Cadastrar Militar Falha ativado vazio","result":"PENDING"},{"name":"Cadastrar Militar Falha cpf vazio","result":"PENDING"},{"name":"Cadastrar Militar Falha funcao vazia","result":"PENDING"},{"name":"Cadastrar Militar Falha identidade vazia","result":"PENDING"},{"name":"Cadastrar Militar Falha nascimento vazio","result":"PENDING"},{"name":"Cadastrar Militar Falha nome vazio","result":"PENDING"},{"name":"Cadastrar Militar Falha nomeGuerra vazio","result":"PENDING"},{"name":"Cadastrar Militar Falha om vazia","result":"PENDING"},{"name":"Cadastrar Militar Falha posto vazio","result":"PENDING"},{"name":"Cadastrar Militar Falha qm vazia","result":"PENDING"},{"name":"Cadastrar Militar Falha secao vazia","result":"PENDING"},{"name":"Cadastrar Militar Falha sexo vazio","result":"PENDING"},{"name":"Cadastrar Militar Sucesso","result":"PENDING"},{"name":"Cadastrar Secao Falha nome vazio","result":"PENDING"},{"name":"Cadastrar Secao Falha sigla vazia","result":"PENDING"},{"name":"Cadastrar Secao Sucesso","result":"PENDING"},{"name":"Chefe de Cmt/Ch/Dir aprova Nota e a envia para o Boletim","result":"SUCCESS"},{"name":"Chefe de SU/Div/Sec aprova Nota e a envia para Publicação","result":"SUCCESS"},{"name":"Criar Assunto Especifico Sucesso nome nulo","result":"SUCCESS"},{"name":"Criar Assunto Especifico sucesso","result":"SUCCESS"},{"name":"Criar Assunto Geral falha nome obrigatorio","result":"SUCCESS"},{"name":"Criar Assunto Geral sucesso","result":"FAILURE"},{"name":"Criar Assunto Geral sucesso secao nula","result":"SUCCESS"},{"name":"Criar Categoria","result":"SUCCESS"},{"name":"Criar OM","result":"SUCCESS"},{"name":"Criar Organizacao Militar caminho feliz","result":"PENDING"},{"name":"Criar Organizacao Militar com ano vazio","result":"PENDING"},{"name":"Criar Organizacao Militar com guarnicao vazia","result":"PENDING"},{"name":"Criar Organizacao Militar com localizacao vazia","result":"PENDING"},{"name":"Criar Organizacao Militar com nome vazio","result":"PENDING"},{"name":"Criar Organizacao Militar com sigla vazia","result":"PENDING"},{"name":"Criar Parte Boletim","result":"SUCCESS"},{"name":"Criar Posto/Graduação caminho feliz","result":"SUCCESS"},{"name":"Criar Posto/Graduação com mesmo nome, porem com letra maiúscula em um dos casos","result":"FAILURE"},{"name":"Criar Posto/Graduação com nome repetido","result":"SUCCESS"},{"name":"Criar Posto/Graduação com nome vazio","result":"SUCCESS"},{"name":"Criar Qualificacao Militar caminho feliz","result":"SUCCESS"},{"name":"Criar Qualificacao Militar com codigo repetido","result":"SUCCESS"},{"name":"Criar Qualificacao Militar com descricao vazia","result":"SUCCESS"},{"name":"Criar Secao Boletim","result":"SUCCESS"},{"name":"Criar Tipo de Boletim","result":"SUCCESS"},{"name":"Criar Tipo de Boletim com campos vazios","result":"SUCCESS"},{"name":"Criar Tipo de Boletim sem abreviatura","result":"SUCCESS"},{"name":"Criar Tipo de Boletim sem descricao","result":"SUCCESS"},{"name":"Criar Tipo de Documento","result":"SUCCESS"},{"name":"Criar workflow","result":"SUCCESS"},{"name":"Dessassociar notas publicadas a um boletim","result":"SUCCESS"},{"name":"Deve alterar Data de Publicação Boletim","result":"SUCCESS"},{"name":"Deve alterar Texto de Abertura","result":"SUCCESS"},{"name":"Deve alterar Texto de Fechamento","result":"SUCCESS"},{"name":"Deve criar Boletim","result":"SUCCESS"},{"name":"Deve criar Nota","result":"SUCCESS"},{"name":"Deve mostrar erro ao tentar Boletim sem Data de Publicação","result":"SUCCESS"},{"name":"Deve mostrar erro ao tentar Cadastrar Nota sem Data","result":"SUCCESS"},{"name":"Deve mostrar erro ao tentar Cadastrar Nota sem Texto de Abertura","result":"SUCCESS"},{"name":"Deve mostrar erro ao tentar Cadastrar Nota sem Texto de Fechamento","result":"SUCCESS"},{"name":"Deve mostrar erro ao tentar remover Data de Publicação","result":"SUCCESS"},{"name":"Deve mostrar erro ao tentar remover Texto de Abertura","result":"SUCCESS"},{"name":"Deve mostrar erro ao tentar remover Texto de Fechamento","result":"SUCCESS"},{"name":"Excluir Assunto Especifico caminho feliz","result":"SUCCESS"},{"name":"Excluir Assunto Especifico inexistente","result":"SUCCESS"},{"name":"Excluir Assunto Geral caminho feliz","result":"FAILURE"},{"name":"Excluir Assunto Geral inexistente","result":"SUCCESS"},{"name":"Excluir Boletim caminho feliz","result":"SUCCESS"},{"name":"Excluir Boletim inexistente","result":"SUCCESS"},{"name":"Excluir Categoria caminho feliz","result":"SUCCESS"},{"name":"Excluir Categoria inexistente","result":"SUCCESS"},{"name":"Excluir Funcao Inexistente","result":"PENDING"},{"name":"Excluir Funcao Sucesso","result":"PENDING"},{"name":"Excluir Militar Sucesso","result":"PENDING"},{"name":"Excluir Militar inexistente","result":"PENDING"},{"name":"Excluir Nota caminho feliz","result":"SUCCESS"},{"name":"Excluir Nota do Boletim caminho feliz","result":"PENDING"},{"name":"Excluir Nota do Boletim inexistente","result":"PENDING"},{"name":"Excluir Nota inexistente","result":"SUCCESS"},{"name":"Excluir OM","result":"SUCCESS"},{"name":"Excluir Organizacao Militar caminho feliz","result":"PENDING"},{"name":"Excluir Organizacao Militar inexistente","result":"PENDING"},{"name":"Excluir Parte Boletim caminho feliz","result":"SUCCESS"},{"name":"Excluir Parte Boletim inexistente","result":"SUCCESS"},{"name":"Excluir Posto/Graduacao caminho feliz","result":"SUCCESS"},{"name":"Excluir Posto/Graduacao inexistente","result":"SUCCESS"},{"name":"Excluir Qualificacao Militar caminho feliz","result":"SUCCESS"},{"name":"Excluir Qualificacao Militar inexistente","result":"SUCCESS"},{"name":"Excluir Secao Boletim caminho feliz","result":"FAILURE"},{"name":"Excluir Secao Boletim inexistente","result":"SUCCESS"},{"name":"Excluir Secao caminho feliz","result":"PENDING"},{"name":"Excluir Secao inexistente","result":"PENDING"},{"name":"Excluir Tipo de Boletim caminho feliz","result":"SUCCESS"},{"name":"Excluir Tipo de Boletim inexistente","result":"SUCCESS"},{"name":"Excluir Tipo de Documento caminho feliz","result":"SUCCESS"},{"name":"Excluir Tipo de Documento inexistente","result":"SUCCESS"},{"name":"Excluir tempo de serviço","result":"SUCCESS"},{"name":"Gerar PDF","result":"SUCCESS"},{"name":"Operador envia Nota para Aprovação","result":"SUCCESS"},{"name":"Visualizar Assunto Especifico caminho feliz","result":"SUCCESS"},{"name":"Visualizar Assunto Especifico caminho triste","result":"SUCCESS"},{"name":"Visualizar Assunto Geral caminho feliz","result":"FAILURE"},{"name":"Visualizar Assunto Geral caminho triste","result":"SUCCESS"},{"name":"Visualizar Categoria caminho feliz","result":"SUCCESS"},{"name":"Visualizar Categoria caminho triste","result":"SUCCESS"},{"name":"Visualizar Funcao Inexistente","result":"PENDING"},{"name":"Visualizar Funcao Sucesso","result":"PENDING"},{"name":"Visualizar Militar Sucesso","result":"PENDING"},{"name":"Visualizar Militar inexistente","result":"PENDING"},{"name":"Visualizar Organizacao Militar caminho feliz","result":"PENDING"},{"name":"Visualizar Organizacao Militar inexistente","result":"PENDING"},{"name":"Visualizar Parte Boletim caminho feliz","result":"SUCCESS"},{"name":"Visualizar Parte Boletim caminho triste","result":"SUCCESS"},{"name":"Visualizar Posto/Graduacao caminho feliz","result":"SUCCESS"},{"name":"Visualizar Posto/Graduacao caminho triste","result":"SUCCESS"},{"name":"Visualizar Qualificacao Militar caminho feliz","result":"SUCCESS"},{"name":"Visualizar Qualificacao Militar inexistente","result":"SUCCESS"},{"name":"Visualizar Secao Boletim caminho feliz","result":"FAILURE"},{"name":"Visualizar Secao Boletim caminho triste","result":"SUCCESS"},{"name":"Visualizar Secao caminho feliz","result":"PENDING"},{"name":"Visualizar Secao inexistente","result":"PENDING"},{"name":"Visualizar Tipo de Boletim caminho feliz","result":"SUCCESS"},{"name":"Visualizar Tipo de Boletim caminho triste","result":"SUCCESS"},{"name":"Visualizar Tipo de Documento caminho feliz","result":"SUCCESS"},{"name":"Visualizar Tipo de Documento caminho triste","result":"SUCCESS"},{"name":"Visualizar tempo de serviço","result":"SUCCESS"},{"name":"Visualizar workflow","result":"SUCCESS"}]');
       var titulos_fixo = JSON.parse('[{"name":"Atualizar Tipo de Boletim","result":"SUCCESS","oldLabel":"Atualizar Tipo de Boletim Sucesso","newLabel":"Atualizar Tipo de Boletim"},{"name":"Atualizar Organizacao Militar","result":"PENDING","oldLabel":"Atualizar Organizacao Militar Falha sigla obrigatoria","newLabel":"Atualizar Organizacao Militar"},{"name":"Excluir Categoria","result":"SUCCESS","oldLabel":"Excluir Categoria inexistente","newLabel":"Excluir Categoria"},{"name":"Cadastrar Secao","result":"PENDING","oldLabel":"Cadastrar Secao Falha sigla vazia","newLabel":"Cadastrar Secao"},{"name":"Atualizar Posto/Graduacao","result":"SUCCESS","oldLabel":"Atualizar Posto/Graduacao Falha nome obrigatorio","newLabel":"Atualizar Posto/Graduacao"},{"name":"Visualizar Secao","result":"PENDING","oldLabel":"Visualizar Secao inexistente","newLabel":"Visualizar Secao"},{"name":"Atualizar Parte Boletim","result":"SUCCESS","oldLabel":"Atualizar Parte Boletim Sucesso","newLabel":"Atualizar Parte Boletim"},{"name":"Criar Tipo de Boletim","result":"SUCCESS","oldLabel":"Criar Tipo de Boletim","newLabel":"Criar Tipo de Boletim"},{"name":"Atualizar Secao Boletim","result":"FAILURE","oldLabel":"Atualizar Secao Boletim Falha Parte obrigatoria","newLabel":"Atualizar Secao Boletim"},{"name":"Criar Notas para Boletim","result":"SUCCESS","oldLabel":"Deve mostrar erro ao tentar remover Texto de Fechamento","newLabel":"Criar Notas para Boletim"},{"name":"Excluir Militar","result":"PENDING","oldLabel":"Excluir Militar inexistente","newLabel":"Excluir Militar"},{"name":"Visualizar Parte Boletim","result":"SUCCESS","oldLabel":"Visualizar Parte Boletim caminho feliz","newLabel":"Visualizar Parte Boletim"},{"name":"Atualizar Funcao","result":"PENDING","oldLabel":"Atualizar Funcao Falha om obrigatoria","newLabel":"Atualizar Funcao"},{"name":"Visualizar Organizacao Militar","result":"PENDING","oldLabel":"Visualizar Organizacao Militar caminho feliz","newLabel":"Visualizar Organizacao Militar"},{"name":"Excluir Funcao","result":"PENDING","oldLabel":"Excluir Funcao Inexistente","newLabel":"Excluir Funcao"},{"name":"Excluir Nota do Boletim","result":"PENDING","oldLabel":"Excluir Nota do Boletim inexistente","newLabel":"Excluir Nota do Boletim"},{"name":"Criar Qualificacao Militar","result":"SUCCESS","oldLabel":"Criar Qualificacao Militar com codigo repetido","newLabel":"Criar Qualificacao Militar"},{"name":"Cadastrar Militar","result":"PENDING","oldLabel":"Cadastrar Militar Sucesso","newLabel":"Cadastrar Militar"},{"name":"Visualizar Assunto Especifico","result":"SUCCESS","oldLabel":"Visualizar Assunto Especifico caminho feliz","newLabel":"Visualizar Assunto Especifico"},{"name":"Enviar Notas para o Boletim","result":"SUCCESS","oldLabel":"Chefe de Cmt/Ch/Dir aprova Nota e a envia para o Boletim","newLabel":"Enviar Notas para o Boletim"},{"name":"Atualizar Secao","result":"PENDING","oldLabel":"Atualizar Secao Falha sigla obrigatoria","newLabel":"Atualizar Secao"},{"name":"Criar Assunto Especifico","result":"SUCCESS","oldLabel":"Criar Assunto Especifico Sucesso nome nulo","newLabel":"Criar Assunto Especifico"},{"name":"Cadastrar Funcao","result":"PENDING","oldLabel":"Cadastrar Funcao Falha","newLabel":"Cadastrar Funcao"},{"name":"Visualizar Militar","result":"PENDING","oldLabel":"Visualizar Militar inexistente","newLabel":"Visualizar Militar"},{"name":"Visualizar Categoria","result":"SUCCESS","oldLabel":"Visualizar Categoria caminho triste","newLabel":"Visualizar Categoria"},{"name":"Excluir Tipo de Boletim","result":"SUCCESS","oldLabel":"Excluir Tipo de Boletim inexistente","newLabel":"Excluir Tipo de Boletim"},{"name":"Atualizar Militar","result":"PENDING","oldLabel":"Atualizar Militar Falha nomeGuerra vazio","newLabel":"Atualizar Militar"},{"name":"Excluir Qualificacao Militar","result":"SUCCESS","oldLabel":"Excluir Qualificacao Militar caminho feliz","newLabel":"Excluir Qualificacao Militar"},{"name":"Enviar Notas para publicação","result":"SUCCESS","oldLabel":"Chefe de SU/Div/Sec aprova Nota e a envia para Publicação","newLabel":"Enviar Notas para publicação"},{"name":"Excluir Secao Boletim","result":"SUCCESS","oldLabel":"Excluir Secao Boletim inexistente","newLabel":"Excluir Secao Boletim"},{"name":"Enviar Notas para aprovação","result":"SUCCESS","oldLabel":"Operador envia Nota para Aprovação","newLabel":"Enviar Notas para aprovação"},{"name":"Excluir Boletim","result":"SUCCESS","oldLabel":"Excluir Boletim caminho feliz","newLabel":"Excluir Boletim"},{"name":"Excluir Secao","result":"PENDING","oldLabel":"Excluir Secao inexistente","newLabel":"Excluir Secao"},{"name":"Visualizar Posto/Graduacao","result":"SUCCESS","oldLabel":"Visualizar Posto/Graduacao caminho triste","newLabel":"Visualizar Posto/Graduacao"},{"name":"Visualizar Qualificacao Militar","result":"SUCCESS","oldLabel":"Visualizar Qualificacao Militar inexistente","newLabel":"Visualizar Qualificacao Militar"},{"name":"Visualizar Assunto Geral","result":"FAILURE","oldLabel":"Visualizar Assunto Geral caminho feliz","newLabel":"Visualizar Assunto Geral"},{"name":"Criar Boletins","result":"SUCCESS","oldLabel":"Deve mostrar erro ao tentar Boletim sem Data de Publicação","newLabel":"Criar Boletins"},{"name":"Criar Organizacao Militar","result":"PENDING","oldLabel":"Criar Organizacao Militar caminho feliz","newLabel":"Criar Organizacao Militar"},{"name":"Excluir Tipo de Documento","result":"SUCCESS","oldLabel":"Excluir Tipo de Documento inexistente","newLabel":"Excluir Tipo de Documento"},{"name":"Excluir Parte Boletim","result":"SUCCESS","oldLabel":"Excluir Parte Boletim caminho feliz","newLabel":"Excluir Parte Boletim"},{"name":"Associar Notas Publicadas a um Boletim","result":"ERROR","oldLabel":"Associar Notas já Publicadas a um Boletim Interno Reservado","newLabel":"Associar Notas Publicadas a um Boletim"},{"name":"Criar Assunto Geral","result":"SUCCESS","oldLabel":"Criar Assunto Geral falha nome obrigatorio","newLabel":"Criar Assunto Geral"},{"name":"Excluir Assunto Especifico","result":"SUCCESS","oldLabel":"Excluir Assunto Especifico inexistente","newLabel":"Excluir Assunto Especifico"},{"name":"Atualizar Assunto Geral","result":"FAILURE","oldLabel":"Atualizar Assunto Geral Sucesso","newLabel":"Atualizar Assunto Geral"},{"name":"Atualizar Qualificacao Militar","result":"SUCCESS","oldLabel":"Atualizar Qualificacao Militar Falha descricao obrigatoria","newLabel":"Atualizar Qualificacao Militar"},{"name":"Criar Posto/Graduação","result":"SUCCESS","oldLabel":"Criar Posto/Graduação com nome repetido","newLabel":"Criar Posto/Graduação"},{"name":"Visualizar Funcao","result":"PENDING","oldLabel":"Visualizar Funcao Inexistente","newLabel":"Visualizar Funcao"},{"name":"Excluir Nota","result":"SUCCESS","oldLabel":"Excluir Nota inexistente","newLabel":"Excluir Nota"},{"name":"Atualizar Categoria","result":"SUCCESS","oldLabel":"Atualizar Categoria Sucesso","newLabel":"Atualizar Categoria"},{"name":"Visualizar Secao Boletim","result":"FAILURE","oldLabel":"Visualizar Secao Boletim caminho feliz","newLabel":"Visualizar Secao Boletim"},{"name":"Atualizar Tipo de Documento","result":"SUCCESS","oldLabel":"Atualizar Tipo de Documento Falha nome obrigatorio","newLabel":"Atualizar Tipo de Documento"},{"name":"Visualizar Tipo de Boletim","result":"SUCCESS","oldLabel":"Visualizar Tipo de Boletim caminho triste","newLabel":"Visualizar Tipo de Boletim"},{"name":"Excluir Posto/Graduacao","result":"SUCCESS","oldLabel":"Excluir Posto/Graduacao caminho feliz","newLabel":"Excluir Posto/Graduacao"},{"name":"Excluir Assunto Geral","result":"FAILURE","oldLabel":"Excluir Assunto Geral caminho feliz","newLabel":"Excluir Assunto Geral"},{"name":"Excluir Organizacao Militar","result":"PENDING","oldLabel":"Excluir Organizacao Militar caminho feliz","newLabel":"Excluir Organizacao Militar"},{"name":"Criar Parte Boletim","result":"SUCCESS","oldLabel":"Criar Parte Boletim","newLabel":"Criar Parte Boletim"},{"name":"Atualizar Assunto Especifico","result":"SUCCESS","oldLabel":"Atualizar Assunto Especifico Falha nome obrigatorio","newLabel":"Atualizar Assunto Especifico"},{"name":"Visualizar Tipo de Documento","result":"SUCCESS","oldLabel":"Visualizar Tipo de Documento caminho feliz","newLabel":"Visualizar Tipo de Documento"},{"name":"Criar Secao Boletim","result":"SUCCESS","oldLabel":"Criar Secao Boletim","newLabel":"Criar Secao Boletim"},{"name":"Criar Categoria","result":"SUCCESS","oldLabel":"Criar Categoria","newLabel":"Criar Categoria"},{"name":"Criar Tipo de Documento","result":"SUCCESS","oldLabel":"Criar Tipo de Documento","newLabel":"Criar Tipo de Documento"}]');
       //var titulos_fixo = JSON.parse('[{"name":"Atualizar Tipo de Boletim Sucesso","result":"SUCCESS","oldLabel":"Atualizar Tipo de Boletim Sucesso","newLabel":"Atualizar Tipo de Boletim"},{"name":"Atualizar Organizacao Militar Falha sigla obrigatoria","result":"PENDING","oldLabel":"Atualizar Organizacao Militar Falha sigla obrigatoria","newLabel":"Atualizar Organizacao Militar"},{"name":"Excluir Categoria inexistente","result":"SUCCESS","oldLabel":"Excluir Categoria inexistente","newLabel":"Excluir Categoria"},{"name":"Atualizar Posto/Graduacao Falha nome obrigatorio","result":"SUCCESS","oldLabel":"Atualizar Posto/Graduacao Falha nome obrigatorio","newLabel":"Atualizar Posto/Graduacao"},{"name":"Cadastrar Secao Falha sigla vazia","result":"PENDING","oldLabel":"Cadastrar Secao Falha sigla vazia","newLabel":"Cadastrar Secao"},{"name":"Atualizar Organizacao Militar Falha localizacao obrigatoria","result":"PENDING","oldLabel":"Atualizar Organizacao Militar Falha localizacao obrigatoria","newLabel":"Atualizar Organizacao Militar"},{"name":"Criar Posto/Graduação com mesmo nome, porem com letra maiúscula em um dos casos","result":"FAILURE","oldLabel":"Criar Posto/Graduação com mesmo nome, porem com letra maiúscula em um dos casos","newLabel":"Criar Posto/Graduação"},{"name":"Visualizar Secao inexistente","result":"PENDING","oldLabel":"Visualizar Secao inexistente","newLabel":"Visualizar Secao"},{"name":"Atualizar Secao Boletim Falha Parte obrigatoria","result":"FAILURE","oldLabel":"Atualizar Secao Boletim Falha Parte obrigatoria","newLabel":"Atualizar Secao Boletim"},{"name":"Visualizar Qualificacao Militar inexistente","result":"SUCCESS","oldLabel":"Visualizar Qualificacao Militar inexistente","newLabel":"Visualizar Qualificacao Militar"},{"name":"Atualizar Parte Boletim Sucesso","result":"SUCCESS","oldLabel":"Atualizar Parte Boletim Sucesso","newLabel":"Atualizar Parte Boletim"},{"name":"Criar Tipo de Boletim","result":"SUCCESS","oldLabel":"Criar Tipo de Boletim","newLabel":"Criar Tipo de Boletim"},{"name":"Deve mostrar erro ao tentar remover Texto de Fechamento","result":"SUCCESS","oldLabel":"Deve mostrar erro ao tentar remover Texto de Fechamento","newLabel":"Criar Notas para Boletim"},{"name":"Excluir Posto/Graduacao inexistente","result":"SUCCESS","oldLabel":"Excluir Posto/Graduacao inexistente","newLabel":"Excluir Posto/Graduacao"},{"name":"Atualizar Secao Boletim Sucesso","result":"FAILURE","oldLabel":"Atualizar Secao Boletim Sucesso","newLabel":"Atualizar Secao Boletim"},{"name":"Excluir Militar inexistente","result":"PENDING","oldLabel":"Excluir Militar inexistente","newLabel":"Excluir Militar"},{"name":"Visualizar Parte Boletim caminho feliz","result":"SUCCESS","oldLabel":"Visualizar Parte Boletim caminho feliz","newLabel":"Visualizar Parte Boletim"},{"name":"Atualizar Organizacao Militar Falha guarnicao obrigatoria","result":"PENDING","oldLabel":"Atualizar Organizacao Militar Falha guarnicao obrigatoria","newLabel":"Atualizar Organizacao Militar"},{"name":"Atualizar Funcao Falha om obrigatoria","result":"PENDING","oldLabel":"Atualizar Funcao Falha om obrigatoria","newLabel":"Atualizar Funcao"},{"name":"Atualizar Parte Boletim Falha campos obrigatorios","result":"SUCCESS","oldLabel":"Atualizar Parte Boletim Falha campos obrigatorios","newLabel":"Atualizar Parte Boletim"},{"name":"Atualizar Assunto Geral Falha nome obrigatorio","result":"FAILURE","oldLabel":"Atualizar Assunto Geral Falha nome obrigatorio","newLabel":"Atualizar Assunto Geral"},{"name":"Excluir Funcao Inexistente","result":"PENDING","oldLabel":"Excluir Funcao Inexistente","newLabel":"Excluir Funcao"},{"name":"Visualizar Organizacao Militar caminho feliz","result":"PENDING","oldLabel":"Visualizar Organizacao Militar caminho feliz","newLabel":"Visualizar Organizacao Militar"},{"name":"Excluir Nota do Boletim inexistente","result":"PENDING","oldLabel":"Excluir Nota do Boletim inexistente","newLabel":"Excluir Nota do Boletim"},{"name":"Atualizar Funcao Falha periodo obrigatorio","result":"PENDING","oldLabel":"Atualizar Funcao Falha periodo obrigatorio","newLabel":"Atualizar Funcao"},{"name":"Atualizar Assunto Especifico Falha nome obrigatorio","result":"SUCCESS","oldLabel":"Atualizar Assunto Especifico Falha nome obrigatorio","newLabel":"Atualizar Assunto Especifico"},{"name":"Cadastrar Funcao Sucesso","result":"PENDING","oldLabel":"Cadastrar Funcao Sucesso","newLabel":"Cadastrar Funcao"},{"name":"Criar Qualificacao Militar com codigo repetido","result":"SUCCESS","oldLabel":"Criar Qualificacao Militar com codigo repetido","newLabel":"Criar Qualificacao Militar"},{"name":"Criar Assunto Especifico sucesso","result":"SUCCESS","oldLabel":"Criar Assunto Especifico sucesso","newLabel":"Criar Assunto Especifico"},{"name":"Excluir Funcao Sucesso","result":"PENDING","oldLabel":"Excluir Funcao Sucesso","newLabel":"Excluir Funcao"},{"name":"Visualizar Assunto Especifico caminho feliz","result":"SUCCESS","oldLabel":"Visualizar Assunto Especifico caminho feliz","newLabel":"Visualizar Assunto Especifico"},{"name":"Chefe de Cmt/Ch/Dir aprova Nota e a envia para o Boletim","result":"SUCCESS","oldLabel":"Chefe de Cmt/Ch/Dir aprova Nota e a envia para o Boletim","newLabel":"Enviar Notas para o Boletim"},{"name":"Visualizar Tipo de Documento caminho feliz","result":"SUCCESS","oldLabel":"Visualizar Tipo de Documento caminho feliz","newLabel":"Visualizar Tipo de Documento"},{"name":"Cadastrar Militar Sucesso","result":"PENDING","oldLabel":"Cadastrar Militar Sucesso","newLabel":"Cadastrar Militar"},{"name":"Cadastrar Militar Falha antiguidade vazia","result":"PENDING","oldLabel":"Cadastrar Militar Falha antiguidade vazia","newLabel":"Cadastrar Militar"},{"name":"Atualizar Tipo de Documento Sucesso","result":"SUCCESS","oldLabel":"Atualizar Tipo de Documento Sucesso","newLabel":"Atualizar Tipo de Documento"},{"name":"Cadastrar Secao Sucesso","result":"PENDING","oldLabel":"Cadastrar Secao Sucesso","newLabel":"Cadastrar Secao"},{"name":"Excluir Qualificacao Militar inexistente","result":"SUCCESS","oldLabel":"Excluir Qualificacao Militar inexistente","newLabel":"Excluir Qualificacao Militar"},{"name":"Visualizar Funcao Sucesso","result":"PENDING","oldLabel":"Visualizar Funcao Sucesso","newLabel":"Visualizar Funcao"},{"name":"Deve criar Nota","result":"SUCCESS","oldLabel":"Deve criar Nota","newLabel":"Criar Notas para Boletim"},{"name":"Atualizar Tipo de Boletim Falha campos obrigatorios","result":"SUCCESS","oldLabel":"Atualizar Tipo de Boletim Falha campos obrigatorios","newLabel":"Atualizar Tipo de Boletim"},{"name":"Deve mostrar erro ao tentar remover Texto de Abertura","result":"SUCCESS","oldLabel":"Deve mostrar erro ao tentar remover Texto de Abertura","newLabel":"Criar Notas para Boletim"},{"name":"Visualizar Secao Boletim caminho triste","result":"SUCCESS","oldLabel":"Visualizar Secao Boletim caminho triste","newLabel":"Visualizar Secao Boletim"},{"name":"Criar Assunto Geral sucesso secao nula","result":"SUCCESS","oldLabel":"Criar Assunto Geral sucesso secao nula","newLabel":"Criar Assunto Geral"},{"name":"Cadastrar Militar Falha sexo vazio","result":"PENDING","oldLabel":"Cadastrar Militar Falha sexo vazio","newLabel":"Cadastrar Militar"},{"name":"Atualizar Assunto Especifico Sucesso","result":"SUCCESS","oldLabel":"Atualizar Assunto Especifico Sucesso","newLabel":"Atualizar Assunto Especifico"},{"name":"Visualizar Militar Sucesso","result":"PENDING","oldLabel":"Visualizar Militar Sucesso","newLabel":"Visualizar Militar"},{"name":"Criar Organizacao Militar com localizacao vazia","result":"PENDING","oldLabel":"Criar Organizacao Militar com localizacao vazia","newLabel":"Criar Organizacao Militar"},{"name":"Criar Secao Boletim","result":"SUCCESS","oldLabel":"Criar Secao Boletim","newLabel":"Criar Secao Boletim"},{"name":"Atualizar Secao Falha sigla obrigatoria","result":"PENDING","oldLabel":"Atualizar Secao Falha sigla obrigatoria","newLabel":"Atualizar Secao"},{"name":"Cadastrar Militar Falha nome vazio","result":"PENDING","oldLabel":"Cadastrar Militar Falha nome vazio","newLabel":"Cadastrar Militar"},{"name":"Cadastrar Militar Falha nascimento vazio","result":"PENDING","oldLabel":"Cadastrar Militar Falha nascimento vazio","newLabel":"Cadastrar Militar"},{"name":"Criar Assunto Especifico Sucesso nome nulo","result":"SUCCESS","oldLabel":"Criar Assunto Especifico Sucesso nome nulo","newLabel":"Criar Assunto Especifico"},{"name":"Cadastrar Funcao Falha","result":"PENDING","oldLabel":"Cadastrar Funcao Falha","newLabel":"Cadastrar Funcao"},{"name":"Visualizar Militar inexistente","result":"PENDING","oldLabel":"Visualizar Militar inexistente","newLabel":"Visualizar Militar"},{"name":"Atualizar Funcao Falha descricao obrigatoria","result":"PENDING","oldLabel":"Atualizar Funcao Falha descricao obrigatoria","newLabel":"Atualizar Funcao"},{"name":"Visualizar Assunto Especifico caminho triste","result":"SUCCESS","oldLabel":"Visualizar Assunto Especifico caminho triste","newLabel":"Visualizar Assunto Especifico"},{"name":"Deve alterar Texto de Abertura","result":"SUCCESS","oldLabel":"Deve alterar Texto de Abertura","newLabel":"Criar Notas para Boletim"},{"name":"Visualizar Categoria caminho triste","result":"SUCCESS","oldLabel":"Visualizar Categoria caminho triste","newLabel":"Visualizar Categoria"},{"name":"Atualizar Funcao Falha nome obrigatorio","result":"PENDING","oldLabel":"Atualizar Funcao Falha nome obrigatorio","newLabel":"Atualizar Funcao"},{"name":"Atualizar Militar Falha Funcao vazia","result":"PENDING","oldLabel":"Atualizar Militar Falha Funcao vazia","newLabel":"Atualizar Militar"},{"name":"Atualizar Secao Falha nome obrigatorio","result":"PENDING","oldLabel":"Atualizar Secao Falha nome obrigatorio","newLabel":"Atualizar Secao"},{"name":"Excluir Tipo de Boletim inexistente","result":"SUCCESS","oldLabel":"Excluir Tipo de Boletim inexistente","newLabel":"Excluir Tipo de Boletim"},{"name":"Excluir Qualificacao Militar caminho feliz","result":"SUCCESS","oldLabel":"Excluir Qualificacao Militar caminho feliz","newLabel":"Excluir Qualificacao Militar"},{"name":"Excluir Secao Boletim inexistente","result":"SUCCESS","oldLabel":"Excluir Secao Boletim inexistente","newLabel":"Excluir Secao Boletim"},{"name":"Excluir Assunto Especifico caminho feliz","result":"SUCCESS","oldLabel":"Excluir Assunto Especifico caminho feliz","newLabel":"Excluir Assunto Especifico"},{"name":"Atualizar Militar Falha antiguidade vazia","result":"PENDING","oldLabel":"Atualizar Militar Falha antiguidade vazia","newLabel":"Atualizar Militar"},{"name":"Atualizar Militar Falha nomeGuerra vazio","result":"PENDING","oldLabel":"Atualizar Militar Falha nomeGuerra vazio","newLabel":"Atualizar Militar"},{"name":"Excluir Militar Sucesso","result":"PENDING","oldLabel":"Excluir Militar Sucesso","newLabel":"Excluir Militar"},{"name":"Visualizar Tipo de Boletim caminho feliz","result":"SUCCESS","oldLabel":"Visualizar Tipo de Boletim caminho feliz","newLabel":"Visualizar Tipo de Boletim"},{"name":"Chefe de SU/Div/Sec aprova Nota e a envia para Publicação","result":"SUCCESS","oldLabel":"Chefe de SU/Div/Sec aprova Nota e a envia para Publicação","newLabel":"Enviar Notas para publicação"},{"name":"Criar Organizacao Militar com guarnicao vazia","result":"PENDING","oldLabel":"Criar Organizacao Militar com guarnicao vazia","newLabel":"Criar Organizacao Militar"},{"name":"Excluir Nota caminho feliz","result":"SUCCESS","oldLabel":"Excluir Nota caminho feliz","newLabel":"Excluir Nota"},{"name":"Operador envia Nota para Aprovação","result":"SUCCESS","oldLabel":"Operador envia Nota para Aprovação","newLabel":"Enviar Notas para aprovação"},{"name":"Criar Qualificacao Militar caminho feliz","result":"SUCCESS","oldLabel":"Criar Qualificacao Militar caminho feliz","newLabel":"Criar Qualificacao Militar"},{"name":"Atualizar Organizacao Militar Sucesso","result":"PENDING","oldLabel":"Atualizar Organizacao Militar Sucesso","newLabel":"Atualizar Organizacao Militar"},{"name":"Excluir Boletim caminho feliz","result":"SUCCESS","oldLabel":"Excluir Boletim caminho feliz","newLabel":"Excluir Boletim"},{"name":"Deve mostrar erro ao tentar Cadastrar Nota sem Texto de Fechamento","result":"SUCCESS","oldLabel":"Deve mostrar erro ao tentar Cadastrar Nota sem Texto de Fechamento","newLabel":"Criar Notas para Boletim"},{"name":"Excluir Categoria caminho feliz","result":"SUCCESS","oldLabel":"Excluir Categoria caminho feliz","newLabel":"Excluir Categoria"},{"name":"Excluir Secao inexistente","result":"PENDING","oldLabel":"Excluir Secao inexistente","newLabel":"Excluir Secao"},{"name":"Criar Organizacao Militar com sigla vazia","result":"PENDING","oldLabel":"Criar Organizacao Militar com sigla vazia","newLabel":"Criar Organizacao Militar"},{"name":"Criar Tipo de Boletim com campos vazios","result":"SUCCESS","oldLabel":"Criar Tipo de Boletim com campos vazios","newLabel":"Criar Tipo de Boletim"},{"name":"Excluir Secao caminho feliz","result":"PENDING","oldLabel":"Excluir Secao caminho feliz","newLabel":"Excluir Secao"},{"name":"Excluir Nota do Boletim caminho feliz","result":"PENDING","oldLabel":"Excluir Nota do Boletim caminho feliz","newLabel":"Excluir Nota do Boletim"},{"name":"Visualizar Assunto Geral caminho feliz","result":"FAILURE","oldLabel":"Visualizar Assunto Geral caminho feliz","newLabel":"Visualizar Assunto Geral"},{"name":"Deve mostrar erro ao tentar Boletim sem Data de Publicação","result":"SUCCESS","oldLabel":"Deve mostrar erro ao tentar Boletim sem Data de Publicação","newLabel":"Criar Boletins"},{"name":"Atualizar Organizacao Militar Falha ano obrigatoria","result":"PENDING","oldLabel":"Atualizar Organizacao Militar Falha ano obrigatoria","newLabel":"Atualizar Organizacao Militar"},{"name":"Deve mostrar erro ao tentar Cadastrar Nota sem Data","result":"SUCCESS","oldLabel":"Deve mostrar erro ao tentar Cadastrar Nota sem Data","newLabel":"Criar Notas para Boletim"},{"name":"Visualizar Tipo de Documento caminho triste","result":"SUCCESS","oldLabel":"Visualizar Tipo de Documento caminho triste","newLabel":"Visualizar Tipo de Documento"},{"name":"Visualizar Organizacao Militar inexistente","result":"PENDING","oldLabel":"Visualizar Organizacao Militar inexistente","newLabel":"Visualizar Organizacao Militar"},{"name":"Excluir Assunto Geral inexistente","result":"SUCCESS","oldLabel":"Excluir Assunto Geral inexistente","newLabel":"Excluir Assunto Geral"},{"name":"Atualizar Categoria Falha descricao obrigatoria","result":"SUCCESS","oldLabel":"Atualizar Categoria Falha descricao obrigatoria","newLabel":"Atualizar Categoria"},{"name":"Excluir Organizacao Militar inexistente","result":"PENDING","oldLabel":"Excluir Organizacao Militar inexistente","newLabel":"Excluir Organizacao Militar"},{"name":"Criar Categoria","result":"SUCCESS","oldLabel":"Criar Categoria","newLabel":"Criar Categoria"},{"name":"Criar Tipo de Documento","result":"SUCCESS","oldLabel":"Criar Tipo de Documento","newLabel":"Criar Tipo de Documento"},{"name":"Atualizar Funcao Falha titular obrigatorio","result":"PENDING","oldLabel":"Atualizar Funcao Falha titular obrigatorio","newLabel":"Atualizar Funcao"},{"name":"Atualizar Tipo de Boletim Falha abreviatura obrigatorio","result":"SUCCESS","oldLabel":"Atualizar Tipo de Boletim Falha abreviatura obrigatorio","newLabel":"Atualizar Tipo de Boletim"},{"name":"Atualizar Categoria Falha nome obrigatorio","result":"SUCCESS","oldLabel":"Atualizar Categoria Falha nome obrigatorio","newLabel":"Atualizar Categoria"},{"name":"Visualizar Posto/Graduacao caminho triste","result":"SUCCESS","oldLabel":"Visualizar Posto/Graduacao caminho triste","newLabel":"Visualizar Posto/Graduacao"},{"name":"Deve alterar Data de Publicação Boletim","result":"SUCCESS","oldLabel":"Deve alterar Data de Publicação Boletim","newLabel":"Criar Boletins"},{"name":"Atualizar Militar Sucesso","result":"PENDING","oldLabel":"Atualizar Militar Sucesso","newLabel":"Atualizar Militar"},{"name":"Excluir Tipo de Documento inexistente","result":"SUCCESS","oldLabel":"Excluir Tipo de Documento inexistente","newLabel":"Excluir Tipo de Documento"},{"name":"Criar Organizacao Militar caminho feliz","result":"PENDING","oldLabel":"Criar Organizacao Militar caminho feliz","newLabel":"Criar Organizacao Militar"},{"name":"Atualizar Militar Falha identidade vazia","result":"PENDING","oldLabel":"Atualizar Militar Falha identidade vazia","newLabel":"Atualizar Militar"},{"name":"Associar Notas já Publicadas a um Boletim Interno Reservado","result":"ERROR","oldLabel":"Associar Notas já Publicadas a um Boletim Interno Reservado","newLabel":"Associar Notas Publicadas a um Boletim"},{"name":"Excluir Parte Boletim caminho feliz","result":"SUCCESS","oldLabel":"Excluir Parte Boletim caminho feliz","newLabel":"Excluir Parte Boletim"},{"name":"Atualizar Assunto Geral Sucesso","result":"FAILURE","oldLabel":"Atualizar Assunto Geral Sucesso","newLabel":"Atualizar Assunto Geral"},{"name":"Criar Assunto Geral falha nome obrigatorio","result":"SUCCESS","oldLabel":"Criar Assunto Geral falha nome obrigatorio","newLabel":"Criar Assunto Geral"},{"name":"Visualizar Posto/Graduacao caminho feliz","result":"SUCCESS","oldLabel":"Visualizar Posto/Graduacao caminho feliz","newLabel":"Visualizar Posto/Graduacao"},{"name":"Excluir Assunto Especifico inexistente","result":"SUCCESS","oldLabel":"Excluir Assunto Especifico inexistente","newLabel":"Excluir Assunto Especifico"},{"name":"Atualizar Secao Boletim Falha descricao obrigatoria","result":"FAILURE","oldLabel":"Atualizar Secao Boletim Falha descricao obrigatoria","newLabel":"Atualizar Secao Boletim"},{"name":"Deve alterar Texto de Fechamento","result":"SUCCESS","oldLabel":"Deve alterar Texto de Fechamento","newLabel":"Criar Notas para Boletim"},{"name":"Atualizar Militar Falha sexo vazio","result":"PENDING","oldLabel":"Atualizar Militar Falha sexo vazio","newLabel":"Atualizar Militar"},{"name":"Atualizar Posto/Graduacao Sucesso","result":"SUCCESS","oldLabel":"Atualizar Posto/Graduacao Sucesso","newLabel":"Atualizar Posto/Graduacao"},{"name":"Deve criar Boletim","result":"SUCCESS","oldLabel":"Deve criar Boletim","newLabel":"Criar Boletins"},{"name":"Deve mostrar erro ao tentar remover Data de Publicação","result":"SUCCESS","oldLabel":"Deve mostrar erro ao tentar remover Data de Publicação","newLabel":"Criar Boletins"},{"name":"Atualizar Tipo de Boletim Falha descricao obrigatoria","result":"SUCCESS","oldLabel":"Atualizar Tipo de Boletim Falha descricao obrigatoria","newLabel":"Atualizar Tipo de Boletim"},{"name":"Visualizar Assunto Geral caminho triste","result":"SUCCESS","oldLabel":"Visualizar Assunto Geral caminho triste","newLabel":"Visualizar Assunto Geral"},{"name":"Atualizar Militar falha qualificacao Vazia","result":"PENDING","oldLabel":"Atualizar Militar falha qualificacao Vazia","newLabel":"Atualizar Militar"},{"name":"Criar Organizacao Militar com nome vazio","result":"PENDING","oldLabel":"Criar Organizacao Militar com nome vazio","newLabel":"Criar Organizacao Militar"},{"name":"Atualizar Secao Sucesso","result":"PENDING","oldLabel":"Atualizar Secao Sucesso","newLabel":"Atualizar Secao"},{"name":"Atualizar Qualificacao Militar Falha descricao obrigatoria","result":"SUCCESS","oldLabel":"Atualizar Qualificacao Militar Falha descricao obrigatoria","newLabel":"Atualizar Qualificacao Militar"},{"name":"Associar Notas já Publicadas a um Boletim Interno","result":"FAILURE","oldLabel":"Associar Notas já Publicadas a um Boletim Interno","newLabel":"Associar Notas Publicadas a um Boletim"},{"name":"Visualizar Secao caminho feliz","result":"PENDING","oldLabel":"Visualizar Secao caminho feliz","newLabel":"Visualizar Secao"},{"name":"Excluir Tipo de Boletim caminho feliz","result":"SUCCESS","oldLabel":"Excluir Tipo de Boletim caminho feliz","newLabel":"Excluir Tipo de Boletim"},{"name":"Criar Posto/Graduação com nome repetido","result":"SUCCESS","oldLabel":"Criar Posto/Graduação com nome repetido","newLabel":"Criar Posto/Graduação"},{"name":"Visualizar Funcao Inexistente","result":"PENDING","oldLabel":"Visualizar Funcao Inexistente","newLabel":"Visualizar Funcao"},{"name":"Atualizar Secao Boletim Falha posicao obrigatoria","result":"FAILURE","oldLabel":"Atualizar Secao Boletim Falha posicao obrigatoria","newLabel":"Atualizar Secao Boletim"},{"name":"Excluir Nota inexistente","result":"SUCCESS","oldLabel":"Excluir Nota inexistente","newLabel":"Excluir Nota"},{"name":"Atualizar Militar Falha Secao vazia","result":"PENDING","oldLabel":"Atualizar Militar Falha Secao vazia","newLabel":"Atualizar Militar"},{"name":"Visualizar Parte Boletim caminho triste","result":"SUCCESS","oldLabel":"Visualizar Parte Boletim caminho triste","newLabel":"Visualizar Parte Boletim"},{"name":"Atualizar Qualificacao Militar Sucesso","result":"SUCCESS","oldLabel":"Atualizar Qualificacao Militar Sucesso","newLabel":"Atualizar Qualificacao Militar"},{"name":"Cadastrar Militar Falha posto vazio","result":"PENDING","oldLabel":"Cadastrar Militar Falha posto vazio","newLabel":"Cadastrar Militar"},{"name":"Criar Assunto Geral sucesso","result":"FAILURE","oldLabel":"Criar Assunto Geral sucesso","newLabel":"Criar Assunto Geral"},{"name":"Criar Tipo de Boletim sem descricao","result":"SUCCESS","oldLabel":"Criar Tipo de Boletim sem descricao","newLabel":"Criar Tipo de Boletim"},{"name":"Cadastrar Militar Falha ativado vazio","result":"PENDING","oldLabel":"Cadastrar Militar Falha ativado vazio","newLabel":"Cadastrar Militar"},{"name":"Cadastrar Militar Falha cpf vazio","result":"PENDING","oldLabel":"Cadastrar Militar Falha cpf vazio","newLabel":"Cadastrar Militar"},{"name":"Atualizar Categoria Sucesso","result":"SUCCESS","oldLabel":"Atualizar Categoria Sucesso","newLabel":"Atualizar Categoria"},{"name":"Atualizar Categoria Falha campos obrigatorios","result":"SUCCESS","oldLabel":"Atualizar Categoria Falha campos obrigatorios","newLabel":"Atualizar Categoria"},{"name":"Cadastrar Militar Falha secao vazia","result":"PENDING","oldLabel":"Cadastrar Militar Falha secao vazia","newLabel":"Cadastrar Militar"},{"name":"Cadastrar Militar Falha qm vazia","result":"PENDING","oldLabel":"Cadastrar Militar Falha qm vazia","newLabel":"Cadastrar Militar"},{"name":"Excluir Tipo de Documento caminho feliz","result":"SUCCESS","oldLabel":"Excluir Tipo de Documento caminho feliz","newLabel":"Excluir Tipo de Documento"},{"name":"Atualizar Militar Falha nome vazio","result":"PENDING","oldLabel":"Atualizar Militar Falha nome vazio","newLabel":"Atualizar Militar"},{"name":"Visualizar Secao Boletim caminho feliz","result":"FAILURE","oldLabel":"Visualizar Secao Boletim caminho feliz","newLabel":"Visualizar Secao Boletim"},{"name":"Excluir Boletim inexistente","result":"SUCCESS","oldLabel":"Excluir Boletim inexistente","newLabel":"Excluir Boletim"},{"name":"Criar Posto/Graduação caminho feliz","result":"SUCCESS","oldLabel":"Criar Posto/Graduação caminho feliz","newLabel":"Criar Posto/Graduação"},{"name":"Atualizar Parte Boletim Falha posicao obrigatoria","result":"SUCCESS","oldLabel":"Atualizar Parte Boletim Falha posicao obrigatoria","newLabel":"Atualizar Parte Boletim"},{"name":"Atualizar Tipo de Documento Falha nome obrigatorio","result":"SUCCESS","oldLabel":"Atualizar Tipo de Documento Falha nome obrigatorio","newLabel":"Atualizar Tipo de Documento"},{"name":"Atualizar Categoria Falha secao obrigatoria","result":"FAILURE","oldLabel":"Atualizar Categoria Falha secao obrigatoria","newLabel":"Atualizar Assunto Geral"},{"name":"Visualizar Tipo de Boletim caminho triste","result":"SUCCESS","oldLabel":"Visualizar Tipo de Boletim caminho triste","newLabel":"Visualizar Tipo de Boletim"},{"name":"Cadastrar Secao Falha nome vazio","result":"PENDING","oldLabel":"Cadastrar Secao Falha nome vazio","newLabel":"Cadastrar Secao"},{"name":"Excluir Posto/Graduacao caminho feliz","result":"SUCCESS","oldLabel":"Excluir Posto/Graduacao caminho feliz","newLabel":"Excluir Posto/Graduacao"},{"name":"Criar Posto/Graduação com nome vazio","result":"SUCCESS","oldLabel":"Criar Posto/Graduação com nome vazio","newLabel":"Criar Posto/Graduação"},{"name":"Visualizar Qualificacao Militar caminho feliz","result":"SUCCESS","oldLabel":"Visualizar Qualificacao Militar caminho feliz","newLabel":"Visualizar Qualificacao Militar"},{"name":"Excluir Parte Boletim inexistente","result":"SUCCESS","oldLabel":"Excluir Parte Boletim inexistente","newLabel":"Excluir Parte Boletim"},{"name":"Atualizar Organizacao Militar Falha nome obrigatorio","result":"PENDING","oldLabel":"Atualizar Organizacao Militar Falha nome obrigatorio","newLabel":"Atualizar Organizacao Militar"},{"name":"Deve mostrar erro ao tentar Cadastrar Nota sem Texto de Abertura","result":"SUCCESS","oldLabel":"Deve mostrar erro ao tentar Cadastrar Nota sem Texto de Abertura","newLabel":"Criar Notas para Boletim"},{"name":"Excluir Assunto Geral caminho feliz","result":"FAILURE","oldLabel":"Excluir Assunto Geral caminho feliz","newLabel":"Excluir Assunto Geral"},{"name":"Atualizar Militar Falha ativado vazio","result":"PENDING","oldLabel":"Atualizar Militar Falha ativado vazio","newLabel":"Atualizar Militar"},{"name":"Atualizar Funcao Sucesso","result":"PENDING","oldLabel":"Atualizar Funcao Sucesso","newLabel":"Atualizar Funcao"},{"name":"Criar Tipo de Boletim sem abreviatura","result":"SUCCESS","oldLabel":"Criar Tipo de Boletim sem abreviatura","newLabel":"Criar Tipo de Boletim"},{"name":"Excluir Organizacao Militar caminho feliz","result":"PENDING","oldLabel":"Excluir Organizacao Militar caminho feliz","newLabel":"Excluir Organizacao Militar"},{"name":"Criar Parte Boletim","result":"SUCCESS","oldLabel":"Criar Parte Boletim","newLabel":"Criar Parte Boletim"},{"name":"Cadastrar Militar Falha identidade vazia","result":"PENDING","oldLabel":"Cadastrar Militar Falha identidade vazia","newLabel":"Cadastrar Militar"},{"name":"Cadastrar Militar Falha funcao vazia","result":"PENDING","oldLabel":"Cadastrar Militar Falha funcao vazia","newLabel":"Cadastrar Militar"},{"name":"Visualizar Categoria caminho feliz","result":"SUCCESS","oldLabel":"Visualizar Categoria caminho feliz","newLabel":"Visualizar Categoria"},{"name":"Cadastrar Militar Falha om vazia","result":"PENDING","oldLabel":"Cadastrar Militar Falha om vazia","newLabel":"Cadastrar Militar"},{"name":"Cadastrar Militar Falha nomeGuerra vazio","result":"PENDING","oldLabel":"Cadastrar Militar Falha nomeGuerra vazio","newLabel":"Cadastrar Militar"},{"name":"Atualizar Militar Falha posto vazio","result":"PENDING","oldLabel":"Atualizar Militar Falha posto vazio","newLabel":"Atualizar Militar"},{"name":"Atualizar Parte Boletim Falha descricao obrigatoria","result":"SUCCESS","oldLabel":"Atualizar Parte Boletim Falha descricao obrigatoria","newLabel":"Atualizar Parte Boletim"},{"name":"Criar Organizacao Militar com ano vazio","result":"PENDING","oldLabel":"Criar Organizacao Militar com ano vazio","newLabel":"Criar Organizacao Militar"},{"name":"Criar Qualificacao Militar com descricao vazia","result":"SUCCESS","oldLabel":"Criar Qualificacao Militar com descricao vazia","newLabel":"Criar Qualificacao Militar"},{"name":"Excluir Secao Boletim caminho feliz","result":"FAILURE","oldLabel":"Excluir Secao Boletim caminho feliz","newLabel":"Excluir Secao Boletim"},{"name":"Visualizar tempo de serviço","result":"SUCCESS","oldLabel":"Visualizar tempo de serviço","newLabel":"Criar Organizacao Militar"},{"name":"Atualizar tempo de serviço","result":"SUCCESS","oldLabel":"Atualizar tempo de serviço","newLabel":"Criar Organizacao Militar"},{"name":"Visualizar workflow","result":"SUCCESS","oldLabel":"Visualizar workflow","newLabel":"Criar Organizacao Militar"},{"name":"Criar workflow","result":"SUCCESS","oldLabel":"Criar workflow","newLabel":"Criar Organizacao Militar"},{"name":"Atualizar workflow","result":"SUCCESS","oldLabel":"Atualizar workflow","newLabel":"Criar Organizacao Militar"},{"name":"Criar OM","result":"SUCCESS","oldLabel":"Criar OM","newLabel":"Criar Organizacao Militar"},{"name":"Atualizar OM","result":"SUCCESS","oldLabel":"Atualizar OM","newLabel":"Criar Organizacao Militar"},{"name":"Excluir OM","result":"SUCCESS","oldLabel":"Excluir OM","newLabel":"Criar Organizacao Militar"},{"name":"Dessassociar notas publicadas a um boletim","result":"SUCCESS","oldLabel":"Dessassociar notas publicadas a um boletim","newLabel":"Criar Organizacao Militar"},{"name":"Excluir tempo de serviço","result":"SUCCESS","oldLabel":"Excluir tempo de serviço","newLabel":"Criar Organizacao Militar"},{"name":"Gerar PDF","result":"SUCCESS","oldLabel":"Gerar PDF","newLabel":"Criar Organizacao Militar"},{"name":"Atualizar Tipo de Boletim Sucesso","result":"SUCCESS","oldLabel":"Atualizar Tipo de Boletim Sucesso","newLabel":"Atualizar Tipo de Boletim"},{"name":"Atualizar Organizacao Militar Falha sigla obrigatoria","result":"PENDING","oldLabel":"Atualizar Organizacao Militar Falha sigla obrigatoria","newLabel":"Atualizar Organizacao Militar"},{"name":"Excluir Categoria inexistente","result":"SUCCESS","oldLabel":"Excluir Categoria inexistente","newLabel":"Excluir Categoria"},{"name":"Atualizar Posto/Graduacao Falha nome obrigatorio","result":"SUCCESS","oldLabel":"Atualizar Posto/Graduacao Falha nome obrigatorio","newLabel":"Atualizar Posto/Graduacao"},{"name":"Cadastrar Secao Falha sigla vazia","result":"PENDING","oldLabel":"Cadastrar Secao Falha sigla vazia","newLabel":"Cadastrar Secao"},{"name":"Atualizar Organizacao Militar Falha localizacao obrigatoria","result":"PENDING","oldLabel":"Atualizar Organizacao Militar Falha localizacao obrigatoria","newLabel":"Atualizar Organizacao Militar"},{"name":"Criar Posto/Graduação com mesmo nome, porem com letra maiúscula em um dos casos","result":"FAILURE","oldLabel":"Criar Posto/Graduação com mesmo nome, porem com letra maiúscula em um dos casos","newLabel":"Criar Posto/Graduação"},{"name":"Visualizar Secao inexistente","result":"PENDING","oldLabel":"Visualizar Secao inexistente","newLabel":"Visualizar Secao"},{"name":"Atualizar Secao Boletim Falha Parte obrigatoria","result":"FAILURE","oldLabel":"Atualizar Secao Boletim Falha Parte obrigatoria","newLabel":"Atualizar Secao Boletim"},{"name":"Visualizar Qualificacao Militar inexistente","result":"SUCCESS","oldLabel":"Visualizar Qualificacao Militar inexistente","newLabel":"Visualizar Qualificacao Militar"},{"name":"Atualizar Parte Boletim Sucesso","result":"SUCCESS","oldLabel":"Atualizar Parte Boletim Sucesso","newLabel":"Atualizar Parte Boletim"},{"name":"Criar Tipo de Boletim","result":"SUCCESS","oldLabel":"Criar Tipo de Boletim","newLabel":"Criar Tipo de Boletim"},{"name":"Deve mostrar erro ao tentar remover Texto de Fechamento","result":"SUCCESS","oldLabel":"Deve mostrar erro ao tentar remover Texto de Fechamento","newLabel":"Criar Notas para Boletim"},{"name":"Excluir Posto/Graduacao inexistente","result":"SUCCESS","oldLabel":"Excluir Posto/Graduacao inexistente","newLabel":"Excluir Posto/Graduacao"},{"name":"Atualizar Secao Boletim Sucesso","result":"FAILURE","oldLabel":"Atualizar Secao Boletim Sucesso","newLabel":"Atualizar Secao Boletim"},{"name":"Excluir Militar inexistente","result":"PENDING","oldLabel":"Excluir Militar inexistente","newLabel":"Excluir Militar"},{"name":"Visualizar Parte Boletim caminho feliz","result":"SUCCESS","oldLabel":"Visualizar Parte Boletim caminho feliz","newLabel":"Visualizar Parte Boletim"},{"name":"Atualizar Organizacao Militar Falha guarnicao obrigatoria","result":"PENDING","oldLabel":"Atualizar Organizacao Militar Falha guarnicao obrigatoria","newLabel":"Atualizar Organizacao Militar"},{"name":"Atualizar Funcao Falha om obrigatoria","result":"PENDING","oldLabel":"Atualizar Funcao Falha om obrigatoria","newLabel":"Atualizar Funcao"},{"name":"Atualizar Parte Boletim Falha campos obrigatorios","result":"SUCCESS","oldLabel":"Atualizar Parte Boletim Falha campos obrigatorios","newLabel":"Atualizar Parte Boletim"},{"name":"Atualizar Assunto Geral Falha nome obrigatorio","result":"FAILURE","oldLabel":"Atualizar Assunto Geral Falha nome obrigatorio","newLabel":"Atualizar Assunto Geral"},{"name":"Excluir Funcao Inexistente","result":"PENDING","oldLabel":"Excluir Funcao Inexistente","newLabel":"Excluir Funcao"},{"name":"Visualizar Organizacao Militar caminho feliz","result":"PENDING","oldLabel":"Visualizar Organizacao Militar caminho feliz","newLabel":"Visualizar Organizacao Militar"},{"name":"Excluir Nota do Boletim inexistente","result":"PENDING","oldLabel":"Excluir Nota do Boletim inexistente","newLabel":"Excluir Nota do Boletim"},{"name":"Atualizar Funcao Falha periodo obrigatorio","result":"PENDING","oldLabel":"Atualizar Funcao Falha periodo obrigatorio","newLabel":"Atualizar Funcao"},{"name":"Atualizar Assunto Especifico Falha nome obrigatorio","result":"SUCCESS","oldLabel":"Atualizar Assunto Especifico Falha nome obrigatorio","newLabel":"Atualizar Assunto Especifico"},{"name":"Cadastrar Funcao Sucesso","result":"PENDING","oldLabel":"Cadastrar Funcao Sucesso","newLabel":"Cadastrar Funcao"},{"name":"Criar Qualificacao Militar com codigo repetido","result":"SUCCESS","oldLabel":"Criar Qualificacao Militar com codigo repetido","newLabel":"Criar Qualificacao Militar"},{"name":"Criar Assunto Especifico sucesso","result":"SUCCESS","oldLabel":"Criar Assunto Especifico sucesso","newLabel":"Criar Assunto Especifico"},{"name":"Excluir Funcao Sucesso","result":"PENDING","oldLabel":"Excluir Funcao Sucesso","newLabel":"Excluir Funcao"},{"name":"Visualizar Assunto Especifico caminho feliz","result":"SUCCESS","oldLabel":"Visualizar Assunto Especifico caminho feliz","newLabel":"Visualizar Assunto Especifico"},{"name":"Chefe de Cmt/Ch/Dir aprova Nota e a envia para o Boletim","result":"SUCCESS","oldLabel":"Chefe de Cmt/Ch/Dir aprova Nota e a envia para o Boletim","newLabel":"Enviar Notas para o Boletim"},{"name":"Visualizar Tipo de Documento caminho feliz","result":"SUCCESS","oldLabel":"Visualizar Tipo de Documento caminho feliz","newLabel":"Visualizar Tipo de Documento"},{"name":"Cadastrar Militar Sucesso","result":"PENDING","oldLabel":"Cadastrar Militar Sucesso","newLabel":"Cadastrar Militar"},{"name":"Cadastrar Militar Falha antiguidade vazia","result":"PENDING","oldLabel":"Cadastrar Militar Falha antiguidade vazia","newLabel":"Cadastrar Militar"},{"name":"Atualizar Tipo de Documento Sucesso","result":"SUCCESS","oldLabel":"Atualizar Tipo de Documento Sucesso","newLabel":"Atualizar Tipo de Documento"},{"name":"Cadastrar Secao Sucesso","result":"PENDING","oldLabel":"Cadastrar Secao Sucesso","newLabel":"Cadastrar Secao"},{"name":"Excluir Qualificacao Militar inexistente","result":"SUCCESS","oldLabel":"Excluir Qualificacao Militar inexistente","newLabel":"Excluir Qualificacao Militar"},{"name":"Visualizar Funcao Sucesso","result":"PENDING","oldLabel":"Visualizar Funcao Sucesso","newLabel":"Visualizar Funcao"},{"name":"Deve criar Nota","result":"SUCCESS","oldLabel":"Deve criar Nota","newLabel":"Criar Notas para Boletim"},{"name":"Atualizar Tipo de Boletim Falha campos obrigatorios","result":"SUCCESS","oldLabel":"Atualizar Tipo de Boletim Falha campos obrigatorios","newLabel":"Atualizar Tipo de Boletim"},{"name":"Deve mostrar erro ao tentar remover Texto de Abertura","result":"SUCCESS","oldLabel":"Deve mostrar erro ao tentar remover Texto de Abertura","newLabel":"Criar Notas para Boletim"},{"name":"Visualizar Secao Boletim caminho triste","result":"SUCCESS","oldLabel":"Visualizar Secao Boletim caminho triste","newLabel":"Visualizar Secao Boletim"},{"name":"Criar Assunto Geral sucesso secao nula","result":"SUCCESS","oldLabel":"Criar Assunto Geral sucesso secao nula","newLabel":"Criar Assunto Geral"},{"name":"Cadastrar Militar Falha sexo vazio","result":"PENDING","oldLabel":"Cadastrar Militar Falha sexo vazio","newLabel":"Cadastrar Militar"},{"name":"Atualizar Assunto Especifico Sucesso","result":"SUCCESS","oldLabel":"Atualizar Assunto Especifico Sucesso","newLabel":"Atualizar Assunto Especifico"},{"name":"Visualizar Militar Sucesso","result":"PENDING","oldLabel":"Visualizar Militar Sucesso","newLabel":"Visualizar Militar"},{"name":"Criar Organizacao Militar com localizacao vazia","result":"PENDING","oldLabel":"Criar Organizacao Militar com localizacao vazia","newLabel":"Criar Organizacao Militar"},{"name":"Criar Secao Boletim","result":"SUCCESS","oldLabel":"Criar Secao Boletim","newLabel":"Criar Secao Boletim"},{"name":"Atualizar Secao Falha sigla obrigatoria","result":"PENDING","oldLabel":"Atualizar Secao Falha sigla obrigatoria","newLabel":"Atualizar Secao"},{"name":"Cadastrar Militar Falha nome vazio","result":"PENDING","oldLabel":"Cadastrar Militar Falha nome vazio","newLabel":"Cadastrar Militar"},{"name":"Cadastrar Militar Falha nascimento vazio","result":"PENDING","oldLabel":"Cadastrar Militar Falha nascimento vazio","newLabel":"Cadastrar Militar"},{"name":"Criar Assunto Especifico Sucesso nome nulo","result":"SUCCESS","oldLabel":"Criar Assunto Especifico Sucesso nome nulo","newLabel":"Criar Assunto Especifico"},{"name":"Cadastrar Funcao Falha","result":"PENDING","oldLabel":"Cadastrar Funcao Falha","newLabel":"Cadastrar Funcao"},{"name":"Visualizar Militar inexistente","result":"PENDING","oldLabel":"Visualizar Militar inexistente","newLabel":"Visualizar Militar"},{"name":"Atualizar Funcao Falha descricao obrigatoria","result":"PENDING","oldLabel":"Atualizar Funcao Falha descricao obrigatoria","newLabel":"Atualizar Funcao"},{"name":"Visualizar Assunto Especifico caminho triste","result":"SUCCESS","oldLabel":"Visualizar Assunto Especifico caminho triste","newLabel":"Visualizar Assunto Especifico"},{"name":"Deve alterar Texto de Abertura","result":"SUCCESS","oldLabel":"Deve alterar Texto de Abertura","newLabel":"Criar Notas para Boletim"},{"name":"Visualizar Categoria caminho triste","result":"SUCCESS","oldLabel":"Visualizar Categoria caminho triste","newLabel":"Visualizar Categoria"},{"name":"Atualizar Funcao Falha nome obrigatorio","result":"PENDING","oldLabel":"Atualizar Funcao Falha nome obrigatorio","newLabel":"Atualizar Funcao"},{"name":"Atualizar Militar Falha Funcao vazia","result":"PENDING","oldLabel":"Atualizar Militar Falha Funcao vazia","newLabel":"Atualizar Militar"},{"name":"Atualizar Secao Falha nome obrigatorio","result":"PENDING","oldLabel":"Atualizar Secao Falha nome obrigatorio","newLabel":"Atualizar Secao"},{"name":"Excluir Tipo de Boletim inexistente","result":"SUCCESS","oldLabel":"Excluir Tipo de Boletim inexistente","newLabel":"Excluir Tipo de Boletim"},{"name":"Excluir Qualificacao Militar caminho feliz","result":"SUCCESS","oldLabel":"Excluir Qualificacao Militar caminho feliz","newLabel":"Excluir Qualificacao Militar"},{"name":"Excluir Secao Boletim inexistente","result":"SUCCESS","oldLabel":"Excluir Secao Boletim inexistente","newLabel":"Excluir Secao Boletim"},{"name":"Excluir Assunto Especifico caminho feliz","result":"SUCCESS","oldLabel":"Excluir Assunto Especifico caminho feliz","newLabel":"Excluir Assunto Especifico"},{"name":"Atualizar Militar Falha antiguidade vazia","result":"PENDING","oldLabel":"Atualizar Militar Falha antiguidade vazia","newLabel":"Atualizar Militar"},{"name":"Atualizar Militar Falha nomeGuerra vazio","result":"PENDING","oldLabel":"Atualizar Militar Falha nomeGuerra vazio","newLabel":"Atualizar Militar"},{"name":"Excluir Militar Sucesso","result":"PENDING","oldLabel":"Excluir Militar Sucesso","newLabel":"Excluir Militar"},{"name":"Visualizar Tipo de Boletim caminho feliz","result":"SUCCESS","oldLabel":"Visualizar Tipo de Boletim caminho feliz","newLabel":"Visualizar Tipo de Boletim"},{"name":"Chefe de SU/Div/Sec aprova Nota e a envia para Publicação","result":"SUCCESS","oldLabel":"Chefe de SU/Div/Sec aprova Nota e a envia para Publicação","newLabel":"Enviar Notas para publicação"},{"name":"Criar Organizacao Militar com guarnicao vazia","result":"PENDING","oldLabel":"Criar Organizacao Militar com guarnicao vazia","newLabel":"Criar Organizacao Militar"},{"name":"Excluir Nota caminho feliz","result":"SUCCESS","oldLabel":"Excluir Nota caminho feliz","newLabel":"Excluir Nota"},{"name":"Operador envia Nota para Aprovação","result":"SUCCESS","oldLabel":"Operador envia Nota para Aprovação","newLabel":"Enviar Notas para aprovação"},{"name":"Criar Qualificacao Militar caminho feliz","result":"SUCCESS","oldLabel":"Criar Qualificacao Militar caminho feliz","newLabel":"Criar Qualificacao Militar"},{"name":"Atualizar Organizacao Militar Sucesso","result":"PENDING","oldLabel":"Atualizar Organizacao Militar Sucesso","newLabel":"Atualizar Organizacao Militar"},{"name":"Excluir Boletim caminho feliz","result":"SUCCESS","oldLabel":"Excluir Boletim caminho feliz","newLabel":"Excluir Boletim"},{"name":"Deve mostrar erro ao tentar Cadastrar Nota sem Texto de Fechamento","result":"SUCCESS","oldLabel":"Deve mostrar erro ao tentar Cadastrar Nota sem Texto de Fechamento","newLabel":"Criar Notas para Boletim"},{"name":"Excluir Categoria caminho feliz","result":"SUCCESS","oldLabel":"Excluir Categoria caminho feliz","newLabel":"Excluir Categoria"},{"name":"Excluir Secao inexistente","result":"PENDING","oldLabel":"Excluir Secao inexistente","newLabel":"Excluir Secao"},{"name":"Criar Organizacao Militar com sigla vazia","result":"PENDING","oldLabel":"Criar Organizacao Militar com sigla vazia","newLabel":"Criar Organizacao Militar"},{"name":"Criar Tipo de Boletim com campos vazios","result":"SUCCESS","oldLabel":"Criar Tipo de Boletim com campos vazios","newLabel":"Criar Tipo de Boletim"},{"name":"Excluir Secao caminho feliz","result":"PENDING","oldLabel":"Excluir Secao caminho feliz","newLabel":"Excluir Secao"},{"name":"Excluir Nota do Boletim caminho feliz","result":"PENDING","oldLabel":"Excluir Nota do Boletim caminho feliz","newLabel":"Excluir Nota do Boletim"},{"name":"Visualizar Assunto Geral caminho feliz","result":"FAILURE","oldLabel":"Visualizar Assunto Geral caminho feliz","newLabel":"Visualizar Assunto Geral"},{"name":"Deve mostrar erro ao tentar Boletim sem Data de Publicação","result":"SUCCESS","oldLabel":"Deve mostrar erro ao tentar Boletim sem Data de Publicação","newLabel":"Criar Boletins"},{"name":"Atualizar Organizacao Militar Falha ano obrigatoria","result":"PENDING","oldLabel":"Atualizar Organizacao Militar Falha ano obrigatoria","newLabel":"Atualizar Organizacao Militar"},{"name":"Deve mostrar erro ao tentar Cadastrar Nota sem Data","result":"SUCCESS","oldLabel":"Deve mostrar erro ao tentar Cadastrar Nota sem Data","newLabel":"Criar Notas para Boletim"},{"name":"Visualizar Tipo de Documento caminho triste","result":"SUCCESS","oldLabel":"Visualizar Tipo de Documento caminho triste","newLabel":"Visualizar Tipo de Documento"},{"name":"Visualizar Organizacao Militar inexistente","result":"PENDING","oldLabel":"Visualizar Organizacao Militar inexistente","newLabel":"Visualizar Organizacao Militar"},{"name":"Excluir Assunto Geral inexistente","result":"SUCCESS","oldLabel":"Excluir Assunto Geral inexistente","newLabel":"Excluir Assunto Geral"},{"name":"Atualizar Categoria Falha descricao obrigatoria","result":"SUCCESS","oldLabel":"Atualizar Categoria Falha descricao obrigatoria","newLabel":"Atualizar Categoria"},{"name":"Excluir Organizacao Militar inexistente","result":"PENDING","oldLabel":"Excluir Organizacao Militar inexistente","newLabel":"Excluir Organizacao Militar"},{"name":"Criar Categoria","result":"SUCCESS","oldLabel":"Criar Categoria","newLabel":"Criar Categoria"},{"name":"Criar Tipo de Documento","result":"SUCCESS","oldLabel":"Criar Tipo de Documento","newLabel":"Criar Tipo de Documento"},{"name":"Atualizar Funcao Falha titular obrigatorio","result":"PENDING","oldLabel":"Atualizar Funcao Falha titular obrigatorio","newLabel":"Atualizar Funcao"},{"name":"Atualizar Tipo de Boletim Falha abreviatura obrigatorio","result":"SUCCESS","oldLabel":"Atualizar Tipo de Boletim Falha abreviatura obrigatorio","newLabel":"Atualizar Tipo de Boletim"},{"name":"Atualizar Categoria Falha nome obrigatorio","result":"SUCCESS","oldLabel":"Atualizar Categoria Falha nome obrigatorio","newLabel":"Atualizar Categoria"},{"name":"Visualizar Posto/Graduacao caminho triste","result":"SUCCESS","oldLabel":"Visualizar Posto/Graduacao caminho triste","newLabel":"Visualizar Posto/Graduacao"},{"name":"Deve alterar Data de Publicação Boletim","result":"SUCCESS","oldLabel":"Deve alterar Data de Publicação Boletim","newLabel":"Criar Boletins"},{"name":"Atualizar Militar Sucesso","result":"PENDING","oldLabel":"Atualizar Militar Sucesso","newLabel":"Atualizar Militar"},{"name":"Excluir Tipo de Documento inexistente","result":"SUCCESS","oldLabel":"Excluir Tipo de Documento inexistente","newLabel":"Excluir Tipo de Documento"},{"name":"Criar Organizacao Militar caminho feliz","result":"PENDING","oldLabel":"Criar Organizacao Militar caminho feliz","newLabel":"Criar Organizacao Militar"},{"name":"Atualizar Militar Falha identidade vazia","result":"PENDING","oldLabel":"Atualizar Militar Falha identidade vazia","newLabel":"Atualizar Militar"},{"name":"Associar Notas já Publicadas a um Boletim Interno Reservado","result":"ERROR","oldLabel":"Associar Notas já Publicadas a um Boletim Interno Reservado","newLabel":"Associar Notas Publicadas a um Boletim"},{"name":"Excluir Parte Boletim caminho feliz","result":"SUCCESS","oldLabel":"Excluir Parte Boletim caminho feliz","newLabel":"Excluir Parte Boletim"},{"name":"Atualizar Assunto Geral Sucesso","result":"FAILURE","oldLabel":"Atualizar Assunto Geral Sucesso","newLabel":"Atualizar Assunto Geral"},{"name":"Criar Assunto Geral falha nome obrigatorio","result":"SUCCESS","oldLabel":"Criar Assunto Geral falha nome obrigatorio","newLabel":"Criar Assunto Geral"},{"name":"Visualizar Posto/Graduacao caminho feliz","result":"SUCCESS","oldLabel":"Visualizar Posto/Graduacao caminho feliz","newLabel":"Visualizar Posto/Graduacao"},{"name":"Excluir Assunto Especifico inexistente","result":"SUCCESS","oldLabel":"Excluir Assunto Especifico inexistente","newLabel":"Excluir Assunto Especifico"},{"name":"Atualizar Secao Boletim Falha descricao obrigatoria","result":"FAILURE","oldLabel":"Atualizar Secao Boletim Falha descricao obrigatoria","newLabel":"Atualizar Secao Boletim"},{"name":"Deve alterar Texto de Fechamento","result":"SUCCESS","oldLabel":"Deve alterar Texto de Fechamento","newLabel":"Criar Notas para Boletim"},{"name":"Atualizar Militar Falha sexo vazio","result":"PENDING","oldLabel":"Atualizar Militar Falha sexo vazio","newLabel":"Atualizar Militar"},{"name":"Atualizar Posto/Graduacao Sucesso","result":"SUCCESS","oldLabel":"Atualizar Posto/Graduacao Sucesso","newLabel":"Atualizar Posto/Graduacao"},{"name":"Deve criar Boletim","result":"SUCCESS","oldLabel":"Deve criar Boletim","newLabel":"Criar Boletins"},{"name":"Deve mostrar erro ao tentar remover Data de Publicação","result":"SUCCESS","oldLabel":"Deve mostrar erro ao tentar remover Data de Publicação","newLabel":"Criar Boletins"},{"name":"Atualizar Tipo de Boletim Falha descricao obrigatoria","result":"SUCCESS","oldLabel":"Atualizar Tipo de Boletim Falha descricao obrigatoria","newLabel":"Atualizar Tipo de Boletim"},{"name":"Visualizar Assunto Geral caminho triste","result":"SUCCESS","oldLabel":"Visualizar Assunto Geral caminho triste","newLabel":"Visualizar Assunto Geral"},{"name":"Atualizar Militar falha qualificacao Vazia","result":"PENDING","oldLabel":"Atualizar Militar falha qualificacao Vazia","newLabel":"Atualizar Militar"},{"name":"Criar Organizacao Militar com nome vazio","result":"PENDING","oldLabel":"Criar Organizacao Militar com nome vazio","newLabel":"Criar Organizacao Militar"},{"name":"Atualizar Secao Sucesso","result":"PENDING","oldLabel":"Atualizar Secao Sucesso","newLabel":"Atualizar Secao"},{"name":"Atualizar Qualificacao Militar Falha descricao obrigatoria","result":"SUCCESS","oldLabel":"Atualizar Qualificacao Militar Falha descricao obrigatoria","newLabel":"Atualizar Qualificacao Militar"},{"name":"Associar Notas já Publicadas a um Boletim Interno","result":"FAILURE","oldLabel":"Associar Notas já Publicadas a um Boletim Interno","newLabel":"Associar Notas Publicadas a um Boletim"},{"name":"Visualizar Secao caminho feliz","result":"PENDING","oldLabel":"Visualizar Secao caminho feliz","newLabel":"Visualizar Secao"},{"name":"Excluir Tipo de Boletim caminho feliz","result":"SUCCESS","oldLabel":"Excluir Tipo de Boletim caminho feliz","newLabel":"Excluir Tipo de Boletim"},{"name":"Criar Posto/Graduação com nome repetido","result":"SUCCESS","oldLabel":"Criar Posto/Graduação com nome repetido","newLabel":"Criar Posto/Graduação"},{"name":"Visualizar Funcao Inexistente","result":"PENDING","oldLabel":"Visualizar Funcao Inexistente","newLabel":"Visualizar Funcao"},{"name":"Atualizar Secao Boletim Falha posicao obrigatoria","result":"FAILURE","oldLabel":"Atualizar Secao Boletim Falha posicao obrigatoria","newLabel":"Atualizar Secao Boletim"},{"name":"Excluir Nota inexistente","result":"SUCCESS","oldLabel":"Excluir Nota inexistente","newLabel":"Excluir Nota"},{"name":"Atualizar Militar Falha Secao vazia","result":"PENDING","oldLabel":"Atualizar Militar Falha Secao vazia","newLabel":"Atualizar Militar"},{"name":"Visualizar Parte Boletim caminho triste","result":"SUCCESS","oldLabel":"Visualizar Parte Boletim caminho triste","newLabel":"Visualizar Parte Boletim"},{"name":"Atualizar Qualificacao Militar Sucesso","result":"SUCCESS","oldLabel":"Atualizar Qualificacao Militar Sucesso","newLabel":"Atualizar Qualificacao Militar"},{"name":"Cadastrar Militar Falha posto vazio","result":"PENDING","oldLabel":"Cadastrar Militar Falha posto vazio","newLabel":"Cadastrar Militar"},{"name":"Criar Assunto Geral sucesso","result":"FAILURE","oldLabel":"Criar Assunto Geral sucesso","newLabel":"Criar Assunto Geral"},{"name":"Criar Tipo de Boletim sem descricao","result":"SUCCESS","oldLabel":"Criar Tipo de Boletim sem descricao","newLabel":"Criar Tipo de Boletim"},{"name":"Cadastrar Militar Falha ativado vazio","result":"PENDING","oldLabel":"Cadastrar Militar Falha ativado vazio","newLabel":"Cadastrar Militar"},{"name":"Cadastrar Militar Falha cpf vazio","result":"PENDING","oldLabel":"Cadastrar Militar Falha cpf vazio","newLabel":"Cadastrar Militar"},{"name":"Atualizar Categoria Sucesso","result":"SUCCESS","oldLabel":"Atualizar Categoria Sucesso","newLabel":"Atualizar Categoria"},{"name":"Atualizar Categoria Falha campos obrigatorios","result":"SUCCESS","oldLabel":"Atualizar Categoria Falha campos obrigatorios","newLabel":"Atualizar Categoria"},{"name":"Cadastrar Militar Falha secao vazia","result":"PENDING","oldLabel":"Cadastrar Militar Falha secao vazia","newLabel":"Cadastrar Militar"},{"name":"Cadastrar Militar Falha qm vazia","result":"PENDING","oldLabel":"Cadastrar Militar Falha qm vazia","newLabel":"Cadastrar Militar"},{"name":"Excluir Tipo de Documento caminho feliz","result":"SUCCESS","oldLabel":"Excluir Tipo de Documento caminho feliz","newLabel":"Excluir Tipo de Documento"},{"name":"Atualizar Militar Falha nome vazio","result":"PENDING","oldLabel":"Atualizar Militar Falha nome vazio","newLabel":"Atualizar Militar"},{"name":"Visualizar Secao Boletim caminho feliz","result":"FAILURE","oldLabel":"Visualizar Secao Boletim caminho feliz","newLabel":"Visualizar Secao Boletim"},{"name":"Excluir Boletim inexistente","result":"SUCCESS","oldLabel":"Excluir Boletim inexistente","newLabel":"Excluir Boletim"},{"name":"Criar Posto/Graduação caminho feliz","result":"SUCCESS","oldLabel":"Criar Posto/Graduação caminho feliz","newLabel":"Criar Posto/Graduação"},{"name":"Atualizar Parte Boletim Falha posicao obrigatoria","result":"SUCCESS","oldLabel":"Atualizar Parte Boletim Falha posicao obrigatoria","newLabel":"Atualizar Parte Boletim"},{"name":"Atualizar Tipo de Documento Falha nome obrigatorio","result":"SUCCESS","oldLabel":"Atualizar Tipo de Documento Falha nome obrigatorio","newLabel":"Atualizar Tipo de Documento"},{"name":"Atualizar Categoria Falha secao obrigatoria","result":"FAILURE","oldLabel":"Atualizar Categoria Falha secao obrigatoria","newLabel":"Atualizar Assunto Geral"},{"name":"Visualizar Tipo de Boletim caminho triste","result":"SUCCESS","oldLabel":"Visualizar Tipo de Boletim caminho triste","newLabel":"Visualizar Tipo de Boletim"},{"name":"Cadastrar Secao Falha nome vazio","result":"PENDING","oldLabel":"Cadastrar Secao Falha nome vazio","newLabel":"Cadastrar Secao"},{"name":"Excluir Posto/Graduacao caminho feliz","result":"SUCCESS","oldLabel":"Excluir Posto/Graduacao caminho feliz","newLabel":"Excluir Posto/Graduacao"},{"name":"Criar Posto/Graduação com nome vazio","result":"SUCCESS","oldLabel":"Criar Posto/Graduação com nome vazio","newLabel":"Criar Posto/Graduação"},{"name":"Visualizar Qualificacao Militar caminho feliz","result":"SUCCESS","oldLabel":"Visualizar Qualificacao Militar caminho feliz","newLabel":"Visualizar Qualificacao Militar"},{"name":"Excluir Parte Boletim inexistente","result":"SUCCESS","oldLabel":"Excluir Parte Boletim inexistente","newLabel":"Excluir Parte Boletim"},{"name":"Atualizar Organizacao Militar Falha nome obrigatorio","result":"PENDING","oldLabel":"Atualizar Organizacao Militar Falha nome obrigatorio","newLabel":"Atualizar Organizacao Militar"},{"name":"Deve mostrar erro ao tentar Cadastrar Nota sem Texto de Abertura","result":"SUCCESS","oldLabel":"Deve mostrar erro ao tentar Cadastrar Nota sem Texto de Abertura","newLabel":"Criar Notas para Boletim"},{"name":"Excluir Assunto Geral caminho feliz","result":"FAILURE","oldLabel":"Excluir Assunto Geral caminho feliz","newLabel":"Excluir Assunto Geral"},{"name":"Atualizar Militar Falha ativado vazio","result":"PENDING","oldLabel":"Atualizar Militar Falha ativado vazio","newLabel":"Atualizar Militar"},{"name":"Atualizar Funcao Sucesso","result":"PENDING","oldLabel":"Atualizar Funcao Sucesso","newLabel":"Atualizar Funcao"},{"name":"Criar Tipo de Boletim sem abreviatura","result":"SUCCESS","oldLabel":"Criar Tipo de Boletim sem abreviatura","newLabel":"Criar Tipo de Boletim"},{"name":"Excluir Organizacao Militar caminho feliz","result":"PENDING","oldLabel":"Excluir Organizacao Militar caminho feliz","newLabel":"Excluir Organizacao Militar"},{"name":"Criar Parte Boletim","result":"SUCCESS","oldLabel":"Criar Parte Boletim","newLabel":"Criar Parte Boletim"},{"name":"Cadastrar Militar Falha identidade vazia","result":"PENDING","oldLabel":"Cadastrar Militar Falha identidade vazia","newLabel":"Cadastrar Militar"},{"name":"Cadastrar Militar Falha funcao vazia","result":"PENDING","oldLabel":"Cadastrar Militar Falha funcao vazia","newLabel":"Cadastrar Militar"},{"name":"Visualizar Categoria caminho feliz","result":"SUCCESS","oldLabel":"Visualizar Categoria caminho feliz","newLabel":"Visualizar Categoria"},{"name":"Cadastrar Militar Falha om vazia","result":"PENDING","oldLabel":"Cadastrar Militar Falha om vazia","newLabel":"Cadastrar Militar"},{"name":"Cadastrar Militar Falha nomeGuerra vazio","result":"PENDING","oldLabel":"Cadastrar Militar Falha nomeGuerra vazio","newLabel":"Cadastrar Militar"},{"name":"Atualizar Militar Falha posto vazio","result":"PENDING","oldLabel":"Atualizar Militar Falha posto vazio","newLabel":"Atualizar Militar"},{"name":"Atualizar Parte Boletim Falha descricao obrigatoria","result":"SUCCESS","oldLabel":"Atualizar Parte Boletim Falha descricao obrigatoria","newLabel":"Atualizar Parte Boletim"},{"name":"Criar Organizacao Militar com ano vazio","result":"PENDING","oldLabel":"Criar Organizacao Militar com ano vazio","newLabel":"Criar Organizacao Militar"},{"name":"Criar Qualificacao Militar com descricao vazia","result":"SUCCESS","oldLabel":"Criar Qualificacao Militar com descricao vazia","newLabel":"Criar Qualificacao Militar"},{"name":"Excluir Secao Boletim caminho feliz","result":"FAILURE","oldLabel":"Excluir Secao Boletim caminho feliz","newLabel":"Excluir Secao Boletim"},{"name":"Visualizar tempo de serviço","result":"SUCCESS","oldLabel":"Visualizar tempo de serviço","newLabel":"Criar Organizacao Militar"},{"name":"Atualizar tempo de serviço","result":"SUCCESS","oldLabel":"Atualizar tempo de serviço","newLabel":"Criar Organizacao Militar"},{"name":"Visualizar workflow","result":"SUCCESS","oldLabel":"Visualizar workflow","newLabel":"Criar Organizacao Militar"},{"name":"Criar workflow","result":"SUCCESS","oldLabel":"Criar workflow","newLabel":"Criar Organizacao Militar"},{"name":"Atualizar workflow","result":"SUCCESS","oldLabel":"Atualizar workflow","newLabel":"Criar Organizacao Militar"},{"name":"Criar OM","result":"SUCCESS","oldLabel":"Criar OM","newLabel":"Criar Organizacao Militar"},{"name":"Atualizar OM","result":"SUCCESS","oldLabel":"Atualizar OM","newLabel":"Criar Organizacao Militar"},{"name":"Excluir OM","result":"SUCCESS","oldLabel":"Excluir OM","newLabel":"Criar Organizacao Militar"},{"name":"Dessassociar notas publicadas a um boletim","result":"SUCCESS","oldLabel":"Dessassociar notas publicadas a um boletim","newLabel":"Criar Organizacao Militar"},{"name":"Excluir tempo de serviço","result":"SUCCESS","oldLabel":"Excluir tempo de serviço","newLabel":"Criar Organizacao Militar"},{"name":"Gerar PDF","result":"SUCCESS","oldLabel":"Gerar PDF","newLabel":"Criar Organizacao Militar"}]');
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
            "Description": "Be able to modify existing elements",
            "RESULT": "Negativo"
          }
        },
        {
          "id": "b46a33b8-ac2a-4cd1-8500-e746c0c85218",
          "text": "G9: Manter Workflow",
          "type": "istar.Goal",
          "x": 1385,
          "y": 286,
          "customProperties": {
            "Description": "",
            "RESULT": "Negativo"
          }
        },
        {
          "id": "6387ad89-8fff-4612-a7aa-21116cf24e9f",
          "text": "G4: Controlar Configurações",
          "type": "istar.Goal",
          "x": 1756,
          "y": 146,
          "customProperties": {
            "Description": "",
            "RESULT": "Negativo"
          }
        },
        {
          "id": "bd5e481f-e93b-4dfe-8daf-3d1fc91e6a04",
          "text": "G3: Elaborar Boletins",
          "type": "istar.Goal",
          "x": 867,
          "y": 258,
          "customProperties": {
            "Description": "",
            "RESULT": "Negativo"
          }
        },
        {
          "id": "0472d403-efab-48f7-aed5-8a14190ad71a",
          "text": "G1: Gerir Alterações",
          "type": "istar.Goal",
          "x": 655,
          "y": 222,
          "customProperties": {
            "Description": "",
            "RESULT": "Negativo"
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
            "Description": "",
            "RESULT": "Negativo"
          }
        },
        {
          "id": "61ca99d1-6d04-4225-9407-dd781f85edfc",
          "text": "G8: Navegar pelo Workflow",
          "type": "istar.Goal",
          "x": 1218,
          "y": 289,
          "customProperties": {
            "Description": "",
            "RESULT": "Positivo"
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
          "x": 633,
          "y": 352,
          "customProperties": {
            "Description": "",
            "RESULT": "Negativo"
          }
        },
        {
          "id": "730c43f4-cb00-4db4-8571-939244e85803",
          "text": "Alterar historico",
          "type": "istar.Task",
          "x": 681,
          "y": 423,
          "customProperties": {
            "Description": ""
          }
        },
        {
          "id": "849e8f32-a215-45c3-a85a-e900f6cdc7e8",
          "text": "Criar historico",
          "type": "istar.Task",
          "x": 597,
          "y": 424,
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
            "Description": "",
            "RESULT": "Negativo"
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
            "Tarefa": "criartipodedocumento"
          }
        },
        {
          "id": "0d840cbe-8560-4d92-bfad-3e05102d3d9b",
          "text": "Manter Posto/Graduação",
          "type": "istar.Goal",
          "x": 1589,
          "y": 268,
          "customProperties": {
            "Description": "",
            "RESULT": "Positivo"
          }
        },
        {
          "id": "14c11dd2-55c1-456a-b9b7-2c169975fee3",
          "text": "Manter Qualificação Militar",
          "type": "istar.Goal",
          "x": 1739,
          "y": 398,
          "customProperties": {
            "Description": "",
            "RESULT": "Positivo"
          }
        },
        {
          "id": "5d39cf50-4b49-4256-a4e3-6b9d4f1f3332",
          "text": "Manter Categoria",
          "type": "istar.Goal",
          "x": 1951,
          "y": 405,
          "customProperties": {
            "Description": "",
            "RESULT": "Positivo"
          }
        },
        {
          "id": "13f545ed-effc-4a45-a3cb-2667cfe776db",
          "text": "Manter OM",
          "type": "istar.Goal",
          "x": 2008,
          "y": 271,
          "customProperties": {
            "Description": "",
            "RESULT": "Negativo"
          }
        },
        {
          "id": "652ead7a-1d51-4f5c-bb03-c713ec416dfb",
          "text": "Manter Função",
          "type": "istar.Goal",
          "x": 2161,
          "y": 297,
          "customProperties": {
            "Description": "",
            "RESULT": "Negativo"
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
          "x": 1528,
          "y": 331,
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
            "Description": "",
            "RESULT": "Negativo"
          }
        },
        {
          "id": "082fdbb5-7211-4b41-88fa-84b0f337d6a7",
          "text": "G10: Estruturar Boletim",
          "type": "istar.Goal",
          "x": 868,
          "y": 396,
          "customProperties": {
            "Description": "",
            "RESULT": "Negativo"
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
          "x": 1786,
          "y": 567,
          "customProperties": {
            "Description": "",
            "Tarefa": "criarassuntogeral"
          }
        },
        {
          "id": "4feda6ce-ab3b-4307-82e8-bd2be387d9f5",
          "text": "Gerar PDF",
          "type": "istar.Task",
          "x": 1021,
          "y": 256,
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
            "Description": "",
            "RESULT": "Negativo"
          }
        },
        {
          "id": "b3593241-9261-4747-96d1-07111d797a5f",
          "text": "Alterar Boletim",
          "type": "istar.Task",
          "x": 1702,
          "y": 684,
          "customProperties": {
            "Description": ""
          }
        },
        {
          "id": "a4063774-76dd-4abe-9985-16cab637385a",
          "text": "Excluir Boletim",
          "type": "istar.Task",
          "x": 1734,
          "y": 643,
          "customProperties": {
            "Description": "",
            "Tarefa": "Excluir Boletim"
          }
        },
        {
          "id": "258525fb-62db-4b18-a690-b286e227fb61",
          "text": "Criar Boletim",
          "type": "istar.Task",
          "x": 1555,
          "y": 548,
          "customProperties": {
            "Description": "",
            "Tarefa": "Criar Boletins"
          }
        },
        {
          "id": "dae48757-bc8f-4e8a-a52c-1653edd2d8a8",
          "text": "Visualizar Boletim",
          "type": "istar.Task",
          "x": 1582,
          "y": 628,
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
            "Description": "",
            "RESULT": "Negativo"
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
            "Description": "",
            "RESULT": "Positivo"
          }
        },
        {
          "id": "03e2bb09-08f8-433b-b595-8aa48344bc9d",
          "text": "Manter Seção",
          "type": "istar.Goal",
          "x": 2121,
          "y": 152,
          "customProperties": {
            "Description": "",
            "RESULT": "Negativo"
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
          "x": 2021,
          "y": 186,
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
            "Description": "",
            "RESULT": "Positivo"
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
            "Description": "",
            "RESULT": "Positivo"
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
            "Description": "",
            "RESULT": "Positivo"
          }
        },
        {
          "id": "c0d4f45f-1973-40c7-9d1e-1562f262f439",
          "text": "Manter Assunto Geral",
          "type": "istar.Goal",
          "x": 148,
          "y": 636,
          "customProperties": {
            "Description": "",
            "RESULT": "Positivo"
          }
        },
        {
          "id": "4715f6a4-d580-4bd6-81fa-f93a944769b0",
          "text": "Manter Assunto Específico",
          "type": "istar.Goal",
          "x": 355,
          "y": 640,
          "customProperties": {
            "Description": "",
            "RESULT": "Positivo"
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
            "Tarefa": "excluircategoria"
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
            "Tarefa": "criarnotasparaboletim"
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
            "Tarefa": "excluirqualificacaomilitar"
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
            "Description": "",
            "RESULT": "Negativo"
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
            "Description": "",
            "RESULT": "Negativo"
          }
        },
        {
          "id": "fe1c46f4-f696-4aa9-ba7b-94426a8aab5b",
          "text": "Gerir Militar",
          "type": "istar.Goal",
          "x": 1733,
          "y": 260,
          "customProperties": {
            "Description": "",
            "RESULT": "Negativo"
          }
        },
        {
          "id": "4f637d55-6146-492b-a6f4-3a8f7c2bb17f",
          "text": "Manter Militar",
          "type": "istar.Goal",
          "x": 1945,
          "y": 562,
          "customProperties": {
            "Description": "",
            "RESULT": "Negativo"
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
          "x": 1611,
          "y": 690,
          "customProperties": {
            "Description": "",
            "Tarefa": "associarnotaspublicadasaumboletim"
          }
        }
      ]
    }
  ],
  "orphans": [],
  "dependencies": [],
  "links": [
    {
      "id": "21696636-eac2-45a9-8046-0b9ffe15ff14",
      "type": "istar.AndRefinementLink",
      "source": "0472d403-efab-48f7-aed5-8a14190ad71a",
      "target": "ab99b45b-ee62-4a1c-9d4d-1312dbfd3d7d"
    },
    {
      "id": "453435fd-7a82-491a-9dca-fcf6b4fdeb00",
      "type": "istar.AndRefinementLink",
      "source": "6387ad89-8fff-4612-a7aa-21116cf24e9f",
      "target": "ab99b45b-ee62-4a1c-9d4d-1312dbfd3d7d"
    },
    {
      "id": "de49df4a-05b3-4f82-9adc-168ad82430a8",
      "type": "istar.AndRefinementLink",
      "source": "bd5e481f-e93b-4dfe-8daf-3d1fc91e6a04",
      "target": "ab99b45b-ee62-4a1c-9d4d-1312dbfd3d7d"
    },
    {
      "id": "861c13af-8c49-406c-802d-48abf8697329",
      "type": "istar.AndRefinementLink",
      "source": "77b3f119-bd4e-42be-9b84-552a22bf44c5",
      "target": "b46a33b8-ac2a-4cd1-8500-e746c0c85218"
    },
    {
      "id": "35370639-47bc-4066-9f00-fd30215c32c6",
      "type": "istar.AndRefinementLink",
      "source": "1a71e4f7-e126-46fe-a3db-b7523c20168f",
      "target": "b46a33b8-ac2a-4cd1-8500-e746c0c85218"
    },
    {
      "id": "8ac4cb98-33a4-4471-bbd0-d4768584eca2",
      "type": "istar.AndRefinementLink",
      "source": "e081d04a-7921-4091-9129-cb0fe269be45",
      "target": "b46a33b8-ac2a-4cd1-8500-e746c0c85218"
    },
    {
      "id": "973e4336-698f-46c8-b5d3-83e9659cf9d1",
      "type": "istar.AndRefinementLink",
      "source": "21927ac9-33c0-4302-b8e8-b1a28b02793e",
      "target": "b46a33b8-ac2a-4cd1-8500-e746c0c85218"
    },
    {
      "id": "c32b587a-3dbc-4e0e-b4bf-c781e29a0f70",
      "type": "istar.AndRefinementLink",
      "source": "b46a33b8-ac2a-4cd1-8500-e746c0c85218",
      "target": "e7eb3f41-7912-430e-bf3a-b2e0576d543b"
    },
    {
      "id": "1b90dfe2-a524-4676-a547-a0dca4fbff33",
      "type": "istar.AndRefinementLink",
      "source": "a98c2a57-3103-4996-a040-027e2fa7b5c9",
      "target": "61ca99d1-6d04-4225-9407-dd781f85edfc"
    },
    {
      "id": "a3d41d55-2f09-4500-9941-9ff9adf09a04",
      "type": "istar.AndRefinementLink",
      "source": "61ca99d1-6d04-4225-9407-dd781f85edfc",
      "target": "e7eb3f41-7912-430e-bf3a-b2e0576d543b"
    },
    {
      "id": "acdd0fce-5296-46b0-8a20-c0dc62445cda",
      "type": "istar.AndRefinementLink",
      "source": "e7eb3f41-7912-430e-bf3a-b2e0576d543b",
      "target": "ab99b45b-ee62-4a1c-9d4d-1312dbfd3d7d"
    },
    {
      "id": "c7772143-3966-4fe4-bda9-5b1d61b7701e",
      "type": "istar.AndRefinementLink",
      "source": "db0e6179-34a2-4039-b724-41d106878f29",
      "target": "afa3db48-55e4-4f1c-9208-42d0335e3ccb"
    },
    {
      "id": "b6b28c10-e4a4-4136-ad68-ee13c5deab38",
      "type": "istar.AndRefinementLink",
      "source": "c0bf8e95-dc7a-4fbd-bcf7-3063599ba897",
      "target": "afa3db48-55e4-4f1c-9208-42d0335e3ccb"
    },
    {
      "id": "5ec2309b-909a-4a3d-b8fb-67355d33a01d",
      "type": "istar.AndRefinementLink",
      "source": "c88bec8e-2a41-4747-b11c-6d34fe678d6b",
      "target": "afa3db48-55e4-4f1c-9208-42d0335e3ccb"
    },
    {
      "id": "ccb140d0-1d8e-4119-b4ac-9ee8377ed792",
      "type": "istar.AndRefinementLink",
      "source": "3adbe37b-23c8-4a63-b037-2b8ee41e234d",
      "target": "afa3db48-55e4-4f1c-9208-42d0335e3ccb"
    },
    {
      "id": "0fb9bde1-9aeb-4a69-990a-6b04e7d313f4",
      "type": "istar.AndRefinementLink",
      "source": "5d39cf50-4b49-4256-a4e3-6b9d4f1f3332",
      "target": "6387ad89-8fff-4612-a7aa-21116cf24e9f"
    },
    {
      "id": "4ff25a90-3d0f-4c13-9f52-1657a7821797",
      "type": "istar.AndRefinementLink",
      "source": "13f545ed-effc-4a45-a3cb-2667cfe776db",
      "target": "6387ad89-8fff-4612-a7aa-21116cf24e9f"
    },
    {
      "id": "b5aeb1d9-e66f-4d1e-b110-e3c4b6964139",
      "type": "istar.AndRefinementLink",
      "source": "652ead7a-1d51-4f5c-bb03-c713ec416dfb",
      "target": "6387ad89-8fff-4612-a7aa-21116cf24e9f"
    },
    {
      "id": "d3431ea3-a86c-450e-942e-4b26e9066206",
      "type": "istar.AndRefinementLink",
      "source": "3800ce9d-26e7-49ca-bebf-a5bb542eb689",
      "target": "0d840cbe-8560-4d92-bfad-3e05102d3d9b"
    },
    {
      "id": "7a04cdee-473e-47e8-a60f-18fa7a0d81fa",
      "type": "istar.AndRefinementLink",
      "source": "7797320b-7785-4279-b652-ba73d1b854d1",
      "target": "0d840cbe-8560-4d92-bfad-3e05102d3d9b"
    },
    {
      "id": "1a12a723-0182-409f-a430-d313701317c0",
      "type": "istar.AndRefinementLink",
      "source": "1cd6e8e4-997b-4d19-b278-70287bfa5e66",
      "target": "0d840cbe-8560-4d92-bfad-3e05102d3d9b"
    },
    {
      "id": "588807b5-5bc0-4bd7-8a66-baae855b5b51",
      "type": "istar.AndRefinementLink",
      "source": "9b7a67ec-8a8b-4922-b067-17c74ba7db19",
      "target": "0d840cbe-8560-4d92-bfad-3e05102d3d9b"
    },
    {
      "id": "9eeba71c-72d8-4ece-8827-44c181075035",
      "type": "istar.AndRefinementLink",
      "source": "563ed521-20f5-4591-a806-ca4300cdd9cc",
      "target": "14c11dd2-55c1-456a-b9b7-2c169975fee3"
    },
    {
      "id": "32bcaf1a-cb23-4ec4-9156-9c9fddfb010d",
      "type": "istar.AndRefinementLink",
      "source": "d11712ef-2617-4805-9709-ebfa849a22ab",
      "target": "14c11dd2-55c1-456a-b9b7-2c169975fee3"
    },
    {
      "id": "0f0f7d98-0e2e-449b-a666-a47a9243ae9e",
      "type": "istar.AndRefinementLink",
      "source": "0b3d1c92-f285-40c9-82bb-357db78dd3a9",
      "target": "14c11dd2-55c1-456a-b9b7-2c169975fee3"
    },
    {
      "id": "523b3a5b-eceb-4020-adcf-04789322d5d2",
      "type": "istar.AndRefinementLink",
      "source": "c5eb9f84-cc3c-46cf-b18c-dea09df2d320",
      "target": "14c11dd2-55c1-456a-b9b7-2c169975fee3"
    },
    {
      "id": "c8e45454-0bae-43e5-8c07-c9064d1852e6",
      "type": "istar.AndRefinementLink",
      "source": "433d2d12-4897-432b-944d-145339dcf6ad",
      "target": "5d39cf50-4b49-4256-a4e3-6b9d4f1f3332"
    },
    {
      "id": "0643f0b2-2256-4678-9b67-81266c20eaa9",
      "type": "istar.AndRefinementLink",
      "source": "bc50f072-ff5f-48be-ade2-c8a389423457",
      "target": "5d39cf50-4b49-4256-a4e3-6b9d4f1f3332"
    },
    {
      "id": "1dc24459-7382-404b-aab5-81dc1fe63fcb",
      "type": "istar.AndRefinementLink",
      "source": "8308812a-242c-4153-996e-6d39cfa9eb6d",
      "target": "5d39cf50-4b49-4256-a4e3-6b9d4f1f3332"
    },
    {
      "id": "f1c4eb29-4d3a-48eb-a0a4-afe3aeef793a",
      "type": "istar.AndRefinementLink",
      "source": "926bdd1f-0d56-40bd-aa52-e009528a8b18",
      "target": "5d39cf50-4b49-4256-a4e3-6b9d4f1f3332"
    },
    {
      "id": "acd408fd-472c-4487-9dcc-069576e578b0",
      "type": "istar.AndRefinementLink",
      "source": "79189087-e77a-4157-af5b-d0b655c84087",
      "target": "13f545ed-effc-4a45-a3cb-2667cfe776db"
    },
    {
      "id": "85549e15-e63b-4aba-8cc0-8cd139a92e47",
      "type": "istar.AndRefinementLink",
      "source": "8234aacf-9d18-46ab-a4fd-43fc5e0bfb80",
      "target": "13f545ed-effc-4a45-a3cb-2667cfe776db"
    },
    {
      "id": "c352277f-3b37-462d-b9a9-9dd7609b48ca",
      "type": "istar.AndRefinementLink",
      "source": "57396091-c7da-40d8-b709-a8cbc67ed3bd",
      "target": "13f545ed-effc-4a45-a3cb-2667cfe776db"
    },
    {
      "id": "0adc0970-a5b2-4b17-92a1-14c28809dd7c",
      "type": "istar.AndRefinementLink",
      "source": "5c447ebe-427c-4520-a4bc-a0fc89747c56",
      "target": "13f545ed-effc-4a45-a3cb-2667cfe776db"
    },
    {
      "id": "23ab4bcc-8f4e-4bbf-be58-a9e5958d7477",
      "type": "istar.AndRefinementLink",
      "source": "d8c62d3b-12f3-4225-bda6-a39875779963",
      "target": "652ead7a-1d51-4f5c-bb03-c713ec416dfb"
    },
    {
      "id": "90c6c0f9-09a8-4931-9976-67aa6193aa48",
      "type": "istar.AndRefinementLink",
      "source": "d200a2b3-4554-4cb4-ba7c-9a1a6efbca63",
      "target": "652ead7a-1d51-4f5c-bb03-c713ec416dfb"
    },
    {
      "id": "4fe66abe-5177-4a7a-ae5f-00911a727596",
      "type": "istar.AndRefinementLink",
      "source": "8f9b96df-733e-4b4f-b268-a3eda1981970",
      "target": "652ead7a-1d51-4f5c-bb03-c713ec416dfb"
    },
    {
      "id": "7d92d5dd-27d9-4bbf-9537-19f255d4bbf6",
      "type": "istar.AndRefinementLink",
      "source": "70b901d7-4314-4a9e-99de-e7836fc561a3",
      "target": "652ead7a-1d51-4f5c-bb03-c713ec416dfb"
    },
    {
      "id": "0f0b1d1a-16eb-4b71-8b51-7df1d4a4e388",
      "type": "istar.AndRefinementLink",
      "source": "f1e36a11-6ead-4610-bd1f-cdea39328782",
      "target": "03db365e-4a50-4264-b262-a29abe45e861"
    },
    {
      "id": "694f873b-147b-4178-9faf-8cb30a82746e",
      "type": "istar.AndRefinementLink",
      "source": "cd9f7383-49c5-413b-863b-ed27ab7a030b",
      "target": "03db365e-4a50-4264-b262-a29abe45e861"
    },
    {
      "id": "c359f74b-ab65-4f78-ae70-e0be93cc0b3d",
      "type": "istar.AndRefinementLink",
      "source": "4feda6ce-ab3b-4307-82e8-bd2be387d9f5",
      "target": "bd5e481f-e93b-4dfe-8daf-3d1fc91e6a04"
    },
    {
      "id": "da53042d-baac-4efe-a1fc-c732ac012867",
      "type": "istar.AndRefinementLink",
      "source": "b3593241-9261-4747-96d1-07111d797a5f",
      "target": "5f7c3633-1c1d-405b-b1ba-b55fb7b24d81"
    },
    {
      "id": "8c0d3ccb-0bfe-4592-b617-7d4c8fcb17fd",
      "type": "istar.AndRefinementLink",
      "source": "a4063774-76dd-4abe-9985-16cab637385a",
      "target": "5f7c3633-1c1d-405b-b1ba-b55fb7b24d81"
    },
    {
      "id": "d1f6f339-8d8c-4396-a6f6-8c33cf3631e3",
      "type": "istar.AndRefinementLink",
      "source": "258525fb-62db-4b18-a690-b286e227fb61",
      "target": "5f7c3633-1c1d-405b-b1ba-b55fb7b24d81"
    },
    {
      "id": "cc08b7d2-715f-4c6a-a0c9-0587658be978",
      "type": "istar.AndRefinementLink",
      "source": "dae48757-bc8f-4e8a-a52c-1653edd2d8a8",
      "target": "5f7c3633-1c1d-405b-b1ba-b55fb7b24d81"
    },
    {
      "id": "3b140322-8f54-4660-bffd-901c24fafdaf",
      "type": "istar.AndRefinementLink",
      "source": "ad38ed43-2c72-415f-9ead-2dfc675b6e63",
      "target": "73aa8b9c-7ad4-4328-a317-7c97a5c8f070"
    },
    {
      "id": "d0b70c5f-7822-448e-a0bd-ba2c13a495f3",
      "type": "istar.AndRefinementLink",
      "source": "67c155ea-d2b2-4044-bf94-419d3226e75d",
      "target": "73aa8b9c-7ad4-4328-a317-7c97a5c8f070"
    },
    {
      "id": "0c16b29e-b44f-463c-bb8d-64a872f9dc7d",
      "type": "istar.AndRefinementLink",
      "source": "38b683c0-067c-44f6-a1b7-692d424519c8",
      "target": "73aa8b9c-7ad4-4328-a317-7c97a5c8f070"
    },
    {
      "id": "5c925cac-587e-4bef-832a-f89c651c02fc",
      "type": "istar.AndRefinementLink",
      "source": "51d3d103-64b8-4baa-a858-a8127819be34",
      "target": "73aa8b9c-7ad4-4328-a317-7c97a5c8f070"
    },
    {
      "id": "dc7b494b-df18-46ea-8f3d-fa733ad90a4d",
      "type": "istar.AndRefinementLink",
      "source": "4fa00662-bd2d-42ea-be8f-edcaaf98ad17",
      "target": "03e2bb09-08f8-433b-b595-8aa48344bc9d"
    },
    {
      "id": "56ee4e18-e255-4bca-a2fe-0c468be60da2",
      "type": "istar.AndRefinementLink",
      "source": "afe3a0a7-1bae-434b-8e2c-44d4514505cd",
      "target": "03e2bb09-08f8-433b-b595-8aa48344bc9d"
    },
    {
      "id": "76328ac8-b71c-4634-8715-869a7e6aa16b",
      "type": "istar.AndRefinementLink",
      "source": "a8b85060-b6c1-426e-aa97-81901a3194f3",
      "target": "03e2bb09-08f8-433b-b595-8aa48344bc9d"
    },
    {
      "id": "e65c0b2b-e2a0-434e-9674-dee755e57003",
      "type": "istar.AndRefinementLink",
      "source": "95293d9c-792e-4e6e-80c3-40795e78f0ec",
      "target": "03e2bb09-08f8-433b-b595-8aa48344bc9d"
    },
    {
      "id": "0f8388a0-22f9-4555-bae4-aa8dd8d1cd34",
      "type": "istar.AndRefinementLink",
      "source": "03e2bb09-08f8-433b-b595-8aa48344bc9d",
      "target": "6387ad89-8fff-4612-a7aa-21116cf24e9f"
    },
    {
      "id": "234c6f2f-a712-4b97-a312-0b39e17588f8",
      "type": "istar.AndRefinementLink",
      "source": "73aa8b9c-7ad4-4328-a317-7c97a5c8f070",
      "target": "082fdbb5-7211-4b41-88fa-84b0f337d6a7"
    },
    {
      "id": "b1d4a534-5e34-4806-b1bf-83ed6e2b3277",
      "type": "istar.AndRefinementLink",
      "source": "af1d9884-2ea6-43b3-bcec-544c34acf4be",
      "target": "082fdbb5-7211-4b41-88fa-84b0f337d6a7"
    },
    {
      "id": "06b7dc60-f6b4-4e15-865f-dfb36789a8ce",
      "type": "istar.AndRefinementLink",
      "source": "9e6b1c43-cd00-451b-bd8a-f9799f711cae",
      "target": "af1d9884-2ea6-43b3-bcec-544c34acf4be"
    },
    {
      "id": "75d2534f-6453-4f24-9db9-e42de6a2c298",
      "type": "istar.AndRefinementLink",
      "source": "c323e003-f33b-4f64-be47-af325143335b",
      "target": "af1d9884-2ea6-43b3-bcec-544c34acf4be"
    },
    {
      "id": "d4a0f911-5ad0-4aa7-9157-ac46e26279e8",
      "type": "istar.AndRefinementLink",
      "source": "99d33f77-e6b2-4eaa-87c6-ec22f7b524e7",
      "target": "af1d9884-2ea6-43b3-bcec-544c34acf4be"
    },
    {
      "id": "ba604370-5b2a-489c-8455-c3375050eea2",
      "type": "istar.AndRefinementLink",
      "source": "55dbb959-ba5e-4000-a850-cc0a646f414c",
      "target": "af1d9884-2ea6-43b3-bcec-544c34acf4be"
    },
    {
      "id": "75d33056-f46b-4e5d-9f69-cdb4c43a7e29",
      "type": "istar.AndRefinementLink",
      "source": "3c4dc525-cf9a-434e-990e-ebaaf22ce441",
      "target": "4027113f-ff41-448e-ae93-d772c2894919"
    },
    {
      "id": "f6549a48-267c-4d3b-a7da-0a0db967352f",
      "type": "istar.AndRefinementLink",
      "source": "0c53906d-f5b1-4979-a2d5-8c2ff5a248c2",
      "target": "4027113f-ff41-448e-ae93-d772c2894919"
    },
    {
      "id": "d1f0cc66-85b8-45ac-82fa-054862b2735b",
      "type": "istar.AndRefinementLink",
      "source": "e90cf177-f74e-44b9-9e1e-12d9996e6341",
      "target": "4027113f-ff41-448e-ae93-d772c2894919"
    },
    {
      "id": "1bf5cab7-0171-4b07-be36-f290d11b18e0",
      "type": "istar.AndRefinementLink",
      "source": "0a67b1d7-b996-43ae-992d-becd42f9ed43",
      "target": "4027113f-ff41-448e-ae93-d772c2894919"
    },
    {
      "id": "457baa85-b73c-4d28-af3d-0c540c14171c",
      "type": "istar.AndRefinementLink",
      "source": "4027113f-ff41-448e-ae93-d772c2894919",
      "target": "082fdbb5-7211-4b41-88fa-84b0f337d6a7"
    },
    {
      "id": "04017f78-7e6f-416d-9064-09f7be17a434",
      "type": "istar.AndRefinementLink",
      "source": "ce2a3380-c5b4-4b6a-9a00-f086c3f0c1c0",
      "target": "36999bfa-ab41-4407-abad-126affb42631"
    },
    {
      "id": "d675c37b-d9c7-4b00-929b-3f4c41784ccb",
      "type": "istar.AndRefinementLink",
      "source": "30851dec-60b3-41a9-97ec-99224d5f66f4",
      "target": "36999bfa-ab41-4407-abad-126affb42631"
    },
    {
      "id": "d2646de2-0df8-4f02-ba36-a2bebd9dc936",
      "type": "istar.AndRefinementLink",
      "source": "af30e0ff-f527-47d5-a6f3-a418746749a2",
      "target": "36999bfa-ab41-4407-abad-126affb42631"
    },
    {
      "id": "42a65be7-1f19-4ef5-913d-32607487a855",
      "type": "istar.AndRefinementLink",
      "source": "433ce46d-1ebe-4ba1-9df9-dc80c64fdede",
      "target": "36999bfa-ab41-4407-abad-126affb42631"
    },
    {
      "id": "cd6d4b8f-4e36-4ee2-ad8b-533e14dba8fb",
      "type": "istar.AndRefinementLink",
      "source": "36999bfa-ab41-4407-abad-126affb42631",
      "target": "082fdbb5-7211-4b41-88fa-84b0f337d6a7"
    },
    {
      "id": "02438364-3a9a-4cfc-bb6a-011bead7ee7a",
      "type": "istar.AndRefinementLink",
      "source": "c0d4f45f-1973-40c7-9d1e-1562f262f439",
      "target": "8454e6a5-43bb-474f-aa4c-885c5b6d5c5c"
    },
    {
      "id": "4e99f0b2-eda9-4c7d-8d31-8308f049398d",
      "type": "istar.AndRefinementLink",
      "source": "4715f6a4-d580-4bd6-81fa-f93a944769b0",
      "target": "8454e6a5-43bb-474f-aa4c-885c5b6d5c5c"
    },
    {
      "id": "613dca52-0873-463a-9432-44bfe164a76d",
      "type": "istar.AndRefinementLink",
      "source": "8454e6a5-43bb-474f-aa4c-885c5b6d5c5c",
      "target": "082fdbb5-7211-4b41-88fa-84b0f337d6a7"
    },
    {
      "id": "469c1601-b66d-4ac1-b94b-b61cccf0a3d3",
      "type": "istar.AndRefinementLink",
      "source": "1552dab6-78ed-4d71-b92c-e7ac9bbc0a7b",
      "target": "4715f6a4-d580-4bd6-81fa-f93a944769b0"
    },
    {
      "id": "58727a09-ad96-4a87-afea-ad13eb3f54b1",
      "type": "istar.AndRefinementLink",
      "source": "5231331f-0ff9-498c-9c6e-2b00a9339fe2",
      "target": "4715f6a4-d580-4bd6-81fa-f93a944769b0"
    },
    {
      "id": "31823d82-d0bb-4701-af31-903ac1cf70b5",
      "type": "istar.AndRefinementLink",
      "source": "a9edf335-563d-498d-a488-1425992ad3c1",
      "target": "4715f6a4-d580-4bd6-81fa-f93a944769b0"
    },
    {
      "id": "0232cd0b-6791-40ad-bfd1-f7dccdb9d3fc",
      "type": "istar.AndRefinementLink",
      "source": "ff70869e-a164-44f7-87d5-78925dfc7f47",
      "target": "4715f6a4-d580-4bd6-81fa-f93a944769b0"
    },
    {
      "id": "4ae2d207-d470-4cf0-9887-ab3f761a9e92",
      "type": "istar.AndRefinementLink",
      "source": "6732ed01-8212-41aa-baa6-32b74cf9c89e",
      "target": "c0d4f45f-1973-40c7-9d1e-1562f262f439"
    },
    {
      "id": "ef6464d8-d0dc-4c23-89e4-471e90c4bc02",
      "type": "istar.AndRefinementLink",
      "source": "19093fd8-37d3-4c92-9e6c-86730e98c3c3",
      "target": "c0d4f45f-1973-40c7-9d1e-1562f262f439"
    },
    {
      "id": "1c3bbd75-9b34-4c32-959a-e49e0d50bec1",
      "type": "istar.AndRefinementLink",
      "source": "adaa2619-47f9-462e-b20e-ae9e7e7dc87e",
      "target": "c0d4f45f-1973-40c7-9d1e-1562f262f439"
    },
    {
      "id": "165a102f-f70d-4937-8576-7cd8294b519b",
      "type": "istar.AndRefinementLink",
      "source": "16e66b0e-52fe-4c28-9b73-7acd8acf5e16",
      "target": "c0d4f45f-1973-40c7-9d1e-1562f262f439"
    },
    {
      "id": "411d6feb-358a-4de9-b4c5-88e0163f7a1e",
      "type": "istar.AndRefinementLink",
      "source": "d8ae94bf-dce8-4e13-8518-dada0531acac",
      "target": "03db365e-4a50-4264-b262-a29abe45e861"
    },
    {
      "id": "3fc0fda4-614f-4489-addd-de8f3834880c",
      "type": "istar.AndRefinementLink",
      "source": "6ddb376a-c167-4b52-8478-48ecffc8117c",
      "target": "03db365e-4a50-4264-b262-a29abe45e861"
    },
    {
      "id": "108e1e1a-f7c8-45c3-8c32-323b3acedb67",
      "type": "istar.AndRefinementLink",
      "source": "8d88934e-edbf-431d-a32b-3abb3f7d8b8b",
      "target": "3d016f63-b215-4f8e-96eb-11b1fa1e184d"
    },
    {
      "id": "414f8372-f7f2-4c6e-954b-24e7fedafa1f",
      "type": "istar.AndRefinementLink",
      "source": "05d72456-cb34-442d-b098-11cabdd8b5d1",
      "target": "3d016f63-b215-4f8e-96eb-11b1fa1e184d"
    },
    {
      "id": "c679ae39-23b4-4c99-9aac-79ebb11b3e21",
      "type": "istar.AndRefinementLink",
      "source": "121a9626-5a8f-4ecf-85a4-41aec411cc94",
      "target": "3d016f63-b215-4f8e-96eb-11b1fa1e184d"
    },
    {
      "id": "9cddc029-c5e2-43f6-abae-e58948428cfe",
      "type": "istar.AndRefinementLink",
      "source": "76bb72ac-22bc-41b9-ae16-a8b68c3608ab",
      "target": "3d016f63-b215-4f8e-96eb-11b1fa1e184d"
    },
    {
      "id": "36163a84-56cd-43bc-858c-d84826d1ba1d",
      "type": "istar.AndRefinementLink",
      "source": "2a7c0ae0-3489-4bc7-bca2-5978dc4baf80",
      "target": "3d016f63-b215-4f8e-96eb-11b1fa1e184d"
    },
    {
      "id": "1e0ba1ad-d8be-476b-9c46-d4cbeed44597",
      "type": "istar.AndRefinementLink",
      "source": "afa3db48-55e4-4f1c-9208-42d0335e3ccb",
      "target": "0472d403-efab-48f7-aed5-8a14190ad71a"
    },
    {
      "id": "8f5d55e4-1138-44d4-819a-5c4c8de0335b",
      "type": "istar.AndRefinementLink",
      "source": "3d016f63-b215-4f8e-96eb-11b1fa1e184d",
      "target": "afa3db48-55e4-4f1c-9208-42d0335e3ccb"
    },
    {
      "id": "ce0df809-0cd5-41ac-a792-ac84dc4ea9e8",
      "type": "istar.AndRefinementLink",
      "source": "9f263aa4-58c7-4900-9da9-59e0f3a49d90",
      "target": "afa3db48-55e4-4f1c-9208-42d0335e3ccb"
    },
    {
      "id": "7b6cfea7-a3e3-456c-9c14-f9efdf40adeb",
      "type": "istar.AndRefinementLink",
      "source": "082fdbb5-7211-4b41-88fa-84b0f337d6a7",
      "target": "bd5e481f-e93b-4dfe-8daf-3d1fc91e6a04"
    },
    {
      "id": "157bb964-d611-4387-a942-bde5f1b137e1",
      "type": "istar.AndRefinementLink",
      "source": "d9a6c28a-a72f-4fb0-9840-78114e7825c6",
      "target": "082fdbb5-7211-4b41-88fa-84b0f337d6a7"
    },
    {
      "id": "cb904b87-fe25-4a3c-9288-0532a926f17d",
      "type": "istar.AndRefinementLink",
      "source": "03db365e-4a50-4264-b262-a29abe45e861",
      "target": "d9a6c28a-a72f-4fb0-9840-78114e7825c6"
    },
    {
      "id": "183f6b95-c437-493e-a9f7-a06d9cf0bbb1",
      "type": "istar.AndRefinementLink",
      "source": "5f7c3633-1c1d-405b-b1ba-b55fb7b24d81",
      "target": "d9a6c28a-a72f-4fb0-9840-78114e7825c6"
    },
    {
      "id": "b4592548-140d-42f7-b6ad-861c4eaaca73",
      "type": "istar.AndRefinementLink",
      "source": "fe1c46f4-f696-4aa9-ba7b-94426a8aab5b",
      "target": "6387ad89-8fff-4612-a7aa-21116cf24e9f"
    },
    {
      "id": "4713959a-293e-4e55-92e7-556b00d10d40",
      "type": "istar.AndRefinementLink",
      "source": "0d840cbe-8560-4d92-bfad-3e05102d3d9b",
      "target": "fe1c46f4-f696-4aa9-ba7b-94426a8aab5b"
    },
    {
      "id": "6197567f-3763-4f72-9eae-4868a84a7cae",
      "type": "istar.AndRefinementLink",
      "source": "14c11dd2-55c1-456a-b9b7-2c169975fee3",
      "target": "fe1c46f4-f696-4aa9-ba7b-94426a8aab5b"
    },
    {
      "id": "61e6bc33-9872-4b17-a78d-4f90e426b1ed",
      "type": "istar.AndRefinementLink",
      "source": "4f637d55-6146-492b-a6f4-3a8f7c2bb17f",
      "target": "fe1c46f4-f696-4aa9-ba7b-94426a8aab5b"
    },
    {
      "id": "10174d1f-3a7f-483e-a1ae-122935a0a1a9",
      "type": "istar.AndRefinementLink",
      "source": "6edeb91f-1017-4082-a932-2f86c1da672e",
      "target": "4f637d55-6146-492b-a6f4-3a8f7c2bb17f"
    },
    {
      "id": "efa65a20-5d60-4978-aa02-724e89402032",
      "type": "istar.AndRefinementLink",
      "source": "17c6f1f8-d5b6-489d-b096-ebe3f7adf12c",
      "target": "4f637d55-6146-492b-a6f4-3a8f7c2bb17f"
    },
    {
      "id": "261707fa-ba46-43ae-ba75-c67dfa767ad2",
      "type": "istar.AndRefinementLink",
      "source": "03a204df-155c-4c9a-ba2e-d2fe22f62f5b",
      "target": "4f637d55-6146-492b-a6f4-3a8f7c2bb17f"
    },
    {
      "id": "4b9174eb-54cd-4a2c-831c-b64685554fa4",
      "type": "istar.AndRefinementLink",
      "source": "b0be57cb-81ca-4886-810d-f8e331470194",
      "target": "4f637d55-6146-492b-a6f4-3a8f7c2bb17f"
    },
    {
      "id": "1e88b769-7445-4b14-840e-c55a2678b3c0",
      "type": "istar.AndRefinementLink",
      "source": "1a3dd5d1-0c3e-453f-9bb2-7f79d3392098",
      "target": "61ca99d1-6d04-4225-9407-dd781f85edfc"
    },
    {
      "id": "304b4c5f-b6d1-42d5-aeab-79ecc0f27c43",
      "type": "istar.AndRefinementLink",
      "source": "5ee54c8b-8cd8-4965-8f7b-e2f599ea4039",
      "target": "03db365e-4a50-4264-b262-a29abe45e861"
    },
    {
      "id": "dcc558e8-a77d-4770-a121-8ef5b1c27984",
      "type": "istar.AndRefinementLink",
      "source": "0651d65c-f216-42d0-9998-1b4cb5b9b42f",
      "target": "5f7c3633-1c1d-405b-b1ba-b55fb7b24d81"
    },
    {
      "id": "121c0a70-582a-432f-8954-0c7bacb403ff",
      "type": "istar.AndRefinementLink",
      "source": "b6fad3f3-f4a6-4ef1-a810-edf8075230b9",
      "target": "5f7c3633-1c1d-405b-b1ba-b55fb7b24d81"
    },
    {
      "id": "fad2e06d-1167-4d6f-ae83-fab165c8c590",
      "type": "istar.AndRefinementLink",
      "source": "6cb6089f-01a3-467f-a9c1-290cdd511a5f",
      "target": "afa3db48-55e4-4f1c-9208-42d0335e3ccb"
    },
    {
      "id": "7b9bf3be-b5b2-4a71-bf32-132b866477ad",
      "type": "istar.AndRefinementLink",
      "source": "849e8f32-a215-45c3-a85a-e900f6cdc7e8",
      "target": "9f263aa4-58c7-4900-9da9-59e0f3a49d90"
    },
    {
      "id": "7547b195-7aee-4052-b42b-e66ac238f3fa",
      "type": "istar.AndRefinementLink",
      "source": "730c43f4-cb00-4db4-8571-939244e85803",
      "target": "9f263aa4-58c7-4900-9da9-59e0f3a49d90"
    }
  ],
  "display": {
    "dbe6cf9f-877d-4600-bac9-8f7bbde93426": {
      "backgroundColor": "#FAF511"
    },
    "ab99b45b-ee62-4a1c-9d4d-1312dbfd3d7d": {
      "backgroundColor": "#FFFF00"
    },
    "b46a33b8-ac2a-4cd1-8500-e746c0c85218": {
      "backgroundColor": "#FFFF00"
    },
    "6387ad89-8fff-4612-a7aa-21116cf24e9f": {
      "backgroundColor": "#FFFF00",
      "width": 104.203125,
      "height": 39.5
    },
    "bd5e481f-e93b-4dfe-8daf-3d1fc91e6a04": {
      "backgroundColor": "#FFFF00"
    },
    "0472d403-efab-48f7-aed5-8a14190ad71a": {
      "backgroundColor": "#FFFF00"
    },
    "77b3f119-bd4e-42be-9b84-552a22bf44c5": {
      "backgroundColor": "#B4B8FA",
      "width": 66.29998779296875,
      "height": 36.116668701171875
    },
    "1a71e4f7-e126-46fe-a3db-b7523c20168f": {
      "backgroundColor": "#B4B8FA",
      "width": 71.29998779296875,
      "height": 34.116668701171875
    },
    "e081d04a-7921-4091-9129-cb0fe269be45": {
      "backgroundColor": "#B4B8FA",
      "width": 63.29998779296875,
      "height": 37.116668701171875
    },
    "21927ac9-33c0-4302-b8e8-b1a28b02793e": {
      "backgroundColor": "#B4B8FA",
      "width": 73.29998779296875,
      "height": 37.116668701171875
    },
    "e7eb3f41-7912-430e-bf3a-b2e0576d543b": {
      "backgroundColor": "#FFFF00"
    },
    "61ca99d1-6d04-4225-9407-dd781f85edfc": {
      "backgroundColor": "#FFFF00"
    },
    "a98c2a57-3103-4996-a040-027e2fa7b5c9": {
      "backgroundColor": "#6CFA4B"
    },
    "9f263aa4-58c7-4900-9da9-59e0f3a49d90": {
      "backgroundColor": "#FFFF00"
    },
    "730c43f4-cb00-4db4-8571-939244e85803": {
      "backgroundColor": "#B4B8FA",
      "width": 70.29998779296875,
      "height": 34.116668701171875
    },
    "849e8f32-a215-45c3-a85a-e900f6cdc7e8": {
      "backgroundColor": "#B4B8FA",
      "width": 64.29998779296875,
      "height": 32.116668701171875
    },
    "afa3db48-55e4-4f1c-9208-42d0335e3ccb": {
      "backgroundColor": "#FFFF00"
    },
    "c88bec8e-2a41-4747-b11c-6d34fe678d6b": {
      "backgroundColor": "#B4B8FA",
      "width": 69.29998779296875,
      "height": 32.116668701171875
    },
    "c0bf8e95-dc7a-4fbd-bcf7-3063599ba897": {
      "backgroundColor": "#B4B8FA",
      "width": 72.29998779296875,
      "height": 36.116668701171875
    },
    "db0e6179-34a2-4039-b724-41d106878f29": {
      "backgroundColor": "#B4B8FA",
      "width": 80.29998779296875,
      "height": 34.116668701171875
    },
    "3adbe37b-23c8-4a63-b037-2b8ee41e234d": {
      "backgroundColor": "#B4B8FA",
      "width": 72.29998779296875,
      "height": 32.116668701171875
    },
    "6cb6089f-01a3-467f-a9c1-290cdd511a5f": {
      "backgroundColor": "#6CFA4B",
      "width": 53.29998779296875,
      "height": 30.116668701171875
    },
    "0d840cbe-8560-4d92-bfad-3e05102d3d9b": {
      "backgroundColor": "#FFFF00"
    },
    "14c11dd2-55c1-456a-b9b7-2c169975fee3": {
      "backgroundColor": "#FFFF00"
    },
    "5d39cf50-4b49-4256-a4e3-6b9d4f1f3332": {
      "backgroundColor": "#FFFF00"
    },
    "13f545ed-effc-4a45-a3cb-2667cfe776db": {
      "backgroundColor": "#FFFF00",
      "width": 62.979156494140625,
      "height": 33.84722900390625
    },
    "652ead7a-1d51-4f5c-bb03-c713ec416dfb": {
      "backgroundColor": "#FFFF00"
    },
    "3800ce9d-26e7-49ca-bebf-a5bb542eb689": {
      "backgroundColor": "#6CFA4B",
      "width": 83.75698852539062,
      "height": 36.84722900390625
    },
    "7797320b-7785-4279-b652-ba73d1b854d1": {
      "backgroundColor": "#6CFA4B",
      "width": 84.75698852539062,
      "height": 35.84722900390625
    },
    "1cd6e8e4-997b-4d19-b278-70287bfa5e66": {
      "backgroundColor": "#6CFA4B",
      "width": 96.203125,
      "height": 33
    },
    "9b7a67ec-8a8b-4922-b067-17c74ba7db19": {
      "backgroundColor": "#6CFA4B",
      "width": 76.75698852539062,
      "height": 35.84722900390625
    },
    "563ed521-20f5-4591-a806-ca4300cdd9cc": {
      "backgroundColor": "#6CFA4B"
    },
    "0b3d1c92-f285-40c9-82bb-357db78dd3a9": {
      "backgroundColor": "#6CFA4B",
      "width": 81.29998779296875,
      "height": 38.516693115234375
    },
    "433d2d12-4897-432b-944d-145339dcf6ad": {
      "backgroundColor": "#6CFA4B",
      "width": 70.53469848632812,
      "height": 36.84722900390625
    },
    "c5eb9f84-cc3c-46cf-b18c-dea09df2d320": {
      "backgroundColor": "#6CFA4B",
      "width": 82.29998779296875,
      "height": 38.116668701171875
    },
    "d11712ef-2617-4805-9709-ebfa849a22ab": {
      "backgroundColor": "#6CFA4B",
      "width": 79.29998779296875,
      "height": 39.116668701171875
    },
    "bc50f072-ff5f-48be-ade2-c8a389423457": {
      "backgroundColor": "#6CFA4B",
      "width": 63.534698486328125,
      "height": 35.84722900390625
    },
    "8308812a-242c-4153-996e-6d39cfa9eb6d": {
      "backgroundColor": "#6CFA4B",
      "width": 69.53469848632812,
      "height": 35.84722900390625
    },
    "57396091-c7da-40d8-b709-a8cbc67ed3bd": {
      "backgroundColor": "#B4B8FA",
      "width": 65.97915649414062,
      "height": 34.84722900390625
    },
    "79189087-e77a-4157-af5b-d0b655c84087": {
      "backgroundColor": "#B4B8FA",
      "width": 48.979156494140625,
      "height": 35.84722900390625
    },
    "5c447ebe-427c-4520-a4bc-a0fc89747c56": {
      "backgroundColor": "#B4B8FA",
      "width": 56.979156494140625,
      "height": 34.84722900390625
    },
    "926bdd1f-0d56-40bd-aa52-e009528a8b18": {
      "backgroundColor": "#6CFA4B",
      "width": 61.29998779296875,
      "height": 33.116668701171875
    },
    "8234aacf-9d18-46ab-a4fd-43fc5e0bfb80": {
      "backgroundColor": "#B4B8FA",
      "width": 56.979156494140625,
      "height": 36.84722900390625
    },
    "d8c62d3b-12f3-4225-bda6-a39875779963": {
      "backgroundColor": "#B4B8FA",
      "width": 60.090240478515625,
      "height": 36.84722900390625
    },
    "70b901d7-4314-4a9e-99de-e7836fc561a3": {
      "backgroundColor": "#B4B8FA",
      "width": 67.09024047851562,
      "height": 35.84722900390625
    },
    "d200a2b3-4554-4cb4-ba7c-9a1a6efbca63": {
      "backgroundColor": "#B4B8FA",
      "width": 70.09024047851562,
      "height": 32.84722900390625
    },
    "8f9b96df-733e-4b4f-b268-a3eda1981970": {
      "backgroundColor": "#B4B8FA",
      "width": 63.090240478515625,
      "height": 36.84722900390625
    },
    "03db365e-4a50-4264-b262-a29abe45e861": {
      "backgroundColor": "#FFFF00"
    },
    "082fdbb5-7211-4b41-88fa-84b0f337d6a7": {
      "backgroundColor": "#FFFF00"
    },
    "f1e36a11-6ead-4610-bd1f-cdea39328782": {
      "backgroundColor": "#6CFA4B",
      "width": 64.20144653320312,
      "height": 33.06944274902344
    },
    "cd9f7383-49c5-413b-863b-ed27ab7a030b": {
      "backgroundColor": "#B4B8FA",
      "width": 59.201446533203125,
      "height": 35.06944274902344
    },
    "b6fad3f3-f4a6-4ef1-a810-edf8075230b9": {
      "backgroundColor": "#6CFA4B",
      "width": 105.42361450195312,
      "height": 48.51390075683594
    },
    "4feda6ce-ab3b-4307-82e8-bd2be387d9f5": {
      "backgroundColor": "#B4B8FA",
      "width": 58.29998779296875,
      "height": 33.116668701171875
    },
    "5f7c3633-1c1d-405b-b1ba-b55fb7b24d81": {
      "backgroundColor": "#FFFF00"
    },
    "b3593241-9261-4747-96d1-07111d797a5f": {
      "backgroundColor": "#B4B8FA",
      "width": 61.423614501953125,
      "height": 35.09028625488281
    },
    "a4063774-76dd-4abe-9985-16cab637385a": {
      "backgroundColor": "#6CFA4B",
      "width": 61.423614501953125,
      "height": 35.51390075683594
    },
    "258525fb-62db-4b18-a690-b286e227fb61": {
      "backgroundColor": "#6CFA4B",
      "width": 54.423614501953125,
      "height": 32.51390075683594
    },
    "dae48757-bc8f-4e8a-a52c-1653edd2d8a8": {
      "backgroundColor": "#6CFA4B",
      "width": 72.42361450195312,
      "height": 34.09028625488281
    },
    "73aa8b9c-7ad4-4328-a317-7c97a5c8f070": {
      "backgroundColor": "#FFFF00"
    },
    "ad38ed43-2c72-415f-9ead-2dfc675b6e63": {
      "backgroundColor": "#FA7267",
      "width": 69.29998779296875,
      "height": 37.316680908203125
    },
    "67c155ea-d2b2-4044-bf94-419d3226e75d": {
      "backgroundColor": "#6CFA4B",
      "width": 63.29998779296875,
      "height": 41.116668701171875
    },
    "38b683c0-067c-44f6-a1b7-692d424519c8": {
      "backgroundColor": "#6CFA4B",
      "width": 67.29998779296875,
      "height": 39.116668701171875
    },
    "51d3d103-64b8-4baa-a858-a8127819be34": {
      "backgroundColor": "#FA7267",
      "width": 71.29998779296875,
      "height": 37.416656494140625
    },
    "af1d9884-2ea6-43b3-bcec-544c34acf4be": {
      "backgroundColor": "#FFFF00"
    },
    "03e2bb09-08f8-433b-b595-8aa48344bc9d": {
      "backgroundColor": "#FFFF00"
    },
    "afe3a0a7-1bae-434b-8e2c-44d4514505cd": {
      "backgroundColor": "#B4B8FA",
      "width": 52.29998779296875,
      "height": 33.116668701171875
    },
    "95293d9c-792e-4e6e-80c3-40795e78f0ec": {
      "backgroundColor": "#B4B8FA",
      "width": 63.29998779296875,
      "height": 31.116668701171875
    },
    "a8b85060-b6c1-426e-aa97-81901a3194f3": {
      "backgroundColor": "#B4B8FA",
      "width": 64.97915649414062,
      "height": 35.84722900390625
    },
    "4fa00662-bd2d-42ea-be8f-edcaaf98ad17": {
      "backgroundColor": "#B4B8FA",
      "width": 71.97915649414062,
      "height": 30.84722900390625
    },
    "55dbb959-ba5e-4000-a850-cc0a646f414c": {
      "backgroundColor": "#6CFA4B",
      "width": 68.29998779296875,
      "height": 42.116668701171875
    },
    "99d33f77-e6b2-4eaa-87c6-ec22f7b524e7": {
      "backgroundColor": "#6CFA4B",
      "width": 64.29998779296875,
      "height": 41.116668701171875
    },
    "c323e003-f33b-4f64-be47-af325143335b": {
      "backgroundColor": "#6CFA4B",
      "width": 64.29998779296875,
      "height": 40.116668701171875
    },
    "9e6b1c43-cd00-451b-bd8a-f9799f711cae": {
      "backgroundColor": "#6CFA4B",
      "width": 63.29998779296875,
      "height": 40.116668701171875
    },
    "4027113f-ff41-448e-ae93-d772c2894919": {
      "backgroundColor": "#FFFF00"
    },
    "0a67b1d7-b996-43ae-992d-becd42f9ed43": {
      "backgroundColor": "#6CFA4B"
    },
    "3c4dc525-cf9a-434e-990e-ebaaf22ce441": {
      "backgroundColor": "#6CFA4B"
    },
    "0c53906d-f5b1-4979-a2d5-8c2ff5a248c2": {
      "backgroundColor": "#6CFA4B"
    },
    "e90cf177-f74e-44b9-9e1e-12d9996e6341": {
      "backgroundColor": "#6CFA4B"
    },
    "36999bfa-ab41-4407-abad-126affb42631": {
      "backgroundColor": "#FFFF00",
      "width": 97.203125,
      "height": 44
    },
    "433ce46d-1ebe-4ba1-9df9-dc80c64fdede": {
      "backgroundColor": "#6CFA4B"
    },
    "30851dec-60b3-41a9-97ec-99224d5f66f4": {
      "backgroundColor": "#6CFA4B"
    },
    "ce2a3380-c5b4-4b6a-9a00-f086c3f0c1c0": {
      "backgroundColor": "#6CFA4B",
      "width": 93.29998779296875,
      "height": 36.116668701171875
    },
    "af30e0ff-f527-47d5-a6f3-a418746749a2": {
      "backgroundColor": "#6CFA4B",
      "width": 98.203125,
      "height": 43
    },
    "8454e6a5-43bb-474f-aa4c-885c5b6d5c5c": {
      "backgroundColor": "#FFFF00"
    },
    "c0d4f45f-1973-40c7-9d1e-1562f262f439": {
      "backgroundColor": "#FFFF00",
      "width": 99.203125,
      "height": 41
    },
    "4715f6a4-d580-4bd6-81fa-f93a944769b0": {
      "backgroundColor": "#FFFF00",
      "width": 101.203125,
      "height": 42.5
    },
    "19093fd8-37d3-4c92-9e6c-86730e98c3c3": {
      "backgroundColor": "#6CFA4B",
      "width": 74.97915649414062,
      "height": 45.06944274902344
    },
    "adaa2619-47f9-462e-b20e-ae9e7e7dc87e": {
      "backgroundColor": "#6CFA4B",
      "width": 65.97915649414062,
      "height": 42.06944274902344
    },
    "16e66b0e-52fe-4c28-9b73-7acd8acf5e16": {
      "backgroundColor": "#6CFA4B",
      "width": 69.97915649414062,
      "height": 35.77397155761719
    },
    "6732ed01-8212-41aa-baa6-32b74cf9c89e": {
      "backgroundColor": "#6CFA4B",
      "width": 61.979156494140625,
      "height": 36.37400817871094
    },
    "a9edf335-563d-498d-a488-1425992ad3c1": {
      "backgroundColor": "#6CFA4B",
      "width": 73.97915649414062,
      "height": 39.95835876464844
    },
    "5231331f-0ff9-498c-9c6e-2b00a9339fe2": {
      "backgroundColor": "#6CFA4B",
      "width": 82.97915649414062,
      "height": 37.95835876464844
    },
    "1552dab6-78ed-4d71-b92c-e7ac9bbc0a7b": {
      "backgroundColor": "#6CFA4B",
      "width": 77.97915649414062,
      "height": 41.95835876464844
    },
    "ff70869e-a164-44f7-87d5-78925dfc7f47": {
      "backgroundColor": "#6CFA4B",
      "width": 84.97915649414062,
      "height": 37.95835876464844
    },
    "d8ae94bf-dce8-4e13-8518-dada0531acac": {
      "backgroundColor": "#B4B8FA",
      "width": 60.201446533203125,
      "height": 34.06944274902344
    },
    "6ddb376a-c167-4b52-8478-48ecffc8117c": {
      "backgroundColor": "#B4B8FA",
      "width": 65.20144653320312,
      "height": 39.06944274902344
    },
    "3d016f63-b215-4f8e-96eb-11b1fa1e184d": {
      "backgroundColor": "#FFFF00",
      "width": 97.203125,
      "height": 45.5
    },
    "2a7c0ae0-3489-4bc7-bca2-5978dc4baf80": {
      "backgroundColor": "#B4B8FA",
      "width": 94.29998779296875,
      "height": 39.116668701171875
    },
    "76bb72ac-22bc-41b9-ae16-a8b68c3608ab": {
      "backgroundColor": "#B4B8FA",
      "width": 95.29998779296875,
      "height": 38.116668701171875
    },
    "121a9626-5a8f-4ecf-85a4-41aec411cc94": {
      "backgroundColor": "#B4B8FA",
      "width": 99.703125,
      "height": 43
    },
    "05d72456-cb34-442d-b098-11cabdd8b5d1": {
      "backgroundColor": "#B4B8FA",
      "width": 89.29998779296875,
      "height": 43.116668701171875
    },
    "8d88934e-edbf-431d-a32b-3abb3f7d8b8b": {
      "backgroundColor": "#B4B8FA",
      "width": 56.29998779296875,
      "height": 34.116668701171875
    },
    "d9a6c28a-a72f-4fb0-9840-78114e7825c6": {
      "backgroundColor": "#FFFF00"
    },
    "fe1c46f4-f696-4aa9-ba7b-94426a8aab5b": {
      "backgroundColor": "#FFFF00"
    },
    "4f637d55-6146-492b-a6f4-3a8f7c2bb17f": {
      "backgroundColor": "#FFFF00",
      "width": 71.375,
      "height": 33.666656494140625
    },
    "6edeb91f-1017-4082-a932-2f86c1da672e": {
      "backgroundColor": "#B4B8FA",
      "width": 60.375,
      "height": 39.33333206176758
    },
    "17c6f1f8-d5b6-489d-b096-ebe3f7adf12c": {
      "backgroundColor": "#B4B8FA",
      "width": 66.375,
      "height": 39.33333206176758
    },
    "03a204df-155c-4c9a-ba2e-d2fe22f62f5b": {
      "backgroundColor": "#B4B8FA",
      "width": 71.375,
      "height": 39.33333206176758
    },
    "b0be57cb-81ca-4886-810d-f8e331470194": {
      "backgroundColor": "#B4B8FA",
      "width": 58.375,
      "height": 44.33333206176758
    },
    "1a3dd5d1-0c3e-453f-9bb2-7f79d3392098": {
      "backgroundColor": "#6CFA4B",
      "width": 102.375,
      "height": 42.99999237060547
    },
    "5ee54c8b-8cd8-4965-8f7b-e2f599ea4039": {
      "backgroundColor": "#B4B8FA"
    },
    "0651d65c-f216-42d0-9998-1b4cb5b9b42f": {
      "width": 90.375,
      "height": 57.666656494140625
    },
    "76328ac8-b71c-4634-8715-869a7e6aa16b": {
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
  "saveDate": "Fri, 23 Aug 2019 14:09:12 GMT",
  "diagram": {
    "width": 3886,
    "height": 1388,
    "name": "Welcome Model",
    "customProperties": {
      "Description": "Welcome to the piStar tool! This model describe some of the recent improvements in the tool.\n\nFor help using this tool, please check the Help menu above"
    }
  }
};
