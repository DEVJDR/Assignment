import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function ShowList() {
  const [shows, setShows] = React.useState([]);

  React.useEffect(() => {
    fetchShows();
  }, []);

  // fetch the show details using api
  const fetchShows = async () => {
    try {
      const response = await axios.get('https://api.tvmaze.com/shows');
      const allShows = response.data;
      setShows(allShows);
    } catch (error) {
      console.log('Error fetching shows:', error);
    }
  };

  return (
    <div className="container">
      <h1 className="my-4">TV Shows</h1>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {shows.map((show) => (
          <div key={show.id} className="col">
            <div className="card h-100">
              <img src={show.image?.medium} className="card-img-top mx-auto" alt={show.name} style={{ width: '200px', height: '300px' }} />
              <div className="card-body d-flex flex-column align-items-center">
                <h5 className="card-title text-center">{show.name}</h5>
                <Link to={`/show/${show.id}`} className="btn btn-primary">
                  View Details
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ShowList;
