import React from 'react';
import {Card, Row, Col, Table, DatePicker, Layout} from 'antd';
//按需加载
import echarts from 'echarts/lib/echarts'
//导入柱形图
import 'echarts/lib/chart/bar'
import 'echarts/lib/component/tooltip'
import 'echarts/lib/component/title'
import 'echarts/lib/component/legend'
import 'echarts/lib/component/markPoint'
import 'echarts/lib/echarts'
import ReactEcharts from 'echarts-for-react'

const {Header, Footer, Content} = Layout;
export default class Pagebutton extends React.Component {
    constructor(props) {
        super(props)
    }

    getOption = () => {
        let option = {
            color: ['#1d98ff', '#1ded8f'],
            title: {
                text: '业界明细图',
            },
            legend: {
                data: ['London', 'Berlin']
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '0%',
                containLabel: true
            },
            tooltip: {
                trigger: 'axis',
                axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                    type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                }
            },
            xAxis:
                {
                    data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'July', 'Aug'],
                }
            ,
            yAxis:
                {
                    type: 'value'
                }
            ,
            series: [
                {
                    name: 'London',
                    type: 'bar',
                    data: [20, 30, 40, 80, 45, 20, 22, 38]
                },
                {
                    name: 'Berlin',
                    type: 'bar',
                    data: [16, 28, 38, 100, 58, 36, 38, 42]
                }

            ]
        }
        return option;
    }
    getOption2 = () => {
        let option2 = {
            tooltip: {
                formatter: "{a} <br/>{b} : {c}%"
            },
            toolbox: {
                feature: {
                    restore: {},
                    saveAsImage: {}
                }
            },
            series: [
                {
                    name: '业务指标',
                    type: 'gauge',
                    detail: {formatter: '{value}%'},
                    data: [{value: 50, name: '完成率'}]
                }
            ]
        };

        setInterval(function () {
            option2.series[0].data[0].value = (Math.random() * 100).toFixed(2) - 0;
        }, 2000);
        return option2
    }

    render() {
        return (
            <Content style={{padding: 24, background: '#fff', height: 'calc(30vh)', margin: '30px 30px'}}>
                <Card title='我的能力(中级工程师-5级)'>
                    <Row>
                        <Col span={12}><ReactEcharts option={this.getOption2()} style={{height: 'calc(50vh)'}}/></Col>
                        <Col span={12}><ReactEcharts option={this.getOption()} style={{height: 'calc(50vh)'}}/></Col>
                    </Row>
                </Card>
            </Content>

        )
    }
}
