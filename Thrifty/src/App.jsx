import { BrowserRouter,Routes,Route } from 'react-router-dom';
import './App.css'
import SearchPage from './pages/SearchPage';
import Recipe from './pages/Recipe';

function App() {


  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<SearchPage/>}/>
          <Route path="/recipe" element={<Recipe/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
