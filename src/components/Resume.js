import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';


class Resume extends Component {
    render() {
        return(
          <div>
            <Grid>
              <Cell col={4}>
                <div style={{textAlign: 'center'}}>
                  <img 
                  src="https://render.bitstrips.com/v2/cpanel/a41da708-81e9-4ec3-9364-9d8748f7063d-265c87dc-aa27-4443-99fe-e003e6c5e90f-v1.png?transparent=1&palette=1"
                  alt="avatar"
                  style={{height: '200px'}}
                  />
                </div>
                <h2 style={{paddingTop: '2em'}}>Woodley Johnson</h2>
                <h4 style={{color: 'grey'}}>Web Developer</h4>
                <hr style={{borderTop: '3px solid #000', width: '50%'}} />
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
                <hr style={{borderTop: '3px solid #000', width: '50%'}} />
                <h5>Address</h5>
                <p>1902 Grouse Ct. Easton, PA 18040</p>
                <h5>Phone</h5>
                <p>973-865-6897</p>
                <h5>Email</h5>
                <p>woodleyjohnson@yahoo.com</p>
                <h5>Website</h5>
                <p>TBD</p>
                <hr style={{borderTop: '3px solid #000', width: '50%'}} />
              </Cell>
              <Cell className="resume-right-col" col={8}>Right Side</Cell>
            </Grid>
          </div>  
        )
    }
}

export default Resume;