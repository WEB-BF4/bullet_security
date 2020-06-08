import React from 'react';
import styles from './style.less';
import { Link } from 'umi';
const Home = () => {
    return (
        <div className={styles.home}>
            <p>
                欢迎来到布里特安防公司<br/>
                <Link to="/bulletAdmin/cargo/view">看看商品卖的如何</Link>
            </p>
        </div>
    );
};

export default Home;