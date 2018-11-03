/**
 * @author zong_xin
 * @date 2018.11.1
 */
import {Row, Col, Input, Select,Button,Switch,Form,Dropdown,Icon} from 'antd';
import React from 'react';
import {Alert} from 'antd'
import {Table} from 'antd';
const FormItem = Form.Item;
const columns = [{
    title: '用户名',
    dataIndex: 'username',
    width:"9.1%"
}, {
    title: '姓名',
    dataIndex: 'name',
    width:"9.1%"
}, {
    title: '部门',
    dataIndex: 'department',
    width:"9.1%"
}, {
    title: '组别',
    dataIndex: 'group',
    width:"9.1%"
}, {
    title: '岗位',
    dataIndex: 'post',
    width:"9.1%"
}, {
    title: '角色',
    dataIndex: 'role',
    width:"9.1%"
}, {
    title: '地区',
    dataIndex: 'region',
    width:"9.1%"
    },
    {title: '创建时间',
        dataIndex: 'createTime',
        width:"9.1%"
    },
    {title: '最后一次登录时间',
        dataIndex: 'endTime',
        width:"9.1%"
    },
    {title: '启用/禁用',
        dataIndex: 'enable',
        width:"9.1%"
    },
    {title: '操作',
        dataIndex: 'operation',
        width:"9.1%",
        render: text => <a href="javascript:;">{text}</a>,
    }];

const data = [];
for (let i = 0; i < 100; i++) {
    data.push({
        key: i,
        username: `gao_yan ${i}`,
        name: '高燕',
        department:'系统设计部',
        group:'调度组',
        post:'调度员',
        role:'调度员',
        region:'无锡',
        createTime:'2018-02-05 09:00:00',
        endTime:'2018-02-05 09:00:00',
        enable:<Switch defaultChecked  />,
        operation:'编辑'
    });
}

class App extends React.Component {
    state = {
        hasData: true,
    }
    handleDataChange = (hasData) => {
        this.setState({ hasData });
    }

    render() {
        const state = this.state;
        return (
            <div className="gutter-example">
                <Row type="flex" justify="space-around">
                    <Col span={4}><span>姓名:</span><Input placeholder="请输入" className="app-input"/></Col>
                    <Col span={4}><span>状态:</span><Select defaultValue='启用' className='status-select'/></Col>
                    <Col span={4}><span>部门:</span><Select defaultValue='销售一部' className='status-select'/></Col>
                    <Col span={4}><span>角色:</span><Select defaultValue='请选择' className='status-select'/></Col>
                </Row>
                <p></p>
                <Row type="flex" justify="space-around">
                    <Col span={22}><span>地区:</span><Select defaultValue='无锡' className='status-select'/></Col>
                </Row>
                <div style={{float:'right',color:'#fff',width:233}}> <Button type="primary" icon="search">查询</Button> <Button icon="sync">重置</Button><a style={{color: '#2baeff'}}>
                        收起<Switch checked={!!state.hasData} onChange={this.handleDataChange} style={{opacity: 0,position: 'absolute',right:84}}  /><Icon type="down" />
                    </a>
                </div>
                <Table {...this.state} columns={columns} dataSource={state.hasData ? data : null} pagination={{pageSize: 20}} scroll={{y: 500}} style={{textAlign:'center',marginTop:'4%'}} />
            </div>

        );
    }
}

export default App;
