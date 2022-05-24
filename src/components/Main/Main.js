import { useSelector } from "react-redux";
import Clock from "./Clock";
import EnterButton from "./EnterButton";

export default function MainPage() {
  const wellcome = useSelector((state) => state.wellcome.wellcome);
  return (
    <div>
      <Clock />
      {wellcome ? <></> : <EnterButton />}
    </div>
  );
}
