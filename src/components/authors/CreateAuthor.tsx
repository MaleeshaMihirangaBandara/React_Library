import React, {FormEvent, useEffect, useState} from 'react';
import {Row, Col, Form, Button} from 'react-bootstrap';
import {IAuthor} from "../../types/LibraryTypes";

type CreateAuthorProps = {
    onAuthorAdded: (newAuthor: IAuthor) => void
    onEditorClosed: () => void
    authorToEdit: IAuthor | null // if in edit mode there will be an Author
    editAuthorIndex: number | null // index of the Author to be edited.
    onAuthorEdited?: (editedAuthor: IAuthor, index: number) => void
}

const CreateAuthor: React.FC<CreateAuthorProps> = (props) => {
    const {authorToEdit, editAuthorIndex, onAuthorEdited} = props;
    const [authorName, setAuthorName] = useState<string | null>(null);

    useEffect(() => {
        if (authorToEdit) {
            setAuthorName(authorToEdit.name);
        }
    }, []);

    const handleOnSubmit = (e: FormEvent) => {
        e.preventDefault();

        if (!authorName) {
            alert('Name cannot be empty!');
            return;
        }

        if (editAuthorIndex !== null && authorToEdit !== null) {
            const editedAuthor = {...authorToEdit, name: authorName};
            if (onAuthorEdited) {
                onAuthorEdited(editedAuthor, editAuthorIndex);
            }
            return;
        }

        const newAuthor: IAuthor = {name: authorName};
        props.onAuthorAdded(newAuthor);
        setAuthorName(null);
    };

    return (
        <Row>
            <Col xs={12} className='form-title mb-3'>
                <label>{!authorToEdit ? 'Create' : 'Edit'} Author</label>
                <i className='feather icon-x-circle float-right cursor-pointer' onClick={() => props.onEditorClosed()} />
            </Col>
            <Col xs={12} className='pl-5'>
                <Form onSubmit={handleOnSubmit}>
                    <Form.Group controlId="authoerNameID">
                        <Form.Label>Name of Author</Form.Label>
                        <Form.Control type="text" placeholder="" value={authorName ? authorName : ''}
                                      onChange={(e:React.ChangeEvent<HTMLInputElement>) =>
                                          setAuthorName(e.target.value)}/>
                    </Form.Group>

                    <Button type='submit' size='sm' variant={!authorToEdit ? 'primary' : 'info'}
                            className='float-right create-button'>
                        {!authorToEdit ? 'Create' : 'Update'}
                    </Button>
                </Form>
            </Col>

        </Row>
    );
};

export default CreateAuthor;