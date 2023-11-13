import React, { useContext } from 'react';
import bookContext from "../context/booking/bookContext";

const BookCards = (props) => {
  const context = useContext(bookContext);
  const { deleteBooking } = context;

  const { bookings , updateBook } = props;

  return (
      <div className='cards'>
        <i className="fa-solid fa-trash-can fontawesome-delete" onClick={() => {deleteBooking(bookings._id); props.showAlert("Booking deleted Successfully")}}></i>
        <i className="fa-solid fa-pen-to-square date fontawesome-edit" onClick={() => {updateBook(bookings)}}></i>
        <div className="book-date fontsize-4">{`${(new Date(bookings.date)).toDateString()}`}</div>
        <div className="left-align">
          <div className="fontsize-4">{`Carmake: ${bookings.carmake}`}</div>
          <div className="fontsize-4">{`Carmodel: ${bookings.carmodel}`}</div>
          <div className='fontsize-4'>{`Fuel Type: ${bookings.fuel}`}</div>
          <div className='fontsize-4'>{`Contact details: ${bookings.phonenumber}`}</div>
          <div className='fontsize-4'>{`Service booked: ${bookings.service}`}</div>
          <div className='fontsize-4'>{`Address: ${bookings.address}`}</div>
        </div>
      </div>
  )
}

export default BookCards
