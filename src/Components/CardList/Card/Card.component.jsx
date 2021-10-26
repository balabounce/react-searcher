import React, {useEffect, useState} from 'react';
import { Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const CardItem = (props) => {
    const {user, post} = props;
    // console.log(user, post);
    if(user ) {
        return (
            <Card className="mb-2 ms-3" style={{ width: '19.3rem'}} >
                <Card.Body>
                    <Card.Title style={{ color: '#198754'}}>{post.title}</Card.Title>
                    <Card.Text>{post.body}</Card.Text>
                </Card.Body>
                <Card.Subtitle className="mb-2 ms-3 text-muted ">{user.name}</Card.Subtitle>
            </Card>
        )
    } else if(!user) {
        return <div>Users not found</div>
    } else {
        return null
    }
}

export default CardItem;