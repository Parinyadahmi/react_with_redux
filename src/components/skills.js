import React, {Component} from 'react';
import {connect} from 'react-redux'
import {bindActionCreators, compose} from 'redux'
import * as userAction from '../actions/user'

import {List, Avatar} from 'antd';
import {Rate, Icon, Button, Popconfirm, message} from 'antd';


class Skills extends Component {

    componentDidMount() {
        this.props.actions.getSkill();
    }

    confirm(e) {
        console.log(e);
        message.success('Delete successfully!');
    }

    cancel(e) {
        console.log(e);
    }

    render() {
        const {user} = this.props;

        return (
            <div className="skill">

                MY SKILLS

                <List
                    dataSource={user.skills}
                    renderItem={item => (
                        <List.Item
                            actions={[
                                <Popconfirm title="Are you sure delete this skill?"
                                            onConfirm={this.confirm}
                                            onCancel={this.cancel}
                                            okText="Yes" cancelText="No">
                                    <Button type="primary" shape="circle" icon="close"/>
                                </Popconfirm>]}>

                            <List.Item.Meta
                                avatar={<Avatar>{item.name[0]}</Avatar>}
                                title={<a href="https://ant.design">{item.name}</a>}
                                description={<Rate allowHalf defaultValue={item.rating}/>}
                            />


                        </List.Item>
                    )}
                />
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
