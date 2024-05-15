import './App.css'
import { Route, Routes, useParams } from 'react-router-dom'
import HomePage from './pages/HomePage'
import Navbar from './components/Navbar'
import Cursor from './components/Cursor'
import BlogPage from './pages/BlogPage'
import SingleBlog from './pages/SingleBlog'

function App() {
  return (
    <>
      <Cursor/>
      <Navbar/>
      <Routes>
        <Route index element={<HomePage/>}/>
        <Route path={'/blogs'} element={<BlogPage/>}/>
        <Route path={`/blogs/:id`} element={<SingleBlog/>}/>
      </Routes>
    </>
  )
}

export default App
