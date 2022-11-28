import { useParams, Route, useHistory } from "react-router-dom";
import { Fragment } from "react";
import Comments from "../components/comments/Comments";
import { useSelector } from "react-redux";
import HighlightedQuote from "../components/quotes/HighlightedQuote";

function QuoteDetail() {
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
      <Route path={`/quotes/${param.quoteId}/comments`}>
        <Comments />
      </Route>
    </Fragment>
  );
}

export default QuoteDetail;
