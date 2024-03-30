import { Routes, Route } from 'react-router-dom'
import Auth from './pages/Auth/Auth'
import Home from './pages/Home/Home'
import Questions from './pages/Questions/Questions'
import AskQuestion from './pages/AskQuestion/AskQuestion'
import DisplayQuestion from './pages/Questions/DisplayQuestion'
import Tags from './pages/Tags/Tags'
import Overview from './pages/Overview/Overview'
import Guide from './pages/Guide/Guide'
import Users from "./pages/Users/Users"
import Courses from './pages/Courses/Courses'
import Grade from './pages/Grade/Grade'
import Clubs from './pages/Clubs/Clubs'
import Ffcs from './pages/Ffcs/Ffcs'
import UserProfile from "./pages/UserProfile/UserProfile"
import Vtop from './pages/Vtop/Vtop'

const AllRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/Auth' element={<Auth />} />
      <Route path='/AskQuestion' element={<AskQuestion />} />
      <Route path='/Questions' element={<Questions />} />
      <Route path='/Questions/:id' element={<DisplayQuestion />} />
      <Route path='/Tags' element={<Tags />} />
      <Route path='/Overview' element={<Overview />} />
      <Route path='/Vtop' element={<Vtop />} />
      <Route path='/Ffcs' element={<Ffcs />} />
      <Route path='/Clubs' element={<Clubs />} />
      <Route path='/Grade' element={<Grade />} />
      <Route path='/Courses' element={<Courses />} />
      <Route path='/Guide' element={<Guide />} />
      <Route path='/Users' element={<Users />} />
      <Route path='/Users/:id' element={<UserProfile />} />
    </Routes>
  )
}

export default AllRoutes