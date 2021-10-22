import './App.css';
import React, {useEffect, useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import CardList from './Components/CardList/CardList.component';
import Searcher from './Components/Searcher/Searcher.components';
import { Container, Row } from 'react-bootstrap';
import { getAllPosts } from './actions/actions';

function App() {
	const [error, makeError] = ([]);
	const [postsLoad, isPostsLoaded] = useState(false);
	const [usersLoad, isUsersLoaded] = useState(false);
	const [posts, setPostsList] = useState([]);
	const [users, setUsersList] = useState([]);


	useEffect(() => {
		getAllPosts(setPostsList, setUsersList, isPostsLoaded, isUsersLoaded, makeError);
	  }, []);

	const searchUsers = (userList) => {
		setUsersList(userList);
	} 

	if(error) {
		return <p>Error {error.message}</p>
	} else if(!postsLoad && !usersLoad) {
		return <p>Loading...</p>
	} else {
		return (
			<Container className='pt-4'>
				<Searcher searchUsers={searchUsers}/>
				<CardList posts={posts} users={users}/>
			</Container>
		)
	}


}


export default App;
