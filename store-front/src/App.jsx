import './App.css'
import { MyNavBar } from './pages/MyNavBar'

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Home } from './pages/Home'
import SignInSide from './pages/SignInSide';
import SignUp from './pages/SignUp'

function App() {

  return (
    <Router>
      {/* <button><Link to='/home'>Home</Link></button> */}
      <Routes>
        <Route path='/home' element={<Home />} />
        <Route path='/login' element={<SignInSide />} />
        <Route path='/register' element={<SignUp />} />
      </Routes>
    </Router>



  )
}

export default App
