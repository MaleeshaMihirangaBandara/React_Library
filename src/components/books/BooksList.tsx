import React from 'react';
import {IBook} from "../../types/LibraryTypes";
import Book from "./Book";

type BooksListProps = {
    books: IBook[]
}

const BooksList: React.FC<BooksListProps> = (props) => {
    const {books} = props;

    const renderBooks = () => {
        return books.map((book: IBook, index: number) => <Book key={index} num={index + 1} book={book}/>);
    };

    return (
        <React.Fragment>
            {renderBooks()}
        </React.Fragment>
    );
};

export default BooksList;