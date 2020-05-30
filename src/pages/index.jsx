import { Mg1000 } from '../globalstyle';
import NavBar from '../components/NavBar';

import styles from './index.less';
import animate from '../assets/animate.min.css';
import axios from 'axios';
import { Link } from 'dva/router';
import { useEffect } from 'react';
// import axios from 'axios';
let nitai = ()=>{
  if(document.documentElement.scrollTop>500){
    let nita = document.getElementById('nitai');
    //把隐藏的div弄显示
    nita.classList.remove(styles.hide);
    //执行动画
    nita.classList.add(animate.slideInLeft);
  }
}

export default function() {

  useEffect(()=>{
    window.addEventListener('scroll',nitai)
    axios.get('/xjbx').then(res=>{
      console.log(res);
    })
  },[])
  useEffect(()=>{return ()=>{
      window.removeEventListener('scroll',nitai)
  }})
  return (
    <div >
      {/* banner 界面 轮播图 */}
      <div className={`${styles.banner} ${styles.banner}`}>
          <NavBar/>
          <Mg1000> 
                <h1 className={styles.banner_h1}>布里特安防公司</h1>
                <h3 className={`${animate.animated} ${animate.slideInLeft} ${styles.banner_h3}`}>您的安全 就是我们的未来</h3>
          </Mg1000>
      </div>
      {/* 红色的介绍部分 */}
      <div className={styles.redintro} >
          <Mg1000 className={`${animate.animated} ${animate.slideInRight}`}>
              <div className={styles.infobox}>
                <strong>医疗防护</strong>
                <p>极大改善致命疾病和损伤治疗效果的突破性应用纳米生物学领域，致力于更好地在前线治疗受到致命伤的病员
                  <Link to='/contact'>了解更多</Link>
                  </p>
              </div>
              <div className={styles.infobox}>
                <strong>防护设备</strong>
                <p>建造系列全新的城市,通过尖端的高强度光束科技，基础设施和生活区域用来接纳那些无家可归的人民
                  <Link to='/shopping/shield'>了解更多</Link>
                  </p>
                  
              </div>
              <div className={styles.infobox}>
                <strong>警卫</strong>
                <p>OR15学习许多关于这个世界,在积极乐观的影响以及荣誉和职责感的引导下，将不惜一切守护努巴尼
                  <Link to='/contact'>了解更多</Link>
                  </p>
              </div>
          </Mg1000>
        </div>
      {/* 拟态框框介绍部分*/}
      <div className={styles.intro} >
          <Mg1000 >
            <h1>就让我们来保护无辜的人民</h1>
            <h2>保护你们的安全 是我的首要职责</h2>
            <div id="nitai" className={`${styles.hide} ${animate.animated}`}>
              <div className={styles.introbox}>
                <i className='iconfont'>&#xe614;</i>
                <h3>屏障立场</h3>
                <p>生成一面大型能量屏障，在被摧毁之前可以吸收可观的伤害。
                可以使用这块屏障保护自己和队友，但在屏障力场持续期间，
                他无法进行攻击。
                </p>
              </div>
              <div className={styles.introbox}>
                <i className='iconfont'>&#xe67d;</i>
                <h3>堡垒</h3>
                <p>当它遭遇到危险时，其内部最核心的战斗程序依然会被激活，将其转变成一台足以消灭任何威胁的战斗个体
                </p>
              </div>
              <div className={styles.introbox}>
                <i className='iconfont'>&#xe65a;</i>
                <h3>护盾发生器</h3>
                <p>屏障发射器可以生成一个气泡状力场，吸收伤害直到被摧毁。力场内的队友可以向外还击
                </p>
              </div>
            </div>

          </Mg1000>
      </div>

      <div className={styles.twoside}>
          <div className={styles.left}></div>
          <div className={styles.right}></div>
      </div>
    </div>
  );
}
