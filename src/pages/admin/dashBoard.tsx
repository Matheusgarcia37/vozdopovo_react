import { GetServerSideProps } from 'next'
import { parseCookies } from 'nookies'
import { Api } from '../../api'
import styles from '../../styles/admin/DashBoard.module.scss'

export default function AcessAdmin() {
    return (
        <div className={styles.container}>
            <div>
                <h1>Bem vindo ao Sistema de Controle</h1>
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

