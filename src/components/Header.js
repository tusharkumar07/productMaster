import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../style/header.css";
import img from "../img/logo-masterji 1.png";
import playStore from "../img/playStore.png";
import appStore from "../img/appStore.png";
import instagram from "../img/instagram.png";
import facebook from "../img/facebook.png";
import overlay from "../img/overlay.png";
import { HashLink as Link } from "react-router-hash-link";


const Header = () => {
  return (
    <>
      {/* <img src={overlay} alt="Overlay" className="overlay-image4" /> */}
      <nav className="navbar navbar-expand-lg navbar-warning navContainer" style={{ background: '    rgb(255 197 2 / 63%)' }}>
        {/* <img src={overlay} alt="Overlay" className="overlay-image4" />
        <img src={overlay} alt="Overlay" className="overlay-image3" /> */}
        <div className="container">
          <img src={img} className="logoImg" alt="" />
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ml-auto"> {/* ml-auto will push the nav links to the right */}
              <li className="nav-item">
                <Link className="nav-link header1" to='#mainmaster' smooth>How it works?</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link header2" activeClassName="active" to='#aboutMaster'>About Us</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link header3" activeClassName="active" to='#container'>FAQ</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link header4" activeClassName="active" to='#contactUs'>Contact Us</Link>
              </li>
            </ul>
            <div class="navBtn">
              <button class="linkbtn"><a href="https://www.instagram.com/masterjitailor/" target="_blank" rel="noopener noreferrer"><img src={instagram} alt="" className="instImg" /></a></button>
              <button class="linkbtn"><a href="https://www.facebook.com/MasterJiOnlineTailor" target="_blank" rel="noopener noreferrer"><img src={facebook} alt="" className="faceImg" /></a></button>
            </div>
          </div>
        </div>
      </nav>

      <div className='headerMain text-center py-5'>
        <h1 className='headerText'> Book a tailor at your <br />door step</h1>
      </div>
      <div className="text-center store">
        <img src={playStore} className='imgPay2 img-fluid' alt='' />
        <img src={appStore} className='imgPay1 img-fluid' alt='' />
      </div>
    </>
  );
}

export default Header;
