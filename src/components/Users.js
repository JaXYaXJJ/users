import { useState } from "react";
import Header from "./Header";
import Message from "./Message";
import UsersTable from "./UsersTable";

function Users() {

    // let idCount = 0;
    // const setID = () => { idCount++; return idCount; };

    // state hook
    const [usersData, setUsersData] = useState([]);

    // const usersData = [];

    // const usersData = [
    //     {
    //         id: 1,
    //         name: 'Dottie Ward',
    //         email: 'dottie@company.com',
    //         status: 'active'
    //     },
    //     {
    //         id: 2,
    //         name: 'David Blo',
    //         email: 'david@company.com',
    //         status: 'active'
    //     },
    //     {
    //         id: 3,
    //         name: 'Cookie Smith',
    //         email: 'cookie@company.com',
    //         status: 'active'
    //     },
    // ];

    /*
    newUser = {
        name: 'new user',
        email: 'aa@aaa.com'
    }
    */

    // lifting state up
    function addUser(newUser) {
        newUser.id = Math.random() + '';
        newUser.status = 'active';

        /*
        const fruits = ['apple', 'orange'];
        const fruits2 = [...fruits];
        */

        // js array push
        // const updated = usersData.push(newUser);
        // JS: spread operator ... > MDN
        const updated = [...usersData, newUser];
        setUsersData(updated);
    }

    function deleteUser(user) {
        
         /*
        const fruits = ['apple', 'orange'];
        const fruits2 = fruits.filter(item => item === 'orange');
        ['orange']
        */

        const updated = usersData.filter(userItem => userItem.id !== user.id);
        setUsersData(updated);
    }

    return (
        <>
            <Header addUser={addUser} />
            {/* conditional rendering */}
            {
                usersData.length === 0 &&
                <Message />
            }
            <UsersTable users={usersData} deleteUser={deleteUser} />
        </>
    );
}

export default Users;