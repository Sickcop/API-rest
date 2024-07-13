const express = require('express')

const app = express()
const port = process.env.PORT ?? 3000
app.disable('x-powered-by')

app.get('/', (req, res) => res.json({message: 'Hello World!'}))

app.listen(port, () => console.log(`Example app listening on port http://localhost:${port}`)) sad