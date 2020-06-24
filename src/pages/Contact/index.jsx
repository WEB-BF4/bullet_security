import React from 'react';
import Footer from '@/components/Footer';
import NavBar from '@/components/NavBar';

const Contact = (prop) => {
    return (
        <div>
            <NavBar theme={true}/>
                <div>
                    联系我们
                </div>
                <div>
                    一个背景加一个联系框
                </div>
            <Footer/>
        </div>
    );
};

export default Contact;