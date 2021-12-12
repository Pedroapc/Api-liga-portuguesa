const axios = require('axios');
const cheerio = require('cheerio');

let equipas = [];
let noticias = [];

exports.benfica = (req, res ) => {
    axios.get('https://desporto.sapo.pt/futebol/competicao/primeira-liga-2/noticias')
    .then((response) => {
            const html = response.data
            const $ = cheerio.load(html)
            noticias = []

            $('a:contains("Benfica")', html).each(function () {
                const titulo = $(this).text()
                const url = $(this).attr('href')
                
                noticias.push({
                    titulo,
                    url: "https://desporto.sapo.pt" + url      
                })
            })
            noticias.shift()
            res.json(noticias)
        }).catch((err) => console.log(err))  
}

exports.sporting = (req, res ) => {
    axios.get('https://desporto.sapo.pt/futebol/competicao/primeira-liga-2/noticias')
    .then((response) => {
            const html = response.data
            const $ = cheerio.load(html)
            noticias = []
            $('a:contains("Sporting")', html).each(function () {
                const titulo = $(this).text()
                const url = $(this).attr('href')
                
                noticias.push({
                    titulo,
                    url: "https://desporto.sapo.pt" + url      
                })
            })
            noticias.shift()
            res.json(noticias)
        }).catch((err) => console.log(err))
}

exports.porto = (req, res ) => {
    axios.get('https://desporto.sapo.pt/futebol/competicao/primeira-liga-2/noticias')
    .then((response) => {
            const html = response.data
            const $ = cheerio.load(html)
            noticias = []
            $('a:contains("Porto")', html).each(function () {
                const titulo = $(this).text()
                const url = $(this).attr('href')
                
                noticias.push({
                    titulo,
                    url: "https://desporto.sapo.pt" + url      
                })
            })
            noticias.shift()
            res.json(noticias)
        }).catch((err) => console.log(err))
}

exports.classificacao = (req, res ) => {
    axios.get('https://desporto.sapo.pt/futebol/competicao/primeira-liga-2/classificacao')
    .then((response) => {
            const html = response.data
            const $ = cheerio.load(html)
            equipas = []
            
            $('tr', html).each(function () {
                const posicao = $(this).text()              
                equipas.push({
                    posicao,                                  
                })
            })

            
            equipas.pop()
            equipas.pop()
            equipas.pop()
            equipas.pop()
            res.json(equipas)

        }).catch((err) => console.log(err))
}


    

    


    

    
