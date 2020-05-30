import React from 'react';
import { Mg1000 } from '../../globalstyle';
import styles from './index.less';
const Footer = () => {
    return (
        <footer>
            <div className={styles._contact}>
          <Mg1000 className={styles.flex}>
              <div className={styles.infobox}>
                <strong>联系电话</strong>
                <p>Tel: 123-456-7890 | Fax: 123-456-7890</p>
              </div>
              <div className={styles.infobox}>
                <strong>公司地址</strong>
                <p>秦皇岛科师开发园北区4号</p>
              </div>
              <div className={styles.infobox}>
                <strong>营业时间</strong>
                <p>Mon - Fri: 7am - 10pm</p>
              </div>
          </Mg1000>
        </div>
            <div className={styles._info}>
          <Mg1000>
            <div className={styles.infobox}>
                <strong>全国安保企业前三十强</strong>
                <p>国际模拟入侵比赛规划者</p>
                <p>暂用型医疗用品创始人</p>
                <p>"金刚"防爆盾研发人员</p>
            </div>
            <div className={styles.infobox}>
                <strong>优质服务提供者</strong>
                <ul>
                  <li>安全性极高的安保产品</li>
                  <li>口碑极佳的售后服务</li>
                  <li>室内入侵次数降低90%</li>
                </ul>
            </div>
            <div className={styles.infobox}>
                <strong>优秀的售后</strong>
                <p>国际模拟入侵比赛规划者</p>
                <p>战术防御比赛规划者</p>
            </div>

          </Mg1000>
        </div>
            <div className={styles._copyright}>
          &copy; by BF4 Proudly created with everyFriends
        </div>
        </footer>
    );
};

export default Footer;