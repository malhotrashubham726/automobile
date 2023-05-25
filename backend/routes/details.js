const express = require("express");
const router = express.Router();
var fetchuser = require("../middleware/fetchuser");
const Book = require("../models/Book");
//const { route } = require("./auth");
const { body, validationResult } = require("express-validator");
//const { findByIdAndUpdate } = require("../models/Book");

//Route 1 : Get All the Bookings
router.post("/fetchbooking", fetchuser, async(req, res) => {
  try {
    const book = await Book.find({ user: req.user.id });
    res.json(book);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal server error");
  }
});

//Route 2 : Add the booking 
router.post("/bookuser" , fetchuser , [
  body("phonenumber" , "Enter a valid contact number"),
  body("carmake" , "Enter the valid make of a car").isLength({ min : 3 }),
  body("carmodel" , "Enter the valid model of a car").isLength({ min : 3 }),
  body("address" , "Address should be minimum 7 characters").isLength({ min : 7 }),
  body("service" , "Enter a valid service"),
  body("fuel" , "Enter a valid fuel type"),
  body("date")
],
  async(req , res) => {
    try {
      const { phonenumber , carmake , carmodel , address , service , fuel , date } = req.body;
      const errors = await validationResult(req);
      if(!errors.isEmpty()) {
        return res.status(400).send("Some error occured");
      }
      const book = new Book({
        phonenumber,
        carmake,carmodel,address,service,fuel,date,user : req.user.id
    })
    const savedBooking = await book.save();
    res.json(savedBooking);

    }
    catch(error) {
      console.error(error.message);
      return res.status(500).send("Some error occured")
    }

})

//Route 3 : Update the booking

router.put("/editbooking/:id" , fetchuser , async(req , res) => {
  try{
  const { phonenumber , carmake , carmodel , address , service , fuel , date } = req.body;
  const updateBook = {};
  if(phonenumber) {
    updateBook.phonenumber = phonenumber;
  }

  if(carmake) {
    updateBook.carmake = carmake;
  }

  if(carmodel) {
    updateBook.carmodel = carmodel;
  }

  if(address) {
    updateBook.address = address;
  }

  if(service) {
    updateBook.service = service;
  }

  if(fuel) {
    updateBook.fuel = fuel;
  }

  if(date) {
    updateBook.date = date;
  }

  let book = await Book.findById(req.params.id);
  if(!book) {
    return res.status(404).send("Not Found");
  }

  if(book.user.toString() !== req.user.id) {
    return res.status(401).send("Not Allowed");
  }

  book = await Book.findByIdAndUpdate(req.params.id , { $set : updateBook } , { new : true})
  res.json(book);
}
catch(error) {
  console.error(error.message);
  return res.status(400).send("Some error occured");
}
})

//Route 4 : Delete Booking

router.delete("/deletebooking/:id" , fetchuser , async(req , res) => {
  try{
    let book = await Book.findById(req.params.id);
    if(!book) {
      return res.status(404).send("Not Found");
    }

    if(book.user.toString() !== req.user.id) {
      return res.status(401).send("Not allowed");
    }

    book = await Book.findByIdAndDelete(req.params.id);
    res.json({ Success : "Booking has been deleted" , book : book });
  }
  catch(error) {
    console.error(error.message);
    return res.status(400).send("Some occur occured");
  }
})

module.exports = router;