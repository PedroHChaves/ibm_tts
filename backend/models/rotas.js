var express = require('express');
var rotas = express.Router();
const Coment = require('./banco')
const tts = require('./ibm')
const crypto = require('crypto')

rotas.post('/cadastrar', (req, res) => {
    var nomeArquivo = `${crypto.randomBytes(20).toString('hex')}-${Date.now()}.wav`
    Coment.create({
        conteudo: req.body.comentario,
        idArquivo: nomeArquivo
    }).then(async () => {

        const synthesizeParams = {
            text: req.body.comentario,
            accept: 'audio/wav',
            voice: 'pt-BR_IsabelaV3Voice',
        }

        await tts(synthesizeParams, nomeArquivo)
        var link = process.env.API_URL + ':' + process.env.API_PORT + '/audios/' + nomeArquivo
        res.json({
            link,
            conteudo: req.body.comentario
        })
    }).catch( erro => {
        return res.send("Erro encontrado: " + erro)
    })
})

rotas.get('/', (req, res) => {
    Coment.findAll({
        attributes: [
            'conteudo',
            'idArquivo'
        ]
    }).then(function(comentarios){
        var result = comentarios.map(comentario => {
            var link = process.env.API_URL + ':' + process.env.API_PORT + '/audios/' + comentario.idArquivo
            return {
                conteudo: comentario.conteudo,
                link
            }
        })
        res.send(result)
    }).catch(erro  => {
        return res.send("Erro encontrado: " + erro)
    })
})

module.exports = rotas