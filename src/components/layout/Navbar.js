import style from './Navbar.module.css'
import logo from '../../img/logo-rodrigo.jpg'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Link, animateScroll as scroll } from "react-scroll";

import Home from '../pages/Home'
import Galeria from '../pages/Galeria'
import Planos from '../pages/Planos'
import QuemSomos from '../pages/QuemSomos'
import MenuMobile from './MeuMobile';




const Navbar = ({ id }) => {

    return (
        <Router>
            <header id={id}>
                <div className={style.container}>
                    <div className={style.menu}>
                        <div className={style.img}>
                            <img src={logo} alt="Logo marca" onClick={scroll.scrollToTop} />
                        </div>

                        <div className={style.menuHeader}>
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

                    < MenuMobile />

                </div>
            </header>

            < Routes>
                < Route path='/' element={< Home />} />
                < Route path='/galeria' element={< Galeria />} />
                < Route path='/planos' element={< Planos />} />
                < Route path='/quemsomos' element={< QuemSomos />} />
            </Routes>
        </Router>
    );
};

export default Navbar;