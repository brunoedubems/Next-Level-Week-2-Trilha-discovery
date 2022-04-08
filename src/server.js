//Dados

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

const subjects = [
"Artes",
"Biologia",
"Ciências",
"Educação Física",
"Física",
"Geografia",
"História",
"Matemática",
"Português",
"Química",

]

const weekdays = [
"Domingo",
"Segunda-feira",
"Terça-feira",
"Quarta-feira",
"Quinta-feira",
"Sexta-feira",
"Sábado",
    ]

//funcionalidades
function pageLanding(req, res){
    // return res.render(__dirname + "/views/index.html")  
    return res.render("index.html")  
}

function pageStudy(req, res){
    // return res.render(__dirname + "/views/study.html")
    const filters = req.query
    return res.render("study.html", {proffys, subjects, weekdays})
}

function pageGiveClasse(req, res){
const data = req.query

//se tiver dados adicionar
//adicionar data a lista de proffys
//se tiver data
const isNotEmpty = Object.keys(data).length != 0
if (isNotEmpty) {
    
    proffys.push(data);
    return res.redirect("/study")
}


//se nao, não adicionar
    // return res.render(__dirname + "/views/give-classes.html")
    return res.render("give-classes.html", {subjects, weekdays})
}


//servidor
const express = require('express')
const server = express()
const nunjucks = require('nunjucks')

//configurar nunjucks(template engine)
nunjucks.configure('src/views', {
    express: server,
    noCache: true,
})

//Inicio e configuração do servidor
server
//configurar arquivos estáticos (css, scripts, imagens)
.use(express.static("public"))
//rotas da aplicação
.get("/", pageLanding)
.get("/study", pageStudy)
.get("/give-classes", pageGiveClasse)
//start do servidor
.listen(5500)

