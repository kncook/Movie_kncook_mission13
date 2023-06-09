import { Link } from 'react-router-dom';
import './firstPage.module.css';

export default function NavBar() {
  return (
    <center>
      <nav className="navbar-container">
        <Link
          className="btn btn-primary mb-2"
          to="/"
          style={{ marginRight: '10px' }}
        >
          Home
        </Link>
        <Link
          className="btn btn-primary mb-2"
          to="/movieList"
          style={{ marginRight: '10px' }}
        >
          Movies
        </Link>
        <Link className="btn btn-primary" to="/podcast">
          Podcast
        </Link>
      </nav>
    </center>
  );
}
