import { Route, Switch, Redirect } from "react-router-dom";
import AllQuotes from "./pages/all-quotes";
import QuoteDetail from "./pages/quote-detail";
import NewQuote from "./pages/new-quote";
import Layout from "./components/layout/Layout";
import NotFound from "./pages/not-found";

function App() {
  return (
    <Layout>
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
    </Layout>
  );
}

export default App;
