const express = require('express');
const bodyParser = require('body-parser');

const userModel = require('./models/user');

const app = express();
app.use(bodyParser.json());

//Create
app.post('/user', async (req, res) => {
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

//Read
app.get('/user', async (req, res) => {
  const users = await userModel.getAll();

  res.status(200).json(users);
});

app.get('/user/:id', async (req, res) => {
  const { id } = req.params;

  const user = await userModel.getById(id);

  if (user.length === 0) return res.status(404).json({ error: 'true ', message: 'Usuário não encontrado'});

  res.status(200).json(user);
})



const PORT = 3002;

app.listen(PORT, () => {
  console.log(`Ouvindo na porta ${PORT}`);
});