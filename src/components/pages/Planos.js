import style from './Planos.module.css'

const Planos = ({id}) => {
    return (
        <div className={style.planos} id={id}>
            <div className={style.boxPlanos}>
                <h1>Planos</h1>

                <div className={style.traco}></div>
                <p>Conheça nossas opções de planos e comece hoje mesmo uma vida mais saudável.</p>

                <div className={style.container}>
                    <div className={style.boxMensalidades}>
                        <div className={style.infoPlanos}>
                            <h2>RL CHECK-IN ILIMITADO</h2><br />
                            <spam>R$ 180.00</spam>
                            <p>Treine quantas vezes quiser, Crossfit ou LPO,
                                 de segunda à sexta.
                            </p>
                        </div>

                        <div className={style.infoPlanos}>
                            <h2>RL 5 CHECK-INS</h2><br />
                            <spam>R$ 150.00</spam>
                            <p>Oferecemos este plano para você que está inseguro
                                se vai se adaptar a modalidade, ao box e ao nosso estilo de vida.
                            </p>

                        </div>

                        <div className={style.infoPlanos}>
                            <h2>RL 3 CHECK-INS</h2><br />
                            <spam>R$ 150.00</spam>
                            <p>
                                Treino 3x na semana, adaptado para quem é iniciante ou tem excesso de peso e não se sente apto a praticar todos os movimentos do Crossfit.
                                *Consultar unidades e disponibilidade de horários.
                            </p>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Planos;
