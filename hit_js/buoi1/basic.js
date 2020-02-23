function ptb2() {
    let a = Number.parseInt(document.getElementById('varA').value);
    let b = Number.parseInt(document.getElementById('varB').value);
    let c = Number.parseInt(document.getElementById('varC').value);
    let result = document.getElementById('ptb2Result');

    if (a == 0) {
        if (b == 0 && c == 0)
            result.textContent = "Phương trình có vô số nghiệm";
        else if (b == 0 && c != 0)
            result.textContent = "Phương trình vô nghiệm";
        else
            result.textContent = "x = " + (-c / b);
    } else {
        let delta = b * b - 4 * a * c;
        if (delta < 0)
            result.textContent = "Phương trình vô nghiệm";
        else if (delta == 0)
            result.textContent = "x1 = x2 = " + (-b / (2 * a));
        else {
            let x1 = (-b + Math.sqrt(delta)) / (2 * a);
            let x2 = (-b - Math.sqrt(delta)) / (2 * a);
            result.textContent = `x1 = ${x1}; x2 = ${x2}`;
        }
    }
}

function findDateOfMonth() {
    let month = Number.parseInt(document.getElementById('month').value);
    let year = Number.parseInt(document.getElementById('year').value);
    let dateResult = document.getElementById('dateResult');

    switch (month) {
        case 1:
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
        case 12:
            dateResult.textContent = 31;
            break;
        case 4:
        case 6:
        case 9:
        case 11:
            dateResult.textContent = 30;
            break;
        case 2:
            dateResult.textContent = year % 4 == 0 ? `29 (năm nhuận)` : `28 (năm không nhuận)`;
            break;
        default:
            dateResult.textContent = "Nhập tháng (╬▔皿▔)╯";
            break;
    }
}

function findSNT() {
    let n = Number.parseInt(document.getElementById('varN').value)
    let sntResult = document.getElementById('sntResult');
    let primeNumbersString = "";

    for (let i = 1; i <= n; i++) {
        let sqrtI = Math.sqrt(i);
        let isPrimeNumber = true;
        for (let j = 2; j <= sqrtI; j++)
            if (i % j == 0) {
                isPrimeNumber = false;
                break;
            }
        if (isPrimeNumber)
            primeNumbersString += i + " ";
    }
    if (primeNumbersString !== "")
        sntResult.textContent = primeNumbersString;
    else
        sntResult.textContent = -1;
}

document.querySelectorAll('form > button[type="reset"]').forEach((rsButton, index) => {
    rsButton.addEventListener('click', () => {
        document.querySelectorAll('.result-section > span')[index].textContent = "";
        console.log('clicked');
    });
});