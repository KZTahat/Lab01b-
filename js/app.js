'use strict'

let username = prompt('please inter your name?');
if (username != null) {
    alert('Welcom ' + username);
    console.log('Name: ' + username);
    document.write('Welcom ' + username);
}

let country = prompt('where are you from ', username, '?');
if (country != null) {
    alert('great country ' + country);
    console.log('country: ' + country);
    document.write('country :' + country);
}

let foodType = prompt('what is your best food type?');
if (foodType != null) {
    alert('I think you have a good taste');
    console.log('best food type: ' + foodType);
    document.write('foodType :' + foodType);
}

let hobby = prompt('what is your best hobby?');
if (hobby != null) {
    alert('I think we are on the same page');
    console.log('hobby: ' + hobby);
    document.write('hobby :' + hobby);
}

