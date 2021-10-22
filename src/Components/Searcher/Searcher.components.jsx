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
                        <FormControl type="text" placeholder="Search" className="mb-4" style={{width: 700}} onChange={(event) => searchUsers(getSomeUsers(event.target.value))} />
                    </Col>
                    <Col>
                        <Button variant="outline-success">Search</Button>
                    </Col>
                </Row>
            </Container>
        </Form>
  )
}

export default Searcher;