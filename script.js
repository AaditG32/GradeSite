console.log("hello world");

username = user-name;
password = pass-word;

var btn = document.getElementById('sub-mit');
btn.addEventListener('click', func);



const StudentVue = require('studentvue.js');

function func() {
    StudentVue.login('https://sisstudent.fcps.edu', username, password)
        .then(client => client.getMessages())
        .then(studentVueClient.getGradebook())
        .then(console.log);
        
}
