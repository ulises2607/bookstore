import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import BooksLogic from './components/BooksLogic';
import user from './Assets/Images/image.svg';
import Categories from './components/Categories';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="page-title">Bookstore CMS</h1>
        <nav>
          <ul className="nav-list">
            <li className="nav-item"><Link to="/">BOOKS</Link></li>
            <li className="nav-item"><Link to="/categories">CATEGORIES</Link></li>
          </ul>
        </nav>
        <div className="user">
          <button type="button" className="btn-user">
            <img className="user-icon" src={user} alt="User Icon" />
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
