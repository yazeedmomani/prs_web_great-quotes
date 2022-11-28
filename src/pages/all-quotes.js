import QuoteList from "../components/quotes/QuoteList";

const DUMMY_DATA = [
  {
    id: "q1",
    author: "Max",
    text: "Fuck you Omar! 😁",
  },
  {
    id: "q2",
    author: "Yazeed",
    text: "Fuck you Omar! 💖",
  },
  {
    id: "q3",
    author: "Omar",
    text: "Fuck me!",
  },
];

function AllQuotes() {
  return <QuoteList quotes={DUMMY_DATA} />;
}

export default AllQuotes;
