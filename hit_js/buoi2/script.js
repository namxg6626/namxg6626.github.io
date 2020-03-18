document.querySelectorAll(".img").forEach((ele, id) => {
    ele.style.backgroundImage = `url(./img/${id+1}.jpg)`
})

function changeImg(e) {
    const src = e.target.style.backgroundImage;
    document.getElementById("show").style.backgroundImage = src;
    console.log("here ", src);
}
