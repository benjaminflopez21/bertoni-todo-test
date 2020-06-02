const fs = require('fs');

let tasks = [];

try {
    const data = fs.readFileSync('./data/db.json');
    tasks = JSON.parse(data);
}
catch (err) {
    console.log('There has been an error getting your tasks.')
    console.log('We try to create a db');
    fs.writeFileSync('./data/db.json', JSON.stringify([]));
}

const save = () => {
    const dataToSave = JSON.stringify(tasks);
    fs.writeFile('./data/db.json', dataToSave, (err) => {
        if (err) {
            console.log('There has been an error saving your tasks.');
            console.log(err.message);
            return;
        }
        console.log('Task saved successfully.')
    });
}


module.exports = {
    tasks: tasks,
    save: save
}
