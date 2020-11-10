import React, {PropsWithChildren, useState} from 'react';
import {Col, Row} from "react-bootstrap";
import AddBook from "./AddBook";
import CreateBook from "./CreateBook";
import {IAuthor, IBook} from "../../types/LibraryTypes";
import BooksList from "./BooksList";

type BooksProps = {
    books: IBook[] | null
    authors: IAuthor[] | null
}

const Books: React.FC<BooksProps> = (props: PropsWithChildren<BooksProps>) => {
    const {books, authors} = props
    const [isCreateBookVisible, setIsCreateBookVisible] = useState(false);

    const handleOnAddBookClick = () => {
        setIsCreateBookVisible(true);
    };

    const handleOnEditorClose = () => {
        setIsCreateBookVisible(false);
    };

    return (
        <Row>
            <Col xs={12} className='pr-4'>
                <h4 className='sub-title pb-2'>Books</h4>
            </Col>
            <Col xs={12} className='pt-4 pr-4'>
                {!books && <label className='font-italic'>No books listed here.</label>}
                {books && <BooksList books={books} />}
            </Col>
            <Col xs={12} className='mt-3'>
                <AddBook onAddBook={handleOnAddBookClick}/>
            </Col>

            {isCreateBookVisible && <Col xs={12} md={8} className='mt-5'>
                <CreateBook onEditorClosed={handleOnEditorClose} authors={authors}/>
            </Col>}

        </Row>
    )
};

export default Books;