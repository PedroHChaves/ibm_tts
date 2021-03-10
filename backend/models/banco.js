const Sequelize = require('sequelize')
//Conexão com o banco de dados MySql

const seq = new Sequelize(process.env.DATABASE_NAME, process.env.DATABASE_USER, process.env.DATABASE_PASSWORD, {
  host: process.env.DATABASE_HOST,
  dialect: 'mysql'
})

const Coment = seq.define('coments', {
  conteudo: {
    type: Sequelize.TEXT
  },
  idArquivo: {
    type: Sequelize.TEXT
  }
})

module.exports = Coment

Coment.sync()