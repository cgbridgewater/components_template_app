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
import NavBar2 from './Components/NavBar_2_Component/NabBar_2'
import LoginRegister from './Components/LoginRegister_Component/LoginRegister'

function App() {


  return (
    <>
      {/* App Type 1 */}
      <BrowserRouter>
        {/* PICK A NAV BAR - ADD/REMOVE CSS IMPORT FROM APP.JSX */}
        {/* <NavBar /> */}
        <NavBar2 />
        <Routes>
          <Route exact path="/" element={<Index />} />
          <Route path="/centered" element={<CenteredPage />} />
          <Route path="/split" element={<SplitPage />} />
          <Route path="/inserts" element={<Inserts />} />
          <Route path="/login" element={<LoginRegister />} />

          <Route path="*" element={<ErrorPage/>} />
        </Routes>
        {/* chatbox here */}
        <GoToTopButton />
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
