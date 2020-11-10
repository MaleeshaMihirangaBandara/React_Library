import React, {FormEvent, PropsWithChildren, useEffect, useState} from 'react';
import {Button, Col, Form, Row} from 'react-bootstrap';
import {IAuthor, IBook, ReactSelectOption} from "../../types/LibraryTypes";
import Select, {ValueType} from 'react-select';
import {customSelectStyles} from "../../constants/SelectStyles";

type CreateBookProps = {
    authors: IAuthor[] | null
    onEditorClosed: () => void
}

const CreateBook: React.FC<CreateBookProps> = (props: PropsWithChildren<CreateBookProps>) => {
    const {authors} = props;
    const initBook: IBook = {title: '', ISBN: '', author: null}
    const [book, setBook] = useState<IBook>(initBook);
    const [authorOptions, setAuthorOptions] = useState<ReactSelectOption[]>([]);
    const [selectedAuthor, setSelectedAuthor] = useState<ValueType<ReactSelectOption> | null>(null);

    useEffect(() => {
        const options: ReactSelectOption[] = authors ? authors.map((author: IAuthor, index: number) => {
            const authorOption: ReactSelectOption = {value: index + '', label: author.name};
            return authorOption;
        }) : [];

        setAuthorOptions(options)
    }, [authors]);

    const handleOnSubmit = (e: FormEvent) => {
        e.preventDefault();

        if (!book.title) {
            alert('Title cannot be empty!');
            return;
        }

        if (!book.ISBN) {
            alert('ISBN cannot be empty!');
            return;
        }

        if (!book.author) {
            alert('Select Author');
            return;
        }

    };

    const handleOnBookTitleChange = (title: string) => {
        setBook({...book, title: title});
    };

    const handleOnBookISBNChange = (ISBN: string) => {
        setBook({...book, ISBN: ISBN});
    };

    const handleOnBookAuthorChange = (selectedOption: ValueType<ReactSelectOption>) => {
        setSelectedAuthor(selectedOption);

        const index = parseInt((selectedOption as ReactSelectOption).value);
        const author: IAuthor | null = authors ? authors[index]: null
        setBook({...book, author: author});
    };

    return (
        <Row>
            <Col xs={12} className='form-title mb-3'>
                <label>Create Book</label>
                <i className='feather icon-x-circle float-right cursor-pointer' onClick={() => props.onEditorClosed()} />
            </Col>
            <Col xs={12} className='pl-5'>
                <Form onSubmit={handleOnSubmit}>
                    <Form.Group controlId="bookTitleID">
                        <Form.Label>Title of the Book*</Form.Label>
                        <Form.Control type="text" placeholder="" value={book ? book.title : ''}
                                      onChange={(e:React.ChangeEvent<HTMLInputElement>) =>
                                          handleOnBookTitleChange(e.target.value)}/>
                    </Form.Group>

                    <Form.Group controlId="bookISBNID">
                        <Form.Label>ISBN*</Form.Label>
                        <Form.Control type="text" placeholder="" value={book ? book.ISBN : ''}
                                      onChange={(e:React.ChangeEvent<HTMLInputElement>) =>
                                          handleOnBookISBNChange(e.target.value)}/>
                    </Form.Group>

                    <Form.Group controlId="authorSelectID">
                        <Form.Label>Author*</Form.Label>
                        <Select
                            styles={customSelectStyles}
                            value={selectedAuthor}
                            onChange={handleOnBookAuthorChange}
                            options={authorOptions}
                        />
                    </Form.Group>

                    <Button type='submit' size='sm' variant='primary'
                            className='float-right create-button'>
                        Create
                    </Button>
                </Form>
            </Col>

        </Row>
    );
};

export default CreateBook;