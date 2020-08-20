'use strict';
const fs = require('fs');
fs.readFile('./estudiante.json',(err,data)=>{
if(err)throw err;
let estudiante=JSON.parse(data);
console.log(estudiante);

});