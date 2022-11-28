import classes from "./Comments.module.css";

const Comments = () => {
  const btn = (e) => {
    e.preventDefault();
    alert("This function does not work");
  };

  return (
    <section className={classes.comments}>
      <h2>User Comments</h2>

      <button
        className="btn"
        onClick={btn}>
        Add a Comment
      </button>

      <p>Comments...</p>
    </section>
  );
};

export default Comments;
