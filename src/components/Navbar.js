import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default function Navbar(props){

    return (

        //including the navbar
<nav className={`navbar navbar-expand-lg navbar-${props.toggleMode} bg-${props.toggleMode}` }>
  <Link className="navbar-brand" to="/">{props.title}</Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <Link className="nav-link" to="/about">{props.about} <span className="sr-only">(current)</span></Link>
      </li>


    </ul>

    {/* ENABLE THE DARK AND LIGHT MODE */}
    <form className="form-inline my-2 my-lg-0">
      <div className="custom-control custom-switch">
        <input type="checkbox" className="custom-control-input" onClick={props.toggleModeFunc} id="customSwitch1"/>
        <label className="custom-control-label" style={props.toggleMode === "light"?{color : 'black'}:{color:"white"}} htmlFor="customSwitch1">{props.toggleMode === "light"? "Enable-Dark Mode":"Enable-light Mode"}</label>
      </div>
    </form>
  </div>
</nav>



    );
}

Navbar.propTypes = {
    title : PropTypes.string,
    about : PropTypes.string.isRequired,

};

Navbar.defaultProps = {
    title : 'BestNavbar',
    about : 'Nothing is here',
};