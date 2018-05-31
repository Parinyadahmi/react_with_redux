import React, {Component} from 'react';
import {Avatar} from 'antd';

class Profile extends Component {
    render() {
        return (
            <div className="App">

                <Avatar shape='circle' style={{height: 150, width: 150, borderRadius: '50%'}}
                        src="https://scontent.fbkk5-7.fna.fbcdn.net/v/t1.0-1/c0.0.160.160/p160x160/15781487_1290806224304441_2002154366396265488_n.jpg?_nc_cat=0&_nc_eui2=AeHFHVGKdGXrOOvVZttKG4WmPt69N608aj9J-miQlgkHDo4raWnjhnjDLHJD76jU9CH3PgYFLhQ2jUPNOuZlr-aX1KTFYGE_fgJD_fCcwHiX3A&oh=ca98f21fad40d5e1a8e412b42c6d6217&oe=5B7EDBC9"/>
                <div>PROFILE</div>

            </div>
        );
    }
}

export default Profile;
