import { ReactComponent as AddButton } from "../../../images/add-button.svg";

export default function PriceList({ param }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submit");
  };

  return (
    <li>
      <p>{param.name}</p>
      <p>{param.liters} л.</p>
      <p>{param.price} грн.</p>
      <form onSubmit={handleSubmit}>
        <input name="Кількість" type="number"></input>
        <button>
          <AddButton width="24" height="24" />
        </button>
      </form>
    </li>
  );
}
