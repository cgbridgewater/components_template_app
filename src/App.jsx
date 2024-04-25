import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Index from './Views/Index'
import './App.css'
import CenteredPage from './Views/CenteredPage'
import SplitPage from './Views/SplitPage'
import NavBar from './Components/NavBar_Component/NavBar'
import ErrorPage from './Views/ErrorPageView/ErrorPage'
import GoToTopButton from './Components/Go_To_Top_Component/GoToTop'
import Footer from './Components/Footer_Component/Footer'

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


        <Route path="/:bad/*" element={<ErrorPage/>} />
      </Routes>
      {/* chatbox here */}
      {/* go to top button here */}
      <GoToTopButton />
      <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
