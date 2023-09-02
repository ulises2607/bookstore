import './App.css';
import {
  Routes, Route, Link, useLocation,
} from 'react-router-dom';
import BooksLogic from './components/BooksLogic';
import Categories from './components/Categories';
import UserIcon from './Assets/Images/userIcon';

function App() {
  const location = useLocation();
  const isBooksSection = location.pathname === '/';
  const isCategoriesSection = location.pathname === '/categories';
  return (
    <div className="App">
      <header className="App-header">
        <div className="main">
          <h1 className="page-title">Bookstore CMS</h1>
          <nav>
            <ul className="nav-list">
              <li className="nav-item"><Link to="/" className={isBooksSection ? 'bold' : ''}>BOOKS</Link></li>
              <li className="nav-item"><Link to="/categories" className={isCategoriesSection ? 'bold' : ''}>CATEGORIES</Link></li>
            </ul>
          </nav>
        </div>
        <div className="user">
          <button type="button" className="btn-user">
            <UserIcon />
          </button>
        </div>
      </header>
      <section>
        <Routes>
          <Route path="/" element={<BooksLogic />} />
          <Route path="/categories" element={<Categories />} />
        </Routes>
      </section>

    </div>
  );
}

export default App;
