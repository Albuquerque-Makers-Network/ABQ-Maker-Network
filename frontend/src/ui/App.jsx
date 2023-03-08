import { BrowserRouter, Route, Routes } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css'
import './App.css'
import { Home } from './Home.jsx'
import { FourOhFour } from './FourOhFour'
import {SignUp} from "./SignUp.jsx";
import {MakerProfile} from "./MakerProfile.jsx";
import {CommunityAccount} from "./CommunityAccount/CommunityAccount.jsx";
import {MakerAccount} from "./MakerAccount/MakerAccount.jsx";


export function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route  path='/' element={<Home />} />
                    <Route path={"*"} element={<FourOhFour />} />
                    <Route path={'/sign-up'} element={<SignUp />} />
                    <Route path={'/maker-profile'} element={<MakerProfile />} />
                    <Route path={'/community-account'} element={<CommunityAccount />} />
                    <Route path={'/maker-account'} element={<MakerAccount />} />

                </Routes>
            </BrowserRouter>
        </>
    )
}