import { useSelector } from "react-redux";
import QuoteList from "../components/quotes/QuoteList";

function AllQuotes() {
  const quotes = useSelector((state) => state);

  return <QuoteList quotes={quotes} />;
}

export default AllQuotes;
