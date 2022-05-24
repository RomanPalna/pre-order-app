import { Route, Routes } from "react-router-dom";
import Navigation from "./components/Navigation/Navigation";
import PageNotFound from "./components/PageNotFound/PageNotFound";
import MainPage from "./components/Main/Main";
import Price from "./components/Price/Price";
import Order from "./components/Order/Order";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/price" element={<Price />} />
        <Route path="/order" element={<Order />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <ToastContainer />
    </>
  );
}

export default App;
