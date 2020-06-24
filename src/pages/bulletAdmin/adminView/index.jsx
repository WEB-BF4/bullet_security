import React, { Component } from 'react';
import {Card,Table, message} from 'antd';
import axios from 'axios';
class AdminView extends Component {
    state={
        dataSource:''
    }
    componentWillMount(){
        axios.get('/powerView').then(res=>{
            console.log(res.data.data)
            let dataSource = res.data.data;
            dataSource.pop();
            this.setState({
                dataSource
            })
        }).catch(err=>{
            message.warning('请求没出来，是不是数据库有问题');
        })
    }
    render() {
        let {dataSource}  = this.state;
        const columns = [
            {
                title:"管理员ID",
                dataIndex:"Power_id"
            },
            {
                title:"管理员名称",
                dataIndex:"Power_adminName"
            },
            {
                title:"管理员密码",
                dataIndex:"Power_password"
            },
            {
                title:"管理员状态",
                dataIndex:'Power_state'
            }
        ]
        return (
            <div>
                <Card title={`管理员信息 当前管理员有：${dataSource.length}个`} loading={!(dataSource)} > 
                    <Table columns={columns} dataSource={dataSource} rowKey={dataSource.User_id}>

                    </Table>
                </Card>
            </div>
        );
    }
}

export default AdminView;