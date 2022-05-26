import { useSelector } from "react-redux";
import Clock from "./Clock";
import EnterButton from "./EnterButton";
import "./main.css";

export default function MainPage() {
  const wellcome = useSelector((state) => state.wellcome.wellcome);
  return (
    <div>
      <Clock />
      {wellcome ? <></> : <EnterButton />}
    </div>
  );
}
