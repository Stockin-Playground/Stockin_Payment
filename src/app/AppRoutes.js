import React, { Component, Suspense, lazy } from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import Spinner from "./screen/shared/Spinner";

const Dashboard = lazy(() => import("./screen/dashboard"));

const Client = lazy(() => import("./screen/client"));
const InvoiceTable = lazy(() => import("./screen/invoice"));

const Error404 = lazy(() => import("./screen/error-pages/Error404"));
const Error500 = lazy(() => import("./screen/error-pages/Error500"));

const Login = lazy(() => import("./screen/user/Login"));
const Register1 = lazy(() => import("./screen/user/Register"));

class AppRoutes extends Component {
  render() {
    return (
      <Suspense fallback={<Spinner />}>
        <Switch>
          <Route exact path="/dashboard" component={Dashboard} />

          <Route path="/tables/basic-table" component={Client} />
          <Route path="/tables/invoice-table" component={InvoiceTable} />

          <Route path="/user-pages/login-1" component={Login} />
          <Route path="/user-pages/register-1" component={Register1} />

          <Route path="/error-pages/error-404" component={Error404} />
          <Route path="/error-pages/error-500" component={Error500} />

          <Redirect to="/dashboard" />
        </Switch>
      </Suspense>
    );
  }
}

export default AppRoutes;
