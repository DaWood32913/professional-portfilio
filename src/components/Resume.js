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
            FULL STACK WEB DEVELOPER WITH A CONCENTRATION IN: HTML, CSS, JAVASCRIPT, JQUERY, AJAX, EXPRESS, NODE, MYSQL, MONGODB, AND REACT. I'M SO GLAD YOU VISITED! PLEASE FEEL FREE TO BROWSE MY PAGE. HOPE YOU LIKE.
            THANKS!
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
              jobDescription="Managed all operations of the warehouse. Oversee the daily Morning Loadout of 50+ delivery trucks ensuring each truck loaded the correct consumer product. The Receiving of 15+ inbound trailers bring in over 2000 appliances. Managed the Inventory of over $11M worth of inventory. Ensure the safety compliance and cleanliness of the warehouse utilizing Lean 5S Methods. Implimented work processes to increase productivity while significantly reducing overtime."
            />

            <Experience
              startYear={2014}
              endYear={2017}
              jobName="Preferred Display Inc"
              position="Warehouse Manager"
              jobDescription="Managed all operations for two warehouses, trained new employees, and re-trained current employees. Oversee the Receiving, Shipping, and Pick and Pack departments. Managed and supervised the Inventory Team with the resposibility for more than $5M worth of inventory. Ensure the safety compliance and cleanliness of both warehouses utilizing Lean 5S Methods."
            />

            <Experience
              startYear={2009}
              endYear={2014}
              jobName="CloudBlue Technologies"
              position="Operations Manager"
              jobDescription="Started as an entry-level employee, through diligence and hard work earned progressive promotions to a management position. Had complete responsibility for all daily warehouse operations. Managed 30 employees in six different departments - Logistics, Shipping and Receiving, Driver Dispatch, Inventory, Customer Audits, and Remarketing."
            />

            <hr style={{ borderTop: "3px solid #fff" }} />

            <h2>Skills</h2>

            <Skills skill="HTML" progress={100} />

            <Skills skill="CSS" progress={85} />

            <Skills skill="JavaScript" progress={70} />

            <Skills skill="NodeJS" progress={65} />

            <Skills skill="Express" progress={70} />

            <Skills skill="React" progress={50} />

            <Skills skill="MongoDB" progress={45} />

            <Skills skill="MySQL" progress={85} />
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Resume;
