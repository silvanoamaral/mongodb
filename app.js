//var MongoClient = require('mongodb').MongoClient;
const mongoose = require('mongoose');


var ulr2 = "mongodb+srv://silvano:SIL9876vano@cluster0-zlonj.mongodb.net/nodejs-restapi?retryWrites=true";
var url = "mongodb://silvano:SIL9876vano@cluster0-shard-00-00-zlonj.mongodb.net:27017,cluster0-shard-00-01-zlonj.mongodb.net:27017,cluster0-shard-00-02-zlonj.mongodb.net:27017/nodejs-restapi?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true";
var uri = "mongodb://test:123456abc@cluster0-shard-00-00-zlonj.mongodb.net:27017,cluster0-shard-00-01-zlonj.mongodb.net:27017,cluster0-shard-00-02-zlonj.mongodb.net:27017/nodejs-restapi?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true";

//Set up default mongoose connection
var mongoDB = uri;
mongoose.connect(url, function(error, db){
    if(error){
        console.log('MongoDB connection error:');
    } else {
        var contact = db.collection('Contact').find();
        
        /* 
        //insert
        db.collection('Contact').insertOne({
            nome: "teste1",
            email: "teste1@gmail.com"
        });

        //update
        db.collection('Contact').updateOne({
            "nome": "teste1"
        }, {
            $set: {
                "nome": "Mohan"
            }
        });

        //delete
        db.collection('Employee').deleteOne ({
                "nome": "Mohan"
            }    
        );
        */
        contact.each(function(err, doc) {
            console.log(doc);    
        });
    }
});




