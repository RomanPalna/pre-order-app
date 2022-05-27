export default function PriceHeader({ title }) {
  return (
    <>
      <caption className="price_dicription">{title}</caption>

      <thead>
        <tr>
          <th scope="col">Назва</th>
          <th scope="col">Об'єм</th>
          <th scope="col">Ціна</th>
          <th scope="col" className="price_quantity">
            Додати до замовлення
          </th>
        </tr>
      </thead>
    </>
  );
}
