import React, { useContext } from 'react';
import bookContext from "../context/booking/bookContext";

const BookCards = (props) => {
  const context = useContext(bookContext);
  const { deleteBooking } = context;

  const { bookings , updateBook } = props;

  return (
      <div className='cardsmy'>
        <i className="fa-solid fa-trash-can fontawesome-delete" onClick={() => {deleteBooking(bookings._id); props.showAlert("Booking deleted Successfully")}}></i>
        <i className="fa-solid fa-pen-to-square date fontawesome-edit" onClick={() => {updateBook(bookings)}}></i>
        <h4 className="datemy">{`${bookings.date}`}</h4>
        <div className="alignmy">
        <h3>{`Carmake: ${bookings.carmake}`}</h3>
        <h3>{`Carmodel: ${bookings.carmodel}`}</h3>
        <h3>{`Fuel Type: ${bookings.fuel}`}</h3>
        <h3>{`Contact details: ${bookings.phonenumber}`}</h3>
        <h3>{`Service booked: ${bookings.service}`}</h3>
        <h3>{`Address: ${bookings.address}`}</h3>
        </div>
      </div>
  )
}

export default BookCards
