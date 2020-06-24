import React from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
const Contact = () => {
  return (
    <div>
      <NavBar theme={true}/>
        大哥，我觉得联系我们这部分可以做成静态组件
      <Footer/>
    </div>
  );
};

export default Contact;