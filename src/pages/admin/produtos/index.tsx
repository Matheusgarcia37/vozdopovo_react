import { GetServerSideProps } from "next";
import { parseCookies } from "nookies";
import { useEffect, useState } from "react";
import formatData from "../../../services/formatData";
import { Api } from "../../../api";
import api from "../../../api";
import Link from "next/link";
import styles from '../../../styles/admin/Produtos.module.scss';
import { FaEdit } from "react-icons/fa";
import { RiDeleteBinFill } from "react-icons/ri";
import * as XLSX from 'xlsx';
type Produtos = [
    {
        id: string;
        codigo_interno: string;
        descricao: string;
        codigo_referencia: string;
        aplicacao: string;
        marca: string;
        marcaId: string;
        createdAt: string;
        updatedAt: string;
    }
]
export default function Produtos() {
    const [produtos, setProdutos] = useState<Produtos | []>([]);
    useEffect(() => {
        const getProdutos = async () => {
            const { data } = await api.get('/produto');;
            setProdutos(data);
        }
        getProdutos();
    }, []);

    const deleteUser = async (e: any, id: string) => {
        // e.preventDefault();
        // try {
        //     await api.delete(`/user`, {data: {id}});
        //     const newUsers: any = produtos.filter((produto) => produto.id !== id);
        //     setProdutos(newUsers);
        // } catch (error) {
        //     console.log(error)
        // }
    }

    const readExel= async (file: any) => {   
        const promise = new Promise((resolve, reject) => {
            const fileReader = new FileReader();
            fileReader.readAsArrayBuffer(file);
            fileReader.onload = (e: any) => {
                const bufferArray = e.target.result;
                const wb = XLSX.read(bufferArray, { type: 'buffer' });

                const wsname = wb.SheetNames[0];
                const ws = wb.Sheets[wsname];
                const data = XLSX.utils.sheet_to_json(ws);

                resolve(data);
            }

            file.onerror = (err: any) => {
                reject(err);
            }
        });

        const data: any = await promise;
        console.log("daata", data);
        const newProdutos = data.map((produto: any) => {
            return {
                codigo_interno: produto.codigo_interno || '',
                descricao: produto.descricao || '',
                codigo_referencia: produto.codigo_referencia || '',
                aplicacao: produto.aplicacao || '',
                marca: produto.marca || '',
                createdAt: produto.createdAt,
                updatedAt: produto.updatedAt
            }
        });
        
        //enviar produtos para o banco de dados
        try {
            const { data } = await api.post("/produto/import", newProdutos);
            setProdutos(data);
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className={styles.container}>
            <div className={styles.headerContent}>
                <h1>Produtos</h1>
                {/* botâo para criar novos produtos */}
                <div>
                <input 
                    type="file" style={{display: 'none'}} name="inputXlsx" id="inputXlsx"
                    onChange={(e: any) => {
                        const file = e.target.files[0];
                        readExel(file);
                        e.target.value = "";

                    }}
                />
                <label htmlFor="inputXlsx" className={styles.buttonNovoProduto}>Importar produtos</label>
                <Link href="/admin/produtos/novo">
                    <a className={styles.buttonNovoProduto}>
                        Criar Produto
                    </a>
                </Link>
                </div>
            </div>
            <div className={styles.containerTableProdutos}><table className={styles.tableProdutos}>
                <thead className={styles.headerTableProdutos}>
                    <tr>
                        <th>Codigo</th>
                        <th>Descricao</th>
                        <th>Codigo de referência</th>
                        <th>Aplicação</th>
                        <th>Marca</th>
                        <th>Data de criação</th>
                        <th>Ultima atualização</th>
                        <th>Editar</th>
                        <th>Deletar</th>
                    </tr>
                </thead>
                <tbody className={styles.bodyTableProdutos}>
                    {produtos.map((produto, key) => (
                        <tr key={key} className={styles.contentTableProdutos}>
                            <td>{produto.codigo_interno}</td>
                            <td>{produto.descricao}</td>
                            <td>{produto.codigo_referencia}</td>
                            <td>{produto.aplicacao}</td>
                            <td>{produto.marca}</td>
                            <td>{formatData(produto.createdAt)}</td>
                            <td>{formatData(produto.updatedAt)}</td>
                            <td>
                                <Link href={{
                                    pathname: `/admin/produtos/editar`,
                                    query: { id: produto.id }
                                }}>

                                    <a className={styles.iconButton}><FaEdit size={22}></FaEdit></a>
                                </Link>

                            </td>
                            <td>
                                <RiDeleteBinFill onClick={(e) => deleteUser(e, produto.id)} size={22} className={styles.iconButton}></RiDeleteBinFill>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            </div>

        </div>
    )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
    const { ['jragropecas-token']: token } = parseCookies(context);

    if (!token) {
        return {
            redirect: {
                destination: '/loginAdmin',
                permanent: false
            }
        }
    }

    const apiClient = Api(context);

    return {
        props: {
            
        }
    }
}

