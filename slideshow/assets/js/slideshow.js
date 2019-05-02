// var slideIndex = 1
// showSlides(slideIndex)

// // Next/previous controls
// function plusSlides(n) {
//   showSlides(slideIndex += n)
// }

// function showSlides(n) {
//     var i
//     var slides = document.getElementsByClassName("slide")

//     if (n > slides.length) {
//         slideIndex = 1
//     } 

//     if (n < 1) {
//         slideIndex = slides.length
//     }
  
//     for (i = 0; i < slides.length; i++) {
//         slides[i].style.display = "none"
//     }

//     slides[slideIndex-1].style.display = "block"
// }

showSlide()

function showSlide() {
    var imageElement = document.querySelector('img')
    imageElement.setAttribute('src', 'assets/images/slide01.jpg')
}

function trocarSlide(n) {
    //var totalSlides = 4
    var currentImage = document.querySelector('img')
    var srcImage = currentImage.getAttribute('src')
    var numberImage = srcImage.split('/')[2]
    console.log(numberImage.indexOf('0'))
}
