console.log("hello world");



var btn = document.getElementById('sub-mit');
btn.addEventListener('click', func);



const StudentVue = require('studentvue.js');

function func() {
    StudentVue.login('https://sisstudent.fcps.edu', user-name, pass-word)
        .then(client => client.getMessages())
        .then(studentVueClient.getGradebook())
        .then(console.log);
        
}
