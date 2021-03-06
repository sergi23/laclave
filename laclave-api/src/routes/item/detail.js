const logic = require('../../logic')

module.exports = (req, res) => {

    const { params: { id } } = req

    try {
    
        logic.itemDetail(id)
            
            .then(response => res.json(response))
            .catch(({ message }) => res.send({ error: message }))

        } catch ({ message }) {
            res.send({ error: message })
        }
    }

    