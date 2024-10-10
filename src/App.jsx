
import { Route, Routes } from "react-router-dom"
import HomePage from "./pages/home/home"
import Navbar from "./components/Navbar"
import Error404Modern from "./pages/error/404-modern"
import { AdminPages } from "./route/Index"
function App() {

  return (
    <>
      <Navbar />
      <div className="pt-20 px-4 h-screen w-full bg-cover bg-no-repeat">
        <Routes>
          <Route path="/*" element={<AdminPages />} />
          <Route path="/*" element={<Error404Modern />} />
        </Routes>
        <HomePage />
      </>
      )
}

      export default App
