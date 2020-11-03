import React from "react";
import {ReactComponent} from "*.svg";
import AuthorList from "./Authors/AuthorList";

import {Row,Col} from "react-bootstrap";
import AddAuthor from "./Authors/AddAuthor";
import CreateAuthor from "./Authors/CreateAuthor";

const Authors: React.FC = () =>{
    // @ts-ignore
    return(
      <Row>
          <Col xs={12} className='pr-4'>
              <h4 className='sub-title pb-2'>Author</h4>
          </Col>
          <Col xs={12} className='pt-4 pr-4'>
              <AuthorList/>
          </Col>
          <Col xs={12} className='mt-2'>
              <AddAuthor/>
          </Col>
          <Col xs={12} md={8} className='mt-2'>
              <CreateAuthor/>
          </Col>

      </Row>

    );
}; export default Authors;