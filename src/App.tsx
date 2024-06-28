import { Suspense } from "react"
import { Route, Routes } from "react-router-dom"
import { MainPage } from "./pages/MainPage"

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/products" element={<MainPage />} />
      </Routes>
    </Suspense>
  )
}

export default App
