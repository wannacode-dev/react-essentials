const { useState, useEffect } = React;

function App() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        // Выполните запрос на получение списка пользователей. 
        // url для запроса: https://jsonplaceholder.typicode.com/users
        // Сохраните полученные данные в состояние.
    }, []);

    return (
        <div>
            <h1>Пользователи</h1>
            <ul>
                {/**
                 * Выведите имена пользователей.
                 * Каждый пользователь должен быть представлен в виде li.
                 * Добавьте key для каждого пользователя.
                 */}
            </ul>
        </div>
    )
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />); 