import './css/App.css'
import MovieCard from './components/MovieCard'
import NavBar from './components/NavBar';
import Favorites from './pages/Favorites';
import Home from './pages/Home';
import {Routes, Route} from 'react-router-dom'
import {MovieProvider} from './contexts/MovieContext'

function App() {

  const movieNumber = 2;
  


  return (
    <div>
      <MovieProvider>

        <NavBar/>
        <main className="main-content">
          <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/favorites' element={<Favorites/>}></Route>
          </Routes>
    
        </main>
      </MovieProvider>
      
    </div>
    )
}






export default App
