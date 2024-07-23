const express = require('express');
const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.render('conta');
});

app.post('/soma', (req, res) => {
  const { num1, num2 } = req.body;
  const resultado = parseFloat(num1) + parseFloat(num2);
  res.send(Resultado da soma: ${resultado});
});

app.post('/subtracao', (req, res) => {
  const { num1, num2 } = req.body;
  const resultado = parseFloat(num1) - parseFloat(num2);
  res.send(Resultado da subtração: ${resultado});
});

app.post('/multiplicacao', (req, res) => {
  const { num1, num2 } = req.body;
  const resultado = parseFloat(num1) * parseFloat(num2);
  res.send(Resultado da multiplicação: ${resultado});
});

app.post('/divisao', (req, res) => {
  const { num1, num2 } = req.body;
  const resultado = parseFloat(num1) / parseFloat(num2);
  res.send(Resultado da divisão: ${resultado});
});

app.set('view engine', 'ejs');

app.listen(port, () => {
  console.log(Servidor rodando na porta ${port});
});
