import React from 'react'
import { BrowserRouter, Route} from 'react-router-dom'
import Header from '../components/Header/Header'
import HomePage from "../pages/HomePage/HomePage"
import Projetos from "../pages/Projetos/Projeto"
import SobreMim from "../pages/SobreMim/SobreMim"
import { Switch } from '@material-ui/core'

const Router = () => {
    return(
        <BrowserRouter>
        <Header/>
            <Switch>
                <Route exact path="/">
                    <HomePage/>
                </Route>
                <Route exact path="projetos">
                    <Projetos/>
                </Route>
                <Route exact path="SobreMim">
                    <SobreMim/>
                </Route>
            </Switch>
        </BrowserRouter>
    )
}

export default Router