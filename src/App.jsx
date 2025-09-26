import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import Contact from './pages/Contact'
import Navbar from './components/Navbar/Navbar'
import Skills from './pages/Skills'
import Footer from './components/Footer/Footer'


const App = () => {
  return (
   <>
    <div className='bg-slate-950 py-10'>
      <Navbar />
      <div id="home"><Home /></div>
      <div id="about"><About /></div>
      <div id="skills"><Skills /></div>
      <div id="projects"><Projects /></div>
      <div id="contact"><Contact /></div>
      <Footer />
    </div>
   </>
  )
}

export default App
