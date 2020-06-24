import React,{useEffect,useRef}from 'react';
import styles from '../style.less';
import { Link } from 'umi';
import {Row,Col,Card} from 'antd';
import echarts from 'echarts';
import '@/utlis/chartMock.js';
const Home = () => {
    const gutter = [20,50]
    const cargo_chart_box = useRef();
    const consumer_chart_box = useRef();
    const selling_chart_box = useRef();

    useEffect(()=>{
        let cargo_chart = echarts.init(cargo_chart_box.current);
        cargo_chart.setOption({
              title: {
                text: '本周产品销量'
            },
            tooltip: {},
            legend: {
                data:['销量']
            },
            xAxis: {
                data: ["医疗包","泰瑟枪","100分贝报警器","多功能牛仔裤d","内刃高跟鞋","迷你西红柿"]
            },
            yAxis: {},
            series: [{
                name: '销量',
                type: 'bar',
                data: [5, 20, 36, 10, 10, 20]
            }]
        })
        
        let consumer_chart = echarts.init(consumer_chart_box.current);
        consumer_chart.setOption( {
            backgroundColor: '#2c343c',
        
            title: {
                text: '顾客占比',
                left: 'center',
                top: 20,
                textStyle: {
                    color: '#ccc'
                }
            },
        
            tooltip: {
                trigger: 'item',
                formatter: '{a} <br/>{b} : {c} ({d}%)'
            },
        
            visualMap: {
                show: false,
                min: 80,
                max: 600,
                inRange: {
                    colorLightness: [0, 1]
                }
            },
            series: [
                {
                    name: '访问来源',
                    type: 'pie',
                    radius: '55%',
                    center: ['50%', '50%'],
                    data: [
                        {value: 335, name: '家庭订单'},
                        {value: 310, name: '私企订单'},
                        {value: 274, name: '国企订单'},
                        {value: 235, name: '个人订单'},
                        {value: 400, name: '外企订单'}
                    ].sort(function (a, b) { return a.value - b.value; }),
                    roseType: 'radius',
                    label: {
                        color: 'rgba(255, 255, 255, 0.3)'
                    },
                    labelLine: {
                        lineStyle: {
                            color: 'rgba(255, 255, 255, 0.3)'
                        },
                        smooth: 0.2,
                        length: 10,
                        length2: 20
                    },
                    itemStyle: {
                        color: '#c23531',
                        shadowBlur: 200,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                    },
        
                    animationType: 'scale',
                    animationEasing: 'elasticOut',
                    animationDelay: function (idx) {
                        return Math.random() * 200;
                    }
                }
            ]
        })

        let selling_chart = echarts.init(selling_chart_box.current);
        selling_chart.setOption({
            title: {
                text: '堆叠区域图'
            },
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'cross',
                    label: {
                        backgroundColor: '#6a7985'
                    }
                }
            },
            legend: {
                data: ["医疗包","泰瑟枪","100分贝报警器","多功能牛仔裤d","内刃高跟鞋"]
            },
            toolbox: {
                feature: {
                    saveAsImage: {}
                }
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            xAxis: [
                {
                    type: 'category',
                    boundaryGap: false,
                    data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
                }
            ],
            yAxis: [
                {
                    type: 'value'
                }
            ],
            series: [
                {
                    name: '医疗包',
                    type: 'line',
                    stack: '总量',
                    areaStyle: {},
                    data: [120, 132, 101, 134, 90, 230, 210]
                },
                {
                    name: '泰瑟枪',
                    type: 'line',
                    stack: '总量',
                    areaStyle: {},
                    data: [220, 182, 191, 234, 290, 330, 310]
                },
                {
                    name: '100分贝报警器',
                    type: 'line',
                    stack: '总量',
                    areaStyle: {},
                    data: [150, 232, 201, 154, 190, 330, 410]
                },
                {
                    name: '多功能牛仔裤d',
                    type: 'line',
                    stack: '总量',
                    areaStyle: {},
                    data: [320, 332, 301, 334, 390, 330, 320]
                },
                {
                    name: '内刃高跟鞋',
                    type: 'line',
                    stack: '总量',
                    label: {
                        normal: {
                            show: true,
                            position: 'top'
                        }
                    },
                    areaStyle: {},
                    data: [820, 932, 901, 934, 1290, 1330, 1320]
                }
            ]
        })
    },[])

    return (
        <div className={styles.home}>
            <Row className={styles.welcome} >
                    欢迎来到布里特安防公司 
                    <Link to="/bulletAdmin/order/checkOrder"> 看看商品卖的如何?</Link> 
            </Row>
            <Row gutter={gutter}>
                <Col span={12}>
                    <Card>
                        <div className={styles.chart} ref={cargo_chart_box}>

                        </div>
                    </Card>
                </Col>
                <Col span={12}>
                    <Card >
                        <div className={styles.chart} ref={consumer_chart_box}>

                        </div>
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col span={24}>
                    <Card>
                        <div className={styles.chart_width} ref={selling_chart_box}>

                        </div>
                    </Card>
                </Col>
            </Row>
        </div>
    );
};

export default Home;