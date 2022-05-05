import { Route, Routes } from "react-router-dom";
import Navigation from "./components/Navigation/Navigation";
import PageNotFound from "./components/PageNotFound/PageNotFound";

function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<div>Заглушка Main</div>} />
        <Route path="/price" element={<div>Заглушка Price</div>} />
        <Route path="/order" element={<div>Заглушка Order</div>} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
}

export default App;
