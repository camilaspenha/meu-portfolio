import {Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import ProjectDetails from "./pages/ProjectDetails"
import './styles/custom.css'

function App() {
  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projeto/:id" element={<ProjectDetails />} />
      </Routes>
  )
}

export default App
