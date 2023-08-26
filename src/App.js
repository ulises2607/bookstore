import './App.css';
import {Routes, Route, Link } from 'react-router-dom';
import BooksLogic from './components/BooksLogic';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Bookstore</h1>
        <nav>
          <ul className='nav-list'>
            <li className='nav-item'><Link to="/">Home</Link></li>
          </ul>
        </nav>
      </header>
      <Routes>
        <Route path='/' element={<BooksLogic />}/>
      </Routes>
    </div>
  );
}

export default App;
