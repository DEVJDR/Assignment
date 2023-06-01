import React from 'react';
import { useParams } from 'react-router-dom';

function TicketBookingForm() {
  const { name } = useParams();

  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    tickets: 1,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="container">
      <h1 className="my-4">Movie Ticket Booking</h1>
      <h2 className="mb-4">{name}</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name:
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email:
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="tickets" className="form-label">
            Number of Tickets:
          </label>
          <input
            type="number"
            className="form-control"
            id="tickets"
            name="tickets"
            min="1"
            value={formData.tickets}
            onChange={handleInputChange}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Book Now
        </button>
      </form>
    </div>
  );
}

export default TicketBookingForm;
