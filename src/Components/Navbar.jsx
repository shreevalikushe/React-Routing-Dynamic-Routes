import { Link } from "react-router-dom";

export function Navbar() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        gap: "1rem",
        justifyContent: "center",
      }}
    >
      <Link to="/">Home Page</Link>
      <Link to="/products">Products Page</Link>
    </div>
  );
}
