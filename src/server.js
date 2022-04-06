const proffys = [
    {name: "Diego Fernandes", 
    avatar: "https://avatars2.githubusercontent.com/u/2254731?s=460&amp;u=0ba16a79456c2f250e7579cb388fa18c5c2d7d65&amp;v=4", 
    whatsapp: "89987654534",
    subject: "Qumica", 
    cost: "20", 
    weekday: [0], 
    time_from: [720], 
    time_to: [1220]
},
    {name: "Daniella", 
    avatar: "https://avatars2.githubusercontent.com/u/2254731?s=460&amp;u=0ba16a79456c2f250e7579cb388fa18c5c2d7d65&amp;v=4", 
    whatsapp: "89987654534",
    subject: "Qumica", 
    cost: "20", 
    weekday: [1], 
    time_from: [720], 
    time_to: [1220]
}
]

function pageLanding(req, res){
    return res.sendFile(__dirname + "/views/index.html")  
}

function pageStudy(req, res){
    return res.sendFile(__dirname + "/views/study.html")
}

function pageGiveClasse(req, res){
    return res.sendFile(__dirname + "/views/give-classes.html")
}

const express = require('express')
const server = express()
const nunjucks = require('nunjucks')


server
//configurar arquivos estáticos (css, scripts, imagens)
.use(express.static("public"))
//rotas da aplicação
.get("/", pageLanding)
.get("/study", pageStudy)
.get("/give-classes", pageGiveClasse)
.listen(5500)

