/**
 *@desc
 *@author zong_xin
 *@date 2018.10.31
 */
import React,{ Component } from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import lab from './lab.svg'
//引入antd导航组件
import {Menu, Icon, Layout, Avatar,} from 'antd';

//引入ant-design样式
import 'antd/dist/antd.css';
import './components/App.css';

//引入路由
import {
    HashRouter as Router,
    Route,
    Link
} from 'react-router-dom';

//引入样式
import './index.css';

//引入组件
import App from './components/App';
import Pagebutton from './components/Pagebutton';
import Test1 from './components/Test1';
import { Table } from 'antd';
import registerServiceWorker from './registerServiceWorker';

const SubMenu = Menu.SubMenu;
//layout布局元素
const { Header, Footer, Sider, Content } = Layout;

class Hello extends Component{
    constructor(props){
        super(props)
        this.state={
            collapsed: true,
            mode:"inline",
            theme:"dark"
        }
    }
    toggleCollapsed = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    }
    render(){
        return(
            <Router>
                <Layout>
                    <Sider>
                        <div type="primary" className="App-logo-wrap" id="logo">
                            <img src={logo} className="App-logo" alt="logo"/>
                        </div>
                        <Menu
                            defaultSelectedKeys={['0']}
                            defaultOpenKeys={['0']}
                            mode={this.state.mode}
                            theme={this.state.theme}
                            inlineCollapsed={this.state.collapsed}
                        >
                            <Menu.Item key="0">
                                <Link to="/"><span><Icon type="dashboard" /><span>EDA设计单管理</span></span></Link>
                            </Menu.Item>

                            <SubMenu key="sub1" title={<span><Icon type="form"/><span>我的任务</span></span>}>
                                <Menu.Item key="1">
                                    <Link to="/Pagebutton">Button</Link>
                                </Menu.Item>
                                <Menu.Item key="2">
                                    <Link to="/Test1">Icon</Link>
                                </Menu.Item>
                            </SubMenu>
                            <SubMenu key="sub2" title={<span><Icon type="table"/><span>归档设计管理</span></span>}>
                                <Menu.Item key="3">Grid</Menu.Item>
                                <Menu.Item key="4">Layout</Menu.Item>
                            </SubMenu>
                            <SubMenu key="sub3" title={<span><Icon type="profile"/><span>质量管理</span></span>}>
                                <Menu.Item key="5">Affix 固钉</Menu.Item>
                                <Menu.Item key="6">Breadcrumb 面包屑</Menu.Item>
                                <Menu.Item key="7">Menu 导航菜单</Menu.Item>
                                <Menu.Item key="8">Pagination 分页</Menu.Item>
                                <Menu.Item key="9">steps 步骤条</Menu.Item>
                            </SubMenu>
                            <SubMenu key="sub4" title={<span><Icon type="check-circle"/><span>个人中心</span></span>}>
                                <Menu.Item key="10">AutoComplete 自动完成</Menu.Item>
                                <Menu.Item key="11">Cascader 级联</Menu.Item>
                                <Menu.Item key="12">Checkbox</Menu.Item>
                                <Menu.Item key="13">DatePicker</Menu.Item>
                                <Menu.Item key="14">Form</Menu.Item>
                                <Menu.Item key="15">Input</Menu.Item>
                                <Menu.Item key="16">InputNumber</Menu.Item>
                                <Menu.Item key="17">Mention 提及</Menu.Item>
                                <Menu.Item key="18">Rate 评分</Menu.Item>
                                <Menu.Item key="19">Radio</Menu.Item>
                                <Menu.Item key="20">Select</Menu.Item>
                                <Menu.Item key="21">Switch</Menu.Item>
                                <Menu.Item key="22">TreeSelect</Menu.Item>
                                <Menu.Item key="23">TimePicker</Menu.Item>
                                <Menu.Item key="24">Transfer 穿梭框</Menu.Item>
                                <Menu.Item key="25">Upload</Menu.Item>
                            </SubMenu>
                            <SubMenu key="sub5" title={<span><Icon type="warning"/><span>系统管理</span></span>}>
                            </SubMenu>
                            {/*<SubMenu key="sub6" title={<span><Icon type="appstore"/><span>Feedback</span></span>}>*/}
                            {/*</SubMenu>*/}
                            {/*<SubMenu key="sub7" title={<span><Icon type="appstore"/><span>Other</span></span>}>*/}
                            {/*</SubMenu>*/}
                        </Menu>
                    </Sider>

                    <Layout>
                        <Header style={{ background: '#fff', marginRight:'1%',textAlign:'right'}}><Avatar icon="user"  /><span>用户名</span></Header>
                        <Content style={{ padding: 24, background: '#fff', minHeight: 800 ,margin:'30px 30px'}}>
                            <Route exact path="/" component={ App } />
                            <Route path="/Pagebutton" component={ Pagebutton } />
                            <Route path="/Test1" component={ Test1 } />
                        </Content>
                        <Footer style={{ textAlign: 'center',color:"#2baeff" }}>
                           EDAMS was based on Ant Design ©2018 Created by zong_xin
                        </Footer>
                    </Layout>
                </Layout>
            </Router>
        )
    }
}


// 配置路由
ReactDOM.render(<Hello />, document.getElementById('root'));
registerServiceWorker();
