const taskModel = require('../model/taskModel') /*chamando o Schema q foi criado*/
const { 
  startOfDay, endOfDay, 
  startOfWeek, endOfWeek, 
  startOfMonth, endOfMonth,
  startOfYear, endOfYear } 
  = require('date-fns')

const current = new Date();

/*mesmo nome do arquivo*/
module.exports = {

  async create(req, res) {
    const task = new taskModel(req.body); /*taskModel é o nome do arquivo model do Schema*/
    await task
    .save()
    .then(response => { /*then é caso dê certo, e catch é caso dê errado*/
      return res.status(200).json(response)
    })
    .catch(err => {
      return res.status(500).json(err)
    })

  },

  async update(req, res) {
    await taskModel.findByIdAndUpdate({'_id': req.params.id}, req.body, { new: true})
    .then(response => {
      return res.status(200).json(response)
    })
    .catch(error => {
      return res.status(500).json(error)
    })
  },

  async all(req, res) {
    await taskModel.find({ macaddress: {'$in': req.params.macaddress}})
      .sort('when')
      .then(response => {
        return res.status(200).json(response);
      })
      .catch(error => {
        return res.status(500).json(error)
      })
  },

  async show(req, res) {
    await taskModel.findById(req.params.id)
    .then(response => {
      if(response)
        return res.status(200).json(response)
      else 
        return res.status(404).json({ error: 'Tarefa não encontrada'})     
    })
    .catch(error => {
      return res.status(500).json(error)
    })
  },

  async delete(req, res) {
    await taskModel.deleteOne({'_id': req.params.id})
    .then(response => {
      return res.status(200).json(response)
    })
    .catch(error => {
      return res.status(500).json(error)
    })
  },

  async done(req, res) {
    await taskModel.findByIdAndUpdate(
      {'_id': req.params.id},
      {'done': req.params.done},
      {new: true})
      .then(response => {
        return res.status(200).json(response)
      })
      .catch(error => {
        return res.status(500).json(error)
      });
  },

  async late(req, res) {
    await taskModel
    .find({
      'when': {'$lt': current}, /*less than*/
      'macaddress': {'$in': req.params.macaddress}
    }) 
    .sort('when')
    .then(response => {
      return res.status(200).json(response)
    })
    .catch(error => {
      return res.status(500).json(error)
    })
  },

  async today(req, res) {
    await taskModel
    .find({
      'macaddress': {'$in': req.params.macaddress},
      'when':{'$gte': startOfDay(current), '$lte': endOfDay(current)} /*great than equals, less than equal */
    })
    .sort('when')
    .then(response => {
      return res.status(200).json(response)
    })
    .catch(error => {
      return res.status(500).json(error)
    })
  },

  async week(req, res) {
    await taskModel
    .find({
      'macaddress': {'$in': req.params.macaddress},
      'when':{'$gte': startOfWeek(current), '$lte': endOfWeek(current)} /*great than equals, less than equal */
    })
    .sort('when')
    .then(response => {
      return res.status(200).json(response)
    })
    .catch(error => {
      return res.status(500).json(error)
    })
  },

  async month(req, res) {
    await taskModel
    .find({
      'macaddress': {'$in': req.params.macaddress},
      'when':{'$gte': startOfMonth(current), '$lte': endOfMonth(current)} /*great than equals, less than equal */
    })
    .sort('when')
    .then(response => {
      return res.status(200).json(response)
    })
    .catch(error => {
      return res.status(500).json(error)
    })
  },

  async year(req, res) {
    await taskModel
    .find({
      'macaddress': {'$in': req.params.macaddress},
      'when':{'$gte': startOfYear(current), '$lte': endOfYear(current)} /*great than equals, less than equal */
    })
    .sort('when')
    .then(response => {
      return res.status(200).json(response)
    })
    .catch(error => {
      return res.status(500).json(error)
    })
  }

}

