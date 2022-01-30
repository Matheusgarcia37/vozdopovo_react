import { useForm } from "react-hook-form";
import styles from "../../../styles/admin/EditarUsuarios.module.scss";
import api, { Api } from "../../../api";
import { GetServerSideProps } from "next";
import { parseCookies } from "nookies";
import Swal from "sweetalert2";
import router from "next/router";
type User = {
    id: string;
    username: string;
}

export default function EditarUsuarios({user}: {user: User}) {
    type FormData = {
        username: string;
        password: string;
    }
    const { register, handleSubmit, watch } = useForm<FormData>({
        defaultValues: {
            username: user?.username ? user.username : "",
            password: ""
        }
    });
    
    const onSubmit = async (data: any) => {
        const { username, password } = data;
        try {
            await api.put("/user", { id: user.id, username, password });
            Swal.fire({
                title: "Sucesso!",
                text: "Usuário editado com sucesso!",
                icon: "success",
                confirmButtonText: "Ok"
            }).then(() => {
                router.push("/admin/usuarios");
            });
        } catch (error) {
            console.log(error);
            Swal.fire({
                title: "Erro",
                text: "Ocorreu um erro ao editar o usuário",
                icon: "error",
                confirmButtonText: "Ok"
            });
        }
    }
  
    return (
        <div className={styles.container}>
            <h1 className={styles.titleForm}>Editar Usuário</h1>
            <form onSubmit={handleSubmit(onSubmit)} className={styles.formNovoUser}>
                <div>
                    <div className={!watch('username') ? styles.floatLabel : styles.floatLabel + ' ' + styles.label_active}>
                        <label htmlFor="user">Usuario</label>
                        <input type="text" className="form-control" id="user" {...register("username")}/>
                    </div>
                    <div className={!watch('password') ? styles.floatLabel : styles.floatLabel + ' ' + styles.label_active}>
                        <label htmlFor="password">Senha</label>
                        <input type="password" className="form-control" id="password" {...register("password")}/>
                    </div>


                    <button type="submit">Editar Usuário</button>
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
    const { data } = await apiClient.post("/user/getUserById", { id }); 
    return {
        props: {
            user: data
        }
    }
}
