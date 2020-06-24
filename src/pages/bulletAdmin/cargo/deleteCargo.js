import React, { Component } from 'react';
import {Card,Table,Button,Row,Modal,Icon, message} from 'antd';
import axios from 'axios';
class CeleteCargo extends Component {
    state = {
        dataSource:null,
        selectedRowKeys:null,
        selectedRows:null,
    }
    request(){
        axios.get('/cargoView').then(res=>{
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
    handleDelete(){
        //什么都不选肯定是不能删的~
        if (!(this.state.selectedRowKeys)) {
            message.info('选择你需要删除的货物');
            return false;
        };
        //选了的话就可以啦~
        let id = this.state.selectedRows[0].Cargo_id;
        Modal.confirm({
            title:"注意 此操作不可逆",
            content:`您确定要删${id}商品吗`,
            onOk:()=>{
                axios.get('/cargoDelete',{params:{
                    "cargo.Cargo_id":id
                }}).then(res=>{
                    if(res.data.status === "success"){
                        message.success("删完啦")
                    }else{
                        message.warning("有问题");
                    }
                    this.request();
                })
            }
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
                <Card title={<span>商品删除 <Icon type="scissor"/></span>}>
                    <Table
                     columns={columns}
                     dataSource={this.state.dataSource}
                     rowSelection={rowSelection}
                     >

                    </Table>
                    <Row>
                        <Button 
                        type="danger"
                        style={{margin:"10px 24px",float:"right"}}
                        onClick={()=>{this.handleDelete()}}>
                         商品删除</Button>
                    </Row>
                </Card>
               
            </div>
        );
    }
}

export default CeleteCargo;