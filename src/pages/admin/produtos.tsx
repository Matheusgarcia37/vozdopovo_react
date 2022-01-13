import { GetServerSideProps } from "next";
import { parseCookies } from "nookies";
import { Api } from "../../api";

export default function Produtos() {
    return(
        <div>
            <h1>Produtos</h1>
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