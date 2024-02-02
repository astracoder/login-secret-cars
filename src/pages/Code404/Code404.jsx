import { Link } from 'react-router-dom';

import AppContainer from '../../components/AppContainer/AppContainer';

import code404 from '../Code404/images/code404.svg';

const Code404 = () => {
    return (
        <AppContainer>
            <h1 className="text-white text-3xl font-bold">A página não foi encontrada :C</h1>
            <img className="h-full" src={code404} alt="Imagem sobre o erro 404" />
            <Link to="/">
                <button className="p-5 text-white text-xl bg-blue-500 hover:bg-blue-600 rounded-md">Voltar para o ínicio &gt;</button>
            </Link>
        </AppContainer>
    )
}

export default Code404;