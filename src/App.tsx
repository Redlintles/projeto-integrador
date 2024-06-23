import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Rodizio from "./pages/Rodizio/Rodizio";
import { ModalContextProvider } from "./context/RodizioContext";
import Menu from "./pages/Menu/Menu";
import Login from "./pages/Login/Login";
function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <main>
          <ModalContextProvider>
            <Routes>
              <Route path="/rodizio" element={<Rodizio />} />
              <Route path="/menu" element={<Menu />} />
              <Route path="/login" element={<Login />} />
            </Routes>
          </ModalContextProvider>
        </main>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
