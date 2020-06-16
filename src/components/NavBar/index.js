import React from 'react';
import { Mg1000 } from '../../globalstyle';
import styles from './index.less';
import {NavLink} from 'umi';
import logo from '@/assets/img/logo.png';
const NavBar = (props) => {
    return (
        <nav className={props.theme?styles.hover:""}>
            <Mg1000>
                <img src={logo} alt="图片"/>
                <h3 className={styles.logo_text}>
                    <span>Bullet&nbsp;Security</span>
                    <p>布里特安防公司</p>
                </h3>
                <ul>
                    <li><NavLink exact to='/'>首页</NavLink></li>
                    <li><NavLink to='/contact'>联系我们</NavLink></li>
                    <li><NavLink to='/shopping'>订购商品</NavLink></li>
                    <li><NavLink to="/bulletAdmin/home">后台</NavLink></li>
                </ul>
            </Mg1000>
        </nav>
    );
};

export default NavBar;