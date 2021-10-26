import './App.css';
import React, {useEffect, useMemo, useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import CardList from './Components/CardList/CardList.component';
import Searcher from './Components/Searcher/Searcher.components';
import { Container } from 'react-bootstrap';
import { getAllPosts, getSomeUsers } from './actions/actions';

function App() {
	const [error, makeError] = ([]);
	const [postsLoad, isPostsLoaded] = useState(false);
	const [usersLoad, isUsersLoaded] = useState(false);
	const [posts, setPostsList] = useState([]);
	const [users, setUsersList] = useState([]);

	const memoPosts = useMemo(() => {
		getAllPosts(setPostsList, setUsersList, isPostsLoaded, isUsersLoaded, makeError);
	}, [makeError]) 

	const searchUsers = (name) => {
		getSomeUsers(name, setPostsList, setUsersList, isPostsLoaded, isUsersLoaded, makeError);
		// console.log(users, posts)
	} 

	if(error) {
		return <p>Error {error.message}</p>
	} else if(!postsLoad || !usersLoad) {
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
