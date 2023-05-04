import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock } from 'react-icons/fa';

import style from './Footer.module.css'
const Footer = ({id}) => {
    return (
        <div className={style.footer} id={id}>
            <div className={style.container}>
                <div className={style.itensFooter}>
                    <div className={style.item}>
                        <spam>< FaPhone /></spam>
                        <h2>LIGUE PARA NÓS</h2>
                        <p>(84) 98713-7129</p>
                    </div>

                    <div className={style.item}>
                        <spam>< FaEnvelope /></spam>
                        <h2>ENVIE UM EMAIL</h2>
                        <p>rlcrosstraining@gmail.com</p>
                    </div>

                    <div className={style.item}>
                        <spam>< FaMapMarkerAlt /></spam>
                        <h2>LOCALIZAÇÃO</h2>
                        <p>Rua: Mestre Silvério Barreto</p>
                        <p> Número: 243</p>
                        <p> Bairro: Centro</p>
                        <p> Cidade: Areia Branca/RN</p>
                        <p> CEP: 59655-000</p>
                    </div>

                    <div className={style.item}>
                        <spam>< FaClock /></spam>
                        <h2>HORÁRIOS</h2>
                        <p>Seg - Sexta</p>
                        <p>6h às 9h</p>
                        <p>12:00h às 13:00h</p>
                        <p>15:00h às 20:00h</p>

                    </div>
                </div>
            </div>

            <div className={style.creditos}>
                <p>&copy; 2023 Feito Por <a href="https://www.instagram.com/hiaguinhospencer/" target="_blank">Hiago Souza</a></p>
            </div>
        </div>
    );
};

export default Footer;
