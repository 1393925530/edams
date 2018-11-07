import React from 'react';
import logo from "../../logo.svg";
import {Menu, Icon, Layout,Button} from 'antd';
import {Link} from 'react-router-dom';
import MenuConfig from './../../components/config/meunConfig';
const {Sider} = Layout;
const SubMenu = Menu.SubMenu;
export default class NavLeft extends React.Component{
    componentWillMount(){
       const menuTreeNode=this.renderMenu(MenuConfig)
        this.state
    }
    //菜单渲染
    renderMenu=(data)=>{
      return data.map((item)=>{
          if(item.children){
              this.renderMenu(item.children )
          }

      })


    }
    constructor(props) {
        super(props)
        this.state = {
            collapsed: true,
            mode: "inline",
            theme: "dark"
        }
    }

    // toggleCollapsed = () => {
    //     this.setState({
    //         collapsed: !this.state.collapsed,
    //     });
    // }
    onCollapse = (collapsed) => {
        this.setState({ collapsed });
    }

    render() {
        return (
            <Sider collapsible={true}
                     collapsed={this.state.collapsed}
                     onCollapse={this.onCollapse} >
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
                        <Link to="/"><span><Icon type="dashboard"/><span>EDA设计单管理</span></span></Link>
                    </Menu.Item>

                    <SubMenu key="sub1" title={<span><Icon type="form"/><span>我的任务</span></span>}>
                        <Menu.Item key="1">
                            <Link to="/echarts">Button</Link>
                        </Menu.Item>
                        <Menu.Item key="2">
                            <Link to="/Pagebutton">Icon</Link>
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
                </Menu>
            </Sider>

        )
    }

}
