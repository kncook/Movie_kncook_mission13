import { useEffect, useState } from 'react';
import { Movie } from '../types/movie';

function MovieList2() {
  const [movieData, setMovieData] = useState<Movie[]>([]);

  //useEffect means that if nothing has chnaged use it, otherwise fetch it!
  useEffect(() => {
    const fetchMovie = async () => {
      const rsp = await fetch('https://localhost:4000/movie'); //needs to match port for TA's to grade it. It was 7127 before
      const temp = await rsp.json();
      setMovieData(temp);
    };

    fetchMovie();
  }, []);

  return (
    // creates the table
    <>
      <div className="row">
        <h4>The Best Movies!</h4>
      </div>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Category</th>
            <th>Title</th>
            <th>Year</th>
            <th>Director</th>
            <th>Rating</th>
            <th>Edited</th>
            <th>Lent To</th>
            <th>Notes</th>
          </tr>
        </thead>
        <tbody>
          {movieData.map((m) => (
            <tr key={m.movieId}>
              <td>{m.category}</td>
              <td>{m.title}</td>
              <td>{m.year}</td>
              <td>{m.director}</td>
              <td>{m.rating}</td>
              <td>{m.edited}</td>
              <td>{m.lentTo}</td>
              <td>{m.notes}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default MovieList2;
