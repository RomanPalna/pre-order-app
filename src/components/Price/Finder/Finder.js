import "./finder.css";

export default function Finder({ value, finder }) {
  return (
    <form className="price_filter">
      <span className="price_filter--name">Пошук</span>
      <input
        className="price_filter--input"
        name="finder"
        value={value}
        onChange={finder}
        type="text"
      />
    </form>
  );
}
