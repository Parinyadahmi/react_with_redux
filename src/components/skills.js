import React, { Component } from 'react';
import {connect} from 'react-redux'
import {bindActionCreators, compose} from 'redux'
import * as userAction from '../actions/user'

class Skills extends Component {

    componentDidMount() {
        this.props.actions.getSkill();
    }

    render() {
        const {user} = this.props;

        return (
            <div className="skill">

                {user.skills.map((val, key) => {
                    return (
                        <div className="col-12 col-sm-3" key={key}>
                            {val.name} {val.percent}
                        </div>
                    );
                })}

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
)(Skills);
