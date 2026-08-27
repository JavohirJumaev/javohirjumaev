import { BrowserRouter, Routes, Route } from "react-router-dom";
import Projects from "./pages/Projects"
import Home from "./pages/Home"
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {

  return (
    <>
      <BrowserRouter>
        <Header/>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
          </Routes>
        <Footer/>
    </BrowserRouter>
    </>
  )
}

export default App
