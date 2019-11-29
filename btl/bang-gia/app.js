let menu_content = document.getElementsByClassName('op')
for (i = 0; i < menu_content.length; i++) {
    menu_content[i].addEventListener("click", function() {
        for (i = 0; i < menu_content.length; i++)
            menu_content[i].classList.remove("active")
        this.classList.add("active")
        // document.write('asfd')
    });
}