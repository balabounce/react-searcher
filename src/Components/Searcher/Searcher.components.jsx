import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, FormControl, Button, Row, Container, Col } from 'react-bootstrap';
import { getSomeUsers } from "../../actions/actions";


const Searcher = (props) => {
    const {searchUsers} = props;
    return (
        <Form >
            <Container className='d-flex justify-content-center'>
                <Row >
                    <Col>
                        <FormControl type="text" placeholder="Search" className="mb-4" style={{width: 550}} onChange={(event) => searchUsers(event.target.value)} />
                    </Col>
               
                </Row>
            </Container>
        </Form>
  )
}

export default Searcher;