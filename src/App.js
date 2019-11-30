import React from 'react';
import './App.css';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import Main from './components/Main';
import { Link } from 'react-router-dom';

function App() {
  return (
<div style={{height: '300px', position: 'relative'}}>
    <Layout fixedHeader>
        <Header className="header-color" transparent title="Title" style={{color: 'white'}}>
            <Navigation>
                <Link to="/">Home</Link>
                <Link to="/AboutMe">About Me</Link>
                <Link to="/Projects">My Projects</Link>
                <Link to="/Contact">Contact Me</Link>
                <Link to="/Resume">My Resume</Link>
            </Navigation>
        </Header>
        <Drawer title="Title">
            <Navigation>
                <Link to="/">Link</Link>
                <Link to="/">Link</Link>
                <Link to="/">Link</Link>
                <Link to="/">Link</Link>
            </Navigation>
        </Drawer>
        <Content>
            <div className="page-content" />
            <Main/>
        </Content>    
    </Layout>
</div>
  );
}

export default App;
