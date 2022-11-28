import QuoteForm from "../components/quotes/QuoteForm";

function NewQuote() {
  const addQuoteHandler = function (data) {
    console.log(data);
  };

  return <QuoteForm onAddQuote={addQuoteHandler} />;
}

export default NewQuote;
