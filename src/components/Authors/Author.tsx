import React from "react";
import {Row,Col} from "react-bootstrap";


const Author: React.FC = () =>{
    return(
        <Row  className='author-item'>
            <Col xs={9}>
               <label className='mb-2'>1.Author Name</label>
            </Col>
            <Col xs={3} className='text-right '>
                <i className ='feather icon-edit mr-2 text-warning'/>
                <i className ='feather icon-trash-2 text-danger'/>

            </Col>
        </Row>
    );
}; export default Author;