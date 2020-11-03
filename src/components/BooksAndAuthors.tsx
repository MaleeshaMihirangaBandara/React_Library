import React from 'react'
// import 'bootstrap/dist/css/bootstrap.min.css';
//
// export default function BooksAndAuthors() {
//     return (
//         <div className='row row-cols-2'>
//             <div className='col'>
//                 {/* Books column */}
//             </div>
//
//
//             <div className='col'>
//                 {/* Authors column */}
//             </div>
//         </div>
//     )
// }

import {Container,Row,Col} from 'react-bootstrap';
import Authors from "./Authors";

const BooksAndAuthors: React.FC = () =>{
    return(
        <Container fluid className='reading-area'>
            <Row>
                <Col>Books</Col>
                <Col>
                    <Authors/>
                </Col>
            </Row>

        </Container>

    );
}; export default BooksAndAuthors;