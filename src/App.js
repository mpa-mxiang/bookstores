import './App.css';
import {
  BrowserRouter as Router,
  Link,
  Route,
  Routes,
} from 'react-router-dom';
import Categories from './components/Categories';
import Books from './Books';

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

      <h1>Bookstore</h1>
      <Routes>
        <Route path="/" element={<Books />} />
        <Route path="/categories" element={<Categories />} />
      </Routes>
    </div>
  </Router>
);

export default App;
