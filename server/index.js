require('dotenv').config()

const express = require('express'),
      massive = require('massive'),
      ctrl = require('./controller'),
      {SERVER_PORT, CONNECTION_STRING} = process.env,
      port = SERVER_PORT,
      app = express()

app.use(express.json())

massive({
  connectionString: CONNECTION_STRING,
  ssl: {rejectUnauthorized: false}
}).then(db => {
  app.set('db', db)
  console.log('db connected')
})

app.get('/api/inventory', ctrl.getInventory)
app.post('/api/product', ctrl.addProduct)
app.put('/api/product/:product_id', ctrl.editProduct)
app.delete('/api/product/:product_id', ctrl.deleteProduct)


app.listen(port, () => console.log(`Server running on ${port}`))