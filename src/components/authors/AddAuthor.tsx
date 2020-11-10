import React, {PropsWithChildren} from 'react';

type AddAuthorProps = {
    onAddAuthor: () => void
}

const AddAuthor: React.FC<AddAuthorProps> = (props: PropsWithChildren<AddAuthorProps>) => {
    const {onAddAuthor} = props;

    return (
        <label className='add-label' onClick={onAddAuthor}>
            <i className='feather icon-plus'/> Add Author
        </label>
    );
};

export default AddAuthor;