import React, {useEffect, useState} from "react";
import { Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import CardItem from "./Card/Card.component";


const CardList = (props) => {
    const {users, posts} = props;
    let userI = 0;
    console.log(posts, users)
    return (
        <Row >
            {posts.map((post,i) => {
                if(i !== 0 && i % 10 === 0) {
                    userI++;
                }
                if(users[userI]) {
                    return <CardItem  user={users[userI]} post={post} key={i}/>
                } else {
                    return null;
                }
            })}
        </Row>
    )

}

export default CardList;
