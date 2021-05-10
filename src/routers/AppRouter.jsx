import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import LoginScreen from "../components/LoginScreen";

import SearchScreen from "../components/Private/SearchScreen";
import HeroScreen from "../components/Private/HeroScreen";
import HomePrivateScreen from "../components/Private/HomePrivateScreen";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { startChecking } from "../action/auth";


const AppRouter = () => {

    const dispatch = useDispatch()
    
    const { logged } = useSelector(state => state.auth)
    
    useEffect(() => {
        dispatch(startChecking())
    }, [dispatch])
    
    
    return (
        <BrowserRouter>
            {
                (logged) ? (
                    <Switch>
                        <Route exact path="/search" component={SearchScreen} />
                        <Route exact path="/heroe/:heroId" component={HeroScreen} />
                        <Route path="/" component={HomePrivateScreen} />
                        <Redirect to='/' />
                    </Switch>
                ) : (
                    <Switch>
                        <Route exact path='/login' component={LoginScreen} />
                        <Redirect to='/login' />                        
                    </Switch>
                )
            }
        </BrowserRouter>
    )
}

export default AppRouter