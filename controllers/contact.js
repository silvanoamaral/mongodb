const mongoose = require('mongoose');
var url = "mongodb://silvano:SIL9876vano@cluster0-shard-00-00-zlonj.mongodb.net:27017,cluster0-shard-00-01-zlonj.mongodb.net:27017,cluster0-shard-00-02-zlonj.mongodb.net:27017/nodejs-restapi?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true";
let str = '';

module.exports = function(app) {

    //app.get('/contact/', function(req, res) {
       // res.send('Hello World! - Recebida requisição de teste na porta 8000.');        
    //});

    app.get('/contact', function (req, res) {
        mongoose.connect(url, function(error, db){
            if(error) {
                console.log('MongoDB connection error:');
                res.status(500).send(error);
            } else {
                var contact = db.collection('Contact').find();                
                contact.each(function(err, item) {
                    if(item != null) {
                        str += 'ID:. ' + item._id +' Nome: '+ item.nome +' e-mail: '+ item.email +'</br>';
                    }
                });
            }

            res.send(str);
            db.close();            
        });

        //res.send('Hello World! - Recebida requisição de teste na porta 8000.');
    }); 
    
    app.post('/contact/contact', function (req, res) {
        /*
        req.assert("nome", "Nome é obrigatório").notEmpty();

        req.assert("email", "E-mail é obrigatório.").notEmpty().isFloat();

        var erros = req.validationErrors();

        if(erros) {
            console.log('Erros de validação encontrados');
            res.status(400).send(erros);
            return;
        }
        */
        var contact = req.body;
        console.log('Processando uma requisição de um novo contact.');
        
        contact.status = 'Criado';
        contact.data = new Date;

        res.status(201).json(contact);

        mongoose.connect(url, function(error, db){
            if(error) {
                console.log('MongoDB connection error:');
                res.status(500).send(error);
            } else {
                //db.collection('Contact').insertOne({
                   // nome: "teste1",
                   // email: "teste1@gmail.com"
                //});
            }

            res.send(str);
            db.close();            
        });
    });
}

/*
100 Continue: o servidor recebeu a solicitação e o cliente pode continuar a comunicação.
200 Ok: tudo ocorreu como esperado.
201 Created: um novo recurso foi criado no servidor.
301 Moved: a url solicitada foi movida.
400 Bad Request: problemas na requisição do cliente.
404 Not Found: a url solicitada não foi encontrada.
500 Internal Server Error: algo inesperado aconteceu do lado do servidor.

Note que cada centena corresponde à uma categoria específica de informação. 
A família do 100 indica uma conexão continuada. A família do 200 indica sucesso. 
300 significa redirecionamento. 400 é para erro do cliente e finalmente a família do 
500 é usada para informar outros erros, em sua maioria do lado do servidor.

*/