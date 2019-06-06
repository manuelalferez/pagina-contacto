import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./Component/Home/Home";
import Blog from "./Component/Blog/Blog";
import PageNotFound from "./Component/PageNotFound/PageNotFound";
import Contact from "./Component/Contact/Contact";
import Layout from "./Component/Layout/Layout";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/blog" component={Blog} />
          <Route component={PageNotFound} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;