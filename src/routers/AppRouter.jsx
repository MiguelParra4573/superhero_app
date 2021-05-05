import React from 'react'
import { BrowserRouter, Route, Switch } from "react-router-dom";
import HomeScreen from "../components/HomeScreen";
import LoginScreen from "../components/LoginScreen";
import NavBar from "../components/ui/NavBar";



const AppRouter = () => {
    return (
        <BrowserRouter>
            <NavBar />
            <Switch>
                <Route exact path="/login" component={LoginScreen} />
                <Route exact path="/" component={HomeScreen} />
            </Switch>
            
        </BrowserRouter>
    )
}

export default AppRouter
