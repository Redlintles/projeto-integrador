import { BrowserRouter,Routes,Route } from 'react-router-dom'
import './App.css'
import Header from './components/Header';
import Footer from './components/Footer';
import Rodizio from './pages/Rodizio/Rodizio';

function App() {


  return (
    <>
     <BrowserRouter>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Rodizio/>} />
        </Routes>
      </main>
        <Footer />
     </BrowserRouter>
    </>
  )
}

export default App
