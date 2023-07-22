import React, { useState } from "react";
import BookContext from "./bookContext";

const BookState = (props) => {
  const host = "http://localhost:5000";

  const [profile , setProfile] = useState("");

  const bookInitial = []

      const[state , setState] = useState(bookInitial);

      const getBooking = async() => {
        const response = await fetch(`${host}/api/book/fetchbooking`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "auth-token":
              localStorage.getItem("token"),
          }
        });

        const json = await response.json();
        console.log(json);
        setState(json);
      }

      const getDetails = async(authtoken) => {
        const response = await fetch(`${host}/api/auth/getUser`, {
          method : "POST",
          headers: {
            "auth-token" : authtoken
          },
          body: JSON.stringify({authtoken})
        });

        const json = await response.json();
        console.log(json)
        localStorage.setItem("pname" , json.name);
        setProfile("Welcome " + localStorage.getItem("pname"));

      }

      const addBooking = async(carmake , carmodel , phonenumber , address , service , fuel , date) => {
        const response = await fetch(`${host}/api/book/bookuser`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "auth-token":
              localStorage.getItem("token"),
          },
          body: JSON.stringify({ carmake , carmodel , phonenumber , address , service , fuel , date}),
        });

        const json = await response.json();
        console.log(json);

        setState(state.concat(json));
      }

      const deleteBooking = async(id) => {
        const response = await fetch(`${host}/api/book/deletebooking/${id}`, {
          method: "DELETE",
          headers: {
            "auth-token":
              localStorage.getItem("token"),
          },
        });

        const json = await response.json();
        console.log(json);

        const delBooking = state.filter((bookings) => {
          return bookings._id !== id
        })
        setState(delBooking);
      }

      const editBooking = async(id, carmake, carmodel, phonenumber, address, date) => {
        const response = await fetch(`${host}/api/book/editbooking/${id}`, {
          method: "PUT",
          headers: {
            "auth-token": localStorage.getItem("token"),
            "Content-Type": "application/json"
          },
          body: JSON.stringify({ id, carmake, carmodel, phonenumber, address, date })
        })
        const json = await response.json();
        console.log(json);

        for(let index = 0; index < state.length; index++) {
          const myElement = state[index];
          if(myElement._id === id) {
            myElement.carmake = carmake;
            myElement.carmodel = carmodel;
            myElement.phonenumber = phonenumber;
            myElement.address = address;
            myElement.date = date;
            break;
          }
        }
      }

  return (
    <BookContext.Provider value={{ state , profile , setProfile , getBooking , getDetails , addBooking , deleteBooking , editBooking}}>
      {props.children}
    </BookContext.Provider>
  );
};

export default BookState;
