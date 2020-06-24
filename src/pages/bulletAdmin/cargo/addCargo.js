import React, { Component } from 'react';
import {Card,Form,Icon,Input,Button,message,Select,Upload} from 'antd';
import { withRouter } from 'umi';
import axios from 'axios';
const FormItem = Form.Item;
const Option = Select.Option;
const TextArea = Input.TextArea;
const formItemLatout = {
    labelCol:{
        xs:24,
        sm:4
    },
    wrapperCol:{
        xs:24,
        sm:16
    }
}
const offsetLayout = {
    wrapperCol:{
        xs:24,
        sm:{
            span:2,
            offset:19
        }
    }
}
class AddCargo extends Component {
    state={
        imageUrl:null,
        loading:false
    }
    getBase64 = (img, callback) =>{
        const reader = new FileReader();
        reader.addEventListener('load', () => callback(reader.result));
        reader.readAsDataURL(img);
    }
    handleChange = info => {
        this.getBase64(info.file.originFileObj, imageUrl =>
            this.setState({
                imageUrl
            }),
        );
    }
    handleSubmit = ()=>{
        let useInfo = this.props.form.getFieldsValue();

        this.props.form.validateFields((err,values)=>{
            if(!err){
                this.setState({
                    loading:true
                })
                message.info(`添加中，请稍等`);
                axios.get("/cargoAdd",{params:{
                    "cargo.Cargo_id":useInfo.Cargo_ID,
                    "cargo.Cargo_name":useInfo.Cargo_name,
                    "cargo.Cargo_img":"img/"+useInfo.Cargo_ID+"/.jpg",
                    "cargo.Cargo_type":useInfo.Cargo_type,
                    "cargo.Cargo_price":useInfo.Cargo_price,
                    "cargo.Cargo_info":useInfo.Cargo_info
                }}).then(res=>{
                    message.success(`商品成功添加`);
                    this.props.history.push('/bulletAdmin/cargo/cargoView');
                    this.setState({
                        loading:false
                    })
                    
                }).catch(err=>{
                    message.warning('请求没出来，是不是数据库有问题');
                    this.setState({
                        loading:false
                    })
                })
            }
        })
    }
    componentDidMount(){
        console.log(this.props);
    }
    render() {
        const { getFieldDecorator } =  this.props.form;
        // let useInfo = this.props.form.getFieldsValue(); 
        let code =""+(Date.parse(new Date())/1000);
        return (
            <div>
               <Card title="商品添加模块">
                    <Form >
                        <FormItem label="商品Id" {...formItemLatout }>
                           {
                                getFieldDecorator('Cargo_ID',{
                                    initialValue:"C"+code.substr(code.length-9),
                                    rules:[
                                        {
                                            required:true,
                                            message:'Id不能为空'
                                        }
                                    ]
                                })(
                                    <Input disabled prefix={<Icon type="user"/>} type="text"/>
                                )
                           }
                        </FormItem>
                        <FormItem label="商品名称" {...formItemLatout }>
                           {getFieldDecorator('Cargo_name',{
                                rules:[
                                    {
                                        required:true,
                                        message:'商品名不能为空'
                                    }
                                ]
                           })(
                                <Input prefix={<Icon type="user"/>} type="text" placeholder="商品名称"/>
                           )}
                        </FormItem>
                        <FormItem label="商品图标" {...formItemLatout }>
                           {getFieldDecorator('Cargo_img',{
                               initialValue:"img/123.jpg",
                                rules:[
                                    {
                                        required:true,
                                        message:'商品图表不为空'
                                    }
                                ]
                           })(
                                <Upload
                                            listType="picture-card"
                                            showUploadList={false}
                                            onChange={this.handleChange}

                                >
                                    {this.state.imageUrl?<img style={{width:"100%"}} src={this.state.imageUrl} alt=""/>:<Icon type="plus"/>}
                                </Upload>
                           )}
                        </FormItem>
                        <FormItem label="商品类别" {...formItemLatout }>
                           {getFieldDecorator('Cargo_type',{
                               initialValue:"Weapon",
                                rules:[
                                    {
                                        required:true,
                                        message:'商品名不能为空'
                                    },
                                    {
                                        pattern:/[^\u4E00-\u9FA5]/i,
                                        message:"不能出现中文字符"
                                    }
                                ]
                           })(
                               <Select>
                                   <Option value="Weapon">武器</Option>
                                   <Option value="Election">电子设备</Option>
                                   <Option value="Supply">补给品</Option>
                               </Select>
                           )}
                        </FormItem>
                        <FormItem label="商品价格" {...formItemLatout }>
                           {getFieldDecorator('Cargo_price',{
                               initialValue:0.0,
                                rules:[
                                    {
                                        required:true,
                                        message:'商品价格不能为空'
                                    }
                                ]
                           })(
                                <Input prefix={<Icon type="pay-circle" />} type="number"/>
                           )}
                        </FormItem>
                        <FormItem label="商品简介" {...formItemLatout }>
                           {getFieldDecorator('Cargo_info',{
                               initialValue:"",
                                rules:[
                                    {
                                        required:true,
                                        message:'必须得有商品简介'
                                    },
                                    {
                                        pattern:/[^\u4E00-\u9FA5]/i,
                                        message:"不能出现中文字符"
                                    },
                                    {
                                        pattern:/[^\r|\n|\s]/i,
                                        message:"空格回车"
                                    }
                                ]
                           })(
                                <TextArea prefix={<Icon type="user"/>}/>
                           )}
                        </FormItem>
                        <FormItem {...offsetLayout}>
                           <Button type="primary" onClick={this.handleSubmit} loading={this.state.loading}>添加商品</Button>
                        </FormItem>
                    </Form>
               </Card>
            </div>
        );
    }
}

export default Form.create()(withRouter(AddCargo));