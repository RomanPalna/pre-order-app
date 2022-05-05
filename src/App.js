import { Route, Routes } from "react-router-dom";
import Navigation from "./components/Navigation/Navigation";
import PageNotFound from "./components/PageNotFound/PageNotFound";
import Clock from "./components/Main/Main";
import Price from "./components/Price/Price";

function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<Clock />} />
        <Route path="/price" element={<Price />} />
        <Route path="/order" element={<div>Заглушка Order</div>} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
}

export default App;
