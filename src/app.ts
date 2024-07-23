import express from 'express'
import config from 'config'

const app = express()

app.use(express.json())

const port = 3000

app.listen(port, async () => {
    console.log(`Application running on port: ${port}`)
})