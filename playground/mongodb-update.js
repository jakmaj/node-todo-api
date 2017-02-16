const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/ToDoApp', (err, db) => {
    if (err) {
        console.log('Unable to connect to Mongo DB server');
        return;
    }
    console.log('Connected to Mongo DB server');

    db.collection('Todos').findOneAndUpdate(
        {_id: new ObjectID('58a5d3664450317ad5754aec')},
        {$set: {completed: true}},
        {returnOriginal: false}
    ).then((result) => {
        console.log(result);
    });

    db.close();
});