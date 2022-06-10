const dayCtrl = {};
const Day = require('../models/day.model');

dayCtrl.getDays = async (req, res) => {
    let filters = {};
    if(req.query){
        filters=req.query
    }
      const days = await Day.find(filters);
      res.json(days);
}

dayCtrl.createDay = async (req, res) => {
const { date, hour, reserved } = req.body;
const newDay = new Day({
date,
hour,
reserved
});

await newDay.save().
then((data) => {
    console.log("saved data ", data);
    res.json({ message: 'Day created!' });
}).catch(function (error) {
    console.log(error);
    res.status(503).json({ message: 'Day not created!' });
});
}

dayCtrl.getDay = async (req, res) => {
const day = await Day.findById(req.params.id)
res.json(day);
}


dayCtrl.updateDay = async (req, res) => {
const { reserved } = req.body;

const newState = false;

try {
  await Day.findOneAndUpdate({ _id: req.params.id }, {
    reserved: newState});
    res.json({ message: 'Day Updated!' });
  } catch(error) {
    console.log(error);
    res.status(503).json({ message: 'Day not updated!' });
  }
}


dayCtrl.deleteDay = async (req, res) => {
await Day.findOneAndDelete({ _id: req.params.id });
res.json({ message: 'Day Deleted' })
}

module.exports = dayCtrl;