let obj = {
    name: 'abc',
    sex: 'male',
    age: 18
}

let myJSON = JSON.stringify(obj);
localStorage.setItem('myObj', myJSON)

let text = localStorage.getItem('myObj');
let myObj = JSON.parse(text);
console.log(text);
