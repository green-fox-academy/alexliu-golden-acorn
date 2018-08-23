import React from 'react';
import { NavLink } from 'react-router-dom';

class Navlink extends React.Component {
  render() {
    return (
      <div>
        <NavLink style={{color: 'black', margin: '10px', fontSize: '24px'}} className="navlink" to="/">Home</NavLink>
        <NavLink style={{color: 'black', margin: '10px', fontSize: '24px'}} className="navlink" to="/simple/states">with states</NavLink>
        <NavLink style={{color: 'black', margin: '10px', fontSize: '24px'}} className="navlink" to="/simple/redux">with redux</NavLink>
      </div>
    );
  }
}

export default Navlink;
