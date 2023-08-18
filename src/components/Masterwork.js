import React from "react";
import "../style/header.css";
//adding comment
import vectorImg from "../img/Vector.png";
import EllipseImg from "../img/Ellipse 7.png";
import Ellipse20 from "../img/Ellipse 20.png";
import frameImg from "../img/Frame.png";
import img from "../img/logo-masterji 1.png";
import img1 from "../img/Frame (1).png"
import img2 from "../img/Group 205.png"
import img3 from "../img/Group 207.png"
import new1 from "../img/new.jpg";
import twitter from ".././img/twitter.png"
import india from "../img/india.png"
import instagram from "../img/Instagram.png";
import facebook from "../img/facebook.png";
import youtube from ".././img/youtube.png"
import pdf from ".././img/pdf.png"
import Accordion2 from "./accordion";
import overlayy from "../img/overlayy.png";
import WhatsAppButton from "./whatsapp";
import lady1 from "../img/lady1.png"
import lady2 from "../img/lady2.png"
export default function Masterwork() {
  return (
    <>
      <div className="MainMaster" id="mainmaster">
        <div className="textMaster">
          <div className="ellipseBox">
            <img src={EllipseImg} alt=""></img>
            <h1 className="text1">
              <b>How it works</b> <span id ="spann">_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ </span>
            </h1>
          </div>

          
          <div className="container-fluid my-5" >
            <div className="abc justify-content-evenly" id='abcd'>
              <div className="col-md-2">
                <div className=" justify-content-center masterMain1">
                  <img
                    className=" justify-content-center masterimg1"
                    src={img2}
                    alt="Card image cap"
                  />
                  <div className="card-body">
                    <h4 style={{ marginLeft: "-8rem", marginTop: "-2rem" }}>1</h4>
                    <p className="card-text my-2 masterText1" >
                      Select garments and book a tailor for it’s stitching.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-2">
                <div className="masterMain2">
                  <img
                    className="card-img-top masterimg2"
                    src={img1}
                    alt="Card image cap"
                  />
                  
                  <div className="card-body">
                    <h4 style={{ marginLeft: "-8rem", marginTop: "-2rem" }}>2</h4>
                    <br />
                    <p className="card-text masterText2">
                      <b>
                        After booking a tailor will arrive at your doorStep</b>
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="col-md-2">
                <div className="masterMain3">

                  <img
                    className="card-img-top masterimg3"
                    src={new1}
                    alt="Card image cap"
                  />
                  
                  <div className="card-body">
                    <h4 style={{ marginLeft: "-8rem", marginTop: "-2rem" }}>3</h4>
                    <p className="card-text my-2 masterText3">
                      <b>
                        Our expert will take your measurements</b>
                    </p>

                  </div>
                </div>
              </div>
             
              <div className="col-md-2">
                <div className="masterMain4">
                  <img
                    className="card-img-top masterimg4"
                    src={img3}
                    alt="Card image cap"
                  />
                  <div className="card-body">
                    <h4 style={{ marginLeft: "-8rem", marginTop: "-2rem" }}>4</h4>
                    <br />
                    <p className="card-text masterText4">
                      <b>
                        After 3-6 days stitched garment will be deilvered at your doorstep </b>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
     
        <div className="text2Master">
          <img src={vectorImg} alt="" className="vectorImg"></img>
          <h1 className="text2">
            <img src={EllipseImg} id='ellipse' style={{ width: "3rem" }} alt="Ellipse" />
            Why our customers
            <img src={EllipseImg} id='ellipse' style={{ width: "6rem", className: "overlay-image" }}></img>
            <br />
            <img src={EllipseImg} id='ellipse' style={{ width: "2rem", className: "overlay-image" }}></img>
            love us?
          </h1>
        </div>
        <div className="container my-5">
          <div className="abc justify-content-evenly">
            <div className="col-md-2">
              <div className=" justify-content-center cust1">
                <img
                  className=" justify-content-center custImg1"
                  src={Ellipse20}
                  alt="Card image cap"
                />
                
                <div className="card-body">
                  <p className="card-text my-2" style={{ fontWeight: "300", textAlign: 'center', backgroundColor: 'white' }}>
                    <b>
                      “What I love most is that I can accessorize it differently to create various looks. Whether it's a business meeting or a dinner date, Masterji's Contemporary Classics has me covered.”</b>
                  </p>
                  <h6 className="card-title" style={{ fontWeight: "700", backgroundColor: 'white' }} >  <b> Meghna Mishra </b></h6>
                  <p style={{ color: "var(--gray-2, #4F4F4F)", backgroundColor: 'white' }}>Bhopal</p>
                </div>
              </div>
            </div>
            <div className="col-md-2">
              <div className="cust2">
                <img
                  className="card-img-top custImg2"
                  src={lady1}
                  alt="Card image cap"
                />
                <div className="card-body">
                  <p className="card-text my-2" style={{ fontWeight: "300", textAlign: 'center', backgroundColor: 'white' }}>
                    <b>
                      “I wore one of Masterji's lehengas to a wedding and felt like a royal princess. The outfit made me stand out, and its comfort throughout the event was a pleasant surprise. Kudos to Masterji's for blending tradition with a modern twist!”</b>
                  </p>
                  <h6 className="card-title" style={{ fontWeight: "700", textAlign: 'center', backgroundColor: 'white' }}>  <b> Anita Tilwari </b></h6>
                  <p style={{ color: "var(--gray-2, #4F4F4F)", backgroundColor: 'white' }}>Indore</p>
                </div>
              </div>
            </div>
            <div className="col-md-2">
            
              <div className="cust3">
                <img
                  className="card-img-top custImg3"
                  src={lady2}
                  alt="Card image cap"
                />

                <div className="card-body">
                  <p className="card-text my-2" style={{ fontWeight: "300", textAlign: 'center', backgroundColor: 'white' }} >
                    <b>
                      “I recently shopped from Masterji's fashion collection and I must say, I'm impressed! The Trendy Chic Collection is a blend of elegance and modern style. The quality of the fabrics and the attention to detail in the stitching are truly commendable. I received so many compliments when I wore the outfit I purchased from here.”</b>
                  </p>
                  <h6 className="card-title" style={{ fontWeight: "700", textAlign: 'center', backgroundColor: 'white' }}>  <b>Radhika Sharma</b></h6>
                  <p style={{ color: "var(--gray-2, #4F4F4F)", backgroundColor: 'white' }}>Bhopal</p>
                </div>
              </div>
            </div>
          </div>
        </div>
       
        <div className="container">
          <div className="abc">
            <div className="aboutMaster" id="aboutMaster">
              <img src={EllipseImg}></img>
              <h1><b>About Master Ji </b></h1>
            </div>
            <div className="paragraph">
              <p>Custom Stitching being the new trend, Masterji is just one tap close to get the kind of clothes you’ve always envisioned to wear. So, irrespective of your size, color, and gender, we can help you stand out with style and flaunt every attire you plan to carry</p>
              <br /><p>All you have to do is download the app, connect with us and then just see what our fashion and stitching experts can offer you. Our service is availabe in Bangalore and Bhopal</p>
            </div>
          </div>
          <br />
          <br />
          <br />
        </div>
    
        <div className="container" id='container'>
          <div className="row1">
            <div className="aboutMaster" id="aboutMaster">
              <img src={EllipseImg}></img>
              <h1><b>Frequently asked questions</b></h1>
            </div>
            <div className="abc" id='accordion'>
              <Accordion2 />
            </div>
          </div>
        </div>
       
        <div className="contactMain container" id='contactUs'>
          <div className="abc align-items-center justify-content-center"
            style={{
              display: "flex",
              alignItems: "center", justifyContent: "center", backgroundImage: `url(${overlayy})`, backgroundSize: `cover`, backgroundRepeat: `no-repeat`, backgroundPosition: `center center`, width: `100%`, height: `100%`
            }}>
            <div className="col-md-6 text-center">
              <img src={frameImg} alt="" className="img-fluid mb-4 " />
              <h1>Contact us</h1>
              <div className="inputForm" style={{ width: "20rem" }}>
                <input type="text" placeholder="We would love to hear from you." className="input1 form-control mb-3 " />
                <input type="email" placeholder="Enter your email Id" className="input2 form-control mb-3" />
                <input type="mobile" placeholder="Enter your Mobile No." className="input2 form-control mb-3" />
                <button className="btn btn-warning btnWidth " >Submit</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer">
        <img src={img} alt="Logo" className="footerLogo" />
        <div className="address">
          <h3>Address</h3>
          <p className="footData">36, 2nd Floor,<br /> Salarpuria Tower -1. 22 ,<br />Next to Forum Mall, Hosur Rd, <br />above Big Bazzar, <br />7th Block, koramangala, <br />Bengaluru, Karnataka 560095</p>
        </div>
        <div className="footPlayApp">
          <button class="linkbtn"><a href="https://www.instagram.com/masterjitailor/" target="_blank" rel="noopener noreferrer"><img src={instagram} alt="" className="instImg" /></a></button>
          <button class="linkbtn"><a href="https://www.facebook.com/MasterJiOnlineTailor" target="_blank" rel="noopener noreferrer"><img src={facebook} alt="" className="faceImg" /></a></button>
          <button class="linkbtn"><a href="https://twitter.com/home?lang=en" target="_blank" rel="noopener noreferrer"><img src={twitter} alt="" className="twitterImg" /></a></button>
          <button class="linkbtn"><a href="https://www.youtube.com/watch?v=ZooZYlTGym4&t=7s" target="_blank" rel="noopener noreferrer"><img src={youtube} alt="" className="youtubeImg" /></a></button>
          <br/>
          {/* adding changes */}
          <br/>
          <p className = "india"><b>Made in India</b><img src={india} alt="" className="indiaImg" /> </p>
        </div>
        
        <div>
        <p className="footerAdd"><b>Blogs</b></p>
        <p className="footerAdd"><b>Privacy Policy</b>
          <button class="policy">
            <a href="https://docs.google.com/document/d/18VTHF6B-OkMXmDctsJPDM_G1qiv0SbNapPXu071xTdg/edit" target="_blank" rel="noopener noreferrer">
              <img src={pdf} alt="" className="pdfImg" />
            </a></button>
        </p>
        </div>
        <WhatsAppButton />
      </div>
    </>
  );
}
