import style from './Galeria.module.css';
import { Navigation, Pagination, A11y, Autoplay, EffectFade, } from 'swiper';
import { FadeIn} from 'react-slide-fade-in'
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import 'swiper/css/effect-fade';

import foto1 from '../../img/crossfit1.webp'
import foto4 from '../../img/crossfit4.webp'
import foto5 from '../../img/crossfit5.jpeg'
import foto6 from '../../img/crossfit6.jpeg'
import foto7 from '../../img/crossfit7.jpeg'
import foto8 from '../../img/crossfit8.jpeg'
import foto9 from '../../img/crossfit9.jpeg'

const Galeria = ({id}) => {

  return (
    <div className={style.galeria} id={id}>
      <div className={style.container} >
        <div className={style.slider}>
          <h1>Galeria de Fotos</h1>

          < FadeIn
              from="left"
              positionOffset={400}
              triggerOffset={200}
              delayInMilliseconds={600}
              durationInMilliseconds={2000}
              >
              <p className={style.content}>
                Que tal conhecer por dentro tudo que oferecemos na RLCROSS TRANING,
                a sua academia e centro de treinamento em Areia Branca.
                Aqui você pode mais. Veja abaixo as nossas imagens</p>
          </FadeIn>

          <div className={style.img}>
            <Swiper
              // install Swiper modules
              modules={[Navigation, Pagination, A11y, Autoplay, EffectFade]}
              spaceBetween={50}
              slidesPerView={1}
              navigation
              fadeEffect={{effect: 'fade', crossFade: true}}
              autoplay={{ delay: 4000 }}
              pagination={{ clickable: true }}
              onSwiper={(swiper) => console.log(swiper)}
              onSlideChange={() => console.log('slide change')}
            >
              <SwiperSlide><img src={foto1} alt="" /></SwiperSlide>
              <SwiperSlide><img src={foto4} alt="" /></SwiperSlide>
              <SwiperSlide><img src={foto5} alt="" /></SwiperSlide>
              <SwiperSlide><img src={foto6} alt="" /></SwiperSlide>
              <SwiperSlide><img src={foto7} alt="" /></SwiperSlide>
              <SwiperSlide><img src={foto8} alt="" /></SwiperSlide>
              <SwiperSlide><img src={foto9} alt="" /></SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Galeria;
