const express = require('express')
const app = express()
const port = 8888
const path = require('path')

app.use('/', express.static(path.join(__dirname, "public")))

app.listen(port, '0.0.0.0', () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
