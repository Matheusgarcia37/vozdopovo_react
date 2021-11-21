import type { InferGetServerSidePropsType, NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Lottie from 'react-lottie';
import agricultura1 from '../lotties/agricultura1.json'
import axios from 'axios';


const Home = ({produtos}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  console.log(produtos);
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: agricultura1,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };


  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com"/>
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700&display=swap" rel="stylesheet" />

      </Head>

      <main className={styles.main}>
        <div className={styles.containerApresetation}>
          <div className={styles.containerApresetation__text}>
            <h1>
              Jr. Agropecas
            </h1>
            <p>
              A Jr. Agropecas é uma empresa para venda de produtos agropecuários, e temos como objetivo principal cuidar da satisfação dos nossos clientes.
            </p>
          
          </div>
          <div className={styles.containerApresetation__image}>
        {/*   <Lottie 
            options={defaultOptions}
              height={400}
              width={400}
          /> */}
          </div>
        </div>

        <div className={styles.linha_de_produtos}>
          <div className={styles.linha_de_produtos__text}>
            <p>Conheças nossa</p>
            <h3>
              Linha de produtos
            </h3>
          </div>  
        </div>
        <div className={styles.container_produtos}>
          {produtos.map((produto: any) => (
            <div className={styles.container_produtos__produto}>
              <div className={styles.container_produtos__produto__image}>
                <Image src={produto.imagem} width={200} height={200} />
              </div>
              <div className={styles.container_produtos__produto__text}>
                <h3>{produto.nome}</h3>
                <p>{produto.descricao}</p>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  )
}


//get produtos from api/produtos_destaque with typescript
export async function getServerSideProps() {
  const res = await axios.get('http://localhost:3000/api/produtos_destaque');
  const produtos = res.data;
  return {
    props: {
      produtos
    }
  }
}

export default Home
