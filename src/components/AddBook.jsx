import { useState } from 'react';
import '../styles/AddBook.css';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addBook } from '../redux/books/booksSlice';

const AddBok = () => {
  const dispatch = useDispatch();

  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const newBook = {
      id: uuidv4(),
      title,
      category,
      author: 'Author-example',
      progress: 0,
      chapter: '-',
    };

    if (title.trim()) {
      dispatch(addBook(newBook));
      setTitle('');
      console.log('Added correctly, book; ', title);
    } else {
      console.log('Please add item');
    }
  };

  const handleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleChangeCategory = (e) => {
    setCategory(e.target.value);
    console.log('Nueva categoria: ', category);
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
