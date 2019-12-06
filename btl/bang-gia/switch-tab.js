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

/*-----------------------------------------------------------------------------------*/

let mobileSelectCol = document.querySelectorAll('.mobile-select-col > div')
let priceTable = document.querySelectorAll('.price-table > table')
let cell_1 = priceTable[2].querySelectorAll('tbody > tr .col-w-20')
let cell_2 = priceTable[3].querySelectorAll('tbody > tr > td')
let cell_3 = priceTable[4].querySelectorAll('tbody > tr > .col-w-20')

if (screen.width <= 1000) {
    for (let j = 0; j < mobileSelectCol.length; j++) {
        mobileSelectCol[j].classList.remove("check-table-active");
        cell_1[j + 3].style.display = "none";
        cell_1[j].style.display = "none";
        cell_3[j].style.display = "none";
    }
    cell_1[1].style.display = "table-cell";
    cell_1[1].style.width = "100%"
    cell_1[1 + 3].style.display = "table-cell";
    cell_1[1 + 3].style.width = "100%"
    cell_3[1].style.display = "table-cell"

    //the second
    for (let cellInCompareTable = 0; cellInCompareTable < cell_2.length; cellInCompareTable++)
        cell_2[cellInCompareTable].style.display = "none"

    for (let cellInCompareTable = 1 + 1; cellInCompareTable < cell_2.length; cellInCompareTable += 4) {
        cell_2[cellInCompareTable].style.display = "table-cell"
        cell_2[cellInCompareTable - 1 - 1].style.display = "table-cell"
    }
    mobileSelectCol[1].classList.add("check-table-active");
}

for (let i = 0; i < mobileSelectCol.length; i++) {
    mobileSelectCol[i].addEventListener('click', function () {
        //the first + the third table in #Advanced
        for (let j = 0; j < mobileSelectCol.length; j++) {
            mobileSelectCol[j].classList.remove("check-table-active");
            cell_1[j + 3].style.display = "none";
            cell_1[j].style.display = "none";
            cell_3[j].style.display = "none";
        }
        cell_1[i].style.display = "table-cell";
        cell_1[i].style.width = "100%"
        cell_1[i + 3].style.display = "table-cell";
        cell_1[i + 3].style.width = "100%"
        cell_3[i].style.display = "table-cell"

        //the second
        for (let cellInCompareTable = 0; cellInCompareTable < cell_2.length; cellInCompareTable++)
            cell_2[cellInCompareTable].style.display = "none"

        for (let cellInCompareTable = i + 1; cellInCompareTable < cell_2.length; cellInCompareTable += 4) {
            cell_2[cellInCompareTable].style.display = "table-cell"
            cell_2[cellInCompareTable - i - 1].style.display = "table-cell"
        }

        this.classList.add("check-table-active");
    });
}
