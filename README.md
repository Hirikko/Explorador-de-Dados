📊 Explorador de Dados

Aplicação web leve para visualização, busca e filtragem de dados a partir de planilhas locais (.ods ou .xlsx).

Desenvolvido com HTML, CSS e JavaScript puro, o projeto utiliza a biblioteca XLSX para leitura de arquivos diretamente no navegador.
⚠️ Importante: Devido a restrições do navegador (CORS/segurança), o projeto precisa ser executado em um servidor local (como Apache, Nginx ou servidor embutido). Abrir o arquivo index.html diretamente não funcionará corretamente.

❓ Por que precisa de um servidor local?

Se você tentar abrir o index.html direto no navegador (tipo dois cliques no arquivo), o projeto provavelmente não vai funcionar direito.

Isso acontece porque os navegadores bloqueiam algumas operações quando a página roda direto do sistema (file://), principalmente por questões de segurança. Como a biblioteca XLSX precisa acessar e processar arquivos, ela acaba sendo afetada por essas restrições.

Quando você roda o projeto em um servidor local (como Live Server, Python, Apache, etc.), ele passa a funcionar via http://, que é o comportamento esperado de uma aplicação web — e aí tudo funciona normalmente.

🚀 Demonstração

<video src="../img/preview.webm" width="100%" controls></video>

✨ Funcionalidades
🔍 Busca dinâmica em tempo real
📄 Leitura de arquivos .ods e .xlsx diretamente no navegador
📊 Exibição dos dados em formato de tabela
⚡ Interface leve e rápida
🧠 Processamento 100% no lado do cliente (client-side)
🎨 Layout simples e intuitivo

🛠️ Tecnologias utilizadas
HTML5
CSS3
JavaScript (Vanilla JS)
Biblioteca XLSX

📂 Como usar
🔧 Opção 1 — Servidor simples com Python

Se você tiver Python instalado, use os seguintes comandos na pasta do portal:
```
# Python 3
python -m http.server

http://localhost:8000
```
```
🔧 Opção 2 — VS Code (Live Server)
Instale a extensão Live Server
Clique com o botão direito no index.html
Selecione "Open with Live Server"
```
```
🔧 Opção 3 — Servidor Apache/Nginx
Coloque os arquivos na pasta do servidor (ex: htdocs ou www)
Acesse via:
http://localhost/
```
💡 Diferenciais
📊 Processamento no lado do cliente
⚡ Leve e rápido
📦 Fácil de adaptar
🔒 Execução local


📈 Possíveis melhorias futuras se eu tiver mais tempo para esse projeto
Upload de arquivos via interface e integrar como nova planilha
Seleção de planilhas
Exportação de resultados filtrados
Tema escuro 🌙

👨‍💻 Autora

Desenvolvido por [ Hiriko ]

💡 Ideia do projeto

A proposta aqui foi criar algo simples, mas útil: um jeito rápido de abrir e pesquisar dados de planilhas sem depender de ferramentas mais pesadas.

Também foi um exercício de trabalhar com manipulação de dados no front-end e uso de bibliotecas externas.

📄 Licença

Este projeto está sob a licença MIT.
Sinta-se livre para usar e modificar.

Para atualizar os dados de seu portal
Vá na pasta data e edite a planilha dados.ods
