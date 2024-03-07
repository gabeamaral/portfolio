import Header from './components/Header/Header'
import Home from './components/Home/Home'
import Footer from './components/Footer/Footer'
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import './App.css'

function App() {
  return (
    <>
      <Header />
      <Home />
      <About />
      <div id="projects">
        <h2>New projects coming soon.. 🤠</h2>
      </div>
      <Contact />
      <Footer />
    </>
  )
}

export default App
