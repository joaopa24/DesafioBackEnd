const express = require('express')
const nunjucks = require('nunjucks')
const dataD = require('./data')
const server = express()


server.use(express.static('public'))
server.set("view engine", "njk")

nunjucks.configure("views", {
  express: server
})

server.get("/", function (req, res) {
  return res.render("about")
})

server.get("/Conteudo", function (req, res) {
  return res.render("courses", { about: dataD })
})
server.get("/Conteudo/:id", function (req, res) {
  const id = req.params.id;
  const cursos = dataD.find(function (video) {
    if (video.name == id) {
      return video.name = id;
    }
    if (!video) {
      return res.send("video not found")
    }
  })
  /*console.log(cursos)*/
  return res.render("curso", { item:cursos })

})

server.use(function (req, res) {
  res.status(404).render("not-found");
})

server.listen(5000, function () {
  console.log('Server rodando!')
})

/* Se o get estiver depois do 404 nao pega*/
/*  const curso = dataD.find(function(video){
          if(video.id == id){
              return video.id = id
          }
          if(!video){
            return res.send("video not found")
        }
      })
      return res.render("curso", {cursin:curso}) */