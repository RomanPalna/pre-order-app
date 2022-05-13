import { useState } from "react";
import { toast } from "react-toastify";

export default function Markup() {
  const [percent, setPercent] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(percent);
    toast(`Націнка встановлена на рівні ${percent}%`);
    setPercent("");
  };

  const handleChange = (e) => setPercent(e.target.value);

  return (
    <div>
      <p>Введіть процент націнки</p>
      <form onSubmit={handleSubmit}>
        <input type="number" value={percent} onChange={handleChange} />
      </form>
    </div>
  );
}
