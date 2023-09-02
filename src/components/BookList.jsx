import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import BookCard from './BookCard';
import { fetchBooks } from '../redux/books/booksSlice';

const BookList = () => {
  const { bookItems, loading, error } = useSelector((state) => state.book);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);

  if (loading) {
    return <div>Cargando libros...</div>;
  }

  if (error) {
    return (
      <div>
        Error:
        {error}
      </div>
    );
  }

  return (

    <ul>
      {bookItems.map((item) => (
        <BookCard
          key={item.itemId}
          itemId={item.itemId}
          title={item.title}
          category={item.category}
          author={item.author}
        />
      ))}
    </ul>

  );
};

export default BookList;
