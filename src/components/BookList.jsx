import PropTypes from 'prop-types';
import BookCard from './BookCard';

const BookList = ({ booksProps, deleteBookCard }) => (
  <ul>
    {booksProps.map((book) => (
      <BookCard key={book.id} bookProp={book} deleteBookCard={deleteBookCard} />
    ))}
  </ul>
);

BookList.propTypes = {
  booksProps: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
    }),
  ).isRequired,
  deleteBookCard: PropTypes.func.isRequired,
};
export default BookList;
