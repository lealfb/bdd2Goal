# Passo a passo de instalação

__Observação Importante:__ O procedimento abaixo leva em consideração que a ferramenta vai rodar num servidor GNU/linux, ou seja, os comandos abaixo listados são para distribuições Linux, usando a distribuição RedHat como exemplo.

Assumindo que você já tenha um servidor HTTP (Apache HTTP Server) com serviço em funcionamento, faça uma clonagem do repositório do projeto com o comando:
 
```shellscript
git clone https://github.com/lealfb/bdd2Goal.git
```
 Uma vez baixado o repositório, copie o diretório "tool" para a diretório de execução do Apache. Vamos usar como exemplo aqui o diretório padrão de funcionamento do Apache em um servidor GNU/linux executando uma distribuição RedHat, a qual o diretório padrão é o diretório "/var/www/html".
 
 ```shellscript
 cp -R bdd2Goal/tool /var/www/html/pistar
 ```
 
 Lembre-se que você deve ter permissão para copiar o diretório (usuário root). E após copiar o diretório, é importante também definir as permissões de leitura e escrita para o mesmo.
 
 ```shellscript
 chown apache:apache /var/www/html/pistar
 ```
 
 ## Notas Importantes
 
 Com base no projeto original, foi criado um arquivo chamado "js/pistar_plugin.js". Nele contém funções de sobreescrita que substituem o funcionamento original do piStar, o qual é responsável por carregar a lista de tarefas.
 
 Além do arquivo de plugin, também existe um novo diretório chamado "json", o qual contém diversos arquivos JSON que é a base para funcionamento do novo tipo de propriedade contendo as taferas. Um novo script de plugin sobre-escreve as propriedades do funcionamento original do piStar e carrega valores pré-definidos desse diretório contendo os arquivos JSON.
 
 Com o serviço em execução, acesse o endereço do servidor, como no exemplo abaixo:
 
 http://localhost/pistar
 
 O sistema deve apresentar a página de entrada.
 
 Ao adicionar uma nova propriedade num objeto do tipo "Tarefa (Task)", deverá aparecer um menu contendo as tarefas pre-definidas do diretório contendo os diversos arquivos JSON.
