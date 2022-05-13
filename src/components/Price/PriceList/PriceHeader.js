import AddButton from "../../../images/add-button.svg";

export default function PriceHeader() {
  return (
    <>
      <caption className="price_dicription">
        Виберіть позицію зі списка, введіть кількість та тисніть{" "}
        <img src={AddButton} width="24" height="24" />
        <p>Для зручності користуйтеся пошуком.</p>
      </caption>

      <thead>
        <tr>
          <th scope="col">Назва</th>
          <th scope="col">Об'єм</th>
          <th scope="col">Ціна</th>
          <th scope="col" className="price_quantity">
            Кількість
          </th>
        </tr>
      </thead>
    </>
  );
}