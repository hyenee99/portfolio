import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./layout/Layout";
import MainPage from "./pages/Main";
import AlbaSchool from "./pages/AlbaSchool";
import Desserbee from "./pages/Desserbee";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/albaschool" element={<AlbaSchool />} />
          <Route path="/desserbee" element={<Desserbee />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
