const houses = require('./db.json')
let globalId = 4

module.exports = {
    getHouses: (req, res) => {
        return res.status(200).send(houses)
    },
    deleteHouse: (req, res) => {
        //console.log(req.params)
        const {id} = req.params
        //console.log(id)
        const index = houses.findIndex((houses) => { //this part fixes the index to equal exactly the right postion and not 1 above
            return houses.id === +id 
        })
        houses.splice(index, 1)
        res.status(200).send(houses)
        
    },
    createHouse: (req, res) => {
        const {address, price, imageURL} = req.body //body refers to object sent back, not params
        //console.log(req.body)
        let newHouse = {
            id: globalId,
            address: address,
            price: +price,
            imageURL: imageURL
        }
        houses.push(newHouse)
        res.status(200).send(houses)
        globalId ++
    },
    updateHouse: (req, res) => {
        const {id} = req.params
        const {type} = req.body

        const index = houses.findIndex((houses) => {
            return houses.id === +id
        })
        //console.log(typeof index)
        if (type === 'plus') {
            houses[index].price += 10000
        } else if (type === 'minus' && houses[index].price <= 9999) {
            houses[index].price = 0
        } else if (type === 'minus') {
            houses[index].price -= 10000
        }
        else {
            res.status(400).send('Invalid selection')
        }

        res.status(200).send(houses)    
    }
}