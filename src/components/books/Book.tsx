
import React from 'react';
import {Row, Col} from 'react-bootstrap';
import {IBook} from "../../types/LibraryTypes";

type BookProps = {
    num: number
    book: IBook
}

const Book: React.FC<BookProps> = (props) => {
    const {num, book} = props;

    return (
        <Row className='author-item'>
            <Col xs={9} className='pt-2'>
                <label className='mb-2'>{num}. {book.title}</label>
            </Col>
            <Col xs={3} className='text-right author-controls pt-2'>
                <i className='feather icon-edit mr-3 text-warning' />
                <i className='feather icon-trash-2 text-danger' />
            </Col>
        </Row>
    );
};

export default Book;