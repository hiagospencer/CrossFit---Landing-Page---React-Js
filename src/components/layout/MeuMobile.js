import { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import { Link, animateScroll as scroll } from "react-scroll";
import style from './MenuMobile.module.css';

const MenuMobile = () => {

    return (
        <div id='menuMobile' className={style.menuMobile} >
            < FaBars />
            <div className={style.itensMenu}>
                <nav>
                    <ul>
                        <li><Link
                            onClick={scroll.scrollToTop}
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}>Home</Link></li>

                        <li><Link to='quemsomos'
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={600}>Quem Somos</Link></li>

                        <li><Link to='planos'
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}>Planos</Link></li>

                        <li><Link to='galeria'
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                        >Galeria</Link></li>

                        <li><Link to='contato'
                            spy={true}
                            smooth={true}
                            offset={-200}
                            duration={600}>Contato</Link></li>
                    </ul>
                </nav>
            </div>
        </div>
    );
}

export default MenuMobile;