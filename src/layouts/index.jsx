import styles from './index.less';
import './reset.css';
import {NavLink} from 'umi';
import { Mg1000 } from './style';
import logo from '../assets/logo.png';
function BasicLayout(props) {
  return (
    <div className={styles.normal}>
      <nav>
          <Mg1000>
              <img src={logo} alt="图片"/>
              <ul>
                <li><NavLink exact to='/'>首页</NavLink></li>
                <li><NavLink to='/contact'>联系我们</NavLink></li>
                <li><NavLink to='/shopping'>订购商品</NavLink></li>
              </ul>
          </Mg1000>
      </nav>
      {props.children}
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
                <p>国际模拟入侵比赛规划者</p>
                asdfasdasdfasd
            </div>

          </Mg1000>
        </div>
        <div className={styles._copyright}>
          &copy; by BF4 Proudly created with everyFriends
        </div>
      </footer>
    </div>
  );
}

export default BasicLayout;
