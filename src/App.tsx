import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import ProjectDetails from "./pages/ProjectDetails"
import './styles/custom.css'
import { SITE_URL } from "./constants/dados"

function App() {
  return (
    <Router basename={SITE_URL}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projeto/:id" element={<ProjectDetails />} />
      </Routes>
    </Router>
  )
}

export default App
