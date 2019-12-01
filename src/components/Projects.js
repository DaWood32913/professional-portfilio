import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardMenu, CardActions, Button, IconButton, CardText } from 'react-mdl';


class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }

  toggleCategories() {
    if(this.state.activeTab === 0) {
      return (
        <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
          <CardTitle style={{color: '#fff', height: '176px', background: 'url() center / cover'}}>React Project</CardTitle>
          <CardText>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sagittis pellentesque lacus eleifend lacinia...
          </CardText>
          <CardActions border>
            <Button colored>GitHub</Button>
            <Button colored>CodePen</Button>
            <Button colored>LiveDemo</Button>
          </CardActions>
          <CardMenu style={{color: '#fff'}}>
            <IconButton name="share" />
          </CardMenu>
        </Card>
      )  
    } else if (this.state.activeTab === 1) {
      return (
        <div><h1>This is MySql</h1></div>
      )
    } else if (this.state.activeTab === 2) {
      return (
        <div><h1>This is MongoDB</h1></div>
      )
    } else if (this.state.activeTab === 3) {
      return (
        <div><h1>This is JavaScript</h1></div>
      )
    } else if (this.state.activeTab === 4) {
      return (
        <div><h1>This is AJAX</h1></div>
      )
    }
  }

  
    render() {
        return(
          <div className="category-tabs">
            <Tabs activeTab={this.state.activeTab} onChange={(tabID) => this.setState({ activeTab: tabID})} ripple>
              <Tab>React</Tab>
              <Tab>MySql</Tab>
              <Tab>MongoDB</Tab>
              <Tab>JavaScript</Tab>
              <Tab>AJAX</Tab>
            </Tabs>

            <section className="projects-grid">
              <Grid className="projects-grid">
                <Cell col={12}>
                  <div className="content">{this.toggleCategories()}</div>
                </Cell>
              </Grid>
            </section>
          </div>  
        )
    }
}

export default Projects;