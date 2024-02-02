import AppContainer from "../../components/AppContainer/AppContainer";

const Login = () => {
    return (
        <AppContainer>
            <h1 className="text-white text-3xl font-bold">Secret Cars</h1>
            <div className="">
                <h1>O melhor jogo de palavras</h1>
                <h3>Faça o seu cadastro e venha jogar!</h3>
            </div>
            <form className="">
                <div className="">
                    <label htmlFor="email">E-mail: </label>
                    <input 
                        type="email"
                        name="email" 
                        required
                    />
                    <label htmlFor="password">Senha: </label>
                    <input 
                        type="password"
                        name="password"
                        required
                    />
                </div>
            </form>
        </AppContainer>
    )
}

export default Login;