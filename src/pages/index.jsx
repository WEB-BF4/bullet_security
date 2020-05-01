import { Mg1000 } from '../globalstyle';
import styles from './index.less';

export default function() {
  return (
    <div>
      <div className={styles.banner}>
          <Mg1000> 
                <h1>布里特安防公司</h1>
                <h3>您的安全 就是我们的未来</h3>
          </Mg1000>
      </div>
      <div className={styles.intro}>
          <Mg1000>
            <h1>致力于为每一位用户提供最优质的安保产品</h1>
            <p>阿巴阿巴阿巴阿巴阿巴阿巴阿巴
            阿巴阿巴阿巴阿巴阿巴阿巴阿巴
              阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴</p>
            <div className={styles.introbox}>
              <i className='iconfont'>&#xe614;</i>
              <h3>坚</h3>
              <p>阿巴阿巴阿巴阿巴阿巴阿巴阿巴
              阿巴阿巴阿巴阿巴阿巴阿巴阿巴
              阿巴阿巴阿巴阿巴阿巴阿巴阿巴
              </p>
            </div>
            <div className={styles.introbox}>
              <i className='iconfont'>&#xe67d;</i>
              <h3>稳</h3>
              <p>阿巴阿巴阿巴阿巴阿巴阿巴阿巴
              阿巴阿巴阿巴阿巴阿巴阿巴阿巴
              阿巴阿巴阿巴阿巴阿巴阿巴阿巴
              </p>
            </div>
            <div className={styles.introbox}>
              <i className='iconfont'>&#xe65a;</i>
              <h3>固</h3>
              <p>阿巴阿巴阿巴阿巴阿巴阿巴阿巴
              阿巴阿巴阿巴阿巴阿巴阿巴阿巴
              阿巴阿巴阿巴阿巴阿巴阿巴阿巴
              </p>
            </div>
          </Mg1000>
      </div>
    </div>
  );
}
