import { useState } from 'react';
import data from './MovieData.json';
//import data from './MovieDataDample.json';

const mds = data.MovieDataList;
//const mds = data.MovieDataSampleList;

function MovieList() {
  //object to keep track of state
  const [listOfMovies, setListOfMovies] = useState(mds);

  const addMovie = () => {
    setListOfMovies([
      ...mds,
      {
        //MovideID is removed because I do not show it
        //MovieId = 1,
        Category: 'Action/Adventure',
        Title: 'Avengers, The',
        Year: 2012,
        Director: 'Joss Whedon',
        Rating: 'PG-13',
        Edited: 'No',
      },
    ]);
  };
  return (
    <>
      <div>
        <h3 style={{ fontFamily: 'fantasy' }}>
          Joel Hilton's Movie Collection
        </h3>
      </div>

      <div>
        <table className="table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Year</th>
              <th>Director</th>
              <th>Rating</th>
              <th>Category</th>
              <th>Edited</th>
            </tr>
          </thead>
          <tbody>
            {/* map each object into an instance, for each */}
            {listOfMovies.map((m, index) => (
              //there is no movieID so I made the key the index
              //<tr key={m.MovieId}>
              <tr key={index}>
                <td>{m.Title}</td>
                <td>{m.Year}</td>
                <td>{m.Director}</td>
                <td>{m.Rating}</td>
                <td>{m.Category}</td>
                <td>{m.Edited}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <button className="btn btn-primary" onClick={addMovie}>
        Add Movie
      </button>
    </>
  );
}

export default MovieList;
