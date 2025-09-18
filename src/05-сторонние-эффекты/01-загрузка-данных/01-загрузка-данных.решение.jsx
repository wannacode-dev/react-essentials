const { useState, useEffect } = React;

function App() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(data => {
                setUsers(data);
            });
    }, []);

    return (
        <div>
            <h1>Пользователи</h1>
            <ul>
                {users.map(user => (
                    <li key={user.id}>{user.name}</li>
                ))}
            </ul>
        </div>
    )
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />); 