import { Route, Switch, Redirect } from "react-router-dom";
import React, { Suspense } from "react";
import LoadingSpinner from "./components/UI/LoadingSpinner";
import Layout from "./components/layout/Layout";

const AllQuotes = React.lazy(() => import("./pages/all-quotes"));
const QuoteDetail = React.lazy(() => import("./pages/quote-detail"));
const NewQuote = React.lazy(() => import("./pages/new-quote"));
const NotFound = React.lazy(() => import("./pages/not-found"));

function App() {
  return (
    <Layout>
      <Suspense
        fallback={
          <div className="centered">
            <LoadingSpinner />
          </div>
        }>
        <Switch>
          <Route
            path="/"
            exact>
            <Redirect to="/quotes" />
          </Route>
          <Route
            path="/quotes"
            exact>
            <AllQuotes />
          </Route>
          <Route path="/quotes/:quoteId">
            <QuoteDetail />
          </Route>
          <Route path="/new-quote">
            <NewQuote />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </Suspense>
    </Layout>
  );
}

export default App;
