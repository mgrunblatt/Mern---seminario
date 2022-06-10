const petCtrl = {};
const Pet = require('../models/pet.model');

petCtrl.getPets = async (req, res) => {
    let filters = {};
    if(req.query){
        filters=req.query
    }
      const pets = await Pet.find(filters);
      res.json(pets);
}

petCtrl.createPet = async (req, res) => {
const { username, name, dni, nameOwner, animal, race } = req.body;
const newPet = new Pet({
username,
name,
dni,
nameOwner,
animal,
race
});

await newPet.save().
then((data) => {
    console.log("saved data ", data);
    res.json({ message: 'Pet created!' });
}).catch(function (error) {
    console.log(error);
    res.status(503).json({ message: 'Pet not created!' });
});
}

petCtrl.getPet = async (req, res) => {
const pet = await Pet.findById(req.params.id)
res.json(pet);
}


petCtrl.updatePet = async (req, res) => {
const { username, name, dni, nameOwner, animal, race } = req.body;
await Pet.findOneAndUpdate({ _id: req.params.id }, {
username,
name,
dni,
nameOwner,
animal,
race
}).
then((data) => {
  console.log("saved data ", data);
  res.json({ message: 'Product Updated!' });
}).catch(function (error) {
  console.log(error);
  res.status(503).json({ message: 'Pet not updated!' });
});

}

petCtrl.deletePet = async (req, res) => {
await Pet.findOneAndDelete({ _id: req.params.id });
res.json({ message: 'Pet Deleted' })
}

module.exports = petCtrl;