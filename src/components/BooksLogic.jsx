import BookList from './BookList';
import AddBok from './AddBook';

const BooksLogic = () => (
  <div className="books-container">
    <div>
      <BookList />
    </div>
    <div className="addbook-section">
      <AddBok />
    </div>
  </div>
);

export default BooksLogic;
