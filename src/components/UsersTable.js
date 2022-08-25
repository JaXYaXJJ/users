import Status from "./Status";

function UsersTable() {
    const usersData = [
        {
            id: 1,
            name: "Dottie Ward",
            email: "dottie@company.com",
            status: "active",
        },
        {
            id: 2,
            name: "David Blo",
            email: "david@company.com",
            status: "active",
        },
        {
            id: 3,
            name: "Cookie Smith",
            email: "cookie@company.com",
            status: "active",
        },
    ];

    return (
        <table>
            <thead>
                <th>Name</th>
                <th>Status</th>
                <th>Email</th>
                <th></th>
            </thead>
            <tbody>
                {usersData.map((user) => (
                    <tr>
                        <td>{user.name}</td>
                        <td>
                            <Status />
                        </td>
                        <td>{user.email}</td>
                        <td>
                            <button className="btn btn-default">
                                <i>T</i>
                            </button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

export default UsersTable;
