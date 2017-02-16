const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/ToDoApp', (err, db) => {
    if (err) {
        console.log('Unable to connect to Mongo DB server');
        return;
    }
    console.log('Connected to Mongo DB server');

    // db.collection('Todos').deleteMany({text: 'Eat lunch'}).then((result) => {
    //     console.log(result);
    // });

    // db.collection('Todos').deleteOne({text: 'Eat lunch'}).then((result) => {
    //    console.log(result);
    // });

    db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
        console.log(result);
    });

    db.collection('User').findOneAndDelete({_id: new ObjectID("58a5d3664450317ad5754aec")});

    db.close();
});