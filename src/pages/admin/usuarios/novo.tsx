import { useEffect } from "react";
import { useForm } from "react-hook-form";
import api from "../../../api";
import styles from "../../../styles/admin/NovoUsuario.module.scss"
export default function novoUsuario() {
    type FormData = {
        username: string;
        password: string;
    }
    const { register, handleSubmit, watch } = useForm<FormData>({
      
    });
    
    const onSubmit = async (data: any) => {
        console.log(data)
        const { username, password } = data;
        try {
            await api.post("/user", { username, password });
        } catch (error) {
            console.log(error);
        }
    }
  
    return (
        <div className={styles.container}>
            <h1 className={styles.titleForm}>Criar Usuario</h1>
            <form onSubmit={handleSubmit(onSubmit)} className={styles.formNovoUser}>
                <div>
                    <div className={!watch('username') ? styles.floatLabel : styles.floatLabel + ' ' + styles.label_active}>
                        <label htmlFor="user">Usuario</label>
                        <input type="text" className="form-control" id="user" {...register("username")} />
                    </div>
                    <div className={!watch('password') ? styles.floatLabel : styles.floatLabel + ' ' + styles.label_active}>
                        <label htmlFor="password">Senha</label>
                        <input type="password" className="form-control" id="password" {...register("password")}/>
                    </div>


                    <button type="submit">Criar Usuário</button>
                </div>
            </form>
        </div>
    )
}