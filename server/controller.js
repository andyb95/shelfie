module.exports = {

  getInventory: async (req,res) => {
    const db = req.app.get('db')

    const inventory = await db.get_inventory()
    if(inventory[0]){
      res.status(200).send(inventory)
    } else {
      res.sendStatus(400)
    }
  },

  addProduct: async (req, res) => {
    const {name, price, imgurl} = req.body
    const db = req.app.get('db')

    const product = await db.add_product(name, price, imgurl)
    if (product[0]){
      res.status(200).send(product)
    } else {
      res.sendStatus(400)
    }
  },

  editProduct: async (req, res) => {
    const {product_id} = req.params
    const {name, price, imgurl} = req.body
    const db = req.app.get('db')

    const updated = await db.update_product([product_id, name, price, imgurl])
    if(updated[0]){
      res.status(200).send(updated)
    } else {
      res.sendStatus(400)
      
    }
  },

  deleteProduct: async (req, res) => {
    const db= req.app.get('db')
    const {product_id} = req.params

    
    const deletedProduct = await db.delete_product(product_id)
    
    if (!deletedProduct[0]) {
      return res.sendStatus(200)
    } else {
      res.sendStatus(400)
    }
  
    // db.delete_product(product_id)
    // .then(()=> res.sendStatus(200))
    // .catch(err=> {
    //   console.log(err)
    //   res.status(500).send('could not delete')
    // })
  }
}
