const {ObjectId} = require('mongodb');
const {Todo} = require('./../server/models/todo');

let id = '58bdc02260cfda3413f3724211';

if (!ObjectId.isValid(id)) {
    console.log('Id not valid');
}

Todo.findById(id).then((todo) => {
    if (!todo) {
        return console.log('Id not found');
    }
    console.log('Todo By Id', todo);
}).catch((e) => {
    console.log(e);
});
