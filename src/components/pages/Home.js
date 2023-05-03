import style from './Home.module.css';

import { FadeIn } from 'react-slide-fade-in';

import iconWhats from '../../img/whatsapp.webp';


const Home = () => {
    return (
        <div className={style.content}>

             <div className={style.container}>
                <div className={style.texto}>

                    < FadeIn
                    from="top"
                    positionOffset={400}
                    triggerOffset={200}
                    delayInMilliseconds={500}
                    ><h1>DESCUBRA</h1>
                    </FadeIn>

                    < FadeIn
                    from="left"
                    positionOffset={400}
                    triggerOffset={200}
                    delayInMilliseconds={700}
                    ><h1>SUA FORÇA</h1>
                    </FadeIn>

                    < FadeIn
                    from="right"
                    positionOffset={400}
                    triggerOffset={200}
                    delayInMilliseconds={800}
                    ><p>AQUI NA <b><i>RLCROSS TRANING</i></b></p>
                    </FadeIn>

                 </div>
             </div>
            <div className={style.whatsapp}><a href="https://wa.me/5584987137129" target="_blank" rel="noreferrer">< img src={iconWhats} /></a></div>
        </div>
    );
};

export default Home;
