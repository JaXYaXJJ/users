import Status from "./Status";

function UsersTable() {

    // let idCount = 0;
    // const setID = () => {
    //   idCount++;
    //   return idCount;
    // };
    // Michael ex. for data loop

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
    <table className="table table-hover">
      <thead>
        <tr>
          <th className="w-25">Name</th>
          <th className="w-25">Status</th>
          <th className="w-50">Email</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {usersData.map(user => (
          <tr key={user.id} className="bg-light">
            <td>{user.name}</td>
            <td>
              <Status />
            </td>
            <td>{user.email}</td>
            <td>
              <button className="btn btn-default">
                <i className="bi-trash3"></i>
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default UsersTable;
