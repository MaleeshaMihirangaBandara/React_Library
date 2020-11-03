import React from "react";
import {Row,Col,Form,Button} from "react-bootstrap";


const CreateAuthor: React.FC = () =>{
    return(
        <Row>
            <Col xs={12}  >
                <label className='form-title' > Create Author</label>
                <i className='feather icon-x-circle float-right'/>
            </Col>
            <Col xs={12} className='pl-5'>
                <Form>
                    <Form.Group controlId="authorId">
                        <Form.Label>Name of Author</Form.Label>
                        <Form.Control type="text" placeholder="" />

                    </Form.Group>

                    <Button type='submit' size='sm' variant='primary' className='float-right'>Create</Button>
                </Form>
            </Col>
        </Row>
    );
}; export default CreateAuthor;