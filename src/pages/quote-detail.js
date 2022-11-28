import { useParams, Route } from "react-router-dom";
import { Fragment } from "react";
import Comments from "../components/comments/Comments";

function QuoteDetail() {
  const param = useParams();

  return (
    <Fragment>
      <h1>{param.quoteId}</h1>;
      <Route path={`/quotes/${param.quoteId}/comments`}>
        <Comments />
      </Route>
    </Fragment>
  );
}

export default QuoteDetail;
