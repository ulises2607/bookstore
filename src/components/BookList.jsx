import React from 'react';
import { useSelector } from 'react-redux';
import BookCard from './BookCard';

const BookList = () => {
  const bookItems = useSelector((state) => state.book.bookItems);

  return (
    <ul>
      {bookItems.map((item) => (
        <BookCard
          key={item.item_id}
          id={item.item_id}
          category={item.category}
          title={item.title}
          author={item.author}
        />
      ))}
    </ul>
  );
};

export default BookList;
