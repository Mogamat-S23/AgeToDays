// function calculate() {
//     "use strict";
//     var age = document.getElementById("age").value,
//         result = age * 365;
//     document.getElementById("Output").innerHTML = result;
//     if (age === "") {
//         document.getElementById("Output").innerHTML = "This Field Is Empty";
//     } else if (amount < 0) {
//         document.getElementById("Output").innerHTML = "This Field Is Not accepted Negative numbers";
//     } else {
//         document.getElementById("Output").innerHTML = result;
//     }
// }


let calculate = document.getElementById('cal')
let c = calculate

c.addEventListener('click', () => {
    let age = document.getElementById('age').value
    let days = age * 365;
    document.getElementById('days').value = days;
    
    let hours = document.getElementById('hours')
    let minutes = document.getElementById('minutes')
    let seconds = document.getElementById('days')

    
})

let btnClear = document.getElementById('clear');

btnClear.addEventListener('click', () => {
    let age = document.getElementById('age')
    age.value = ''
    document.getElementById('days').value = ''


});