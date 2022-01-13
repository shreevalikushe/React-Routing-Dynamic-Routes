import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export function Products() {
  const [items, setItems] = useState([]);
  useEffect(() => {
    getProducts();
  }, []);
  const getProducts = () => {
    return fetch("http://localhost:3001/products")
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        setItems(res);
      });
  };
  return (
    <div>
      <h1>Products Page</h1>
      <h3>List of available items</h3>
      <div>
        {items.map((e) => {
          return (
            <div
              key={e.id}
              style={{
                border: "1px solid black",
                display: "flex",
                flexDirection: "column",
                margin: "auto",
                width: "250px",
              }}
            >
              <Link to={`/products/${e.id}`}>
                {" "}
                <h4>Name: {e.name}</h4>
              </Link>
              {/* <h5>Price:{e.price}</h5> */}
            </div>
          );
        })}
      </div>
    </div>
  );
}
