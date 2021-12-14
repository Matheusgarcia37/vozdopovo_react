import styles from "../styles/Produtos.module.scss";
import Image from "next/image";
import { AiOutlineSearch } from "react-icons/ai";

const Produtos = () => {
  type Data = {
    nome: string;
    descricao: string;
    codigo: string;
    preco: number;
    imagem: string;
  };
  const produtos: Data[] = [
    {
      nome: "Produto 1",
      descricao: "Descrição do produto 1",
      codigo: "1",
      preco: 100,
      imagem: "https://via.placeholder.com/300x300",
    },
    {
      nome: "Produto 2",
      descricao: "Descrição do produto 2",
      codigo: "2",
      preco: 200,
      imagem: "https://via.placeholder.com/300x300",
    },
    {
      nome: "Produto 3",
      descricao: "Descrição do produto 3",
      codigo: "3",
      preco: 300,
      imagem: "https://via.placeholder.com/300x300",
    },
    {
      nome: "Produto 4",
      descricao: "Descrição do produto 4",
      codigo: "4",
      preco: 400,
      imagem: "https://via.placeholder.com/300x300",
    },
    {
      nome: "Produto 5",
      descricao: "Descrição do produto 5",
      codigo: "5",
      preco: 500,
      imagem: "https://via.placeholder.com/300x300",
    },
    {
      nome: "Produto 6",
      descricao: "Descrição do produto 6",
      codigo: "6",
      preco: 600,
      imagem: "https://via.placeholder.com/300x300",
    },
    {
      nome: "Produto 7",
      descricao: "Descrição do produto 7",
      codigo: "7",
      preco: 700,
      imagem: "https://via.placeholder.com/300x300",
    },
    {
      nome: "Produto 8",
      descricao: "Descrição do produto 8",
      codigo: "8",
      preco: 800,
      imagem: "https://via.placeholder.com/300x300",
    },
    {
      nome: "Produto 9",
      descricao: "Descrição do produto 9",
      codigo: "9",
      preco: 900,
      imagem: "https://via.placeholder.com/300x300",
    },
    {
      nome: "Produto 10",
      descricao: "Descrição do produto 10",
      codigo: "10",
      preco: 1000,
      imagem: "https://via.placeholder.com/300x300",
    },
    {
      nome: "Produto 1",
      descricao: "Descrição do produto 1",
      codigo: "1",
      preco: 100,
      imagem: "https://via.placeholder.com/300x300",
    },
    {
      nome: "Produto 2",
      descricao: "Descrição do produto 2",
      codigo: "2",
      preco: 200,
      imagem: "https://via.placeholder.com/300x300",
    },
    {
      nome: "Produto 3",
      descricao: "Descrição do produto 3",
      codigo: "3",
      preco: 300,
      imagem: "https://via.placeholder.com/300x300",
    },
    {
      nome: "Produto 4",
      descricao: "Descrição do produto 4",
      codigo: "4",
      preco: 400,
      imagem: "https://via.placeholder.com/300x300",
    },
    {
      nome: "Produto 5",
      descricao: "Descrição do produto 5",
      codigo: "5",
      preco: 500,
      imagem: "https://via.placeholder.com/300x300",
    },
    {
      nome: "Produto 6",
      descricao: "Descrição do produto 6",
      codigo: "6",
      preco: 600,
      imagem: "https://via.placeholder.com/300x300",
    },
    {
      nome: "Produto 7",
      descricao: "Descrição do produto 7",
      codigo: "7",
      preco: 700,
      imagem: "https://via.placeholder.com/300x300",
    },
    {
      nome: "Produto 8",
      descricao: "Descrição do produto 8",
      codigo: "8",
      preco: 800,
      imagem: "https://via.placeholder.com/300x300",
    },
    {
      nome: "Produto 9",
      descricao: "Descrição do produto 9",
      codigo: "9",
      preco: 900,
      imagem: "https://via.placeholder.com/300x300",
    },
    {
      nome: "Produto 10",
      descricao: "Descrição do produto 10",
      codigo: "10",
      preco: 1000,
      imagem: "https://via.placeholder.com/300x300",
    },
    {
      nome: "Produto 10",
      descricao: "Descrição do produto 10",
      codigo: "10",
      preco: 1000,
      imagem: "https://via.placeholder.com/300x300",
    },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.filtroInfo}>
        <div>
          <p>Categorias</p>
          <ul>
            <li>Apparel</li>
            <li>Shop All</li>
          </ul>
        </div>

        <div>
          <p>Modelos</p>
          <ul>
            <li>teste1</li>
            <li>teste2</li>
          </ul>
        </div>
      </div>
      
      <div className={styles.containerProdutos}>
        <div className={styles.headerProduto}>
          <h3>Foi encontrado {produtos.length} resultados</h3>
          <div className={styles.filtroPorPesquisa}>
            <input type="text" placeholder="Pesquisar produtos" className={styles.inputPesquisa}/>
            <div className={styles.caixaIconePesquisa}><AiOutlineSearch/></div>
          </div>
        </div>
        
        <div className={styles.contentProdutos}>
          {produtos.map((produto) => {
            return (
              <div className={styles.contentProduto}>
                <div className={styles.imageProduto}>
                  <Image
                    src={produto.imagem}
                    width={200}
                    height={200}
                    alt="produto"
                  />
                </div>
                <div className={styles.informationsProduto}>
                  <h3>{produto.nome}</h3>
                  <p>{produto.descricao}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className={styles.filtroPorRelevancia}>
        <p>Relevancia</p>
        <ul>
          <li>Preço</li>
          <li>Vendidos</li>
          <li>Data de lançamento</li>
          <li>Valor</li>
        </ul>
      </div>
    </div>
  );
};

export default Produtos;
