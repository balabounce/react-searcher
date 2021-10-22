import React, {useState} from "react";
import { Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import CardItem from "./Card/Card.component";


const CardList = (props) => {
    const {users, posts} = props;
    console.log(users, posts);
    return (
        <Row >
            {posts.map((post,i) => {
                return <CardItem  user={users[post.userId-1]} post={post} key={i}/>
            })}
        </Row>
    )

}

export default CardList;
