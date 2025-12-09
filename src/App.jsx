import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { ThunkPage } from "./pages/ThunkPage";
import { RTKQueryPage } from "./pages/RTKQueryPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/redux-thunk" element={<ThunkPage />} />
        <Route path="/rtk-query" element={<RTKQueryPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
