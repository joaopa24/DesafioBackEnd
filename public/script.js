const Modaloverlay = document.querySelector('.modaloverlay')
const cards = document.querySelectorAll('.card')

for (let card of cards) {
     card.addEventListener("click", function () {         
          const videoid = card.getAttribute("id")
          window.location.href = `/Conteudo/${videoid}`
     })
}
document.querySelector('.close-modal').addEventListener('click', function () {
     ModalOverlay.classList.remove('active')
     ModalOverlay.querySelector("iframe").src = ""
})
    /*
    
    Modaloverlay.classList.add('active')
    Modaloverlay.querySelector('iframe').src = `https://rocketseat.com.br/${videoid}`
card.addEventListener("click",function(){
    Modaloverlay.classList.add('active')
    const videoid = card.getAttribute("id")
    Modaloverlay.querySelector('iframe').src = `https://rocketseat.com.br/${videoid}`
    */