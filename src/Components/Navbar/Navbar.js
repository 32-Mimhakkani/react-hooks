import React, { useState } from 'react';

const Navbar = (props) => {

  const [color,setColor] =useState('')

  const handlecolor = (e)=>{
    setColor(e.target.value);
  }
  const allColor =(e)=>{
    e.preventDefault();

     document.getElementById('App').style.backgroundColor = color
    // document.body(color)
  }

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <a className="navbar-brand" href="/">{props.title}</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarText">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">Home</a>
        </li>

        <li className="nav-item">
          <a className="nav-link" href="/">TextTunes</a>
        </li>

        <li className="nav-item">
          <a className="nav-link" href="/">About</a>
        </li>

        <li className="nav-item">
          <a className="nav-link" href="/">Contact</a>
        </li>

      </ul>

          <input type="color" name="" id="" onChange={handlecolor} />
           <button className="btn btn-success"  onClick={allColor}>Color</button>
   
    </div>
  </div>
</nav>
    );
};

export default Navbar;