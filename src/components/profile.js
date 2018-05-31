import React, { Component } from 'react';
import { Avatar } from 'antd';
class Profile extends Component {
    render() {
        return (
            <div className="App">


                <Avatar size="large" icon="user" />
                <div>PROFILE</div>

            </div>
        );
    }
}

export default Profile;
