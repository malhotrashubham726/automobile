import React, { useContext, useState } from 'react'
import bookContext from '../context/booking/bookContext';

const Booking = (props) => {

  const context = useContext(bookContext);
  const { addBooking } = context;

  const [book , setBook] = useState({
    carmake : "",
    carmodel : "",
    phonenumber : "",
    address : "",
    service : "Preventive Maintenance Service",
    fuel : "",
    date : Date.now
  })

  const handleOnChange = ((event) => {
    setBook({...book , [event.target.name] : event.target.value});
  })

  const handleOnClick = () => {
    addBooking(book.carmake , book.carmodel , book.phonenumber , book.address , book.service , book.fuel , book.date);
    props.showAlert("Booking added Successfully");
    setBook({
      carmake : "",
      carmodel : "",
      phonenumber : "",
      address : "",
      service : "Preventive Maintenance Service",
      fuel : book.fuel,
      date : book.date
    });
  }

  return (
    <div className="centermy">
      <h2>Book Your Service</h2>
      <form action="">
        Phone Number: <br /><input type="tel" name="phonenumber" id="" value={book.phonenumber} onChange={handleOnChange} required/>
        <br /><br />
        Select Service: <br />
        <select onChange={handleOnChange} value={book.service} name="service">
          <option value="Preventive Maintenance Service">Preventive Maintenance Service</option>
          <option value="Body Repair Service">Body Repair Service</option>
          <option value="Car Care Service">Car Care Service</option>
        </select>
        <br /><br />
        Car Make: <br /><input type="text" name="carmake" id="" placeholder='Suzuki Toyota' onChange={handleOnChange} value={book.carmake} required/>
        <br /><br />
        Car Model: <br /><input type="text" name="carmodel" id="" placeholder='Alto Innova' onChange={handleOnChange} value={book.carmodel} required/>
        <br /><br />
        Fuel Type: <br />
        Petrol: <input type="radio" name="fuel" id="Petrol" onChange={handleOnChange} value="Petrol" />&nbsp;
        Diesel: <input type="radio" name="fuel" id="Diesel" onChange={handleOnChange} value="Diesel"/>&nbsp;
        LPG: <input type="radio" name="fuel" id="LPG" onChange={handleOnChange} value="LPG"/>&nbsp;
        Others: <input type="radio" name="fuel" id="Others" onChange={handleOnChange} value="Others"/>&nbsp;
        <br /><br />
        Appointment Date: <br /><input type="date" name="date" id="" onChange={handleOnChange} required/>
        <br /><br />
        Address: <br />
        <textarea name="address" id="" onChange={handleOnChange} value={book.address} cols="30" rows="10" required></textarea>
        <br /><br />
        <button disabled={book.phonenumber.length<8 || book.carmake.length<3 || book.carmodel.length<3 || book.address.length<7 || book.fuel===""} className="togglemy togglemy-blue" onClick={handleOnClick}>Book</button>
      </form>
      
    </div>
  )
}

export default Booking