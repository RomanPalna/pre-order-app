import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { getToOrder } from "../../../redux/toOrder/toOrder-action";

export default function PriceList({ param }) {
  const [check, setCheck] = useState(false);

  const { id, name, liters, price } = param;

  const handleCheck = () => {
    setCheck(!check);
  };

  const dispatch = useDispatch();

  useEffect(() => {
    if (check) {
      dispatch(
        getToOrder({
          id,
          name,
          liters,
          price,
        })
      );
    }
  }, [check, dispatch, id, liters, name, price]);

  return (
    <tr>
      <th scope="row" className="price_name">
        {name}
      </th>
      <td>{liters} л.</td>
      <td>{price} грн.</td>
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
