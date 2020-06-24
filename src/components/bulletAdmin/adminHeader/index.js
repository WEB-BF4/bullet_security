import React from 'react';
import {Row,Col} from 'antd';
import styles from './style.less';
const AdminHeader = () => {
    return (
        <div className={styles.header}>
            <Row className={styles.header_top}>
                <Col span={24}>
                    <span>欢迎,{"指挥官"}</span>
                    <a href="/#/">退出</a>
                </Col>
            </Row>
        </div>
    );
};

export default AdminHeader;