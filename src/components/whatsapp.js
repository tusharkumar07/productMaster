import React from "react";
import whatsappIcon from "../img/WhatsApp.jpg";

//commenting for deployment
const WhatsAppButton = () => {
  const buttonStyle = {
    position: 'fixed',
    bottom: '10%',
    right: '10%',
  };

  return (
    <div style={buttonStyle} class = "MainMaster" id ="mainmaster">
      <a href="https://wa.me/917338635050" target="_blank" >
        <img src={whatsappIcon} alt="WhatsApp Icon" />
      </a>
    </div>
  );
}

export default WhatsAppButton;
