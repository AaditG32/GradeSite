username = user-name;
password = pass-word;


const StudentVue = require('studentvue.js');
StudentVue.login('https://sisstudent.fcps.edu', username, password)
    .then(client => client.getMessages())
    .then(console.log);

