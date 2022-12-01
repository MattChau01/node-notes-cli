const fs = require('fs');
const json = require('./data.json');
fs.readFile('data.json', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  let notes = JSON.parse(data);
  for (let key in notes) {
    console.log(notes[key]);
  }
// console.log(notes.notes);
})
// console.log(nodes)
// const parse = JSON.parse('data');
// console.log(parse);
