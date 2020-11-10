import React, {PropsWithChildren} from 'react';

type AddBookProps = {
    onAddBook: () => void
}

const AddBook: React.FC<AddBookProps> = (props: PropsWithChildren<AddBookProps>) => {
    const {onAddBook} = props;

    return (
        <label className='add-label' onClick={onAddBook}>
            <i className='feather icon-plus'/> Add Book
        </label>
    );
};

export default AddBook;