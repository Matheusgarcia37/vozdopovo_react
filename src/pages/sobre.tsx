import styles from '../styles/Sobre.module.scss'
export default function Sobre() {
    return (
        <div className={styles.box}>
               <div className={styles.container_sobre}>
            <h1 className={styles.title}>Sobre</h1>
            <div className={styles.content}>
            <p>
                <span className={styles.margin_text}></span>A empresa foi fundada em 2019 e desde então temos ganhado cada vez mais relevância entre nossos clientes e parceiros de Pimenta e cidades da região.
                Em 2020 entramos para o universo das mangueiras hidráulicas, para podermos  ampliar nosso nicho de produtos, oferecendo mais comodidade a nossos clientes.
                Estamos localizados na cidade de  Pimenta, exatamente no coração  do agronegócio do centro-oeste mineiro.

            </p>
            <p>Nosso foco é atender produtores rurais que necessitam de peças agrícolas de qualidade e também  oficinas, prestadores de serviços  e indústrias.</p>
            <p>De modo geral, temos lubrificantes, filtros lubrificantes, rolamentos, retentores, mancais industriais, vasta linha de parafusos de aço, correias industriais A, B e C, cardans, terminais para cardans, proteções de cardans e cruzetas, químicos e também mangueiras hidráulicas e seus componentes.</p>
            <span>O nosso estoque é composto por:</span>
            <ul>
                <li>
                    Peças Tratores CBT | Valtra-Valmet | New Holland  | Massey Fergusson | John Deere e CASE
                </li>
                <li>
                    Peças para Implementos Agrícolas Baldan | Tatu | InRoda | JF e outros;
                </li>
                <li>
                    Peças para motores Diesel MWM | Perkins | Ford | Mercedes | Maxion
                </li>
                <li>
                    Ferramentas para Oficinas
                </li>
            </ul>
            <p>Outras peças que não tivermos no estoque, nos dispomos a adquirir no menor espaço de tempo.</p>
            <p>Estamos abertos de segunda a sexta-feira de 7:30 às 18:00h. Aos sábados nosso horário é de 8:00 às 12:00h. (Não fechamos para o almoço).</p>
            </div>
        </div>
        </div>
     
    );
}