import { useState } from "react";
import list from "../../bottles.json";
import PriceList from "./PriceList/PriceList";
import PriceHeader from "./PriceList/PriceHeader";
import Finder from "./Finder/Finder";
import Markup from "./Markup/Markup";
import "./price.css";

export default function Price() {
  const [filter, setFilter] = useState("");

  const handleChangeFinder = (e) => setFilter(e.currentTarget.value);

  const showBottle = () => {
    const normalizeName = filter.toLowerCase();

    return list
      ? list.filter((bottle) =>
          bottle.name.toLowerCase().includes(normalizeName)
        )
      : console.log("Loading");
  };

  return (
    <div className="price">
      <Finder value={filter} finder={handleChangeFinder} />
      <Markup />
      <table>
        <PriceHeader />

        <tbody>
          {showBottle().map((bottle) => (
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
