const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname, )));

// Rota principal
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname,'index.html'));
});

// Definir a porta para o servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
