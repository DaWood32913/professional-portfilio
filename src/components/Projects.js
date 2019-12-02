import React, { Component } from "react";
import {
  Tabs,
  Tab,
  Grid,
  Cell,
  Card,
  CardTitle,
  CardMenu,
  CardActions,
  Button,
  IconButton,
  CardText
} from "react-mdl";

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }

  toggleCategories() {
    if (this.state.activeTab === 0) {
      return (
        <div className="projects-grid">
          {/* Project 1 */}
          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "#ccc",
                height: "176px",
                background:
                  "url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQV38RNP5zRnhAFQSBWerqdKqwEuVQnTpRK0GPf-mfB9Q5xwGxz&s) center / cover"
              }}
            >
              Curate
            </CardTitle>
            <CardText>
              Our app lets you search and save some of your favorite art based
              on a search for an artist’s name. Users can create a user account
              and save them to their profile to access them later. Users can
              also delete them if they no longer want to keep them. Just create
              a profile to get started!
            </CardText>
            <CardActions border>
              <Button colored>
                <a href="https://curateapp-upenn.herokuapp.com/">Live Site</a>
              </Button>
              <Button colored>
                <a href="https://github.com/yutsukushi/Curate">GitHub</a>
              </Button>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          {/* Project 2 */}
          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "#ccc",
                height: "176px",
                background:
                  "url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQV38RNP5zRnhAFQSBWerqdKqwEuVQnTpRK0GPf-mfB9Q5xwGxz&s) center / cover"
              }}
            >
              Clicky Game (NFL100 Edition)
            </CardTitle>
            <CardText>
              Celebrate the 100th NFL season with "Clicky Game." This is a memory 
              game where the goal is to click each of the 
              original 8 NFL teams without re-clicking the same team twice or else 
              GAME OVER!. If you sucessfully click all 8 teams 1 time without re-clicking, TOUCHDOWN!
            </CardText>
            <CardActions border>
              <Button colored>
                <a href="https://dawood32913.github.io/clicky-game/">Live Site</a>
              </Button>
              <Button colored>
                <a href="https://github.com/DaWood32913/clicky-game">GitHub</a>
              </Button>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
        </div>
      );
    } else if (this.state.activeTab === 1) {
      return (
        <div className="projects-grid">
          {/* Tread Lightly App */}
          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "#000",
                height: "176px",
                background:
                  "url(https://upload.wikimedia.org/wikipedia/en/thumb/6/62/MySQL.svg/1200px-MySQL.svg.png) center / cover"
              }}
            >
            Tread Lightly
            </CardTitle>
            <CardText>
            For environmentally-aware users (or curious), Tread Lightly is an app that takes the user’s input  and searches the carbon footprint usage from every country. The carbon footprint calculator allows a user to calculate their impact and suggestions on how to improve.
            </CardText>
            <CardActions border>
              <Button colored>
                <a href="http://project2-upenn.herokuapp.com/">Live Site</a>
              </Button>
              <Button colored>
                <a href="https://github.com/yutsukushi/Project-2">GitHub</a>
              </Button>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
        </div>
      );
    } else if (this.state.activeTab === 2) {
      return (
        <div>
          <h1>This is MongoDB</h1>
        </div>
      );
    } else if (this.state.activeTab === 3) {
      return (
        <div>
          <h1>This is JavaScript</h1>
        </div>
      );
    } else if (this.state.activeTab === 4) {
      return (
        <div>
          <h1>This is AJAX</h1>
        </div>
      );
    }
  }

  render() {
    return (
      <div className="category-tabs">
        <Tabs
          activeTab={this.state.activeTab}
          onChange={tabID => this.setState({ activeTab: tabID })}
          ripple
        >
          <Tab>React</Tab>
          <Tab>MySql</Tab>
          <Tab>MongoDB</Tab>
          <Tab>JavaScript</Tab>
          <Tab>AJAX</Tab>
        </Tabs>

        <Grid>
          <Cell col={12}>
            <div className="content">{this.toggleCategories()}</div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Projects;
