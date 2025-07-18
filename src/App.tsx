import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import ProjectDetails from "./pages/ProjectDetails"
import './styles/custom.css'

function App() {
  return (
    <Router basename="/meu-portfolio">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projeto/:id" element={<ProjectDetails />} />
      </Routes>
    </Router>
  )
}

export default App
