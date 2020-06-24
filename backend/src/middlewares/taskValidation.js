const taskModel = require('../model/taskModel');
const { isPast} = require('date-fns')

const taskValidation = async (req, res, next) => {

const {macaddress, type, title, description, when } = req.body; /* destructuring do q vem no json do model Tem q ser exatamente os mesmos nomes.*/

if(!macaddress) /* o ! quer dizer se ele não existir, retorne..*/
return res.status(400).json({ error: "Macadress é obrigatório"});
else if(!type)
return res.status(400).json({ error: "Tipo obrigatório"})
else if(!title)
return res.status(400).json({ error: "Título obrigatório"})
else if(!description)
return res.status(400).json({ error: "Descrição obrigatória"})
else if(!when)
return res.status(400).json({ error: "Data e hora são obrigatórios"})

else {
  let exists;

  if(req.params.id){
      exists = await taskModel
          .findOne(
            { '_id': {'$ne': req.params.id}, /*ne = not exist - é diferente de algo */
            'when': { '$eq':new Date(when)}, /* eq = equal*/
            'macaddress': { '$in': macaddress}
            });
  }else {
    if(isPast(new Date(when))) /*para nao cadastrar data ou horario no passado*/
    return res.status(400).json({ error: "Escolha uma data e hora futura"})
      exists = await taskModel
          .findOne(
            { 
            'when': { '$eq':new Date(when)}, /* eq = equal*/
            'macaddress': { '$in': macaddress}
            });
  }

   if(exists){
    return res.status(400).json({ error: "Já existe uma tarefa nesse dia e horário"})
   }             

next();
}
}

module.exports = taskValidation;