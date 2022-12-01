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


  if (type === 'read') {
    const index = Object.keys(notes.notes);
    const value = Object.values(notes.notes);
    for (let i = 0; i < value.length; i++) {
      console.log(`${index[i]}: ${value[i]}`);
    }
  } else if (type === 'create') {
    fs.writeFile('data.json', newNote + '\n', 'utf8', (err, data) =>{
      if(err) {
        console.error(err);
        process.exit(1);
      }
      notes.nextId++;
    });
  }
})
