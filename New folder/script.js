const audio = document.getElementById("myAudio");
const playButton = document.getElementById("playButton");

playButton.addEventListener("click", function () {
  audio.play();
});

// HERO SECTION FOR IMG
const images = [
    "./assets/img/3.jpg",
    "./assets/img/6.jpg",
    "./assets/img/7.jpg",
    "./assets/img/8.jpg"
  ];
  const imgElement = document.getElementById("hero-img");
  let currentImageIndex = 0;
  
  function changeImage() {
    imgElement.classList.remove("fade-animation");
    imgElement.style.opacity = 0;
    setTimeout(function () {
      imgElement.src = images[currentImageIndex];
      imgElement.classList.add("fade-animation");
      imgElement.style.opacity = 1;
      currentImageIndex = (currentImageIndex + 1) % images.length;
    }, 500);
  }
  
  imgElement.src = images[currentImageIndex];
  currentImageIndex = (currentImageIndex + 1) % images.length;
  
  setTimeout(function () {
    changeImage();
    setInterval(changeImage, 3000); // Change the interval to 3.5 seconds (3500 milliseconds)
  }, 3000);
  // END OF HERO SECTION FOR IMG
