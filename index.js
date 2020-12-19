const express = require('express');
const app = express();
const sequelize = require('./utils/db');
const path = require('path');
const todoRoutes = require('./routes/todo');

const PORT = process.env.PORT || 3003;

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use('/api/todo', todoRoutes);
app.use((req, res, next) => {
  res.sendFile('index.html');
});

async function start() {
  try {
    await sequelize.sync();
    app.listen(PORT, console.log('Running on port ' + PORT));
  } catch (error) {
    console.log(error);
  }
}

start();
