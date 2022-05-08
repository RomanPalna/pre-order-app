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
    <tr>
      <th scope="row" className="price_name">
        {param.name}
      </th>
      <td>{param.liters} л.</td>
      <td>{param.price} грн.</td>
      <td>
        <form className="price_item--form" onSubmit={handleSubmit}>
          <input
            className="price_input"
            name="Quantity"
            type="number"
            value={quantity}
            onChange={handleChange}
          ></input>
          <button className="price_item--button" type="submit">
            <AddButton width="24" height="24" />
          </button>
        </form>
      </td>
    </tr>
  );
}

//  <li className="price_item">

/* <p>{param.name}</p> */

/* <p>{param.liters} л.</p> */

/* <p className="price_item--name">{param.price} грн.</p> */

/* <form className="price_item--form" onSubmit={handleSubmit}> */

/* <input */

// className="price_input"
// name="Quantity"
// type="number"
// value={quantity}
// onChange={handleChange}
// ></input>

/* <button className="price_item--button" type="submit"> */

/* <AddButton width="24" height="24" /> */

/* </button> */

/* </form> */

/* </li> */
