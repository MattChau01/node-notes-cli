const fs = require('fs');
const json = require('./data.json');

const read = process.argv[2];

fs.readFile('data.json', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  let notes = JSON.parse(data);

  const string = JSON.stringify(notes.notes);
  // console.log(string);

  const index = Object.keys(notes.notes);
  // console.log(index);

  const value = Object.values(notes.notes);
  // console.log(value);

  for (let i = 0; i < value.length; i++) {
    console.log(`${index[i]}: ${value[i]}`);
  }

})
// console.log(nodes)
// const parse = JSON.parse('data');
// console.log(parse);
