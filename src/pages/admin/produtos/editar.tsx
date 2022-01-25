import { useForm } from "react-hook-form";
import styles from "../../../styles/admin/EditarProdutos.module.scss";
import api, { Api } from "../../../api";
import { GetServerSideProps } from "next";
import { parseCookies } from "nookies";
type Produto = {
    id: string;
    codigo_interno: string;
    descricao: string;
    codigo_referencia: string;
    aplicacao: string;
    marca: string;
    preco: number;
}

export default function EditarProdutos({produto}: {produto: Produto}) {
    type FormData = {
        codigo_interno: string;
        descricao: string;
        codigo_referencia: string;
        aplicacao: string;
        marca: string;
        preco: number | string;
    }
    const { register, handleSubmit, watch } = useForm<FormData>({
        defaultValues: {
            codigo_interno: produto?.codigo_interno ? produto.codigo_interno : "",
            descricao: produto?.descricao ? produto.descricao : "",
            codigo_referencia: produto?.codigo_referencia ? produto.codigo_referencia : "",
            aplicacao: produto?.aplicacao ? produto.aplicacao : "",
            marca: produto?.marca ? produto.marca : "",
            preco: produto?.preco ? produto.preco : ""
        }
    });
    
    const onSubmit = async (data: any) => {
        const { codigo_interno, descricao, codigo_referencia, aplicacao, marca, preco } = data;
        try {
            await api.put("/produto", { id: produto.id, codigo_interno, descricao, codigo_referencia, aplicacao, marca, preco });
        } catch (error) {
            console.log(error);
        }
    }
  
    return (
        <div className={styles.container}>
            <h1 className={styles.titleForm}>Editar Produto</h1>
            <form onSubmit={handleSubmit(onSubmit)} className={styles.formNovoProduto}>
                <div>
                    <div className={!watch('codigo_interno') ? styles.floatLabel : styles.floatLabel + ' ' + styles.label_active}>
                        <label htmlFor="codigo_interno">Codigo interno</label>
                        <input type="text" className="form-control" id="codigo_interno" {...register("codigo_interno")} />
                    </div>
                    <div className={!watch('descricao') ? styles.floatLabel : styles.floatLabel + ' ' + styles.label_active}>
                        <label htmlFor="descricao">Descrição</label>
                        <input type="text" className="form-control" id="descricao" {...register("descricao")}/>
                    </div>
                    <div className={!watch('codigo_referencia') ? styles.floatLabel : styles.floatLabel + ' ' + styles.label_active}>
                        <label htmlFor="codigo_referencia">Codigo de referência</label>
                        <input type="text" className="form-control" id="codigo_referencia" {...register("codigo_referencia")}/>
                    </div>
                    <div className={!watch('aplicacao') ? styles.floatLabel : styles.floatLabel + ' ' + styles.label_active}>
                        <label htmlFor="aplicacao">Aplicação</label>
                        <input type="text" className="form-control" id="aplicacao" {...register("aplicacao")}/>
                    </div>
                    <div className={!watch('marca') ? styles.floatLabel : styles.floatLabel + ' ' + styles.label_active}>
                        <label htmlFor="marca">Marca/Fornecedor</label>
                        <input type="text" className="form-control" id="marca" {...register("marca")}/>
                    </div>
                    <div className={!watch('preco') ? styles.floatLabel : styles.floatLabel + ' ' + styles.label_active}>
                        <label htmlFor="preco">Preço</label>
                        <input type="number" className="form-control" id="preco" {...register("preco")}/>
                    </div>
                   


                    <button type="submit">Editar Produto</button>
                </div>
            </form>
        </div>
    )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
    const { ['jragropecas-token']: token } = parseCookies(context);
    const { id } = context.query;
    if (!token) {
        return {
            redirect: {
                destination: '/loginAdmin',
                permanent: false
            }
        }
    }

    const apiClient = Api(context);
    const { data } = await apiClient.post("/produto/getProdutoById", { id }); 
    return {
        props: {
            produto: data
        }
    }
}
