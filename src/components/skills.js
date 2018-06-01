import React, {Component} from 'react';
import {connect} from 'react-redux'
import {bindActionCreators, compose} from 'redux'
import * as userAction from '../actions/user'

import {List, Avatar} from 'antd';
import {Rate, Icon, Button, Popconfirm, notification, Row, Col} from 'antd';


class Skills extends Component {

    state = {
        isEdit: false
    };

    componentDidMount() {
        this.props.actions.getSkill();
    }

    delete(data) {
        notification.success({
            message: 'My Skills',
            description: data.name + ' has been deleted!',
        });

        this.props.actions.deleteSkill(data);
    }

    add(data) {
        this.props.actions.addSkill(data);
    }

    action(item) {
        if (!this.state.isEdit) {
            return <Rate allowHalf defaultValue={item.rating}/>;
        } else {
            return [
                <Popconfirm key={item} title="Are you sure delete this skill?"
                            onConfirm={() => this.delete(item)}
                            okText="Yes" cancelText="No">
                    <Button type="primary" shape="circle" icon="close"/>
                </Popconfirm>]
        }
    }

    setMode() {
        this.setState({
            isEdit: !this.state.isEdit
        });
    }

    buttonMode() {
        return <Button onClick={() => this.setMode()} type="primary" shape="circle"
                       icon={this.state.isEdit ? 'save' : 'edit'}/>
    }

    render() {
        const {user} = this.props;
        return (
            <div className="skill">

                <Row className="header" type="flex" align="middle">
                    <Col span={12}>MY SKILLS</Col>

                    <Col style={{textAlign: 'right'}} span={12}> {this.buttonMode()}</Col>
                </Row>


                <List
                    dataSource={user.skills}
                    renderItem={item => (
                        <List.Item
                        >
                            <List.Item.Meta
                                avatar={<Avatar>{item.name[0]}</Avatar>}
                                title={<a href="https://ant.design">{item.name}</a>}
                            />
                            <div>{this.action(item)}</div>
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
