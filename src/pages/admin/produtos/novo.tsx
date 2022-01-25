import { useForm } from "react-hook-form";
import api from "../../../api";
import styles from "../../../styles/admin/NovoProduto.module.scss"
export default function novoProduto() {
    type FormData = {
        codigo_interno: string;
        descricao: string;
        codigo_referencia: string;
        aplicacao: string;
        marca: string;
        preco: number;
    }
    const { register, handleSubmit, watch } = useForm<FormData>({
      
    });
    
    const onSubmit = async (data: FormData) => {
        console.log(data)
        const { codigo_interno, descricao, codigo_referencia, aplicacao, marca, preco } = data;
        try {
            await api.post("/produto", { codigo_interno, descricao, codigo_referencia, aplicacao, marca, preco  });
        } catch (error) {
            console.log(error);
        }
    }
  
    return (
        <div className={styles.container}>
            <h1 className={styles.titleForm}>Criar Produto</h1>
            <form onSubmit={handleSubmit(onSubmit)} className={styles.formNovoUser}>
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


                    <button type="submit">Criar Produto</button>
                </div>
            </form>
        </div>
    )
}