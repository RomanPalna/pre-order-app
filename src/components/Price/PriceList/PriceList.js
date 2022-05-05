import { useState } from "react";
import { ReactComponent as AddButton } from "../../../images/add-button.svg";

export default function PriceList({ param }) {
  const [quantity, setQuantity] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setQuantity("");
  };

  const handleChange = (e) => {
    setQuantity(e.currentTarget.value);
  };

  console.log(quantity);
  return (
    <li>
      <p>{param.name}</p>
      <p>{param.liters} л.</p>
      <p>{param.price} грн.</p>
      <form onSubmit={handleSubmit}>
        <input
          name="Quantity"
          type="number"
          value={quantity}
          onChange={handleChange}
        ></input>
        <button type="submit">
          <AddButton width="24" height="24" />
        </button>
      </form>
    </li>
  );
}
