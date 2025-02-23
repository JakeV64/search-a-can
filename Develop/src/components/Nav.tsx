import { Link } from "react-router-dom";


const Nav = () => {

  // TODO: Add necessary code to display the navigation bar and link between the pages
  return (
    
    <nav className="nav">
    <ul>
      <li className="nav-item">
        <Link className="nav-link" to="/">Home</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/candidates">Potential Candidates</Link>
      </li>
    </ul>
  </nav>
   
  
  );
};

export default Nav;
