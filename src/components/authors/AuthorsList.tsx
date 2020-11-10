import React, {useState} from 'react';
import Author from "./Author";
import {IAuthor} from "../../types/LibraryTypes";
import Authors from "./Authors";

type AuthorsListProps = {
    authors: IAuthor[]
    onAuthorDeleted: (indexOfAuthor: number) => void
    onAuthorEditRequested: (indexOfAuthor: number) => void
}

const AuthorsList: React.FC<AuthorsListProps> = (props) => {
    const {authors} = props;

    const renderAuthors = () => {
        return authors.map((author: IAuthor, index: number) =>
            <Author key={index} num={index + 1} author={author}
                    onAuthorDeleted={props.onAuthorDeleted}
                    onAuthorEditRequested={props.onAuthorEditRequested}/>);
    };

    return (
        <React.Fragment>
            {renderAuthors()}
        </React.Fragment>
    );
};

export default AuthorsList;