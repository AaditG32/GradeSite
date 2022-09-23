console.log("hello world");



var btn = document.getElementById('sub-mit');
btn.addEventListener('click', func);

var usern = document.getElementById('user-name');
var passw = document.getElementById('pass-word')


const StudentVue = require('studentvue.js');

function func() {
    StudentVue.login('https://sisstudent.fcps.edu', usern, passw)
        .then(client => client.getMessages())
        .then(studentVueClient.getGradebook())
        .then(console.log);
        
}
