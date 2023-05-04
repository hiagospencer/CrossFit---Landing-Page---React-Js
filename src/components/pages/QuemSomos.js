import { FadeIn} from 'react-slide-fade-in'

import style from './QuemSomos.module.css'

import fachada from '../../img/frente.jpeg'
import rodrigo from '../../img/rodrigo.jpeg'


const QuemSomos = ({ id }) => {

    return (
        <div className={style.boxQuemSomos} id={id}>
            <h1>Quem Somos</h1>
            <div className={style.quemsomos}>
                <div className={style.img}>
                    < FadeIn
                    from="left"
                    positionOffset={400}
                    triggerOffset={300}
                    delayInMilliseconds={600}
                    >
                        <img src={rodrigo} alt="Imagem de Rodrigo Leonardo" />
                    </FadeIn>
                </div>

                <div className={style.info}>
                    < FadeIn
                        from="right"
                        positionOffset={0}
                        triggerOffset={0}
                        delayInMilliseconds={600}
                        >
                            <h1 className="texto"> Rodrigo Leonardo de Góis Souza</h1>

                            <p>
                                Graduado em Educação Física licenciatura, bacharelado, Medicina chinesa,
                                massoterapeuta, licença da CBF e Graduando Fisioterapia 5/10.
                            </p>

                            <p>
                                Somos um centro de treinamento que conta com estrutura moderna e aparelhos de ultima geração,
                                com aulas ministrada por <b>Rodrigo Leonardo</b> um profissional qualificado.
                                Para quem busca saúde e longevidade através dos esportes, a RLCROSS TRANING é o lugar certo;
                                Aqui tudo foi pensado com carinho para atender a sua vontade. porque saúde é primordial!
                            </p>
                    </FadeIn>
                </div>
                <br />

                <div className={style.info}>
                    < FadeIn
                        from="bottom"
                        positionOffset={400}
                        triggerOffset={200}
                        delayInMilliseconds={200}
                        >
                            <p>
                                Como um dos primeiros centros de treinamentos especializados em CrossFit de Areia Branca,
                                a RLCROSS TRANING está preparada para te propocionar um treinamento seguro e eficiente.
                                Mudaremos sua qualidade de vida através de um programa baseado em condicionamento físico e força.
                                O CrossFit te ajudará a não só atingir suas meta, mas superá-las.
                            </p>
                    </FadeIn>
                </div>

                <div className={style.img}>
                    < FadeIn
                        from="bottom"
                        positionOffset={400}
                        triggerOffset={200}
                        delayInMilliseconds={200}>
                        <img src={fachada} alt="Fachada da acadêmia" />
                    </FadeIn>
                </div>
            </div>
            <div className={style.youtube}>
                <h1>Conheça nosso centro de treinamento</h1>
                <h1>Aqui a gente faz acontecer!</h1>

                    < FadeIn
                        from="bottom"
                        positionOffset={400}
                        triggerOffset={200}
                        delayInMilliseconds={200}>
                        <iframe src="https://www.youtube.com/embed/M9w5GkGtV5U" title="VOCÊ CONHECE O CROSSFIT? BATE PAPO COM RODRIGO LEONARDO DO BOXRLCROSS" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    </FadeIn>

            </div>
        </div>
    );
};

export default QuemSomos;
