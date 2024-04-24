import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Index from './Views/Index'
import './App.css'
import CenteredPage from './Views/CenteredPage'
import SplitPage from './Views/SplitPage'
import NavBar from './Components/NavBar_Component/NavBar'

function App() {


  return (
    <>
      <BrowserRouter>
      {/* navbar here */}
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Index />} />
        <Route exact path="/centered" element={<CenteredPage />} />
        <Route exact path="/split" element={<SplitPage />} />



      </Routes>
      {/* chatbox here */}
      {/* go to top button here */}
      {/* footer here */}
      </BrowserRouter>
    </>
  )
}

export default App
