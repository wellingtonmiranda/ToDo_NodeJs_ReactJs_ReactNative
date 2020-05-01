const express = require('express')

const cors = require('cors')
const server = express();
server.use(cors());
server.use(express.json());

const taskRoutes = require('./routes/taskRoutes')
server.use('/task', taskRoutes)


server.listen(3333, () => {
  console.log('Server rodando')
})