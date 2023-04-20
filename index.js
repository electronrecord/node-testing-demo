import express from 'express'
const PORT = 3001
const app = express()
const server = app.listen(PORT, function () {
  console.log(`server started on ${PORT}`)
})

app.get('/users', function (req, res) {
  res.json({message: 'OK'})
})

export default app
