import style from './Home.module.css'
import iconWhats from '../../img/whatsapp.webp'


const Home = () => {
    return (
        <div className={style.content}>
             <div className={style.container}>
                <div className={style.texto}>
                    <h1>DESCUBRA</h1>
                    <h1>SUA FORÇA</h1>
                    <p>AQUI NA <b><i>RLCROSS TRANING</i></b></p>
                </div>
                
             </div>
            <div className={style.whatsapp}><a href="https://wa.me/5584987137129" target="_blank">< img src={iconWhats} /></a></div>
        </div>
    );
};

export default Home;