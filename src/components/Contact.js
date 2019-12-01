import React, { Component } from "react";
import { Grid, Cell, List, ListItem, ListItemContent } from "react-mdl";

class Contact extends Component {
  render() {
    return (
      <div className="contact-body">
        <Grid className="contact-grid">
          <Cell col={6}>
            <h2>Woodley Johnson</h2>
            <img
              src="https://render.bitstrips.com/v2/cpanel/88952da0-e609-495a-8106-8b796bafb451-265c87dc-aa27-4443-99fe-e003e6c5e90f-v1.png?transparent=1&palette=1"
              alt="avatar"
              style={{ height: "250px" }}
            />
            <p style={{ width: "75%", margin: "auto", paddingTop: "1em" }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum
            </p>
          </Cell>
          <Cell col={6}>
            <h2>Contact Me</h2>
            <hr />

            <div className="contact-list">

            <List>
              <ListItem>
                <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                  <i className="fa fa-phone-square" aria-hidden="true"/>
                  973-865-6897
                </ListItemContent>
              </ListItem>
              <ListItem>
                <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                  <i className="fa fa-envelope" aria-hidden="true"/>
                  woodleyjohnson@yahoo.com
                </ListItemContent>
              </ListItem>
            </List>

            </div>


          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Contact;
