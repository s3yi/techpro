import React from 'react';
import { BackTop } from 'antd';

function AppFooter() {
    return(
    <div className="container-fluid">
        <div className="footer">
            <div className='logo'>
                <i className='fas fa-bolt'></i>
                <a href="https://www.google.com">Tech</a>
            </div>
        <ul className="socials">
            <li><a href="https://facebook.com"><i className="fab fa-facebook-f"></i></a></li>
            <li><a href="https://twitter.com"><i className="fab fa-twitter"></i></a></li>
            <li><a href="https://linkedin.com"><i className="fab fa-linkedin-in"></i></a></li>
            <li><a href="https://www.instagram.com"><i className="fab fa-instagram"></i></a></li>
        </ul>
        <div className="copyright">Copyright &copy; 2026 Tech </div>
        <BackTop>
            <div className="goTop"><i class="fas fa-arrow-circle-up"></i></div>
        </BackTop>
        </div>
    </div>
    );
}

export default AppFooter;