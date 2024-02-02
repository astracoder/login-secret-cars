import { Link } from 'react-router-dom';
import { useState } from 'react';

import AppContainer from "../../components/AppContainer/AppContainer";

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    




    return (
        <AppContainer>
            <h1 className="text-white text-8xl font-bold mb-5">Secret Cars</h1>
            <div className="flex justify-center items-center flex-col">
                <h1 className="text-blue-200 text-4xl font-semibold mb-12">O melhor jogo de palavras</h1>
                <h3 className="text-white/80 text-2xl font-light mb-5">Já tem <Link to="/register"><span className="underline cursor-pointer hover:text-blue-200">cadastro</span></Link>? Faça o seu login!</h3>
            </div>
            <form className="w-2/6 h-full bg-gray-800 rounded-lg p-10">
                <div className="flex justify-center items-left flex-col mb-5">
                    <label 
                        className="text-white text-2xl font-normal mb-2" htmlFor="email">E-mail: </label>
                    <input 
                        className="w-full h-12 pl-5 pr-5 rounded-md text-xl text-gray-600 font-semibold"
                        type="email"
                        name="email" 
                        placeholder="Seu melhor e-mail..."
                        required
                    />
                </div>
                <div className="flex justify-center items-left flex-col mb-5">
                    <label className="text-white text-2xl font-normal mb-2" htmlFor="password">Senha: </label>
                    <input 
                        className="w-full h-12 pl-5 pr-5 rounded-md text-xl text-gray-600 font-semibold"
                        type="password"
                        name="password"
                        placeholder="Sua melhor senha..."
                        required
                    />
                </div>
                <div className="flex justify-center items-center mb-10">
                    <a className="text-white hover:text-white/80 hover:underline text-xl font-light cursor-pointer">Recuperar senha &gt;</a>
                </div>
                <div className="flex justify-center items-center flex-col">
                    <button className="w-96 p-5 text-white text-xl bg-blue-500 hover:bg-blue-600 rounded-md mb-5">Entrar</button>
                    <button className="w-96 p-5 text-white text-xl bg-white/10 border-2 border-white/20 hover:bg-white hover:text-gray-800 rounded-md">Registrar</button>
                </div>
            </form>
        </AppContainer>
    )
}

export default Login;