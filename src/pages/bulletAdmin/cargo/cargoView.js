import React, { Component } from 'react';
import { Card,Table } from 'antd';
import axios from 'axios';
class CargoView extends Component {
    state={
        dataSource:null
    }
    request(){
        axios.get('/cargoView').then(res=>{
            console.log(res)
            let data= res.data.data;
            data.map((item)=>{
                item.key = item.Cargo_id;
                return item;
            })
            data.pop();
            this.setState({
                dataSource:res.data.data
            });
        })
    }
    componentDidMount(){
        this.request();
    }
    render() {
        const columns = [
        {
            title:"商品ID",
            dataIndex:"Cargo_id"
        },
        {
            title:"商品名称",
            dataIndex:"Cargo_name"
        },
        {
            title:"商品图片",
            dataIndex:"Cargo_img"
        },
        {
            title:'商品种类',
            dataIndex:'Cargo_type'
        },
        {
            title:'商品价格',
            dataIndex:'Cargo_price'
        },
        {
            title:'商品信息',
            dataIndex:'Cargo_info'
        }
    ]
        return (
            <div>
                <Card title="商品查看">
                    <Table 
                    columns={columns}
                    dataSource={this.state.dataSource}
                    >

                    </Table>
                </Card>
            </div>
        );
    }
}

export default CargoView;