import React from "react";
// import { useSelector } from "react-redux";
import { Redirect, Route, Switch } from "react-router-dom";
import Layout from "./containers/Layout/Layout";
import RegistrationPage from "./containers/RegisterPage/RegisterPage";
import AuthorizationPage from "./containers/AuthorizationPage/AuthorizationPage";
import AddPostPage from "./containers/AddPostPage/AddPostPage";
import ForumPage from "./containers/ForumPage/ForumPage";
import PostPage from "./containers/PostPage/PostPage";

const App = () => {
  return (
    <Layout>
      <Switch>
        <Redirect from="/" exact to="/posts" />
        <Route path="/register" exact component={RegistrationPage} />
        <Route path="/login" exact component={AuthorizationPage} />
        <Route path="/add_post" exact component={AddPostPage} />
        <Route path="/posts" exact component={ForumPage} />
        <Route path="/posts/:id" exact component={PostPage} />
      </Switch>
    </Layout>
  );
};

export default App;
