import { useDispatch } from 'react-redux';
import '../styles/BookCard.css';
import PropTypes from 'prop-types';
import { removeBook } from '../redux/books/booksSlice';

const BookCard = ({
  id, category, title, author, progress, chapter,
}) => {
  const dispatch = useDispatch();

  return (
    <li className="book-item">
      <div className="book-info-container">
        <div className="book-info">
          <h3 className="book-category">{category}</h3>
          <h2>{title}</h2>
          <span className="book-author">{author}</span>
        </div>
        <div className="book-manage-section">
          <button type="button" className="btn-book-manage">Comments</button>
          <button type="button" className="btn-book-manage" onClick={() => dispatch(removeBook(id))}>Remove</button>
          <button type="button" className="btn-book-manage">Edit</button>
        </div>
      </div>
      <div className="book-progress">
        <div className="progress-complete">
          <div className="img-container">
            <div className="img-progress" />
          </div>

          <div className="progress-percent">
            <span>
              {progress}
              %
            </span>
            <span>
              Completed
            </span>
          </div>
        </div>
        <div className="book-chapter">
          <span>CURRENT CHAPTER</span>
          <span>{chapter}</span>
          <button type="button" className="btn-update-progress">UPDATE PROGRESS</button>
        </div>
      </div>

    </li>
  );
};

BookCard.propTypes = {
  id: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  progress: PropTypes.number.isRequired,
  chapter: PropTypes.string.isRequired,
};

export default BookCard;
