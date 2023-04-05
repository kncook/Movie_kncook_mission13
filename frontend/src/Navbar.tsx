import { Link } from 'react-router-dom';
import './firstPage.module.css';
// This page is for the navbar, it uses links to direct to the correct pages and also styles the buttons
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
        <Link
          className="btn btn-primary"
          to="/podcast"
          style={{ marginRight: '10px' }}
        >
          Podcast
        </Link>
        <Link className="btn btn-primary" to="/movieList2">
          MovieAPI
        </Link>
      </nav>
    </center>
  );
}
