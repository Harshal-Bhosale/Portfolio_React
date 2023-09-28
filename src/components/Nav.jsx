import React from 'react'
import LOGO from '../assets/img/hb.png'

const Nav = () => {
    return (
        <header className="header" id="header">
            <nav className="nav container">
                <div className='logo_wrapper'>
                    <a href="#home" ><img src={LOGO} alt='HB logo' className="hblogo"></img></a>
                    <a href="#home" className="nav_logo">Harshal</a>
                </div>
                <div className="nav_menu">
                    <ul className="nav_list">
                        <li className="nav_item">
                            <a href="#home" className="nav_link active-link">
                                <i className='bx bx-home-smile'></i>
                            </a>
                        </li>
                        <li className="nav_item">
                            <a href="#about" className="nav_link">
                                <i className='bx bx-user'></i>
                            </a>
                        </li>
                        <li className="nav_item">
                            <a href="#skills" className="nav_link">
                                <i className='bx bx-book'></i>
                            </a>
                        </li>
                        <li className="nav_item">
                            <a href="#work" className="nav_link">
                                <i className='bx bx-briefcase'></i>
                            </a>
                        </li>
                        <li className="nav_item">
                            <a href="#contact" className="nav_link">
                                <i className='bx bx-message-detail'></i>
                            </a>
                        </li>

                    </ul>
                </div>

                {/* <!-- theme change buttom --> */}
                <i className='bx bx-moon change-theme bx-spin-hover' id="theme-button"></i>
            </nav>
        </header>
    )
}

export default Nav