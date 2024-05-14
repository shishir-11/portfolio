import './App.css'
import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import Navbar from './components/Navbar'
import Cursor from './components/Cursor'
import BlogPage from './pages/BlogPage'

function App() {

  return (
    <>
      <Cursor/>
      <Navbar/>
      <Routes>
        <Route index element={<HomePage/>}/>
        <Route path={'/blogs'} element={<BlogPage/>}/>
      </Routes>
    </>
  )
}

export default App
