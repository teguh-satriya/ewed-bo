import React, { useRef } from "react";
import { Switch, Route } from "./Routing";
import { types } from "mobx-state-tree";
import _ from "lodash";

const RouteStateModel = types
    .model({
        rootPaths: types.array(types.string)
    })
    .actions((self) => ({
        setRootPaths: (rootPaths) => {
        self.rootPaths = rootPaths;
        }
    })
);

export const RouteState = RouteStateModel.create();

export default (p) => {
    const componentRef = useRef({});
    return (
        <Switch>
        {Object.keys(p.routes).map((route) => {
            if (!componentRef.current[route]) {
                if (typeof p.routes[route] === "function") {
                    componentRef.current[route] = p.routes[route];
                } else {
                    componentRef.current[route] = () => p.routes[route];
                }
            }
            
            return (
                <Route
                    hideNavBar={true}
                    exact={true}
                    key={route}
                    path={route}
                    component={componentRef.current[route]}
                />
            );
        })}
        </Switch>
    );
}