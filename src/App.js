import { Route, Routes } from "react-router-dom";
import Navigation from "./components/Navigation/Navigation";

function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<div>Заглушка Main</div>} />
        <Route path="/price" element={<div>Заглушка Price</div>} />
        <Route path="/order" element={<div>Заглушка Order</div>} />
        <Route path="*" element={<p>Page not Found</p>} />
      </Routes>
    </>
  );
}

export default App;
