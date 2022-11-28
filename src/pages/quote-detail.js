import {
  useParams,
  Route,
  useHistory,
  Link,
  useRouteMatch,
} from "react-router-dom";
import { Fragment } from "react";
import Comments from "../components/comments/Comments";
import { useSelector } from "react-redux";
import HighlightedQuote from "../components/quotes/HighlightedQuote";

function QuoteDetail() {
  const match = useRouteMatch();
  const param = useParams();
  const history = useHistory();

  const [quotes] = useSelector((state) => state).filter(
    (cur) => cur.id === param.quoteId
  );

  if (!quotes) {
    history.push("/404");
    return;
  }

  return (
    <Fragment>
      <HighlightedQuote
        text={quotes.text}
        author={quotes.author}
      />
      <Route
        path={`${match.path}`}
        exact>
        <div className="centered">
          <Link
            to={`${match.url}/comments`}
            className="btn--flat">
            Load Comments
          </Link>
        </div>
      </Route>
      <Route path={`${match.path}/comments`}>
        <Comments />
      </Route>
    </Fragment>
  );
}

export default QuoteDetail;
