import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Navbar1 from './components/NavbarV1/navbar1'
import LandingPage from './Pages/Landing Pages/LandingPage'
import Footer from './components/Footer/Footer'
import {Routes, Route} from 'react-router-dom'
import Signup from './Pages/SignUp/Signup'
import SignIn from './Pages/Login/SignIn'
import Navbar2 from './components/Navbar2/Navbar2'
import Feeds from './Pages/Feed/Feeds'
import Mynetwork from './Pages/Network/Mynetwork'
import Resume from './Pages/Resume/Resume'

function App() {
  const isLogin = true;
  const [count, setCount] = useState(0)

  return (
    <div className='bg-gray-100 w-full h-full box-border'>
    {isLogin ? <Navbar2/> : <Navbar1/>}
    <Routes>
      <Route path='/' element={<LandingPage/>}/>
      <Route path = '/signup' element={<Signup/>}/>
      <Route path = '/signin' element={<SignIn/>}/>
      <Route path='/feed' element={<Feeds/>}/>
      <Route path='/mynetwork' element={<Mynetwork/>}/>
      <Route path='/resume' element={<Resume/>}/>
    </Routes>
    {/* <Footer/> */}
    </div>
  )
}

export default App
