import '../styles/BookCard.css';
import PropTypes from 'prop-types';

const BookCard = ({ bookProp, deleteBookCard }) => (
  <li className="book-item">
    <div className="book-info-container">
      <div className="book-info">
        <h3 className="book-category">{bookProp.category}</h3>
        <h2>{bookProp.title}</h2>
        <span className="book-author">{bookProp.author}</span>
      </div>
      <div className="book-manage-section">
        <button type="button" className="btn-book-manage">Comments</button>
        <button type="button" className="btn-book-manage" onClick={() => deleteBookCard(bookProp.id)}>Remove</button>
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
            {bookProp.progress}
            %
          </span>
          <span>
            Completed
          </span>
        </div>
      </div>
      <div className="book-chapter">
        <span>CURRENT CHAPTER</span>
        <span>{bookProp.chapter}</span>
        <button type="button" className="btn-update-progress">UPDATE PROGRESS</button>
      </div>
    </div>

  </li>
);

BookCard.propTypes = {
  bookProp: PropTypes.shape({
    category: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    progress: PropTypes.number.isRequired,
    chapter: PropTypes.string.isRequired,
  }).isRequired,
  deleteBookCard: PropTypes.func.isRequired,
};

export default BookCard;
