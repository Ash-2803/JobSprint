import { useState,useEffect } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Navbar1 from './components/NavbarV1/navbar1'
import LandingPage from './Pages/Landing Pages/LandingPage'
import Footer from './components/Footer/Footer'
import {Routes, Route , Navigate} from 'react-router-dom'
import Signup from './Pages/SignUp/Signup'
import SignIn from './Pages/Login/SignIn'
import Navbar2 from './components/Navbar2/Navbar2'
import Feeds from './Pages/Feed/Feeds'
import Mynetwork from './Pages/Network/Mynetwork'
import Resume from './Pages/Resume/Resume'
import Messages from './Pages/Messages/Messages'
import Profile from './Pages/Profile/Profile'
import Allactivities from './Pages/AllActivities/Allactivities'
import SingleActivity from './Pages/SingleActivity/SingleActivity'
import Notification from './Pages/Notification/Notification'
import axios from 'axios';

function App() {
  // const isLogin = false;
  const [isLogin, setIsLogin] = useState(localStorage.getItem('isLogin'));

  const changeLoginValue = (val)=>{
    setIsLogin(val)
  }

  
   
  // useEffect(()=>{
  //   fetchData()
  // })

  const [count, setCount] = useState(0)

  return (
    <div className='bg-gray-100 w-full h-full box-border'>
    {isLogin ? <Navbar2/> : <Navbar1/>}
    <Routes>
      <Route path='/' element={isLogin?<Navigate to ={'/feed'}/>:<LandingPage/>}/>
      <Route path = '/signup' element={isLogin?<Navigate to ={'/feed'}/>:<Signup/>}/>
      <Route path = '/signin' element={isLogin?<Navigate to ={'/feed'}/>:<SignIn changeLoginValue = {changeLoginValue} />}/>
      <Route path='/feed' element={<Feeds/>}/>
      <Route path='/mynetwork' element={<Mynetwork/>}/>
      <Route path='/resume' element={<Resume/>}/>
      <Route path='/messages' element={<Messages/>}/>
      <Route path='/notification' element={<Notification/>}/>
      <Route path='/profile/:id' element={<Profile/>}/>
      <Route path='/profile/:id/activities' element={<Allactivities/>}/>
      <Route path='/profile/:id/activities/:postId' element={<SingleActivity/>}/>

    </Routes>
    {/* <Footer/> */}
    </div>
  )
}

export default App
