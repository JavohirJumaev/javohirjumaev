import { BrowserRouter, Routes, Route } from "react-router-dom";
import Projects from "./pages/Projects"
import Home from "./pages/Home"
import Header from "./components/Header";
import Footer from "./components/Footer";
import Experience from "./pages/Experience";

function App() {

  return (
    <>
      <BrowserRouter>
        <Header/>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/experience" element={<Experience/>}/>
          </Routes>
        <Footer/>
    </BrowserRouter>
    </>
  )
}

export default App
