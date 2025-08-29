
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/home/Home'
import Navbar from './components/navbar/Navbar'
import Footer from './components/footer/Footer'
import Teste from './pages/teste/Teste'

function App() {
  //const [count, setCount] = useState(0)

  return (
    <>
        <BrowserRouter>
          <Navbar />
          <div className="min-h-[80vh]">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/home" element={<Home />} />

              <Route path="/teste" element={<Teste />} />


            </Routes>
          </div>
          <Footer />
        </BrowserRouter>
    </>
  )
}

export default App
