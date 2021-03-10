# Sistema IBM Text to Speech

 Sistema criado utilizando NodeJS, React e MySQL, além de utilizar arquivos CSS, o framework de CSS materialize e as dependencias, express, cors, crypto, dotenv, ibm-watson, mysql2 e sequelize. Ele tem por finalidade ser um teste prático com o intuito de concorrer a uma vaga para programador de chatbot. 
 
# Funcionamento

 Na aplicação, ao lado direito pode ser realizado um comentário, que será armazenado no banco e enviado até a api da IBM Text to Speech. Já ao lado direito pode ser visto os comentários armazenados no banco, ao clicar no botão a aplicação reproduzirá o áudio criado pela api da IBM.
 
# Como usar
 Primeiramente é necessário fazer o download do NodeJS e do MySQL.

 Após isso baixe todo o projeto.

 Vá até a pasta backend e adicione as informações necessárias no arquivo .env, o nome do banco em DATABASE_NAME, o usuário em DATABASE_USER, o password em DATABASE_PASSWORD e o host em DATABASE_HOST, além da chave e url da ibm em suas devidas variáveis e na variável API_URL e API_PORT pode ser a alterado onde o backend irá rodar. 

 Abra o cmd e vá até a pasta do backend e execute o comando npm i, para instalar as dependencias. E também o comando node index.js, para assim colocar o backend em funcionamento.

 Abra outro cmd, va ate a pasta do frontend e execute o comando npm i, por fim execute npm start.
