import { useState } from 'react'
import { Outlet } from "react-router-dom";
import Navbar from './components/Navbar'
import Footer from "./components/Footer";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <div>
        <Outlet/>
      </div>
      <Footer/>
    </>
  )
}

export default App
