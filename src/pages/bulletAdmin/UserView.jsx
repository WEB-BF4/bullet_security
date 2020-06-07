import React, { Component } from 'react';
import {Card,Table} from 'antd';
import axios from 'axios';
class UserView extends Component {
    state={
        dataSource:''
    }
    componentWillMount(){
        axios.get('/userView').then(res=>{
            console.log(res.data.data)
            let dataSource = res.data.data;
            dataSource.pop();
            this.setState({
                dataSource
            })
        }).catch(err=>{
            console.log(err.message)
        })
    }
    render() {
        const columns = [
            {
                title:"用户ID",
                dataIndex:"User_id"
            },
            {
                title:"用户名",
                dataIndex:"User_username"
            },
            {
                title:"用户密码",
                dataIndex:"User_password"
            },
            {
                title:"用户购物车",
                dataIndex:'User_chart'
            },
            {
                title:'用户电话',
                dataIndex:'User_cellphone'
            },
            {
                title:'用户地址',
                dataIndex:'User_address'
            }
        ]
        return (
            <div>
                <Card title="用户信息" > 
                    <Table columns={columns}
                     dataSource={this.state.dataSource} 
                     rowKey={this.state.dataSource.User_id}>
                    </Table>
                </Card>
            </div>
        );
    }
}

export default UserView;