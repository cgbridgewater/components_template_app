import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
// VIEW PAGES //
import Index from './Views/Index'
import CenteredPage from './Views/CenteredPage'
import SplitPage from './Views/SplitPage'
import Inserts from './Views/Inserts'
import Login from './Views/Login'
import ErrorPage from './Views/ErrorPageView/ErrorPage'
// END VIEW PAGES //

// HEADER, FOOTER, GO TO TOP BUTTON //
import GoToTopButton from './Components/Go_To_Top_Component/GoToTop'
import Footer from './Components/Footer_Component/Footer'
// import NavBar from './Components/NavBar_Component/NavBar'
import NavBar2 from './Components/NavBar_2_Component/NabBar_2'
import FlyingBee from './Components/FlyingBee_Component/FlyingBee'
// END HEADER, FOOTER, GO TO TOP BUTTON //


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
          <Route path="/login" element={<Login />} />
          <Route path="/bee" element={<FlyingBee />} />
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
