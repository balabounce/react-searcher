import React from 'react';
import { Card} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const CardItem = (props) => {
    const {user, post} = props;
    if(user && post.id % 10 === 0) {
        return (
            <Card className="mb-2 ms-3" style={{ width: '18rem'}} >
                <Card.Body>
                    <Card.Title style={{ color: '#198754'}}>{post.title}</Card.Title>
                    <Card.Text>{post.body}</Card.Text>
                </Card.Body>
                <Card.Subtitle className="mb-2 ms-3 text-muted ">{user.name}</Card.Subtitle>
            </Card>
        )
    } else return null;
}

export default CardItem;