import React from "react";
import { Switch, Route, Redirect } from 'react-router-dom'
import Header from "../Components/Shared/Header"
import Login from "../Components/Login/Login";
import Home from "../Components/Home/Home"
import Order from "../Components/Orders/Order";
import Users from "../Components/User/User";
import Account from "../Components/Account/Account";

function LoggedInRouter() {
    return (
        <>
            <Header />
            <Switch>
                <Route path="/" exact>
                    <Home />
                </Route>
                <Route path="/order">
                    <Order />
                </Route>
                <Route path="/users" exact>
                    <Users />
                </Route>
                <Route path="/u" exact>
                    <Account />
                </Route>
                <Redirect to="/" />
            </Switch>
        </>
    );
}

function LoggedOutRouter() {
    return (
        <>
            <Header />
            <Switch>
                <Route path="/login" exact>
                    <Login />
                </Route>
                <Redirect to="/login" />
            </Switch>
        </>
    );
}

export { LoggedInRouter, LoggedOutRouter };
