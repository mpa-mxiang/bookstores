import './App.css';
import {
  BrowserRouter as Router,
  Link,
  Route,
  Routes,
} from 'react-router-dom';
import Categories from './components/Categories';
import Books from './Books';
import user from './user.png';

const App = () => (
  <Router>
    <div>
      <nav>
        <div className="nav-div">
          <div className="span-div">
            <span className="Bookstore-CMS Text-Style-3 text-sky-400">
              Bookstore CMS
            </span>
          </div>
          <ul>
            <li>
              <Link className="BOOKS Text-Style-6" to="/">Books</Link>
            </li>
            <li>
              <Link className="CATEGORIES Text-Style-6" to="/categories">Categories</Link>
            </li>
          </ul>
        </div>
        <div>
          <img className="user" src={user} alt="user" />
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<Books />} />
        <Route path="/categories" element={<Categories />} />
      </Routes>
    </div>
  </Router>
);

export default App;
