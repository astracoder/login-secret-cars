import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Login from '../pages/Login/Login';
import Register from '../pages/Register/Register';
import Recovery from '../pages/Recovery/Recovery';
import Code404 from '../pages/Code404/Code404';

const AppRoutes = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/recovery" element={<Recovery />} />
                    <Route path="*" element={<Code404 />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default AppRoutes;