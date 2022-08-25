import Header from "./Header";
import Message from "./Message";
import UsersTable from "./UsersTable";

function Users() {

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
    <>
      <Header />
      {
        usersData.length === 0 &&
        <Message />
      }
      <UsersTable users={usersData}/>
    </>
  );
}

export default Users;
