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
                            <h2>Mensal</h2><br />
                            <spam>R$ 150.00</spam>
                            <p>Oferecemos este plano para você que está inseguro
                                se vai se adaptar a modalidade, ao box e ao nosso estilo de vida.
                            </p>
                        </div>

                        <div className={style.infoPlanos}>
                            <h2>Recorrência*</h2><br />
                            <spam>R$ 150.00</spam>
                            <p>Treine quantas vezes quiser, Crossfit ou LPO, de domingo a domingo.
                                *Válido no plano Semestral ou Trimestral.</p>
                        </div>

                        <div className={style.infoPlanos}>
                            <h2>Blacksheep fit*</h2><br />
                            <spam>R$ 150.00</spam>
                            <p>
                                Para você que quer uma atenção extra.
                                Tenha aulas individuais com nossos coachs 3x por semana e a liberdade de treinar em grupo quando quiser.
                                *Consultar unidades e disponibilidade de horários.
                            </p>
                        </div>

                        <div className={style.infoPlanos}>
                            <h2>Heavy Kids*</h2><br />
                            <spam>R$ 150.00</spam>
                            <p>
                                Treino 3x na semana, adaptado para quem é iniciante ou tem excesso de peso e não se sente apto a praticar todos os movimentos do Crossfit.
                                *Consultar unidades e disponibilidade de horários.
                            </p>
                        </div>

                        <div className={style.infoPlanos}>
                            <h2>Aula Avulsa</h2><br />
                            <spam>R$ 60.00</spam>
                            <p>
                                Está longe do seu box mas nao quer deixar de treinar? Faça dropin com aulas a vulsas ou pacotes.
                            </p>
                        </div>

                        <div className={style.infoPlanos}>
                            <h2>Competição</h2><br />
                            <spam>R$ 150.00</spam>
                            <p>
                            Treine para competir. Faça a planilha de treinos dos atletas da Blacksheep onde estiver.
                            Esteja preparado para performar da melhor maneira possível,
                             acessando os treinos no nosso app com vídeos.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Planos;