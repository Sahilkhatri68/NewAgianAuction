import * as React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import "./footer.css";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import { FiPhone } from "react-icons/fi";
import { AiOutlineMail } from "react-icons/ai";
import { BsTelephone } from "react-icons/bs";
import { FaFacebook, FaSnapchat } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import { BsInstagram, BsWhatsapp } from "react-icons/bs";
import { FiMail } from "react-icons/fi";
export default function Footer() {
  return (
    <>
      <div className="mianfoot">
        <div className="insidefoot">
          <div className="contfoot">
            <div className="itemcont">
              <Stack spacing={2} direction="row">
                <Button variant="contained" size="small">
                  GetBid
                </Button>
              </Stack>
            </div>
            <div className="infocontainer">
              <div className="textfoot">
                You can all our call center, we are open on weekdays from 9:00AM
                to 8:00PM and on weekends from 9:00AM to 1:00PM
              </div>
              <div>
                <div className="itemphone">
                  <FiPhone className="muiicon" /> 0000000000
                </div>
                <div className="itemphone">
                  <AiOutlineMail className="muiicon" />
                  YashtiAutomobiles@gmail.com
                </div>
              </div>
            </div>
          </div>
          <div className="contfoot">
            <div className="itemcont">
              <h2 className="foothead">Useful Links</h2>
            </div>
            <div className="infocont">
              <div>
                <div className="listcont">
                  <div className="paraitem">About us</div>
                  <div className="paraitem">Contact us</div>
                  <div className="paraitem">Policy</div>
                  <div className="paraitem">About us</div>
                  <div className="paraitem">About us</div>
                </div>
              </div>
            </div>
          </div>
          <div className="contfoot">
            <div className="itemcont">
              <h2 className="foothead">Social</h2>
            </div>
            <div className="infocont">
              <div>
                <div className="listcont">
                  <div className="paraitem">
                    <FaFacebook className="socialiconsf" />
                    Facebook
                  </div>
                  <div className="paraitem">
                    <FaSnapchat className="socialiconsf" />
                    Snapchat
                  </div>
                  <div className="paraitem">
                    <BsInstagram className="socialiconsf" />
                    Instagram
                  </div>
                  <div className="paraitem">
                    <BsWhatsapp className="socialiconsf" />
                    Whatsapp
                  </div>
                  <div className="paraitem">
                    <AiFillTwitterCircle className="socialiconsf" />
                    Twitter
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="contfoot">
            <div className="itemcont">
              <h2 className="foothead">Join us</h2>
              <p className="footpara">Join us to get instant updates</p>
            </div>
            <div className="infocont">
              <div>
                <div className="listcont">
                  <Box>
                    <TextField className="txtfld" placeholder="Your E-mail" />
                  </Box>
                  <div className="muibtn">
                    <Button
                      className="btnload"
                      variant="contained"
                      size="small"
                    >
                      Subscribe
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="lowerfoot">
          <div className="webfoot">&copy; YashtiAutomobiles</div>
        </div>
      </div>
    </>
  );
}
