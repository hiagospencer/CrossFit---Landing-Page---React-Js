import style from './QuemSomos.module.css'

import fachada from '../../img/frente.jpeg'
import rodrigo from '../../img/rodrigo.jpeg'


const QuemSomos = ({ id }) => {

    

    return (
        <div className={style.boxQuemSomos} id={id}>
            <h1>Quem Somos</h1>
            <div className={style.quemsomos}>
                <div className={style.img}>
                    <img src={rodrigo} alt="Imagem de Rodrigo Leonardo" />
                </div>
                <div className={style.info}>
                    <h1> Rodrigo Leonardo de Góis Souza</h1>

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
                </div>
                <br />

                <div className={style.info}>
                    <p>
                        Como um dos primeiros centros de treinamentos especializados em CrossFit de Areia Branca,
                        a RLCROSS TRANING está preparada para te propocionar um treinamento seguro e eficiente.
                        Mudaremos sua qualidade de vida através de um programa baseado em condicionamento físico e força.
                        O CrossFit te ajudará a não só atingir suas meta, mas superá-las.
                    </p>
                </div>

                <div className={style.img}>
                    <img src={fachada} alt="Fachada da acadêmia" />
                </div>


            </div>
        </div>
    );
};

export default QuemSomos;