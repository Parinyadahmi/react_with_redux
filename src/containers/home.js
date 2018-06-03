import React, { Component } from 'react';
import { Row, Col } from 'antd';
import Profile from '../components/profile'
import Skills from '../components/skills'

class Home extends Component {
    render() {
        return (
                <div>
                    <Row type="flex" justify="space-around" align="middle">
                        <Col  xs={{ span: 24}} sm={{ span: 8}}>
                            <Profile/>
                            <Skills/>
                        </Col>
                    </Row>
                </div>
        );
    }
}

export default Home;
