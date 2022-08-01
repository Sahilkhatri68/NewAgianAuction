import React from "react";
import car from "../img/brezza.jpg";
import "./Product.css";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import GlobalNav from "./GlobalNav";
import ViewmoreCard from "../RelatedCard/ViewmoreCard";
// import ViewmoreCard from "../Footer/Card/ViewmoreCard";
export default function Product() {
  return (
    <>
      <GlobalNav />
      <div className="maindescdiv">
        <div className="outerdesc">
          <div className="leftdescview">
            <img src={car} alt="" srcset="" className="descimg" />

            <div className="mainimgdesc">
              <h1>Mustang Gt</h1>
              <p>
                Pellentesque habitant morbi tristique senectus et netus et
                malesuada fames ac turpis egestas. Vestibulum tortor quam,
                feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu
                libero sit amet quam egestas semper. Aenean ultricies mi vitae
                est. Mauris placerat eleifend leo.
              </p>
            </div>
          </div>
          <div className="rightdescview">
            <div className="maindescvi">
              <Card sx={{ minWidth: 275 }}>
                <CardContent>
                  <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    <h1>Mustang Gt</h1>
                    <h5>
                      <b>Making year</b>-2020
                    </h5>
                    <h5>
                      <b>Brand</b>-Ford
                    </h5>
                    <h5>
                      <b>Driven</b>-1000 Km
                    </h5>
                    <h5>
                      <b>Transmissoin</b>-Automatic
                    </h5>
                    <h5>
                      <b>Accidental</b>-No
                    </h5>
                    <h5>
                      <b>Fuel</b>-Diesel
                    </h5>
                    <h5>
                      <b>Insurance</b>-Yes
                    </h5>
                  </Typography>
                </CardContent>
                <CardActions className="bidbbtn">
                  <TextField size="small" placeholder="Enter Bid Amount" />
                  <Button size="small" variant="contained">
                    Bid
                  </Button>
                </CardActions>

                <Typography>
                  <div className="timerdiv">
                    <div className="outertime">
                      <div className="datet">
                        <h3>10</h3>
                      </div>
                      <div className="">Day</div>
                    </div>
                    <div className="outertime">
                      <div className="datet">
                        {" "}
                        <h3>10</h3>
                      </div>
                      <div className="">Hour's</div>
                    </div>
                    <div className="outertime">
                      <div className="datet">
                        {" "}
                        <h3>10</h3>
                      </div>
                      <div className="">Minute's</div>
                    </div>
                    <div className="outertime">
                      <div className="datet">
                        {" "}
                        <h3>10</h3>
                      </div>
                      <div className="">Seconds</div>
                    </div>
                  </div>
                </Typography>
              </Card>
            </div>
          </div>
        </div>
        <div className="lowerrelated">
          <div className="realtedhead">
            <h1>Releated Products</h1>
          </div>
          <div>
            <ViewmoreCard />
          </div>
        </div>
      </div>
    </>
  );
}
