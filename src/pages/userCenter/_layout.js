import React, { Component } from 'react';
import { Link } from 'umi';
class BaseLaylout extends Component {
    render() {
        return (
            <div>
                <p>用户的侧边导航栏哦</p>
                <Link to="/usercenter/myorder">我的订单</Link>
                <Link to="/usercenter/myinfo">我的订单</Link>
                {this.props.children}
            </div>
        );
    }
}

export default BaseLaylout;