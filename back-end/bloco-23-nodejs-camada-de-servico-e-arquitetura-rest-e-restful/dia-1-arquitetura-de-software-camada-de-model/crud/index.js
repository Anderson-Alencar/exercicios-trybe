const express = require('express');
const bodyParser = require('body-parser');

const userModel = require('./models/user');

const app = express();
app.use(bodyParser.json());

app.post('/users', async (req, res) => {
  const { firstName, lastName, email, password } = req.body;

  if (!firstName || !lastName || !email || !password) {
    return res
      .status(400)
      .json({ 
        error: true,
        message: 'Todos os campos precisam ser preenchidos'
      })
  }

  if (password.length < 6) {
    return res.status(400).json({
      "error": true,
      "message": "O campo 'password' deve ter pelo menos 6 caracteres"
    })
  }

  const created = await userModel.create(firstName, lastName, email, password);

  res.status(201).json(created);
});

const PORT = 3002;

app.listen(PORT, () => {
  console.log(`Ouvindo na porta ${PORT}`);
});