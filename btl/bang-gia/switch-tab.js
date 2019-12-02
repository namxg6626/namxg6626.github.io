let menuContent = document.getElementsByClassName('op')
let content = document.getElementsByClassName('content')[0]
let contentTab = document.getElementsByClassName('content-tab')

for (let i = 0; i < menuContent.length; i++) {
    menuContent[i].addEventListener("click", function () {
        for (let j = 0; j < menuContent.length; j++) {
            menuContent[j].classList.remove("active")
            contentTab[j].style.display = "none"
        }
        contentTab[i].style.display = "block"
        this.classList.add("active")
    });
}
