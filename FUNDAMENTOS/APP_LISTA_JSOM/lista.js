const url = 'https://dados.ifpb.edu.br/dataset/26d67876-0cb2-41a4-83ed7bde06eb736c/resource/0d03ee6a-2af1-4dde-9b3d90419c48fabe/download/servidores.json'
const axios = require('axios')
const cargo = f => f.cargo_emprego ==='CONTADOR'
const aposentado = f => f.situacao.nome =='APOSENTADO'
const jornada = f => f.jornada_trabalho == '40 HORAS SEMANAIS'
axios.get(url).then(resposta =>{
 const servidores = resposta.data
 module.exports.resultado =
servidores.filter(cargo).filter(aposentado).filter(jornada)
})