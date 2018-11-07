import { Modal, Form, Input, DatePicker, Col, TimePicker, Select,Checkbox, Row} from 'antd';
import React from 'react';
const Option=Select.Option
const FormItem = Form.Item;
const formItemLayout = {
    labelCol: {
        xs: { span: 24 },
        sm: { span: 5 },
    },
    wrapperCol: {
        xs: { span: 24 },
        sm: { span: 12 },
    },
};
function onChange(checkedValues) {
    console.log('checked = ', checkedValues);
}
export  default class Model extends React.Component {
    state = { visible: false }

    showModal = () => {
        this.setState({
            visible: true,
        });
    }

    handleOk = (e) => {
        console.log(e);
        this.setState({
            visible: false,
        });
    }

    handleCancel = (e) => {
        console.log(e);
        this.setState({
            visible: false,
        });
    }

    render() {
        return (
            <div>
                <a type="primary" onClick={this.showModal}>
                   编辑
                </a>
                <Modal
                    title="用户编辑"
                    visible={this.state.visible}
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                    okText="提交"
                    cancelText="取消"
                >
                    <Form>

                        <FormItem
                            {...formItemLayout}
                            label="姓名:"
                        >
                           <span style={{fontWeight:'bold'}}>gao_yan</span>
                        </FormItem>
                        <FormItem
                            {...formItemLayout}
                            label="地区:"
                            hasFeedback
                        >
                            <Select defaultValue="1">
                                <Option value="1">无锡</Option>
                                <Option value="2">宜兴</Option>
                                <Option value="3">江阴</Option>
                            </Select>
                        </FormItem>
                        <FormItem
                            {...formItemLayout}
                            label="角色:"
                        >
                            <Checkbox.Group style={{ width: '100%',paddingTop:'4%'}} onChange={onChange} defaultValue={['A','C','D']}>
                                <Row>
                                    <Col span={12}><Checkbox value="A">设计工程师</Checkbox></Col>
                                    <Col span={12}><Checkbox value="B">项目负责人</Checkbox></Col>
                                   <br/>
                                    <br/>
                                    <Col span={12}><Checkbox value="C">小组主管</Checkbox></Col>
                                    <Col span={12}><Checkbox value="D">部门经理</Checkbox></Col>
                                    <br/>
                                    <br/>
                                    <Col span={12}><Checkbox value="E">质检师</Checkbox></Col>
                                    <Col span={12}><Checkbox value="F">客服人员</Checkbox></Col>
                                    <br/>
                                    <br/>
                                    <Col span={12}><Checkbox value="G">调度员</Checkbox></Col>
                                    <Col span={12}><Checkbox value="H">高级经理</Checkbox></Col>
                                </Row>
                            </Checkbox.Group>
                        </FormItem>
                    </Form>
                </Modal>
            </div>
        );
    }
}
