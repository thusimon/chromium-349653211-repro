const express = require('express')
const app = express()
const port = 3003

app.get('/app/UserHome', (req, res) => {
  const extHeader = req.header('X-ext-ver');
  console.log(`X-ext-ver = ${extHeader}`);
  res.send(`DNR header test: value = ${extHeader}`)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
