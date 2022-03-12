import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Home from './components/pages/Home'
import Company from './components/pages/Company'
import NewProject from './components/pages/NewProject'
import Contact from './components/pages/Contact'
import Projects from './components/pages/Projects'

import Container from './components/layout/Container'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'

function App() {
  return (
    <Router>
      <Navbar>
      </Navbar>

      <Container customClass="min_height">
      <Routes>
          <Route path="/" element={<Home />}> </Route>
        </Routes>
        <Routes>
          <Route path="/projects" element={<Projects />}> </Route>
        </Routes>
        <Routes>
          <Route path="/company" element={<Company />}> </Route>
        </Routes>
        <Routes>
          <Route path="/contact" element={<Contact />}> </Route>
        </Routes>
        <Routes>
          <Route path="/newproject" element={<NewProject />}> </Route>
        </Routes>
      </Container>
        
      <Footer/>
    </Router>
  );
}

export default App;
