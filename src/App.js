import React, { Component } from 'react';
import './App.css';
import { Row, Col } from 'antd';
import Profile from './components/profile'
import Skills from './components/skills'

class App extends Component {
  render() {
    return (
      <div className="App">

          <div>
              <Row type="flex" justify="space-around" align="middle">
                  <Col  xs={{ span: 24}} sm={{ span: 8}}>

                      <Profile/>
                      <Skills/>

                  </Col>
              </Row>
          </div>



      </div>
    );
  }
}

export default App;
