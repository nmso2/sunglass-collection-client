import { useEffect, useState } from "react";


const useUsers = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch('https://sunglass-collection.herokuapp.com/users')
            .then(res => res.json())
            .then(data => setUsers(data));
    }, []);

    return [users, setUsers]
};

export default useUsers;