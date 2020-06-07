import { Mg1000 } from '../globalstyle';
import NavBar from '../components/NavBar';
import Footer from '@/components/Footer';

import styles from './index.less';
import animate from '../assets/animate.min.css';

import axios from 'axios';
import { Link } from 'dva/router';
import { useEffect } from 'react';


import ser1 from '@/assets/img/ser1.png';
import ser2 from '@/assets/img/ser2.png';
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
    <div className={styles.shouye}>
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
      <div className={styles.whiteintro} >
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
          <div className={styles.white}>
              <img className={styles.leftimg} src={ser1} alt=""></img>
          </div>
          <div className={styles.green}>
              <div>
              <h3 className={styles.title}>北京维思来科技有限公司</h3>
              <h4 className={styles.subtitle}>概念/Bullet Security/</h4>
                <p>wiselife 智慧生活的美好在于它是你最放松、最私密的空间。每一个家都有它的光线、
                  气味、形状、温度，每一个家都是独一无二的。家之美，或热情活力，或恬静沉稳，找到最舒适的家具生活状态，
                  便是我们希望为你实现的小确幸。</p>
                <p>北京维思来科技有限公司，成立于2016年，致力于为客户提供兼具美学与科技的智能家具，立志成为智能家具行业的开拓者。
                  公司旗下营销品牌：37度智能家具，目前主要有智慧家庭、智慧酒店、智慧办公、智慧亲子等产品系列</p>
              </div>
          </div>
      </div>
      <div className={`${styles.twoside} ${styles.blue}`}>
          <div className={styles.green}>
            <div className={styles.f_white}>
                <h3 className={styles.title}>北京维思来科技有限公司</h3>
                <h4 className={styles.subtitle}>理念/ Concept /</h4>
                  <p >我们相信优质的家居产品，首要的是拥有美观的外表。在产品的造型设计、
                    色彩搭配、材质选择上，我们都进行了精心的考量，最终呈现出简洁优雅的
                    科技家具智能产品，为你的家增添格调</p>
                  <p >在美观的基础上，智能家具更致力于为你的家居注入智能的灵魂
                    ——我们希望它在具备先进智能技术的同时，能不着痕迹地与整个家居环境融为一体</p>
                  <p>所有的智能元素都巧妙地隐藏于设计中，创造更方便的使用体验。我们觉得，智能技术在
                    现代家居生活中扮演的是一个低调可靠的辅助角色，而作为使用者的你，才是家的主人。</p>
                </div>
            </div>
          <div className={styles.white}>
              <img className={styles.leftimg} src={ser2} alt=""></img>
          </div>   
      </div>
      <Footer/>
    </div>
  );
}
