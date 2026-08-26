var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.json());

app.get('/', function(req, res) {
  res.send('Oi, mundo :-)');
});

app.post('/multiplicacao', function (req, res) {
    var body = req.body;
    var resultado = multiplicacao(body.a, body.b);
    res.send(`O resultado da multiplicação de ${body.a} e ${body.b} é ${resultado}`);
});

var port = 3001;

// iniciando o processo do servidor
app.listen(port, function() {
  console.log(`App de Exemplo escutando na porta http://localhost:${port}/`);
});

 function multiplicacao(a, b) {
  return a * b;
}
