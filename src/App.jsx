import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Index from './Views/Index'
import CenteredPage from './Views/CenteredPage'
import SplitPage from './Views/SplitPage'
import Inserts from './Views/Inserts'
import NavBar from './Components/NavBar_Component/NavBar'
import ErrorPage from './Views/ErrorPageView/ErrorPage'
import GoToTopButton from './Components/Go_To_Top_Component/GoToTop'
import Footer from './Components/Footer_Component/Footer'
import './App.css'

function App() {


  return (
    <>
      <BrowserRouter>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Index />} />
        <Route path="/centered" element={<CenteredPage />} />
        <Route path="/split" element={<SplitPage />} />

        <Route path="/inserts" element={<Inserts />} />
        <Route path="/:bad/*" element={<ErrorPage/>} />
      </Routes>
      {/* chatbox here */}
      <GoToTopButton />
      <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
