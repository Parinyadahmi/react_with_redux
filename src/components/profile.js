import React, {Component} from 'react';
import {connect} from 'react-redux'
import {bindActionCreators, compose} from 'redux'
import * as userAction from '../actions/user'
import ProfileImg from '../assets/images/profile.jpg'
import {Avatar} from 'antd';

class Profile extends Component {

    componentDidMount() {
        this.props.actions.getProfile();
    }

    render() {
        const {user} = this.props;

        return (
            <div>
                <div className="profile">
                    <Avatar shape='circle' style={{height: 150, width: 150, borderRadius: '50%', marginBottom: 16}}
                            src={ProfileImg}/>

                    <div className="about">
                        <div className="title">{user.about.author}</div>
                        <div>{user.about.position}</div>
                        <div>{user.about.description}</div>
                    </div>
                </div>

                <div className="json">
                    {JSON.stringify(user.skills)}
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    user: state.user
});

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(userAction, dispatch)
});

export default compose(
    connect(
        mapStateToProps,
        mapDispatchToProps)
)(Profile);