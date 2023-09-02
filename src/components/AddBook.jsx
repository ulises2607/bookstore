import { useState } from 'react';
import '../styles/AddBook.css';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addBook, updateBooks } from '../redux/books/booksSlice';
import axios from 'axios';

const AddBok = () => {
  const dispatch = useDispatch();

  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('Action');

  const handleSubmit =async (e) => {
    e.preventDefault();

    const newBook = {
      item_id: uuidv4(),
      title,
      category,
      author: 'Author-example',
    };

    if (title.trim()) {
      dispatch(addBook(newBook));
      setTitle('');
    }
    
  };

  const handleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleChangeCategory = (e) => {
    setCategory(e.target.value);
  };

  return (
    <>
      <div className="addbook-container">
        <h2 className="addbook-title">ADD NEW BOOK</h2>
        <form className="form-book">
          <input
            type="text"
            value={title}
            onChange={handleChange}
            placeholder="Book title"
            className="input-book"
          />
          <select className="category-input" onChange={handleChangeCategory}>
            <option value="action">Action</option>

            <option value="science-fiction">Science Fiction</option>

            <option value="economy">Economy</option>
          </select>
          <button
            type="submit"
            className="btn-addbook"
            onClick={handleSubmit}
          >
            ADD BOOK
          </button>
        </form>
      </div>
    </>

  );
};

export default AddBok;
