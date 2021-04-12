import React, { useState, useEffect } from "react";

// Components imports
import Form from "../../components/common/Form/Form";
import { fruitsArray } from "../../api/FruitsAPI.js";

// Material ui components imports
import { Container } from "@material-ui/core";

const Home = () => {
  const [fruits, setFruits] = useState(null);

  useEffect(() => {
    const renderFruitNames = async () => {
      try {
        if (fruits === null) {
          setFruits(await fruitsArray);
        }
      } catch (error) {
        console.log("no fruits", error);
      }
    };

    renderFruitNames();
  }, [fruits]);

  return (
    <Container maxWidth="xl">
      <Form fruits={fruits} />
    </Container>
  );
};

export default Home;
