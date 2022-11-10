# TesteM10WEB-

+ Baixe o arquivo

+ Abrir o projeto no VS Code e abrir o terminal e Digitar npm install para instalar as dependencias

+ Ir no arquivo .env e definir a porta no PORT, o banco no DB e a senha no PASSWORD do seu banco de dados MySql - localhost

+ Digitar npm start e testar a aplicação!

## IMPORTANTE: 
 ### Após rodar a aplicação pela primeira vez apagar a linha 32 do arquivo model/Usuarios.js e a linha 43 do arquivo Endereco.js da mesma pasta.
+ Usuarios.sync({force:true})
+ Endereco.sync({force:true})

Isso serve para que o banco de dados seja forçado a ser criado, porem ele sobrescreve o banco anterior.

