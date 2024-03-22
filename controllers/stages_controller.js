const bands = require('express').Router()
const { Stage } = require('../models')

stages.get('/', async (req, res) =>{
  try {
    const allStages = await Stage.findAll()
    res.json(allBands)
  } catch (e) {
    res.send(e.message)
  }
})

stages.get('/:id', async (req, res) => {
  try {
    const specificStage = await Stage.findOne({
      where: { id: req.params.id },
      include: {
        model: Event,
        as: 'events',
      },
      order: [{ model: Event, as: 'events' }]
    })
    res.json(specificBand)
  } catch (e) {
    res.send(e.message)
  }
})

stages.post('/', async (req, res) => {
  try {
    const newStage = await Stage.create(req.body)
    res.json(newBand)
  } catch (e) {
    res.send(e.message)
  }
})

stages.put('/:id', async (req, res) => {
  try {
    const { name, genre } = req.body
    if (!name && !genre) {
      throw Error('No fields to update')
    }
    const [ numUpdated ] = await Stage.update(
      { name, genre },
      { where: { id: req.params.id } }
    )
    res.send(`Updated ${numUpdated} stage(s).`)
  } catch (e) {
    res.send(e.message)
  }
})

stages.delete('/:id', async (req, res) => {
  try {
    const deleted = await Stage.destroy({
      where: { id: req.params.id }
    })
    res.send(`Deleted ${deleted} stage(s).`)
  } catch (e) {
    res.send(e.message)
  }
})

module.exports = stages