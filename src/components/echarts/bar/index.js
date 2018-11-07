import React from 'react';
import {Card, Row, Col, Table, DatePicker, Layout,Steps} from 'antd';
//按需加载
import echarts from 'echarts/lib/echarts'
//导入柱形图
import 'echarts/lib/chart/bar'
import 'echarts/lib/component/tooltip'
import 'echarts/lib/component/title'
import 'echarts/lib/component/legend'
import 'echarts/lib/component/markPoint'
import ReactEcharts from 'echarts-for-react'
import './index.less'
const Step = Steps.Step;
const {Header, Footer, Content} = Layout;
const dataSource = []
const data = []
for (let i = 0; i < 88; i++) {
    dataSource.push({
        designNumber: `6CAD1810${i}`,
        overtimeType: '周末加班',
        overtimeDays: i,
        overtimeDate: `2018-04-22`,
        overtimeArrangement: 'CAD部安排',
        overtimePlace: '无锡'
    })

}
for (let j = 0; j < 88; j++) {
    data.push({
        startTime: '2018-04-25 12:00:00',
        endTime: '2018-04-25 17:00:00',
        longTime: 7,
        type: '临时假',
        registerTime: '2018-04-25 09:00:00',
    })

}
const columns = [{
    title: 'EDA设计号',
    dataIndex: 'designNumber',
    width: '16.6%',
    align:'center'
}, {
    title: '加班类型',
    dataIndex: 'overtimeType',
    width: '16.6%',
    align:'center'


}, {
    title: '加班天数',
    dataIndex: 'overtimeDays',
    width: '16.6%',
    align:'center'
}, {
    title: '加班日期',
    dataIndex: 'overtimeDate',
    width: '16.6%',
    align:'center'
}, {
    title: '加班类型',
    dataIndex: 'overtimeArrangement',
    width: '16.6%',
    align:'center'
}, {
    title: '加班地点',
    dataIndex: 'overtimePlace',
    width: '16.6%',
    align:'center'
}];
const column = [{
    title: '请假开始时间',
    dataIndex: 'startTime',
    width: '20%'
}, {
    title: '请假结束时间',
    dataIndex: 'endTime',
    width: '20%',
    align:'center'
}, {
    title: '请假时长',
    dataIndex: 'longTime',
    width: '20%',
    align:'center'

}, {
    title: '请假类型',
    dataIndex: 'type',
    width: '20%',
    align:'center'
}, {
    title: '登记时间',
    dataIndex: 'registerTime',
    width: '20%',
    align:'center'
}];

function onChange(date, dateString) {
    console.log(date, dateString);
}

export default class Bar extends React.Component {

    getOption = () => {
        let option = {
            color: ['#3398DB'],
            title: {
                text: '我的奋斗统计图'

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
                    data: ['周日', '节假日', '夜班'],
                }
            ,
            yAxis:
                {
                    type: 'value'
                }
            ,
            series: [
                {
                    name: '周末加班',
                    type: 'bar',
                    barWidth: '50%',
                    data: [4, 3, 13]
                }
            ]
        }
        return option;
    }

    render() {
        return (
            <div>
                <Content style={{padding: 24, background: '#fff', height: 'calc(72vh)', margin: '30px 30px'}}>
                    <Card title='我的奋斗统计'>
                        <Row>
                            <Col span={12} style={{height: 'calc(50vh)'}}> <ReactEcharts option={this.getOption()}
                                                                                         style={{height: 'calc(50vh)'}}/></Col>
                            <Col span={12}>
                                <Row>
                                    <Col span={12}><span className="right-title">我的奋斗明细</span></Col>
                                    <Col span={12}><span className='right-content'>本季度</span><span
                                        className='right-content'>本年</span><a className='right-content'>本月</a>
                                        <DatePicker onChange={onChange} style={{padding: '0 5px'}}/></Col>
                                </Row><br></br>
                                <Table dataSource={dataSource} columns={columns} pagination={{pageSize: 40}}
                                       scroll={{y: 340}}  loading={{delay:300,tip:'Loading',size:'large',spinning:true}}  />
                            </Col>
                        </Row>
                    </Card>
                </Content>
                <Content style={{padding: 24, background: '#fff', height: 'calc(50vh)', margin: '20px 30px'}}>
                    <Row>
                        <Col span={16}>
                            <Card title={<Row> <Col span={12}><span className="right-title">请假统计</span></Col><Col
                                span={12}><span className='right-content'>本季度</span><span
                                className='right-content'>本年</span><a className='right-content'>本月</a> <DatePicker
                                onChange={onChange} style={{padding: '0 5px'}}/></Col></Row>}>

                                <Table dataSource={data} columns={column} pagination={{pageSize: 40}}
                                       scroll={{y: 200}}/>
                            </Card>
                        </Col>
                        <Col span={8}>
                         <Card title={<span className="right-title">我的成长</span>} style={{  height:'calc(47.5vh)'}} >
                             <Steps direction="vertical" current={1}>
                                 <Step title="2018-06-12" description="设计等级:4级" />
                                 <Step title="2018-06-01" description="获得布局许可能力" />
                                 <Step title="2018-02-01" description="获得HDI设计能力" />
                                 <Step title="2017-08-09" description="设计等级能力升级:3级" />
                                 <Step title="2017-06-12" description="获得布局许可能力" />
                             </Steps>
                         </Card>
                        </Col>

                    </Row>
                </Content>
            </div>
        )
    }

}
