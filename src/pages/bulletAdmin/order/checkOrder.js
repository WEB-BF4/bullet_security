import React, { Component } from 'react';
import {Card,Table, Button, Row, Modal, message,Badge} from 'antd';
import axios from 'axios';

class CheckOrder extends Component {
    state={
        orderData:null,
        selectedRowKeys:null,
        selectedRows:null
    }
    request(){
        axios.get('/orderView').then(res=>{
            let data= res.data.data;
            data.map((item)=>{
                item.key = item.Order_id;
                return item;
            })
            data.pop();
            this.setState({
                orderData:data,
            });
        })
    }
    check(){
        console.log(this.state)
        let id = this.state.selectedRows[0].Order_id;
        Modal.confirm({
            title:"确认发货",
            content:`您确定让订单${id}发货吗？`,
            onOk:()=>{
                axios.get('/orderCheck',{params:{
                    "orders.Order_id":id,
                    "orders.isFinished":1
                }}).then(res=>{
                    if(res.data.status === "success"){
                        this.request();
                        message.success("订单修改成功");
                    }else{
                        message.error(res.data.message);
                    }
                })
            }
        })
    }
    componentDidMount() {
        this.request();
    }
    
    render() {
        const columns = [
            {
                title:"订单ID",
                dataIndex:"Order_id"
            },
            {
                title:"用户ID",
                dataIndex:"User_id"
            },
            {
                title:"货物ID",
                dataIndex:"Cargo_id"
            },
            {
                title:"货物名",
                dataIndex:'Cargo_name'
            },
            {
                title:'用户电话',
                dataIndex:'Cargo_price'
            },
            {
                title:'用户地址',
                dataIndex:'User_address'
            },
            {
                title:'下单时间',
                dataIndex:'Order_date'
            },
            {
                title:'购买数量',
                dataIndex:'Order_num'
            },
            {
                title:'订单是否完成',
                dataIndex:'isFinished',
                render:(value)=>{
                    if(value === '1'){
                        return   <Badge color="green" text="已完成" />
                    }else{
                        return  <Badge color="red" text="未完成" />
                    }
                }
            }
        ]
        const rowSelection = {
            type:"radio",
            selectedRowKeys:this.state.selectedRowKeys,
            onChange:(selectedRowKeys,selectedRows)=>{
                this.setState({
                    selectedRowKeys,
                    selectedRows
                })
            }
        }
        return (
            <div>             
                <Row>
                    <Card title={`用户订单发货`} loading={!(this.state.orderData)}> 
                        <Row>
                            <Button styles={{marginBottom:"200px"}} onClick={()=>{this.check()}}>发货</Button>
                        </Row>
                        <Row>
                            <Table
                            columns={columns}
                            dataSource={this.state.orderData}
                            rowSelection={rowSelection}
                        >
                            </Table>
                        </Row>
                     
                    </Card>
                </Row>
                
                
            </div>
        );
    }
}

export default CheckOrder;