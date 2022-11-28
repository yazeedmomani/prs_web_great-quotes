import { useParams } from "react-router-dom";

function QuoteDetail() {
  const param = useParams();

  return <h1>{param.quoteId}</h1>;
}

export default QuoteDetail;
