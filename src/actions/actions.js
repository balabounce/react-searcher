

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

export const getSomeUsers = (input) => {
    const regExp = new RegExp(`${input}[a-z]*`, 'i');
    const regExp2 = new RegExp(` ${input}[a-z]*`, 'i');
    const someUsers = [];

    const fetchUser = async () => {
        await fetch(`https://jsonplaceholder.typicode.com/users`)
        .then((response) => response.json())
        .then((json) => {
            json = json.filter(user => (
                regExp.test(user.name) || regExp2.test(user.name)
            ))
            json.forEach(user => {
                console.log(user.id);
                someUsers.push(user);
            })
        },
        (error) => {
            console.log(error);
        });	
    }
    fetchUser();
    return someUsers;
}

export const getSomePosts = (users, getPosts, isPostsLoaded, makeError) =>  {
    users.forEach(user => {
        const fetchPost = async () => {
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
        }
        
    })

}
