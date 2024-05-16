import './App.css'
import { Route, Routes, useParams } from 'react-router-dom'
import HomePage from './pages/HomePage'
import Navbar from './components/Navbar'
import Cursor from './components/Cursor'
import BlogPage from './pages/BlogPage'
import SingleBlog from './pages/SingleBlog'
import ProjPage from './pages/ProjPage'

function App() {
  return (
    <>
      <Cursor/>
      <Navbar/>
      <Routes>
        <Route path={'/portfolio'} element={<HomePage/>}/>
        <Route path={'/portfolio/blogs'} exact element={<BlogPage/>}/>
        <Route path={'/portfolio/projects'} exact element={<ProjPage/>}/>
        <Route path={`/portfolio/blogs/:id`} element={<SingleBlog/>}/>
      </Routes>
    </>
  )
}

export default App
