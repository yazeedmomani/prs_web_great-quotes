import { Fragment } from "react";

import QuoteItem from "./QuoteItem";
import classes from "./QuoteList.module.css";
import { useHistory, useLocation } from "react-router-dom";

const QuoteList = (props) => {
  const history = useHistory();
  const location = useLocation();

  const urlParams = new URLSearchParams(location.search);
  const isAscending = urlParams.get("sort") === "asc";

  const sortHandler = function (e) {
    e.preventDefault();
    history.push(`/quotes?sort=${isAscending ? "desc" : "asc"}`);
  };

  return (
    <Fragment>
      <div className={classes.sorting}>
        <button onClick={sortHandler}>{`Sort ${
          isAscending ? "Descending" : "Ascending"
        }`}</button>
      </div>
      <ul className={classes.list}>
        {props.quotes.map((quote) => (
          <QuoteItem
            key={quote.id}
            id={quote.id}
            author={quote.author}
            text={quote.text}
          />
        ))}
      </ul>
    </Fragment>
  );
};

export default QuoteList;
