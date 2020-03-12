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

const slides = document.querySelectorAll(".slide").forEach((slide, id) => {
  slide.style.backgroundColor = slideStyle[id].bgColor;
  slide.textContent = slideStyle[id].text;
  console.log(slide);
});

let autoNextSlide = setInterval(nextSlide, 1000);

function nextSlide() {
  clearInterval(autoNextSlide);
  const slideContainer = document.querySelector(".slide-container");
  const currentPosition = parseInt(slideContainer.style.left);

  if (currentPosition === -1200) slideContainer.style.left = 0;
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
}
