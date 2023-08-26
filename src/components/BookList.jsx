import BookCard from "./BookCard"

const BookList = ({booksProps, deleteBookCard}) => {
    return (
        <ul>
            {booksProps.map((book) => (
                <BookCard key={book.id} bookProp={book} deleteBookCard={deleteBookCard}/>
            ))}
        </ul>
    )
}

export default BookList;