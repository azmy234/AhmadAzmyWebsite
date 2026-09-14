import HomePage from "./pages/HomePage";
import { Routes, Route } from "react-router-dom";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    window.history.scrollRestoration = "manual";
    window.scrollTo(0, 0);
  }, []);
  return (
    <Routes>
      <Route path="" element={<HomePage />} />
    </Routes>
  );
}

export default App;
