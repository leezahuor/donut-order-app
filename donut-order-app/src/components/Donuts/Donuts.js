import { Fragment } from "react";

import AvailableDonuts from "./AvailableDonuts";
import DonutSummary from "./DonutSummary";

function Donuts() {
  return (
    <Fragment>
      <DonutSummary />
      <AvailableDonuts />
    </Fragment>
  );
}

export default Donuts;
