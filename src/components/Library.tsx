import React from "react";
import Header from "./Header";
import BooksAndAuthors from "./BooksAndAuthors";



const Library: React.FC = () =>{
  return(
    <React.Fragment>
        {/*<Authors/>*/}
        <BooksAndAuthors/>
        <Header/>

    </React.Fragment>



  );



};
export default Library;