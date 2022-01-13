import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export function ProductsDetails() {
  const { id } = useParams();
  const [data, setData] = useState();

  useEffect(() => {
    console.log(id);
    fetchProdDetails();
  }, []);
  const fetchProdDetails = () => {
    try {
      return fetch(`http://localhost:3001/products/${id}`)
        .then((res) => {
          return res.json();
        })
        .then((res) => {
          res.name ? setData(res) : setData(null);
        });
    } catch (err) {
      console.log(err);
    }
  };
  return data ? (
    <>
      <h4>This is the Products Detail Page</h4>
      <div style={{ border: "1px solid black", margin: "2rem" }}>
        <i>Product id is {data.id}</i>
        <h3>Name of the Product: {data.name} </h3>
        <h4>Price: {data.price}</h4>
      </div>
    </>
  ) : (
    <h1>404 Product Not Found</h1>
  );
}
