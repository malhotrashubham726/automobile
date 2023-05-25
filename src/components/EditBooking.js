import React, { useContext, useRef, useState } from 'react'
//import { Link } from "react-router-dom";
import bookContext from '../context/booking/bookContext';

const EditBooking = (props) => {
  const context = useContext(bookContext);
  const { editBooking } = context;

    const ref = useRef(null);
    const refClose = useRef(null);
  
    const [book , editBook] = useState({
      id : "",
      ecarmake : "",
      ecarmodel : "",
      ephonenumber : "",
      eaddress : "",
      efuel : "",
      eservice : "",
      edate : ""
  })
  
    const updateBook = ((currentBooking) => {
      ref.current.click();
      editBook({id : currentBooking._id , ecarmake : currentBooking.carmake , ecarmodel : currentBooking.carmodel , ephonenumber : currentBooking.phonenumber , eaddress : currentBooking.address , efuel : currentBooking.fuel , eservice : currentBooking.service , edate : currentBooking.date});
    })

    updateBook(props.bookings)
  
    const handleClick = (e) => {
      console.log("Updating the note" , book);
      e.preventDefault();
      editBooking(book.id , book.ecarmake , book.ecarmodel , book.ephonenumber , book.eaddress , book.efuel , book.eservice , book.edate);
      refClose.current.click();
  }
  
  const onChange = (e) => {
      editBook({...book, [e.target.name] : e.target.value})
  }

  return (
    <div>
    <button type="button" ref={ref} className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#exampleModal">
      Launch demo modal
    </button>
    <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="exampleModalLabel">Edit Booking</h1>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body">
            <form>
              <div className="mb-3">
                <label htmlFor="ecarmake" className="form-label">Car Make</label>
                <input type="text" className="form-control" id="ecarmake" name="ecarmake" aria-describedby="emailHelp" value={book.ecarmake} onChange={onChange}/>
              </div>
              <div className="mb-3">
                <label htmlFor="ecarmodel" className="form-label">Car Model</label>
                <input type="text" className="form-control" id="ecarmodel" name="ecarmodel" value={book.ecarmodel} onChange={onChange}/>
              </div>
              <div className="mb-3">
                <label htmlFor="ephonenumber" className="form-label">Phone Number</label>
                <input type="tel" className="form-control" id="ephonenumber" name="ephonenumber" value={book.ephonenumber} onChange={onChange}/>
              </div>
              <div className="mb-3">
                <label htmlFor="eaddress" className='form-label'>Address</label>
                <textarea className="form-control" name="eaddress" id="eaddress" cols="30" rows="10" value={book.eaddress} onChange={onChange}></textarea>
              </div>
              <div className='mb-3'>
                <label htmlFor="efuel" className='form-label'>Fuel Type</label><br />
                Petrol:<input type="radio" name="efuel" id="Petrol" value="Petrol" onChange={onChange}/>&nbsp;
                Diesel:<input type="radio" name="efuel" id="Diesel" value="Diesel" onChange={onChange}/>&nbsp;
                LPG:<input type="radio" name="efuel" id="LPG" value="LPG" onChange={onChange}/>&nbsp;
                Others:<input type="radio" name="efuel" id="Others" value="Others" onChange={onChange}/>&nbsp;
              </div>
              <div className="mb-3">
                <label htmlFor="eservice" onChange={onChange} className='form-label'>Select Service</label>
                <select name="eservice" id="">
                  <option value="">Select from dropdown</option>
                  <option value="Preventive Maintenance Service">Preventive Maintenance Service</option>
                  <option value="Body Repair Service">Body Repair Service</option>
                  <option value="Car Care Service">Car Care Service</option>
                </select>
                <div className="mb-3">
                  <label htmlFor="edate" className="form-label">Appointment date</label>
                  <input type="date" name="edate" id="edate" onChange={onChange}/>
                </div>
              </div>
            </form>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" ref={refClose} data-bs-dismiss="modal">Close</button>
            <button type="button" disabled={book.ecarmake.length<3 || book.ecarmodel.length<3 || book.eaddress.length<7} className="btn btn-primary" onClick={handleClick}>Update note</button>
          </div>
        </div>
      </div>
  </div>
  </div>
  )
}

export default EditBooking
