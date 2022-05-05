import list from "../../bottles.json";
import PriceList from "./PriceList/PriceList";

export default function Price() {
  return (
    <ul>
      {list.map((bottle) => (
        <PriceList key={bottle.id} param={bottle} />
      ))}
    </ul>
  );
}
