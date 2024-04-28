// Import modules in other JS files
import API from './utils/api.js';
import Helpers from './utils/helpers.js';

API.fetchUsers().then(users => console.log(users));
console.log(Helpers.formatDate('2021-04-01'));






const main = () => {

};

main();