import {
  Routes,
  Route,
} from "react-router-dom";

import Header from "./components/Header";
import HomePage from "./pages/Home";
import ProductDetailPage from "./pages/ProductDetail";
import TodosPage from "./pages/Todos";

import './App.css';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/todos" element={<TodosPage />} />
        <Route path="/product/:id" element={<ProductDetailPage />} />
      </Routes>
    </>

  );
}

export default App;
