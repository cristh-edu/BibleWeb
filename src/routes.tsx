import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { NotFound } from "./pages/NotFound";
import { Bible } from "./pages/Bible";

export default function AppRouter() {
  return (
    <main>
      <Router>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/version/:id" element={<Bible />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </main>
  );
}
