var app = require('./config/custom-express')();
  
//listen define que esta ouvindo uma determinada porta
app.listen(8000, function () {
    console.log('Servidor rodando na porta 8000. http://localhost:8000/');
});