import React from "react";
import { Switch, Route, Redirect, useRouteMatch } from "react-router-dom";
import ActiceOrder from "../Components/Orders/Active/ActiveOrder";
import History from '../Components/Orders/History/OrderHistory'

export default function Router(props) {
    const { path } = useRouteMatch();

    return (
        <div>
            <Switch>
                <Route path={path} exact >
                    <ActiceOrder />
                </Route>
                <Route path={`${path}/active`} exact >
                    <ActiceOrder />
                </Route>
                <Route path={`${path}/history`} exact >
                    <History />
                </Route>
                <Redirect to={path} />
            </Switch>
        </div>
    );
}