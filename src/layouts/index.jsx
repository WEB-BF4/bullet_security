import styles from './index.less';
import './reset.css';
import {NavLink} from 'umi';
import { Mg1000 } from './style';``

function BasicLayout(props) {
  return (
    <div className={styles.normal}>
      <nav>
          <Mg1000>
              <ul>
                <li><NavLink exact to='/'>首页</NavLink></li>
                <li><NavLink to='/contact'>联系我们</NavLink></li>
                <li><NavLink to='/shopping'>订购商品</NavLink></li>
              </ul>
          </Mg1000>
      </nav>
      {props.children}
      <footer>
        <div className={styles._contact}></div>
        <div className={styles._info}>
        </div>
        <div className={styles.copyright}>
          &copy; by BF4 Proudly created with everyFriends
        </div>
      </footer>
    </div>
  );
}

export default BasicLayout;
