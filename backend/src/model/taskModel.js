const mongoose = require('../config/database')
const Schema = mongoose.Schema;

/*o Schema é os campos que vao ser criados no DB*/
const taskSchema = new Schema({
  macaddress: { type: String, required: true },
  type: { type: Number, required: true },
  title: { type: String, required: true },
  description: { type: String, required: true },
  when: { type: Date, required: true },
  done: { type: Boolean, default: false },
  created: { type: Date, default: Date.now() } 
  
});

module.exports = mongoose.model('Task', taskSchema) /*'Task' é o nome que ele vai colocar no banco, e taskSchema é o nome do objeto que foi criado acima*/