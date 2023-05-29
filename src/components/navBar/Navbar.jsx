import './navbar.css';
import React from 'react';
import logo from '../../Assets/logo.png';
import { MenuData } from './MenuData';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleDollarToSlot } from '@fortawesome/free-solid-svg-icons';
import CoinCounter from '../CoinCounter/CoinCounter';

function Navbar() {
  return (
    <header className="container-header">
      <nav className="NavbarItems">
        <div className="whole-logo">
          <img
            src={logo}
            alt=" this is the logo"
            loading="eager"
            className="kiddle-logo"
          ></img>
        </div>
        <ul className="nav-menu">
          {MenuData.map((item, index) => {
            return (
              <div className="nav-item">
                <li key={index}>
                  <a href={item.url} className={item.cName}>
                    <i className={item.icon}></i>
                    {item.title}
                  </a>
                </li>
              </div>
            );
          })}
        </ul>
      </nav>
      <div className="btn-all">
        <button className="btn-R">Register</button>
        <button className="btn-R">Log In</button>
        <div className="div-coin">
          <div className="coins-1">
            <FontAwesomeIcon
              icon={faCircleDollarToSlot}
              flip
              size="sm"
              className="icon"
              style={{
                '--fa-primary-color': '#ffb411',
                '--fa-secondary-color': '#eee720',
              }}
            />
          </div>

          <div className="coin-counter">
            <CoinCounter />
          </div>
        </div>
      </div>
    </header>
  );
}
export default Navbar;
