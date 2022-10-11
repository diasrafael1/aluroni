import Footer from "components/Footer";
import Header from "components/Header";
import MenuNav from "components/MenuNav";
import About from "pages/About";
import Home from "pages/Home";
import Menu from "pages/Menu";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function AppRouter() {
  return (
    <main>
      <BrowserRouter>
        <MenuNav />
        <Routes>
          <Route path="/" element={<Header />}>
            <Route index element={<Home />} />
            <Route path="cardapio" element={<Menu />} />
            <Route path="sobre" element={<About />} />
          </Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </main>
  );
}
