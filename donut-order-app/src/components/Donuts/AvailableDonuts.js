import { useEffect, useState } from "react";

import classes from "./AvailableDonuts.module.css";
import Card from "../UI/Card";
import DonutItem from "./DonutItem/DonutItem";

// const DUMMY_DONUTS = [
//   {
//     id: "d1",
//     name: "Cake",
//     price: 1.5,
//   },
//   {
//     id: "d2",
//     name: "Glaze",
//     price: 2.0,
//   },
//   {
//     id: "d3",
//     name: "Jelly",
//     price: 2.75,
//   },
//   {
//     id: "d4",
//     name: "Old-Fashioned",
//     price: 2.0,
//   },
// ];

function AvailableDonuts() {
  const [donuts, setDonuts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [httpError, setHttpError] = useState();

  useEffect(() => {
    const fetchDonuts = async () => {
      const response = await fetch(
        "https://donut-shop-e1b42-default-rtdb.firebaseio.com/donuts.json"
      );

      if (!response.ok) {
        throw new Error("Oops, something went wrong!");
      }
      const responseData = await response.json();

      const loadedDonuts = [];

      for (const key in responseData) {
        loadedDonuts.push({
          id: key,
          name: responseData[key].name,
          price: responseData[key].price,
        });
      }

      setDonuts(loadedDonuts);
      setIsLoading(false);
    };

    // try {
    //   fetchDonuts();
    // } catch (error) {
    //   setIsLoading(false);
    //   setHttpError(error.message);
    // }

    fetchDonuts().catch((error) => {
      setIsLoading(false);
      setHttpError(error.message);
    });
  }, []);

  if (isLoading) {
    return (
      <section className={classes.loading}>
        <p>Loading...</p>
      </section>
    );
  }

  if (httpError) {
    return (
      <section className={classes.error}>
        <p>{httpError}</p>
      </section>
    );
  }

  const donutsList = donuts.map((donut) => (
    <DonutItem
      key={donut.id}
      id={donut.id}
      name={donut.name}
      price={donut.price}
    />
  ));

  return (
    <section className={classes.donuts}>
      <Card>
        <ul>{donutsList}</ul>
      </Card>
    </section>
  );
}

export default AvailableDonuts;
