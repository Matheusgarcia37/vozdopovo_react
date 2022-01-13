import { createContext, useEffect, useState } from "react";
import api from '../api';
import { setCookie, parseCookies, destroyCookie } from 'nookies';
import Router from 'next/router';

type FormLogin = {
    username: string;
    password: string;
}
type User = {
    id: string;
    username: string;
}
type AuthContextType = {
    user: User | null;
    isAuthenticated: boolean;
    signIn: (data: FormLogin) => Promise<void>;
    logout: () => void;
}
// token: string;
// user: {
//     id: string;
//     username: string;
// };
export const AuthContext = createContext({} as AuthContextType);

export function AuthProvider({ children }: { children: any }) {
    const [user, setUser] = useState<User | null>(null);
    const isAuthenticated = !!user;

    useEffect(() => {
        async function loadUser() {
            const { 'jragropecas-token': token } = parseCookies();
            if (token) {
                try {
                    const res = await api.post("/user/getUserByToken", { token })
                    console.log(res.data);
                    setUser(res.data);
                } catch (error) {
                    destroyCookie(null, 'jragropecas-token');
                    setUser(null);
                }
            }
        }
        loadUser();
    }, []);

    async function signIn({ username, password }: FormLogin) {
        const { data } = await api.post('/user/auth',
            {
                username,
                password
            });
        const { token } = data;
        setCookie(null, 'jragropecas-token', token, {
            maxAge: 60 * 60 * 24// 1 day       
        });
        setUser(data.user);
        api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
        Router.push('/admin/dashBoard');
    }

    async function logout() {
        destroyCookie(null, 'jragropecas-token');
        setUser(null);
        Router.push('/');
    }

    return (
        <AuthContext.Provider value={{ user, isAuthenticated, signIn, logout }}>
            {children}
        </AuthContext.Provider>
    )
}