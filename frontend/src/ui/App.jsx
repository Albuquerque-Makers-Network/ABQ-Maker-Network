import { BrowserRouter, Route, Routes } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css'
import './App.css'
import { Home } from './Home.jsx'
import { FourOhFour } from './FourOhFour'
import {SignUp} from "./sign-up/SignUp.jsx";
import {MakerProfile} from "./maker-profile/MakerProfile.jsx";


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