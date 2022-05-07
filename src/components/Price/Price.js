import list from "../../bottles.json";
import PriceList from "./PriceList/PriceList";
import "./price.css";

export default function Price() {
  return (
    <div className="price">
      <table>
        <caption>
          Виберіть позицію зі списка, введіть кількість та тисніть "Додати в
          замовлення" - "+"
        </caption>

        <thead>
          <tr>
            <th scope="col">Назва</th>
            <th scope="col">Об'єм</th>
            <th scope="col">Ціна</th>
            <th scope="col">Кількість</th>
          </tr>
        </thead>

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
