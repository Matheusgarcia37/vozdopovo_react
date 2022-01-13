import { FaUsers } from "react-icons/fa";
import { MdSpaceDashboard } from "react-icons/md";
import { BsHandbagFill } from "react-icons/bs";

export const dataMenuAdmin = [
    {
        url: '/admin/dashBoard',
        name: 'Dashboard',
        icon: MdSpaceDashboard,
    },
    {
        url: '/admin/usuarios',
        name: 'Usuários',
        icon: FaUsers,
    },
    {
        url: '/admin/produtos',
        name: 'Produtos',
        icon: BsHandbagFill,
    },
]