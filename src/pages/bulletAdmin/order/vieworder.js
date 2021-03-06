import React,{useState,useEffect} from 'react';
import { Card,Table,Icon,Badge}from 'antd';
import axios from 'axios';
const Vieworder = () => {
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
    let [orderData,setOrderData] = useState();
    let request = ()=>{
        axios.get('/orderView').then(res=>{
            console.log(res)
            let data= res.data.data;
            data.map((item)=>{
                item.key = item.Order_id;
                return item;
            })
            data.pop();
            setOrderData(res.data.data);
        })
    }
    useEffect(()=>{
        request();
    },[])
    return (
        <div>
            <Card title={<span>订单查看 <Icon type="account-book"/></span>}>
                <Table
                    columns={columns}
                    dataSource={orderData}
                    >
                </Table>
            </Card>
        </div>
    );
};

export default Vieworder;