import React, {PropsWithChildren, useState} from 'react';
import {Row, Col} from 'react-bootstrap';
import AuthorsList from "./AuthorsList";
import AddAuthor from "./AddAuthor";
import CreateAuthor from "./CreateAuthor";
import {IAuthor} from "../../types/LibraryTypes";

type AuthorsProps = {
    authors: IAuthor[] | null
    onAuthorCreated: (newAuthor: IAuthor) => void
    onAuthorDeleted: (index: number) => void
    onAuthorUpdated: (editedAuthor: IAuthor, index: number) => void
}

const Authors: React.FC<AuthorsProps> = (props: PropsWithChildren<AuthorsProps>) => {
    const {authors} = props;
    const [isCreateAuthorVisible, setIsCreateAuthorVisible] = useState(false);
    const [editAuthorIndex, setEditAuthorIndex] = useState<number | null>(null);

    const handleOnEditorClose = () => {
        setIsCreateAuthorVisible(false);
        setEditAuthorIndex(null);
    };

    const handleOnAddAuthorClick = () => {
        setIsCreateAuthorVisible(true);
        setEditAuthorIndex(null);
    };

    /**
     * when edit icon of author actions clicked
     * @param index
     */
    const handleOnAuthorEditRequested = (index: number) => {
        // if (authors)
        //   console.log(authors[index])
        setIsCreateAuthorVisible(false);
        setEditAuthorIndex(index);
    };

    /**
     * set edited author to state
     * @param editedAuthor
     * @param index
     */
    const handleOnAuthorUpdated = (editedAuthor: IAuthor, index: number) => {
        props.onAuthorUpdated(editedAuthor, index)
        setEditAuthorIndex(null);
    };

    const renderEditAuthorForm = () => {
        if (authors === null || editAuthorIndex === null) {
            return;
        }

        const authorToEdit = authors[editAuthorIndex];

        return (
            <Col xs={12} md={8} className='mt-5'>
                <CreateAuthor onAuthorAdded={props.onAuthorCreated}
                              onEditorClosed={handleOnEditorClose}
                              authorToEdit={authorToEdit} editAuthorIndex={editAuthorIndex}
                              onAuthorEdited={handleOnAuthorUpdated}/>
            </Col>
        )
    }

    return (
        <Row>
            <Col xs={12} className='pr-4'>
                <h4 className='sub-title pb-2'>Authors</h4>
            </Col>
            <Col xs={12} className='pt-4 pr-4'>
                {(!authors || authors.length === 0) && <label className='font-italic'>No authors listed here.</label>}
                {authors && <AuthorsList authors={authors}
                                         onAuthorDeleted={props.onAuthorDeleted}
                                         onAuthorEditRequested={handleOnAuthorEditRequested}/>}
            </Col>
            <Col xs={12} className='mt-3'>
                <AddAuthor onAddAuthor={handleOnAddAuthorClick}/>
            </Col>

            {(isCreateAuthorVisible && !editAuthorIndex) && <Col xs={12} md={8} className='mt-5'>
                <CreateAuthor onAuthorAdded={props.onAuthorCreated}
                              onEditorClosed={handleOnEditorClose}
                              authorToEdit={null} editAuthorIndex={null}
                              onAuthorEdited={handleOnAuthorUpdated}
                />
            </Col>}

            {(editAuthorIndex !== null) && renderEditAuthorForm()}
        </Row>
    );
};

export default Authors;