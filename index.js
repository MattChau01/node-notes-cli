const fs = require('fs');
const json = require('./data.json');
const type = process.argv[2];
const newNote = process.argv[3];

if (type === 'read') {
  const index = Object.keys(json.notes);
  const value = Object.values(json.notes);
  for (let i = 0; i < value.length; i++) {
    console.log(`${index[i]}: ${value[i]}`);
  }
} else if (type === 'create') {
  json.notes[json.nextId] = newNote;
  json.nextId++;

  fs.writeFile('data.json', JSON.stringify(json, null, 2), 'utf8', err => {
    if (err) {
      console.error(err);
      process.exit(1);
    }
  });
}
