<link rel="preconnect" href="https://fonts.googleapis.com"></link>;

import "./Notfound.css";
import { Link } from 'react-router-dom';

function Notfound() {
  return (
    <>
      <div className="page404">
        <div className="top">
        <h1>404</h1>
        <h2>Page Not Found</h2>
        </div>
        <div className="middle">
        <img src="https://school.borntodev.com/logos/school-full-225x72.png" alt="logo" />
        <p>We're sorry, the page you requested could not be found<br/>
        Please go back the homepage</p>
        </div>
        <div className="bottom">
        <Link to={"/"}>
          <button>GO HOME</button>
        </Link>
        </div>
      </div>
    </>
  );
}

export default Notfound;
