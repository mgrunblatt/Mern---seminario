const productsCtrl = {};

const Product = require('../models/product.model');

productsCtrl.getProducts = async (req, res) => {
        let filters = {};
        if(req.query){
            filters=req.query
        }
          const products = await Product.find(filters);
          res.json(products);
  }

productsCtrl.createProducts = async (req, res) => {
const { username, product, description, quantity, brand } = req.body;
const newProduct = new Product({
    username,
    product,
    description,
    quantity,
    brand
});

await newProduct.save().
    then((data) => {
        console.log("saved data ", data);
        res.json({ message: 'Product created!' });
    }).catch(function (error) {
        console.log(error);
        res.status(503).json({ message: 'Product not created!' });
    });
}

productsCtrl.getProduct = async (req, res) => {
  const product = await Product.findById(req.params.id)
  res.json(product);
}


productsCtrl.updateProduct = async (req, res) => {
  const { username, product, description, quantity, brand } = req.body;
  await User.findOneAndUpdate({ _id: req.params.id }, {
    username,
    product,
    description,
    quantity,
    brand
  }).
  then((data) => {
      console.log("saved data ", data);
      res.json({ message: 'Product Updated!' });
  }).catch(function (error) {
      console.log(error);
      res.status(503).json({ message: 'Product not updated!' });
  });
  
}

productsCtrl.deleteProduct = async (req, res) => {
  await Product.findOneAndDelete({ _id: req.params.id });
  res.json({ message: 'Product Deleted' })
}

module.exports = productsCtrl;