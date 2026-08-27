import { BrowserRouter, Routes, Route } from "react-router-dom";
import Projects from "./pages/Projects"
import Home from "./pages/Home"
import Header from "./components/Header";
import Footer from "./components/Footer";
import Experience from "./pages/Experience";
import Blog from "./pages/Blog";

function App() {

  return (
    <>
      <BrowserRouter>
        <Header/>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/experience" element={<Experience/>}/>
            <Route path="/blog" element={<Blog/>}/>
          </Routes>
        <Footer/>
    </BrowserRouter>
    </>
  )
}

export default App
