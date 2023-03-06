import { BrowserRouter, Route, Routes } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css'
import './App.css'
import { Home } from './landing page/Home.jsx'
import { FourOhFour } from './FourOhFour'
import {SignUp} from "./SignUp.jsx";
import {MakerProfile} from "./MakerProfile.jsx";


export function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route  path='/' element={<Home />} />
                    <Route path={"*"} element={<FourOhFour />} />
                    <Route path={'/sign-up'} element={<SignUp />} />
                    <Route path={'/maker-profile'} element={<MakerProfile />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}