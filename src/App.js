import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Home from './page/Home';
import Movies from './page/Movies';
import MovieDetail from './page/MovieDetail';
import { Route, Routes } from "react-router-dom"
import Navigation from './component/Navigation';

function App() {
    return (
      <div>
        <Navigation/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:movie_id" element={<MovieDetail />} />
        </Routes>
      </div>
    );
  }

export default App;
