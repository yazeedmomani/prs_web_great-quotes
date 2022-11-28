import { useRef, useState } from "react";
import { useDispatch } from "react-redux";

import Card from "../UI/Card";
import LoadingSpinner from "../UI/LoadingSpinner";
import classes from "./QuoteForm.module.css";
import { quoteActions } from "../../store/redux";
import { useHistory, Prompt } from "react-router-dom";
import { isRejected } from "@reduxjs/toolkit";

const QuoteForm = (props) => {
  const authorInputRef = useRef();
  const textInputRef = useRef();
  const dispatch = useDispatch();
  const history = useHistory();
  const [isTouched, setIsTouched] = useState(false);
  let enteredAuthor;
  let enteredText;

  function changeHandler() {
    enteredText = textInputRef.current.value;
    enteredAuthor = authorInputRef.current.value;
    if (!enteredText && !enteredAuthor && isTouched === true) {
      setIsTouched(false);
    }
    if ((enteredText || enteredAuthor) && isTouched === false) {
      setIsTouched(true);
    }
  }

  function textChange() {
    changeHandler();
  }

  function authChange() {
    changeHandler();
  }

  function submitFormHandler(event) {
    event.preventDefault();

    // optional: Could validate here
    enteredText = textInputRef.current.value;
    enteredAuthor = authorInputRef.current.value;
    if (
      !enteredAuthor ||
      !enteredText ||
      !enteredAuthor.trim().length ||
      !enteredText.trim().length
    ) {
      alert("Invalid Input");
      return;
    }

    dispatch(
      quoteActions.addQuote({ author: enteredAuthor, text: enteredText })
    );

    history.push("/quotes");
  }

  function clickHandler() {
    setIsTouched(false);
  }

  console.log(isTouched);

  return (
    <Card>
      <Prompt
        when={isTouched}
        message="Are you sure you want leave? All your changes will be lost."
      />
      <form
        className={classes.form}
        onSubmit={submitFormHandler}>
        {props.isLoading && (
          <div className={classes.loading}>
            <LoadingSpinner />
          </div>
        )}

        <div className={classes.control}>
          <label htmlFor="author">Author</label>
          <input
            type="text"
            id="author"
            ref={authorInputRef}
            onChange={authChange}
          />
        </div>
        <div className={classes.control}>
          <label htmlFor="text">Text</label>
          <textarea
            id="text"
            rows="5"
            ref={textInputRef}
            onChange={textChange}></textarea>
        </div>
        <div className={classes.actions}>
          <button
            onClick={clickHandler}
            className="btn">
            Add Quote
          </button>
        </div>
      </form>
    </Card>
  );
};

export default QuoteForm;
