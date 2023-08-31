import React from 'react';
import { useSelector } from 'react-redux';
import BookCard from './BookCard';

const BookList = () => {
  const bookItems = useSelector((state) => state.book.bookItems);

  return (
    <ul>
      {bookItems.map((item) => (
        <BookCard
          key={item.id}
          id={item.id}
          category={item.category}
          title={item.title}
          author={item.author}
          progress={item.progress}
          chapter={item.chapter}
        />
      ))}
    </ul>
  );
};

export default BookList;
