const slideStyle = [
  {
    bgColor: "red",
    text: "1st slide"
  },
  {
    bgColor: "blue",
    text: "2nd slide"
  },
  {
    bgColor: "green",
    text: "3rd slide"
  },
  {
    bgColor: "yellow",
    text: "4th slide"
  },
  {
    bgColor: "pink",
    text: "5th slide"
  }
];

const slideContainer = document.getElementsByClassName("slide-container")[0];
init(slideContainer);
let autoNextSlide = setInterval(nextSlide, 1000);

function init(slideContainer) {
  for (let ele of slideStyle) {
    let slide = document.createElement("div");
    slide.classList.add("slide");
    slide.style.setProperty("background", ele.bgColor);
    slide.textContent = ele.text;
    slideContainer.appendChild(slide);
  }
}

function nextSlide() {
  clearInterval(autoNextSlide);
  const slideContainer = document.querySelector(".slide-container");
  const currentPosition = parseInt(slideContainer.style.left);

  if (currentPosition === -((slideStyle.length - 1) * 300)) slideContainer.style.left = 0;
  else slideContainer.style.left = currentPosition - 300 + "px";
  autoNextSlide = setInterval(nextSlide, 1000);
}

function preSlide() {
  clearInterval(autoNextSlide);
  const slideContainer = document.querySelector(".slide-container");
  const currentPosition = parseInt(slideContainer.style.left);

  if (currentPosition === 0) {
    autoNextSlide = setInterval(nextSlide, 1000);
    return;
  }
  slideContainer.style.left = currentPosition + 300 + "px";
  autoNextSlide = setInterval(nextSlide, 1000);
}
