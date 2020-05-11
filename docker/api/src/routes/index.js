const express = require('express' )

module.exports = () => {
    const router = express.Router()
    
    router.get('/rest', (req, res) => {
        res.status(200).send({name: 'Vinicius'})
    })

    return router
}
