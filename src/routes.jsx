import Header from "components/Header";
import MenuNav from "components/MenuNav";
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
          </Route>
        </Routes>
      </BrowserRouter>
    </main>
  );
}
