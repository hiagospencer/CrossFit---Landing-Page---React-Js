import { FaBars } from 'react-icons/fa';
import { Link, animateScroll as scroll } from "react-scroll";
import {useState} from 'react'

const MenuMobile = () => {

    const [active, setActive] = useState(false)

    const toggle = () => {
        setActive(!active)
        console.log(active)
    }

    const menuClose = () => {
       setActive(false)
    }


    return (
        <div id='menuMobile' className="menuMobile" onClick={toggle}>
            < FaBars />
            <div className={active ? "itensMenu" : "hidden"}>
                <nav>
                    <ul>
                        <li><Link
                            onClick={scroll.scrollToTop}
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}><span onClick={menuClose}>Home</span></Link></li>

                        <li><Link to='quemsomos'
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={600}><span onClick={menuClose}>Quem Somos</span></Link></li>

                        <li><Link to='planos'
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}><span onClick={menuClose}>Planos</span></Link></li>

                        <li><Link to='galeria'
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                        ><span onClick={menuClose}>Galeria</span></Link></li>

                        <li><Link to='contato'
                            spy={true}
                            smooth={true}
                            offset={-200}
                            duration={600}><span onClick={menuClose}>Contato</span></Link></li>
                    </ul>
                </nav>
            </div>
        </div>
    );
}

export default MenuMobile;
