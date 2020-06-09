import {Icon} from 'antd';
const menuList = [
    {
        title: <span><Icon type="bank"/>首页</span>,
        key: '/bulletAdmin/home'
    },
    {
        title: <span><Icon type="book"/>订单管理</span>,
        key: '/bulletAdmin/order',
        children: [
            {
                title: '订单查看',
                key: '/bulletAdmin/order/vieworder',

            },
            {
                title: '订单发货',
                key: '/bulletAdmin/order/checkOrder',
            }
        ]
    },
    {
        title:<span><Icon type="property-safety" />商品管理</span> ,
        key:'/bulletAdmin/cargo',
        children: [
            {
                title: '商品查看',
                key: '/bulletAdmin/cargo/cargoView',
            },
            {
                title: '商品增加',
                key: '/bulletAdmin/cargo/addCargo',
            },
            {
                title: '商品删除',
                key: '/bulletAdmin/cargo/deleteCargo',
            }
        ]
    },{
        title: <span><Icon type="idcard"/>用户信息查看</span>,
        key: '/bulletAdmin/userView',
    },
    {
        title: <span><Icon type="monitor" />后台管理员</span>,
        key: '/bulletAdmin/adminView'
    }
];
export default menuList;