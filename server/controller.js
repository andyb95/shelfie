module.exports = {

  getInventory: (req,res) => {
    const db = req.app.get('db')

    db.get_inventory()
    .then(inventory => res.status(200).send(inventory))
    .catch(err => res.status(500).send(err))
  },

  addProduct: (req, res) => {
    const {name, price, imgurl} = req.body
    const db = req.app.get('db')

    db.add_product(name, price, imgurl)
    .then(product => res.status(200).send(product))
    .catch(err => res.status(500).send(err))
  },
}