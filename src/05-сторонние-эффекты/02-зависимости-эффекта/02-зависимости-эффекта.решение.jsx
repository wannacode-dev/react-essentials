const { useState, useEffect } = React;

function Post({ id }) {

    const [post, setPost] = useState(null);

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then(response => response.json())
            .then(data => {
                setPost(data);
            });
    }, [id]);

    return (
        <div>
            <h2>{post?.name}</h2>
            <p>{post?.author}</p>
            <p>{post?.price}</p>
        </div>
    )
}

function App() {
    const [posts, setPosts] = useState([]);
    const [selectedPost, setSelectedPost] = useState(null);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(data => {
                setPosts(data);
            });
    }, []);

    return (
        <div>
            <h1>Посты</h1>
            <ul>
                {posts.map(post => (
                    <li key={post.id}>
                        <button onClick={() => setSelectedPost(post)}>{post.name}</button>
                    </li>
                ))}
            </ul>
            {selectedPost && <Post id={selectedPost.id} />}
        </div>
    )
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />); 