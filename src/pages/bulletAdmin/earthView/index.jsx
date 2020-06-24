import React,{useRef,useEffect} from 'react';
import earthPic from '@/assets/img/earth_pic.jpg';
import star from '@/assets/img/earth_starfield.jpg';
import earthHeight from '@/assets/img/earth_height.jpg';
import {Row,Col,Card,Form,Switch} from 'antd';
//引入echarts
import echarts from 'echarts';
import 'echarts-gl';
const FormItem = Form.Item
const EarthView = () => {
    const earth_dom = useRef();
    const fromItemLayout = {
        labelCol:{
            xs:24,
            sm:6
        },
        wrapperCol:{
            xs:24,
            sm:16
        }
    }
    let chart_width = 16;
    //这是我们的ComponentsDidMount
    useEffect(()=>{
        let earthChart = echarts.init(earth_dom.current,'dark');
        earthChart.setOption({
            backgroundColor: '#000',
            globe: {
                baseTexture:earthPic,
                heightTexture:earthHeight,
                displacementScale: 0.04,
                shading: 'realistic',
                environment:star,
                globeRadius:80,
                realisticMaterial: {
                    roughness: 0.9
                },
                postEffect: {
                    enable: true
                },
                light: {
                    main: {
                        intensity: 5,
                        shadow: true
                    }
                }
            }
        })
    },[])
    return (
        <div>
            <Row gutter={30} >
                <Col span={chart_width} >
                    <div style={{height:650,background:"#999"}} ref={earth_dom}></div>
                </Col>
                <Col span={24-chart_width} >
                    <Card title="全球订单查看">
                        <Form>
                            <FormItem label="订单路径" {...fromItemLayout}>
                                <Switch defaultChecked/>
                            </FormItem>
                            <FormItem label="地球显示" {...fromItemLayout}>
                                <Switch defaultChecked/>
                            </FormItem>
                        </Form>
                    </Card>
                </Col>
            </Row>
           
        </div>
    );
};

export default EarthView;