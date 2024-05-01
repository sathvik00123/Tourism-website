import {BrowserRouter, Route, Routes} from "react-router-dom"
import Layout from "./pages/Layout"
import Home from './pages/Home'
import Calendar from "./pages/CalendarPage" 
import About from "./pages/About"
import Header from "./Components/Header/Header"
import Footer from "./Components/Footer/Footer"
import LoginPage from "./pages/LoginPage"
import Register from "./Components/Register/Register"
import './App.css';
import State from "./pages/State"
import StateCities from "./pages/StateCities"
import InterestsPage from "./pages/InterestsPage"

function App() {
  return (
    <BrowserRouter>
        <Header/>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<LoginPage/>}/>
              <Route path="/calendar" element={<Calendar/>}/>
              <Route path="/about" element={<About/>}/>
              <Route path="/interests/:interest" element={<InterestsPage/>}/>
              <Route path="/destination/:state" element={<State/>}/>
              <Route path="/destination/:state/:statecity" element={<StateCities/>}/>
              <Route path="/home" element={<Home />}/> 
              <Route path="/login" element={<LoginPage />}/>
              <Route path="/register" element={<Register />}/>
            </Route>
          </Routes>
        <Footer/>
    </BrowserRouter>
  )
}

export default App
