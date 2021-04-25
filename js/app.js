'use strict'

let qustion1 = prompt('please inter your name?/');
if (qustion1 != null) {
    alert('Welcom', qustion1);
    console.log('Name: ',qustion1);
}

let qustion2 = Number(prompt('where are you from ',qustion1,'?'));
if(qustion2!=null){
    alert('great country',qustion2);
    console.log('country: ',qustion2);
}

let qustion3 = prompt('what is your best food type?');
if(qustion3!=null){
    alert('I think you have a good taste');
    console.log('best food type: ',qustion3);
}

let qustion4 = prompt('what is your best hobby?');
if(qustion4!=null){
    alert('I think we are on the same page');
    console.log('hobby: ',qustion4);
}

