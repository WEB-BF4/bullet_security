import React from 'react';
import { Redirect } from 'umi';
import { Row,Col } from 'antd';
import AdminNavLeft from '../../components/bulletAdmin/adminNavLeft';
import style from './style.less';
function BasicLayout(props) {
  return (
    <div>
        <Redirect to='/bulletAdmin/cargo/addCargo'/>
        <Row className={style.container}>
          <Col span={3}  className={style.nav_left}>
            <AdminNavLeft/>
          </Col>
          <Col span={21} className={style.main}>
            <Row className={style.content}>
              {props.children}
            </Row>
          </Col>
        </Row>
    </div>
  );
}

export default BasicLayout;