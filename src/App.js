import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ShowList from './components/ShowList';
import ShowDetails from './components/ShowDetails';
import TicketBookingForm from './components/TicketBookingForm';
import axios from 'axios';

function App() {
  const [shows, setShows] = useState([]);

  useEffect(() => {
    fetchShows();
  }, []);

  const fetchShows = async () => {
    try {
      const response = await axios.get('https://api.tvmaze.com/shows');
      setShows(response.data);
    } catch (error) {
      console.log('Error fetching shows:', error);
    }
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<ShowList shows={shows} />} />
        <Route path="/show/:id" element={<ShowDetails />} />
        <Route path="/booking/:name" element={<TicketBookingForm />} />

      </Routes>
    </Router>
  );
}

export default App;
