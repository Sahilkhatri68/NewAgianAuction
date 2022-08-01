import * as React from "react";
// import Card from "@mui/material/Card";
// import CardActions from "@mui/material/CardActions";
// import CardContent from "@mui/material/CardContent";
// import CardMedia from "@mui/material/CardMedia";
// import Button from "@mui/material/Button";
// import Typography from "@mui/material/Typography";
import "./table.css";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { BiRupee } from "react-icons/bi";
import GlobalNav from "../view/GlobalNav";
function ViewmoreCard() {
  return (
    <>
      <GlobalNav />
      <div style={{ padding: 20 }}>
        <div className="viewContainer">
          <div className="viewImgContainer">
            <img
              className="imgStyle"
              src="https://images.unsplash.com/photo-1494976388531-d1058494cdd8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2Fyc3xlbnwwfHwwfHw%3D&w=1000&q=80"
            />
            <h5
              style={{
                color: "grey",
                fontSize: "12px",
                marginTop: "2%",
                paddingLeft: "2%",
              }}
            >
              Vehicles
            </h5>
            <h5 style={{ color: "black", fontSize: "20px", paddingLeft: "2%" }}>
              2017 Ferrari 488 Spider
            </h5>
            <h5 style={{ color: "grey", fontSize: "12px", paddingLeft: "2%" }}>
              Starting bid
            </h5>
            <div className="bookContainer">
              <h5 style={{ color: "black", fontSize: "25px" }}>$1,500.00</h5>
              <Stack spacing={2} direction="row">
                <Button variant="contained" color="primary">
                  Bid
                </Button>
              </Stack>
            </div>
          </div>

          <div className="viewImgContainer">
            <img
              className="imgStyle"
              src="https://images.unsplash.com/photo-1494976388531-d1058494cdd8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2Fyc3xlbnwwfHwwfHw%3D&w=1000&q=80"
            />
            <h5
              style={{
                color: "grey",
                fontSize: "12px",
                marginTop: "2%",
                paddingLeft: "2%",
              }}
            >
              Vehicles
            </h5>
            <h5 style={{ color: "black", fontSize: "20px", paddingLeft: "2%" }}>
              2017 Ferrari 488 Spider
            </h5>
            <h5 style={{ color: "grey", fontSize: "12px", paddingLeft: "2%" }}>
              Starting bid
            </h5>
            <div className="bookContainer">
              <h5 style={{ color: "black", fontSize: "25px" }}>$1,500.00</h5>
              <Stack spacing={2} direction="row">
                <Button variant="contained" color="primary">
                  Bid
                </Button>
              </Stack>
            </div>
          </div>

          <div className="viewImgContainer">
            <img
              className="imgStyle"
              src="https://images.unsplash.com/photo-1494976388531-d1058494cdd8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2Fyc3xlbnwwfHwwfHw%3D&w=1000&q=80"
            />
            <h5
              style={{
                color: "grey",
                fontSize: "12px",
                marginTop: "2%",
                paddingLeft: "2%",
              }}
            >
              Vehicles
            </h5>
            <h5 style={{ color: "black", fontSize: "20px", paddingLeft: "2%" }}>
              2017 Ferrari 488 Spider
            </h5>
            <h5 style={{ color: "grey", fontSize: "12px", paddingLeft: "2%" }}>
              Starting bid
            </h5>
            <div className="bookContainer">
              <h5 style={{ color: "black", fontSize: "25px" }}>$1,500.00</h5>
              <Stack spacing={2} direction="row">
                <Button variant="contained" color="primary">
                  Bid
                </Button>
              </Stack>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default ViewmoreCard;
