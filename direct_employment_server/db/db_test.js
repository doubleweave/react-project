let mongoose = require('mongoose');
let md5 = require('blueimp-md5');

const server = '127.0.0.1:27017'; // REPLACE WITH YOUR DB SERVER
const database = 'directe_test';      // REPLACE WITH YOUR DB NAME

class Database {
    constructor() {
        this._connect();
        // testSave();
        // testFind();
        // testUpdate();
        testDelete();
    }

    _connect() {
        mongoose.connect(`mongodb://${server}/${database}`,{
                useNewUrlParser: true,
                useUnifiedTopology: true,
            })
            .then(() => {
                console.log('Database connection successful')
            })
            .catch(err => {
                console.error('Database connection error')
            })
    }
}

const userSchema = mongoose.Schema({
    username: {type: String, required: true},
    password: {type: String, required: true},
    userType: {type: String, required: true},
    header: {type: String},
});

const UserModel = mongoose.model('user', userSchema);

function testSave() {
    const userModel = new UserModel({
        username: 'Jack',
        password: md5('234'),
        userType: 'employer'
    });

    userModel.save(function(error, user) {
        console.log('save()', error, user);
    });
}

function testFind() {
    UserModel.find(function(err, users) {
        console.log("find()", err, users);
    });

    UserModel.findOne({_id: '5f420bd1eef9c6398050dae4'}, function(err, user){
        console.log('findOne()', err, user);
    });
}

function testUpdate() {
    UserModel.findByIdAndUpdate(
        {_id: '5f420bd1eef9c6398050dae4'},
        {username: 'Bob'},
        function(err, doc) {
            console.log('findByIdAndUpdate()', err, doc);
        });
}

function testDelete() {
    UserModel.remove(
        {_id: '5f420bd1eef9c6398050dae4'}, function(err, doc) {
            console.log('remove()', err, doc);
        });
}

module.exports = new Database();
