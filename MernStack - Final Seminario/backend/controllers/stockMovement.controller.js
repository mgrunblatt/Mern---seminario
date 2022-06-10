const stockMovementsCtrl = {};

const { now } = require('mongoose');
const Product = require('../models/product.model');
const StockMovement = require('../models/stockmovement.model');

stockMovementsCtrl.getStockMovements = async (req, res) => {
  let filters = {};
  if (req.query) {
    filters = req.query
  }
  const stockMovements = await StockMovement.find(filters);
  res.json(stockMovements);
}

getResultStockBalance = (stockBalance, movementType, quantity) => {
  const multiplier = movementType === "Reposición" ? 1 : -1;
  return stockBalance + quantity * multiplier;
}

stockMovementsCtrl.createStockMovements = async (req, res) => {
  const { username, productName, movementType, quantity, date } = req.body;

  const product = productName;

  const productsFind = await Product.find({ product });
  const productItem = productsFind[0];
  const productPreviousStockBalance = productItem.quantity;

  console.log("PRODUCT:" + productItem);
  console.log("prev stock balance:" + productPreviousStockBalance);
  console.log("PRODUCT NAME:" + productName);

  const stockBalance = getResultStockBalance(productPreviousStockBalance, movementType, quantity);


  const newStockMovement = new StockMovement({
    username,
    productName,
    movementType,
    quantity,
    stockBalance,
    date
  });
  try {
    await newStockMovement.save();
    await Product.findOneAndUpdate({ product }, { quantity: stockBalance });
    res.json({ message: 'Stock Movement created!' });
  } catch (error) {
    console.log(error);
    res.status(503).json({ message: 'Stock Movement not created!' });
  }

}

stockMovementsCtrl.getStockMovement = async (req, res) => {
  const stockMovement = await StockMovement.findById(req.params.id)
  res.json(stockMovement);
}



stockMovementsCtrl.deleteStockMovement = async (req, res) => {
  await StockMovement.findOneAndDelete({ _id: req.params.id });
  res.json({ message: 'Stock Movement Deleted' })
}

module.exports = stockMovementsCtrl;