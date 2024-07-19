import './home.css'
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

const Home = () => {
    const [user, setUser] = useState({});
    const [users, setUsers] = useState([]);
    const params = useParams();
    
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`)
        .then(response => response.json())
        .then((data) => {
            setUser(data);
        });
    }, [params.id]);
    
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then((data) => {
            setUsers(data);
        });
    }, []);
    
    return (
        <div>
            <h1>Home</h1>
            <h1>{user.name}</h1>
            <h1>{user.username}</h1>
            
            { 
                users.map(item => (
                    <h1 key={item.id}><Link to={`/users/${item.id}`}>{item.username}</Link></h1>
                ))
            }
           <div class="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
        </div>
    );
};

export default Home;
