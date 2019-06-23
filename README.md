# Passo a passo de instalação

__Observação Importante:__ O procedimento abaixo leva em consideração que a ferramenta vai rodar num servidor GNU/linux, ou seja, os comandos abaixo listados são para distribuições Linux, usando a distribuição Ubuntu como exemplo.

##Instalação do Apache HTTP Server:

Para instalar o servidor HTTP, execute o comando abaixo. Lembre-se que a senha de administrador do sistema é necessária para executar o comando:

```shellscript
apt install apache2
```

Agora, assumindo que você já tenha o servidor HTTP (Apache HTTP Server) com serviço em funcionamento, faça uma clonagem do repositório do projeto com o comando:
 
```
git clone https://github.com/lealfb/bdd2Goal.git
```
Uma vez baixado o repositório, faça uma cópia do diretório "tool" e todos seu conteúdo para a diretório de execução do Apache. Por padrão no Ubuntu, o diretório fica localizado no endereço abaixo: 

> /var/www/html 

Caso tenha outra configuração no seu servidor HTTP, altere o destino conforme necessário para o seu sistema.
 
 ```
 cp -R bdd2Goal/tool /var/www/html/pistar
 ```
 
 Lembre-se que você deve ter permissão para copiar o diretório (usuário root). E após copiar o diretório, é importante também definir as permissões de leitura e escrita para o mesmo.
 
 ```
 chown -R www-data:www-data /var/www/html/pistar
 ```
 
 ## Notas Importantes
 
 Com base no projeto original, foi criado um arquivo chamado "js/pistar_plugin.js". Nele contém funções de sobreescrita que substituem o funcionamento original do piStar, o qual é responsável por carregar a lista de tarefas.
 
 Além do arquivo de plugin, também existe um novo diretório chamado "json", o qual contém diversos arquivos JSON que é a base para funcionamento do novo tipo de propriedade contendo as taferas. Um novo script de plugin sobre-escreve as propriedades do funcionamento original do piStar e carrega valores pré-definidos desse diretório contendo os arquivos JSON.
 
 Com o serviço em execução, acesse o endereço do servidor, como no exemplo abaixo:
 
 http://localhost/pistar
 
 O sistema deve apresentar a página de entrada.
 
Ao adicionar uma nova propriedade num objeto do tipo "Tarefa (Task)", deverá aparecer um menu contendo as tarefas pre-definidas do diretório contendo os diversos arquivos JSON.
