const {MongoClient, ObjectID} = require('mongodb');

let obj = new ObjectID();
console.log(obj);

MongoClient.connect('mongodb://localhost:27017/ToDoApp', (err, db) => {
    if (err) {
        console.log('Unable to connect to Mongo DB server');
        return;
    }
    console.log('Connected to Mongo DB server');

    db.collection('Todos').insertOne({
        text: 'Something to do',
        completed: false
    }, (err, result) => {
        if (err) {
            console.log('Unable to insert todo', err);
            return;
        }
        console.log(JSON.stringify(result.ops, undefined, 2));
    });

    db.close();
});