

const express = require('express')
const API_PORT = 3000

const initApp = () => {

    let app = express()

    app.listen(API_PORT, () => {
        console.log(`Server up on port ${API_PORT}`)
    })

    const routes = require('./src/routes')

    app.use(routes())

    app.get('/', (req, res) => {
        res.status(200).send('Api is Alive')
    })
}  

initApp()