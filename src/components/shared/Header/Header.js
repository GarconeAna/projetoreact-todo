import React from 'react';
import { Link } from 'react-router-dom';
const Header = () => {
  return (
    <ul className="nav nav-tabs">
      <li className="nav-item">
        <Link to="/" className="nav-link active" aria-current="page">
          Tarefas
        </Link>
      </li>
      <li className="nav-item">
        <Link to="/add" className="nav-link">
          Cadastrar
        </Link>
      </li>
      {/* <li className="nav-item">
        <Link to="/" className="nav-link">
          Link
        </Link>
      </li> */}
    </ul>
  )
}

export default Header;