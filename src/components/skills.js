import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators, compose} from 'redux';
import * as userAction from '../actions/user';

import {
    List, Avatar, Rate, Button, Popconfirm, notification, Row, Col, Input
} from 'antd';


class Skills extends Component {

    constructor(props) {
        super(props);
        this.ratingChange = this.ratingChange.bind(this);
    }

    state = {
        form: {
            name: null,
            rating: null
        },
        isEdit: false
    };

    componentDidMount() {
        this.props.actions.getSkill();
    }

    add() {
        let data = this.state.form;

        notification.success({
            message: 'My Skills',
            description: data.name + ' has been added!',
        });

        this.props.actions.addSkill(data);

        this.setState({isEdit : false})
    }

    delete(data) {
        notification.success({
            message: 'My Skills',
            description: data.name + ' has been deleted!',
        });

        this.props.actions.deleteSkill(data);
    }

    update = (data) => (value) => {
        notification.success({
            message: 'My Skills',
            description: data.name + ' has been updated to ' + value,
        });

        data.rating = value;
        this.props.actions.updateSkill(data);
    };

    action(item) {
        if (!this.state.isEdit) {
            return <Rate onChange={this.update(item)} allowHalf defaultValue={item.rating}/>;
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


    inputChange = (event) => {
        this.setState({
            form: {
                ...this.state.form,
                name: event.target.value
            }
        });
    };

    ratingChange(value) {
        this.setState({
            form: {
                ...this.state.form,
                rating: value
            }
        });
    }


    render() {
        const {user} = this.props;
        const {isEdit} = this.state;
        return (
            <div className="skill">

                <div className="form">
                    {isEdit && <Row className="header" type="flex" align="middle">
                        <Col span={24}><Input onChange={this.inputChange}
                                              placeholder="Skill"/></Col>
                        <Col span={24}> <Rate onChange={this.ratingChange} allowHalf
                                              defaultValue={5}/></Col>

                        <Col span={24}>
                            <Button style={{marginTop: 15}} onClick={() => this.add()} type="primary"
                                    icon="save">Save</Button>
                        </Col>
                    </Row>}
                </div>

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
