import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';


class AboutMe extends Component {
    render() {
        return(
          <div className="aboutMe-body">
            <Grid className="aboutMe-grid">
              <Cell col={4}>
                <h2>About Me</h2>
                <img 
                src="https://render.bitstrips.com/v2/cpanel/ae0f10a5-f13e-4cc9-a4e0-3b2731527da1-265c87dc-aa27-4443-99fe-e003e6c5e90f-v1.png?transparent=1&palette=1"
                alt="avatar"
                style={{ height: "250px" }}
                />
                <hr style={{ borderTop: "3px solid #000", width: "100%" }} />
              </Cell>
              <Cell col={8}>
                <p style={{ width: "75%", margin: "auto", paddingTop: "1em" }}>
                Hi, I'm WOODLEY JOHNSON a Full Stack Web Developer. I started coding in April of 2019. I am a graduate of the University of Pennsylvania Coding Bootcamp. Prior to becoming a Web Developer I spent the past 10 years as a "Jack of All Trades" in the Supply Chain industry.</p>
                <br />
                 <p style={{ width: "75%", margin: "auto", paddingTop: "1em" }}>In 2009, I started off as a entry level material handler working in a warehouse. Witin 6 months without any prior experience I was driving forklifts and a 26' Box truck all over the Northeast. After 3 years of driving trucks I was promoted to the Operations Manager of the warehouse. After managing warehouse operations for 2 more companies I decided to purse a dream I had since I was a teenager by becoming a Web Developer.</p> 
                 <br />
                 <p style={{ width: "75%", margin: "auto", paddingTop: "1em" }}>I enrolled in Bootcamp. In a few short months, without any prior coding experience, I've been able to learn many front-end and back-end languages. I have a huge appetite for learning and I am constantly working on improving my coding skills.
                </p>
              </Cell>
            </Grid>
          </div>  
        )
    }
}

export default AboutMe;