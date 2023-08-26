import BookCard from "./BookCard"

const BookList = ({booksProps}) => {
    return (
        <ul>
            {booksProps.map((book) => (
                <BookCard key={book.id} bookProp={book} />
            ))}
        </ul>
    )
}

export default BookList;