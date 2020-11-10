import React, {useState} from 'react';
import {Container, Row, Col} from "react-bootstrap";
import Authors from "./authors/Authors";
import {IAuthor, IBook} from "../types/LibraryTypes";
import Books from "./books/Books";

const ReadingArea: React.FC = () => {
    const sampleBook: IBook = {title: "Harry Potter", ISBN: '65554', author: null};

    const [authors, setAuthors] = useState<IAuthor[] | null>(null);
    const [books, setBooks] = useState<IBook[] | null>(null);


    const handleOnAuthorCreated = (newAuthor: IAuthor) => {
        const allAuthors: IAuthor[] = authors ? authors.slice() : [];
        allAuthors.push(newAuthor);
        setAuthors(allAuthors);
    };


    const handleAuthorDeleted = (index: number) => {
        if (!authors) {
            return;
        }

        const allAuthors: IAuthor[] = authors.slice();
        allAuthors.splice(index, 1);
        setAuthors(allAuthors);
    };


    const handleOnAuthorUpdated = (editedAuthor: IAuthor, index: number) => {
        if (!authors) {
            return;
        }

        const allAuthors: IAuthor[] = authors.slice();
        allAuthors.splice(index, 1, editedAuthor);
        setAuthors(allAuthors);
    };

    return (
        <Container fluid className='reading-area'>
            <Row>
                <Col>
                    <Books books={books} authors={authors}/>
                </Col>
                <Col>
                    <Authors authors={authors} onAuthorCreated={handleOnAuthorCreated}
                             onAuthorDeleted={handleAuthorDeleted}
                             onAuthorUpdated={handleOnAuthorUpdated}/>
                </Col>
            </Row>
        </Container>
    );
};

export default ReadingArea;