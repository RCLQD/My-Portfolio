import {Navbar} from "./components/navbar"
import Footer from "./components/footer"
import Home from "./pages/home"
import About from "./pages/about"
import Portfolio from "./pages/portfolio"

export default function App() {
  return(
    <>
    {/* nav */}
      <Navbar />

    {/* maincon */}
      <Home />
      <About />
      <Portfolio />

    {/* footer */}
      <Footer />
    </>
  )
}