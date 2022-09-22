
const StudentVue = require('studentvue.js');
StudentVue.login('district url', 'username', 'password')
    .then(client => client.getMessages())
    .then(console.log);

