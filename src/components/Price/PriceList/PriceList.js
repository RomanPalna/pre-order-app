import { useState } from "react";

export default function PriceList({ param }) {
  const [check, setCheck] = useState(false);

  const handleCheck = () => {
    setCheck(!check);
  };

  console.log(check);

  return (
    <tr>
      <th scope="row" className="price_name">
        {param.name}
      </th>
      <td>{param.liters} л.</td>
      <td>{param.price} грн.</td>
      <td>
        <label className="price_item--form">
          <input
            className="price_input"
            name="check"
            type="checkbox"
            value={check}
            onChange={handleCheck}
          ></input>
          <span className="checkbox"></span>
        </label>
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
