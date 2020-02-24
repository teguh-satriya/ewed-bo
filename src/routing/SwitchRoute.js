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
            {!p.routes["/"] && (
                <Route
                hideNavBar={true}
                exact={true}
                key={"/"}
                path={"/"}
                component={({ history }) => {
                    if (p.ready) {
                    if (p.role) {
                        const role = _.get(p.roles, p.role);
                        if (role) {
                        history.replace(_.keys(role)[0]);
                        }
                    } else {
                        history.replace("/login");
                    }
                    }
                    return <label>Welcome!</label>;
                }}
                />
            )}
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
            {_.map(p.roles, (routes, role) =>
                _.map(routes, (component, path) => {
                return (
                    <Route
                        hideNavBar={true}
                        exact={true}
                        key={path}
                        path={path}
                        component={({ history, location }) => {
                            const ready = p.ready === undefined || p.ready;
                            if (
                                ready &&
                                role !== p.role &&
                                location.pathname !== "/login"
                            ) 
                            {
                                history.replace("/login");
                                return "";
                            }
                            return component;
                        }}
                    />
                );
                })
            )}
        </Switch>
    );
}