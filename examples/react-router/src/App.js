import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import HomePage from "./pages/Home";
import VideoDetailPage from "./pages/VideoDetail";

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/profile/:userName" element={<HomePage />} />
        <Route path="/about" element={<HomePage />} />
        <Route path="/detail/:id" element={<VideoDetailPage />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
