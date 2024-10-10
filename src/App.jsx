
import { Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar"
import Error404Modern from "./pages/error/404-modern"
import { AdminPages } from "./route/Index"
function App() {

  return (
    <div className="">
      <Navbar />
      <Routes>
        <Route path="/*" element={<AdminPages />} />
        <Route path="/*" element={<Error404Modern />} />
      </Routes>
    </div>
  )
}

export default App
