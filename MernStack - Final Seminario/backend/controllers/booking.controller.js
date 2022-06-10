const bookingCtrl = {};
const Booking = require('../models/booking.model');
const Day = require('../models/day.model');

bookingCtrl.getBookings = async (req, res) => {
    let filters = {};
    if(req.query){
        filters=req.query
    }
      const booking = await Booking.find(filters);
      res.json(booking);
}

bookingCtrl.createBooking = async (req, res) => {
const { username, date, hour, treatment, petName, nameOwner } = req.body;

const dateToFind = date;

console.log("DATE TO FIND:" + date);

const daysFinded = await Day.find({date});

const dayToUpdate = daysFinded.find(day => day.hour == hour)

const daytoUpdateId = dayToUpdate._id;

const hourPreviousState = dayToUpdate.reserved;

const newState = true;

console.log("DAY IDDD :" + daytoUpdateId);
console.log("DAYS:" + daysFinded);
console.log("dayToUpdate:" + dayToUpdate);
console.log("prev hour state:" + hourPreviousState);

const newBooking = new Booking({
username,
date,
hour,
treatment,
petName,
nameOwner
});
 try {
   await newBooking.save();
   await Day.findOneAndUpdate({ _id: daytoUpdateId }, { 
       reserved: newState });
   res.json({ message: 'Booking created!' });
 } catch(error) {
   console.log(error);
   res.status(503).json({ message: 'Booking not created!' });
 }

}

bookingCtrl.getBooking = async (req, res) => {
const booking = await Booking.findById(req.params.id)
res.json(booking);
}


bookingCtrl.updateBooking = async (req, res) => {
const { username, date, hour, treatment, petName, nameOwner } = req.body;
await Booking.findOneAndUpdate({ _id: req.params.id }, {
    username,
    date,
    hour,
    treatment,
    petName,
    nameOwner
    }).
    then((data) => {
    console.log("saved data ", data);
    res.json({ message: 'Booking Updated!' });
    }).catch(function (error) {
    console.log(error);
    res.status(503).json({ message: 'Booking not updated!' });
    });

}

bookingCtrl.deleteBooking = async (req, res) => {

const newState = true;
await Booking.findOneAndDelete({ _id: req.params.id });
res.json({ message: 'Booking Deleted' })
}

module.exports = bookingCtrl;