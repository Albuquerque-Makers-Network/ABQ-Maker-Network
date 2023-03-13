import { BrowserRouter, Route, Routes } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css'
import './App.css'
import { Home } from './landing page/Home.jsx'
import { FourOhFour } from './FourOhFour'
import {CommunityAccount} from "./CommunityAccount/CommunityAccount.jsx";
import {MakerAccount} from "./MakerAccount/MakerAccount.jsx";
import {SignUp} from "./sign-up/SignUp.jsx";
import {MakerProfile} from "./maker-profile/MakerProfile.jsx";
import {Navigation} from "./Navigation.jsx";
import {Provider} from "react-redux";



export function App(props) {
    const {store} = props
    return (
        <>
            <Provider store={store}>
                <BrowserRouter>
                    <Navigation/>
                        <Routes>
                            <Route  path='/' element={<Home />} />
                            <Route path={"*"} element={<FourOhFour />} />
                            <Route path={'/sign-up'} element={<SignUp />} />
                            <Route path={'/maker-profile'} element={<MakerProfile />} />
                            <Route path={'/community-account'} element={<CommunityAccount />} />
                            <Route path={'/maker-account'} element={<MakerAccount />} />

                        </Routes>
                    </BrowserRouter>
                </Provider>
        </>
    )
}