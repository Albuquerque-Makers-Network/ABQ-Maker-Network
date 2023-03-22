import { BrowserRouter, Route, Routes } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css'
import './App.css'
import { Home } from './landing-page/Home.jsx'
import { FourOhFour } from './FourOhFour'
import {CommunityAccount} from "./CommunityAccount/CommunityAccount.jsx";
import {MakerAccount} from "./MakerAccount/MakerAccount.jsx";
import {SignUp} from "./sign-up/SignUp.jsx";
import {MakerProfile} from "./maker-profile/MakerProfile.jsx";
import {Navigation} from "./shared/components/NavBar/Navigation.jsx";
import {Provider} from "react-redux";
import {SignIn} from "./sign-in/SignIn.jsx";
import {MakerImageUpload} from "./maker-image-upload/MakerImageUpload.jsx";
import {PortfolioImage} from "./maker-profile/components/PortfolioImage.jsx";
import {PortfolioImageUpload} from "./portfolio/PortfolioImageUpload.jsx";


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
                            <Route path={'/sign-in'} element={<SignIn />} />
                            <Route path={'/maker-profile/:profileId'} element={<MakerProfile />} />
                            <Route path={'/community-account'} element={<CommunityAccount />} />
                            <Route path={'/maker-account'} element={<MakerAccount />} />
                            <Route path={'/maker-image-upload'} element={<MakerImageUpload />} />
                            <Route path={'/portfolio'} element={<PortfolioImageUpload />} />
                        </Routes>
                    </BrowserRouter>
                </Provider>
        </>
    )
}