const fs = require('fs');
const json = require('./data.json');

const type = process.argv[2];
const newNote = process.argv[3];

fs.readFile('data.json', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  let notes = JSON.parse(data);
  const string = JSON.stringify(notes.notes);
  const index = Object.keys(notes.notes);
  const value = Object.values(notes.notes);
  console.log(index);
  index.push(JSON.stringify(notes.nextId));
  console.log(index);
  const number = notes.nextId;
  const object = {number: 'test'};
  console.log(object);
  // console.log(string.push(object));
  if (type === 'read') {
    const index = Object.keys(notes.notes);
    const value = Object.values(notes.notes);
    for (let i = 0; i < value.length; i++) {
      console.log(`${index[i]}: ${value[i]}`);
    }
  } else if (type === 'create') {
    index.push(notes.nextId);
    value.push(newNote);
    fs.writeFile('data.json', JSON.stringify(newNote) + '\n', 'utf8', (err, data) =>{
      if(err) {
        console.error(err);
        process.exit(1);
      }else {


        // console.log(JSON.stringify(newNote, null, 2))
        // console.log(value.push(newNote));
        notes.nextId++;

      }
    });
  }
})
