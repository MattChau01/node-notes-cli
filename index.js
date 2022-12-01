const fs = require('fs');
const json = require('.data.json');
fs.readFile('data.json', 'utf8', (err, data) => {
if(err){
  console.error(err);
  process.exit(1);
}
console.log(data.notes);
})
// console.log(nodes)
