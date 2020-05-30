import './reset.css';

// 引入字体
//引入字体图标
import { GlobalIconStyle } from '../assets/fonticon/iconfont'
import Footer from '@/components/Footer';
// import NavBar from '@/components/NavBar'
function BasicLayout(props) {
  return (
    <div>
      <GlobalIconStyle/>
      {/* <NavBar/> */}
      <div style={{minHeight:"700px"}}>
        {props.children}
      </div>
      <Footer/>
    </div>
  );
}

export default BasicLayout;
