import list from "../../bottles.json";
import PriceList from "./PriceList/PriceList";
import PriceHeader from "./PriceList/PriceHeader";
import "./price.css";

export default function Price() {
  return (
    <div className="price">
      <table>
        <PriceHeader />
        <tbody>
          {list.map((bottle) => (
            <PriceList key={bottle.id} param={bottle} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

// <div className="price">
//     <ul className="price_list">
//       {list.map((bottle) => (
//         <PriceList key={bottle.id} param={bottle} />
//       ))}
//     </ul>
//   </div>
