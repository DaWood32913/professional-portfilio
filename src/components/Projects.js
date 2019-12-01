import React, { Component } from 'react';
import { Tabs, Tab, tabID } from 'react-mdl';


class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }

  toggleCategories() {
    if(this.state.activeTab === 0) {
      return (
        <div><h1>This is React</h1></div>
      )
    }
  }
    render() {
        return(
          <div className="category-tabs">
            <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabID})} ripple>
              <Tab>React</Tab>
              <Tab>MySql</Tab>
              <Tab>MongoDB</Tab>
              <Tab>JavaScript</Tab>
              <Tab>AJAX</Tab>
            </Tabs>

            <section className="projects-grid">
              {this.toggleCategories()}
            </section>
          </div>  
        )
    }
}

export default Projects;