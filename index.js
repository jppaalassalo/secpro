console.log('Hello');
const person =require('./person.js');
const path=require ('path');
console.log(person);
console.log(__filename);
console.log(path.basename(__filename));