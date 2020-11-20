import React from "react";
// import { useSelector } from "react-redux";
import { Redirect, Route, Switch } from "react-router-dom";
import Layout from "./containers/Layout/Layout";
import RegistrationPage from "./containers/RegisterPage/RegisterPage";
// import HomePage from "./containers/HomePage/HomePage";
import AuthorizationPage from "./containers/AuthorizationPage/AuthorizationPage";
import AddPostPage from "./containers/AddPostPage/AddPostPage";

const App = () => {
  return (
    <Layout>
      <Switch>
        <Redirect from="/" exact to="/posts"></Redirect>
        <Route path="/register" exact component={RegistrationPage} />
        <Route path="/login" exact component={AuthorizationPage} />
        <Route path="/add_post" exact component={AddPostPage} />
      </Switch>
    </Layout>
  );
};

export default App;
