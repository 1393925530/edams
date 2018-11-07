/**
 *@desc
 *@author zong_xin
 *@date 2018.10.31
 */
import React,{Component} from 'react';
import ReactDOM from 'react-dom';
//引入antd导航组件
import {Menu, Icon, Layout, Avatar,} from 'antd';
import NavLeft from './components/NavLeft';
import Bar from './components/echarts/bar'

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
const {Header, Footer,Content} = Layout;

class Hello extends Component{
    render(){
        return(
            <Router>
                <Layout>
                   <NavLeft/>
                    <Layout>
                        <Header style={{ background: '#fff', marginRight:'1%',textAlign:'right'}}><Avatar icon="user"  /><span>用户名</span></Header>
                            <Route exact path="/" component={ App } />
                            <Route path="/Pagebutton" component={ Pagebutton } />
                            <Route path="/echarts" component={ Bar } />
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
