import { useSelector } from "react-redux";
import Clock from "./Clock";
import EnterButton from "./EnterButton";
import Container from "../Container/Container";
import "./main.css";

export default function MainPage() {
  const wellcome = useSelector((state) => state.wellcome.wellcome);
  return (
    <div>
      <Container>
        <Clock />
      </Container>

      {wellcome ? <></> : <EnterButton />}
    </div>
  );
}
