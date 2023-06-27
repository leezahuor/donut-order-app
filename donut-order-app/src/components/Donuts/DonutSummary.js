import classes from "./DonutSummary.module.css";

function DonutSummary() {
  return (
    <section className={classes.summary}>
      <h2>Delicious Donuts</h2>
      <p>Choose your favorite donuts from out broad selection!</p>
      <p>All of our donuts are made with the highest-quality ingredients!</p>
    </section>
  );
}

export default DonutSummary;
