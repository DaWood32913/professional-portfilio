import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
import Education from "./Education";
import Experience from "./Experience";
import Skills from "./Skills";

class Resume extends Component {
  render() {
    return (
      <div>
        <Grid>
          <Cell col={4}>
            <div style={{ textAlign: "center" }}>
              <img
                src="https://render.bitstrips.com/v2/cpanel/a41da708-81e9-4ec3-9364-9d8748f7063d-265c87dc-aa27-4443-99fe-e003e6c5e90f-v1.png?transparent=1&palette=1"
                alt="avatar"
                style={{ height: "200px" }}
              />
            </div>
            <h2 style={{ paddingTop: "2em" }}>Woodley Johnson</h2>
            <h4 style={{ color: "grey" }}>Web Developer</h4>
            <hr style={{ borderTop: "3px solid #000", width: "50%" }} />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum
            </p>
            <hr style={{ borderTop: "3px solid #000", width: "50%" }} />
            <h5>Address</h5>
            <p>1902 Grouse Ct. Easton, PA 18040</p>
            <h5>Phone</h5>
            <p>973-865-6897</p>
            <h5>Email</h5>
            <p>woodleyjohnson@yahoo.com</p>
            <h5>Website</h5>
            <p>https://woodley-johnson.herokuapp.com/</p>
            <hr style={{ borderTop: "3px solid #000", width: "50%" }} />
          </Cell>
          <Cell className="resume-right-col" col={8}>
            <h2>Education</h2>

            <Education
              startYear={2004}
              endYear={2005}
              schoolName="Institute of Audio Research"
              fieldOfStudy="Audio Engineering"
            />

            <Education
              startYear={2008}
              endYear={2011}
              schoolName="University of Phoenix"
              fieldOfStudy="Physical Education"
            />

            <Education
              startYear={2019}
              endYear={2019}
              schoolName="University of Pennsylvania LPS"
              fieldOfStudy="Full Stack Web Development"
            />
            <hr style={{ borderTop: "3px solid #fff" }} />

            <h2>Experience</h2>

            <Experience
              startYear={2017}
              endYear={2019}
              jobName="Home Delivery America"
              position="Warehouse / Inventory Manager"
              jobDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
            />

            <Experience
              startYear={2014}
              endYear={2017}
              jobName="Preferred Display Inc"
              position="Warehouse Manager"
              jobDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
            />

            <Experience
              startYear={2009}
              endYear={2014}
              jobName="CloudBlue Technologies"
              position="Operations Manager"
              jobDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
            />

            <hr style={{ borderTop: "3px solid #fff" }} />

            <h2>Skills</h2>

          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Resume;
