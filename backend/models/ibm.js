const fs = require('fs')
const TextToSpeechV1 = require('ibm-watson/text-to-speech/v1')
const { IamAuthenticator } = require('ibm-watson/auth')

const textToSpeech = new TextToSpeechV1({
    authenticator: new IamAuthenticator({
      apikey: process.env.IBM_KEY
    }),
    serviceUrl: process.env.IBM_URL
})

const tts = (synthesizeParams, nomeArquivo) => {

    textToSpeech.synthesize(synthesizeParams).then(response => {
        return textToSpeech.repairWavHeaderStream(response.result)
    }).then(buffer => {
        fs.writeFileSync("./assets/" + nomeArquivo, buffer)
    }).catch(err => {
        console.log('error:', err)  
    })
}

module.exports = tts