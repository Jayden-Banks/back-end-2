const express = require('express') //install
const cors = require('cors') //install!
const app = express() //allows express to be used with app.
const ctrl = require('./controller') //connection to other folder


//middlewares
app.use(express.json())
app.use(cors())

//movie endpoints
app.get('/api/houses', ctrl.getHouses)
app.delete('/api/houses/:id', ctrl.deleteHouse)
app.post('/api/houses', ctrl.createHouse)
app.put('/api/houses/:id', ctrl.updateHouse)



app.listen(4004, () => console.log('We are live on 4004!'))