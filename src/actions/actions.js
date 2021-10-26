
export const getAllPosts = (getPosts, getUsers, isPostsLoaded, isUsersLoaded, makeError) => {
    async function fetchData() {
        await fetch('https://jsonplaceholder.typicode.com/posts')
        .then((response) => response.json())
        .then((json) => {
            isPostsLoaded(true);
            getPosts(json);
            // console.log(json);
        },
        (error) => {
            isPostsLoaded(true);
            makeError(error);
            // console.log(error);
        }
        );	
        await fetch('https://jsonplaceholder.typicode.com/users')
        .then((response) => response.json())
        .then((json) => {
            isUsersLoaded(true);
            getUsers(json);
            // console.log(json);
        },
        (error) => {
            isUsersLoaded(true);
            makeError(error);
            // console.log(error);
        }
        );	
    }
    fetchData();
    
}

export const getSomeUsers = (input, setPosts, setUsers, isPostsLoaded, isUsersLoaded, makeError) => {
    const regExp = new RegExp(`^${input}`, 'ig');
    const regExp2 = new RegExp(` ${input}`, 'ig');
    const someUsers = [];

    async function fetchData() {
        await fetch(`https://jsonplaceholder.typicode.com/users`)
        .then((response) => response.json())
        .then((json) => {
            json = json.filter(user => (
                regExp.test(user.name) || regExp2.test(user.name)
            ))
            json.forEach(user => {
                someUsers.push(user);
            })
        }
        ,
        (error) => {
            makeError(error)
            console.log(error);
        })
        .then(() => {
            setUsers(someUsers);
        })
    }
    fetchData();
}

