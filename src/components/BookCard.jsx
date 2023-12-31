import { useDispatch } from 'react-redux';
import '../styles/BookCard.css';
import PropTypes from 'prop-types';
import { removeBook } from '../redux/books/booksSlice';

const BookCard = ({
  itemId, category, title, author,
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
          <div className="vertical-divider" />
          <button type="button" className="btn-book-manage" onClick={() => dispatch(removeBook(itemId))}>Remove</button>
          <div className="vertical-divider" />
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
              0
              %
            </span>
            <span>
              Completed
            </span>
          </div>
          <div className="progress-divider" />
        </div>
        <div className="book-chapter">
          <span>CURRENT CHAPTER</span>
          <span>Chapter:</span>
          <button type="button" className="btn-update-progress">UPDATE PROGRESS</button>
        </div>
      </div>

    </li>
  );
};

BookCard.propTypes = {
  itemId: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default BookCard;
