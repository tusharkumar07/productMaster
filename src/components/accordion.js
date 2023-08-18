import React, { useState } from "react";

const AccordionItem = ({ header, content, activeIndex, index, setActiveIndex }) => {
  const isActive = activeIndex === index;

  const toggleAccordion = () => {
    if (isActive) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };

  const accordionItemStyle = {
    width: "100%",
    borderBottom: "1px solid #ccc",
    overflow: "hidden",
    borderRadius: "8px",
    display: "flex",
    flexDirection: "column",
  };

  const accordionHeaderStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "8px 16px",
    fontWeight: "bold",
    cursor: "pointer",
    backgroundColor: "#ffff",
    borderRadius: "8px",
  };

  const accordionIconStyle = {
    transform: isActive ? "rotate(180deg)" : "rotate(0deg)",
    transition: "transform 0.3s ease",
  };

  const accordionDrawerStyle = {
    padding: "10px 20px",
    textAlign: "left",
    fontWeight: "bold",
    backgroundColor: "#ffff",
  };

  return (
    <div style={accordionItemStyle} className={isActive ? "active" : ""}>
      <div style={accordionHeaderStyle} onClick={toggleAccordion}>
        <span className="accordion-title">{header}</span>
        <span style={accordionIconStyle}>&#x25BC;</span>
      </div>
      {isActive && <div style={accordionDrawerStyle}>{content}</div>}
    </div>
  );
};

const App = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const containerStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "70%",
    backgroundColor: "#fff",
    borderRadius: "8px",
    boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.2)",
  };

  return (
    <div style={containerStyle}>
      <AccordionItem
        header="How does Masterji work?"
        content={
          <div>
            The simple 4 step guide you need to follow.
            <br />
            <br />
            1. Book via app or give us a call. Download the app and book your orders now.
            <br />
            <br />
            2. Select a design and book a tailor for its stitching. Our tailor will come to your doorstep.
            <br />
            <br />
            3. Our expert will take your measurements.
            <br />
            <br />
            4. After 3-6 days, stitched garment will be delivered at your doorstep.
          </div>
        }
        activeIndex={activeIndex}
        index={0}
        setActiveIndex={setActiveIndex}
      />
      <AccordionItem
        header="What is Masterji?"
        content={<div>MASTER JI is a custom tailoring brand, commenced in 2017.
          <br />
          <br />
          MasterJi is a custom craft tailoring application which
          offers quality stitched pieces of clothing, various dress designs,
          with guaranteed fitting at reasonable costs with delivery at your doorstep.
          <br />
          <br />
          A group of experienced tailors, cutting specialists and sewing experts
          offer custom articles of clothing for all regardless of age, weight,
          body type and gender, with a various determination of alternatives running
          from Daily Wear, Formal Wear to Party Wear and Bridal Wear.
          Tender loving care with the spotlight on sturdiness, usefulness and solace
          gives you the significant serenity with regards to your terrifically significant
          closet decisions.
        </div>}
        activeIndex={activeIndex}
        index={1}
        setActiveIndex={setActiveIndex}
      />
      <AccordionItem
        header="Why Masterji?"
        content={<div>1. Easy payment mode: Pay safely at the comfort of your home. We provide online MOPs like UPI, Net Banking, Wallets, etc.
          <br />
          <br />
          2. Fast Delivery: Our executive team will promptly deliver your order. We will also keep you informed about the order.
          <br />
          <br />
          3. 24/7 support: Making a purchase will be easier because of our dedicated support team's availability to assist you.
          <br />
          <br />
          4. Shop: Shop our carefully curated range of expertly tailored apparel for you. Your comfort and the fabric's quality are never sacrificed.
          <br />
          <br />
          5. Book and customise: We simplify the complex order administration procedure of a Customized Tailoring Company.
          <br />
          <br />
          6. Mobile application: Our app is available on both Android and iOS devices.
          <br />
          <br />
          7. Stitching Techniques: We can do anything you want with the details, from buttons            to right pocket and sleeves.
        </div>}
        activeIndex={activeIndex}
        index={2}
        setActiveIndex={setActiveIndex}
      />
    </div>
  );
};

export default App;
