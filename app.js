const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const contact = new Schema({
    email:  String,
    fullname: String,
    message:   String,
    fone: Number,
    data: Date
});

var url = "mongodb://silvano:SIL9876vano@cluster0-shard-00-00-zlonj.mongodb.net:27017,cluster0-shard-00-01-zlonj.mongodb.net:27017,cluster0-shard-00-02-zlonj.mongodb.net:27017/nodejs-restapi?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true";

//Set up default mongoose connection
mongoose.connect(url, function(error, db){
    if(error){
        console.log('MongoDB connection error:');
    } else {
        var contact = db.collection('Contact').find();
        contact.each(function(err, doc) {
            console.log(doc);    
        });

        /* 

        Ref:. https://www.guru99.com/node-js-mongodb.html
        Ref mongoose:. http://mongoosejs.com/docs/guide.html

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

        
    }
});




