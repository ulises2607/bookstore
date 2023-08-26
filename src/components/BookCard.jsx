const BookCard = ({bookProp}) => {

    return (
        <li>
            <div className="book-info-container">
                <div className="book-info">
                    <h3>{bookProp.chapter}</h3>
                    <h2>{bookProp.title}</h2>
                    <span>{bookProp.author}</span>
                </div>
                <div className="book-manage-section">
                    <button>Comments</button>
                    <button>Remove</button>
                    <button>Edit</button>
                </div>
            </div>
            <div className="book-progress">
                <div className="progress-completed">
                    <div className="img-progres">
                        <span>Imagen</span>
                    </div>
                    <div>
                        <span>
                        {bookProp.progress}%
                        </span>
                        <span>
                            Completed
                        </span>
                    </div>
                </div>
                <div className="book-chapter">
                    <span>CURRENT CHAPTER</span>
                    <span>{bookProp.chapter}</span>
                    <button className="btn-update-progress">UPDATE PROGRESS</button>
                </div>
            </div>
            
        </li>
    )
}

export default BookCard;