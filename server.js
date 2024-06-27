const express = require('express')
const app = express()
const port = 3005

app.get('/', (req, res) => {
  const extHeader = req.header('X-ext-ver');
  console.log(`X-ext-ver = ${extHeader}`);
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
