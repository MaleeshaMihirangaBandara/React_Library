import React from 'react';
import Welcome from "./Welcome";
import Authors from "./authors/Authors";
import ReadingArea from "./ReadingArea";

const Library: React.FC = () => {
    return (
        <React.Fragment>
            <Welcome/>
            <ReadingArea/>
        </React.Fragment>

    );
};

export default Library;