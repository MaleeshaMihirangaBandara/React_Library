import React from 'react';
import {Row, Col} from 'react-bootstrap';
import {IAuthor} from "../../types/LibraryTypes";

type AuthorProps = {
    num: number
    author: IAuthor
    onAuthorDeleted: (indexOfAuthor: number) => void
    onAuthorEditRequested: (indexOfAuthor: number) => void
}

const Author: React.FC<AuthorProps> = (props) => {
    const {num, author, onAuthorDeleted, onAuthorEditRequested} = props;

    return (
        <Row className='author-item'>
            <Col xs={9} className='pt-2'>
                <label className='mb-2'>{num}. {author.name}</label>
            </Col>
            <Col xs={3} className='text-right author-controls pt-2'>
                <i className='feather icon-edit mr-3 text-warning' onClick={() => onAuthorEditRequested(num - 1)}/>
                <i className='feather icon-trash-2 text-danger' onClick={() => onAuthorDeleted(num - 1)}/>
            </Col>
        </Row>
    );
};

export default Author;