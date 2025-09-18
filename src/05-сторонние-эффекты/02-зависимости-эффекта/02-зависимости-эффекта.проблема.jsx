const { useState, useEffect } = React;

function Post({ id }) {
    useEffect(() => {
        // Выполните запрос на получение поста по id. 
        // url для запроса: https://jsonplaceholder.typicode.com/posts/${id}
        // Сохраните полученные данные в состояние.
        // Используйте fetch для выполнения запроса.
    
        // Обновите массив зависимостей, чтобы запрос выполнялся  при изменении id.
    }, []);

    return (
        <div>
            <h2>Название поста</h2>
            <p>Автор поста</p>
            <p>Текст поста</p>
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