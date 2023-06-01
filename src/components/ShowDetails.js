import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

function ShowDetails() {
  const { id } = useParams();
  const [show, setShow] = React.useState(null);
  const navigate = useNavigate();

  React.useEffect(() => {
    fetchShowDetails();
  }, []);

  const fetchShowDetails = async () => {
    try {
      const response = await axios.get(`https://api.tvmaze.com/shows/${id}`);
      setShow(response.data);
    } catch (error) {
      console.log('Error fetching show details:', error);
    }
  };

  const handleBookTicket = () => {
    navigate(`/booking/${show.name}`);//routing configuration to show the name of the show
  };
  
  if (!show) {
    return <div>Loading show details...</div>;
  }

  return (
    <div className="container">
      <h1 className="my-4">Show Details</h1>
      <div className="card mb-4">
        <div className="row g-0">
          <div className="col-md-4">
            <img src={show.image.medium} className="img-fluid" alt={show.name} />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h2 className="card-title">{show.name}</h2>
              <p className="card-text">{show.summary}</p>
              <button className="btn btn-primary" onClick={handleBookTicket}>
                Book Ticket
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShowDetails;
