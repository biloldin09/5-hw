import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import './home.css'
const Count = () => {
    const [user, setUser] = useState({});
    const params = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`)
            .then(response => response.json())
            .then((data) => {
                setUser(data);
            });
    }, [params.id]);

    return (
        <div>
            <h1>{user.name}</h1>
            <h3>username: {user.username}</h3>
            <h3>phone: {user.phone}</h3>
            <h3>email: {user.email}</h3>
            <h3>website: {user.website}</h3>
            <Link onClick={() => {
                navigate(-1);
            }}>go back</Link>
            <div class="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
        </div>
    );
};

export default Count;