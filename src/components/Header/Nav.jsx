import React from "react";
import "./Nav.css";
import p from "../img/mahi.jpg";
import iop from "../img/hyundai.jfif";
import car from "../img/ms.png";
import watch from "../img/kia.jfif";
import shoe from "../img/cr.jfif";
import stampp from "../img/mg.jfif";
import gm from "../img/mgg.jpg";
import camera from "../img/crz.jpg";
import xbox from "../img/fr.jpg";
import xbox2 from "../img/a4.jpg";
import bag from "../img/end.jpg";
import banner from "../img/banner3.jpg";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Box from "@mui/material/Box";
import Input from "@mui/material/Input";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import { BiRupee } from "react-icons/bi";
import yashti from "../img/yashti.jpg";
import GlobalNav from "../view/GlobalNav";
import Bottom from "../Bottom/Bottom";
import { FaUserCircle } from "react-icons/fa";
import ViewMore from "../Bottom/ViewMore";
import ChooseMore from "../Bottom/Choose";
import BodyNav from "../view/BodyNav";
import ViewmoreCard from "../RelatedCard/ViewmoreCard";
const ariaLabel = { "aria-label": "description" };

export default function Navbar() {
  const myFunction = () => {
    var x = document.getElementById("myTopnaavaa");
    if (x.className === "topnaavaa") {
      x.className += " responsive";
    } else {
      x.className = "topnaavaa";
    }
  };

  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <>
      <BodyNav />
      <div className="midSectionn">
        <div className="MidHeading">
          <h1 className="exploreHeading" style={{ textAlign: "left" }}>
            Explore categories
          </h1>
        </div>
        <div className="outside">
          <div className="MidItems">
            <div className="conttt">
              <div className="productMid">
                <div className="imgMid">
                  <Link to="/view">
                    {" "}
                    <img
                      src={p}
                      className="imageInside"
                      alt="img"
                      style={{ borderRadius: 100 }}
                    ></img>
                  </Link>
                </div>
              </div>
              <div className="lowerHead">
                <p className="para">Mahindra</p>
              </div>
            </div>

            <div className="conttt">
              <div className="productMidtwo">
                <div className="imgMid">
                  <Link to="/view">
                    {" "}
                    <img
                      src={iop}
                      className="imageInside"
                      style={{ borderRadius: 100 }}
                      alt="img"
                    ></img>
                  </Link>
                </div>
              </div>
              <div className="lowerHead">
                <p className="para">Hyundai</p>
              </div>
            </div>
            <div className="conttt">
              <div className="productMidthree">
                <div className="imgMid">
                  <Link to="/view">
                    {" "}
                    <img
                      src={car}
                      className="imageInside"
                      style={{ borderRadius: 100 }}
                      alt="img"
                    ></img>
                  </Link>
                </div>
              </div>
              <div className="lowerHead">
                <p className="para">Suzuki</p>
              </div>
            </div>
            <div className="conttt">
              <div className="productMidfour">
                <div className="imgMid">
                  <Link to="/view">
                    {" "}
                    <img
                      src={watch}
                      className="imageInside"
                      alt="img"
                      style={{ borderRadius: 100 }}
                    ></img>
                  </Link>
                </div>
              </div>
              <div className="lowerHead">
                <p className="para">Kia</p>
              </div>
            </div>
            <div className="conttt">
              <div className="productMidfive">
                <div className="imgMid">
                  <Link to="/view">
                    {" "}
                    <img
                      src={shoe}
                      className="imageInside"
                      style={{ borderRadius: 100 }}
                      alt="img"
                    ></img>{" "}
                  </Link>
                </div>
              </div>
              <div className="lowerHead">
                <p className="para">Chevrolet</p>
              </div>
            </div>
            <div className="conttt">
              <div className="productMidsix">
                <div className="imgMid">
                  <Link to="/view">
                    {" "}
                    <img
                      src={stampp}
                      className="imageInside"
                      style={{ borderRadius: 100 }}
                      alt="img"
                    ></img>{" "}
                  </Link>
                </div>
              </div>
              <div className="lowerHead">
                <p className="para">MG </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bidbanner">
        <img src={banner} className="bannerImgg"></img>
      </div>
      <div className="bottomSection">
        <div className="bottmhead">
          <h1>Trending Auctions</h1>
          <p className="parabottom">
            See what's popular across thousand of items{" "}
          </p>
        </div>
        <div className="itemsbottoms">
          <div className="leftbottom">
            <div className="inisidebottom">
              <img src={gm} alt="img" className="wwwatch"></img>
            </div>
            <div className="descdiv">
              <div className="wrapppdiv">
                <h2 className="headwrap">Suv</h2>
                <p className="propara">Sports</p>

                <h3 className="headHide">Starting Bid</h3>
                <span className="sppannn">
                  <h3 className="sppannn">
                    <BiRupee />
                    350.00
                  </h3>
                </span>
              </div>
              <div style={{ marginRight: 20 }}>
                <Link to="/product">
                  {" "}
                  <button className="bidBtn">Bid Now</button>
                </Link>
              </div>
            </div>
          </div>
          <div className="rightbottom">
            <div className="toprightitem">
              <div className="leftrightitem  ">
                <img src={camera} alt="camera" className="cameraimg"></img>
                <div className="description">
                  <div className="wrapppdiv">
                    <h3 className="headHide">Coupe</h3>
                    <p className="propara">Economy</p>
                    <p className="propara">Starting Bid</p>

                    <h4 className="sppannn">
                      <BiRupee />
                      450
                    </h4>
                  </div>
                  <Link to="/product">
                    {" "}
                    <button className="bnow">Bid </button>
                  </Link>
                </div>
              </div>
              <div className="leftrightitem  ">
                <img src={camera} alt="camera" className="cameraimg"></img>
                <div className="description">
                  <div className="wrapppdiv">
                    <h3 className="headHide">Sedan</h3>
                    <p className="propara">Confortable</p>
                    <p className="propara">Starting Bid</p>

                    <h4 className="sppannn">
                      <BiRupee />
                      450
                    </h4>
                  </div>
                  <Link to="/product">
                    {" "}
                    <button className="bnow">Bid </button>
                  </Link>
                </div>
              </div>
            </div>

            <div className="bottomrightitem">
              <div className="toprightitem">
                <div className="leftrightitem  ">
                  <img src={camera} alt="camera" className="cameraimg"></img>
                  <div className="description">
                    <div className="wrapppdiv">
                      <h3 className="headHide">HatchBack</h3>
                      <p className="propara">Confortable</p>
                      <p className="propara">Starting Bid</p>
                      <h4 className="sppannn">
                        <BiRupee />
                        250
                      </h4>
                    </div>
                    <Link to="/product">
                      {" "}
                      <button className="bnow">Bid </button>
                    </Link>
                  </div>
                </div>
                <div className="leftrightitem  ">
                  <img src={camera} alt="camera" className="cameraimg"></img>
                  <div className="description">
                    <div className="wrapppdiv">
                      <h3 className="headHide">Convertible</h3>
                      <p className="propara">Confortable</p>
                      <p className="propara">Starting Bid</p>

                      <h4 className="sppannn">
                        <BiRupee />
                        250
                      </h4>
                    </div>
                    <Link to="/product">
                      {" "}
                      <button className="bnow">Bid </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div style={{ marginBottom: 250 }}>
          <ChooseMore />
        </div>
        <div className="botomhead">
          <div className="botmspon">
            {/* <h1 style={{ textAlign: "left" }}>Sponsor's</h1> */}
          </div>
        </div>
        <div className="botomcontent">
          <div className="vei">Latest</div>
          <ViewmoreCard />
        </div>
        <div>
          <ViewMore />
        </div>
      </div>
    </>
  );
}
