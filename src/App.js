import './App.css';
import {
  BrowserRouter as Router, Link, Route, Routes,
} from 'react-router-dom';
import Categories from './components/Categories';
import Home from './Home';

const App = () => (
  <Router>
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Books</Link>
          </li>
          <li>
            <Link to="/categories">Categories</Link>
          </li>
        </ul>
      </nav>

      <h1>Math Matician</h1>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/categories" element={<Categories />} />
      </Routes>
    </div>
  </Router>
);

export default App;
