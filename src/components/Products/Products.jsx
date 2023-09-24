import React from "react";
import { Grid } from "@material-ui/core";
import Product from "./Product/Product";
import useStyles from "./styles";

const products = [
  {
    id: 1,
    name: "Shoes",
    description: "Running shoes.",
    price: "$5",
    image:
      "https://media.gq-magazine.co.uk/photos/64d4c75cec043c4e3762c817/master/w_1600,c_limit/Jordan%202.jpg",
  },
  {
    id: 2,
    name: "Macbook",
    description: "Apple Macbook.",
    price: "$25",
    image:
      "https://cdn.mos.cms.futurecdn.net/Nos3e7TU4vQJUeGF7jkrBd-970-80.jpg.webp",
  },
];

const Products = () => {
  const classes = useStyles();
  
  return (
    <main className={classes.content}>
      <div className={classes.toolbar} />
      <Grid container justify="center" spacing={4}>
        {products.map((product) => (
          <Grid key={product.id} item xs={12} sm={8} md={4} lg={3}>
            <Product product={product} />
          </Grid>
        ))}
      </Grid>
    </main>
  );
};

export default Products;
