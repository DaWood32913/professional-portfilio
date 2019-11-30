import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';


class LandingPage extends Component {
    render() {
        return(
          <div style={{width: "100%", margin: "auto"}}>
            <Grid className="landing-grid">
              <Cell col={12}>
                <img src="https://render.bitstrips.com/v2/cpanel/2af24209-ea90-4912-9223-4c54c650559a-265c87dc-aa27-4443-99fe-e003e6c5e90f-v1.png?transparent=1&palette=1"
                alt="avatar"
                className="avatar-img"
                />
                <div className="banner-text">
                  <h1>Full Stack Web Developer</h1>

                </div>
              </Cell>
            </Grid>  
          </div>  
        )
    }
}

export default LandingPage;