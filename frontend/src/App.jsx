
import MovieCard from './Components/MovieCard'
import Home from './pages/Home'
import './CSS/App.css'
import { Routes, Route } from 'react-router-dom'
import Favorites from './pages/Favorites'
import NavBar from './Components/NavBar'

function App() {


  return (

   <div>
     <NavBar />
     <main className='main-content'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/favorites' element={<Favorites />} />
      </Routes>
    </main>
   </div>

  )
}


export default App
