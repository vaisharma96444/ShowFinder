import React, { useState } from 'react';

function ShowSummary({ show }) {
  const [bookingData, setBookingData] = useState({});

  function handleBooking(event) {
    event.preventDefault();
    // Save booking data to local storage
    localStorage.setItem('bookingData', JSON.stringify(bookingData));
  }

  function handleInputChange(event) {
    const { name, value } = event.target;
    setBookingData(prevState => ({ ...prevState, [name]: value }));
  }

  return (
    <div>
      <h1>{show.name}</h1>
      {show.image && show.image.medium && (
        <img src={show.image.medium} alt={show.name} />
      )}
      <p>{show.summary}</p>
      <form onSubmit={handleBooking}>
        <h2>Book a Movie Ticket</h2>
        <label>
          Name:
          <input type="text" name="name" onChange={handleInputChange} required />
        </label>
        <label>
          Email:
          <input type="email" name="email" onChange={handleInputChange} required />
        </label>
        <label>
          Phone:
          <input type="tel" name="phone" onChange={handleInputChange} required />
        </label>
        <button type="submit">Book Now</button>
      </form>
    </div>
  );
}

export default ShowSummary;
