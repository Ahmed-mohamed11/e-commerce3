
import { Route, Routes } from "react-router-dom"
import HomePage from "./pages/home/home"
import Error404Modern from "./pages/error/404-modern"
import { AdminPages } from "./route/Index"
function App() {

  return (
    <>
      <Routes>
        <Route path="/*" element={<AdminPages  />} />
        <Route path="/*" element={<Error404Modern />} />
      </Routes>
      <HomePage />
    </>
  )
}

export default App
