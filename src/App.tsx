import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from "./components";
import HomePage from "./pages/HomePage/HomePage";
import VariablesPage from "./pages/VariablesPage/VariablesPage";
import VariablePage from "./pages/VariablePage/VariablePage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <main className="container">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/variables" element={<VariablesPage />} />
          <Route path="/variables/:variableId" element={<VariablePage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
