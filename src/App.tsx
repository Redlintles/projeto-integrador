import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Rodizio from "./pages/Rodizio/Rodizio";
import { ModalContextProvider } from "./context/RodizioContext";
function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <main>
          <ModalContextProvider>
            <Routes>
              <Route path="/" element={<Rodizio />} />
            </Routes>
          </ModalContextProvider>
        </main>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
