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
          <Mg1000></Mg1000>
      </div>
    </div>
  );
}
