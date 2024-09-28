import { createContext, useContext, useState } from 'react';

const UsersContext = createContext(null);

const UsersProvider = ({ children }) => {
  const [query, setQuery] = useState('');
  //   const [users, setUsers] = useState([]);

  //   useEffect(() => {
  //     const fetchUsers = async () => {
  //       const res = await fetch('https://randomuser.me/api/?results=50');
  //       const data = await res.json();
  //       console.log({ data });
  //       if (data && data.results) {
  //         setUsers(data.results);
  //       }
  //     };
  //     fetchUsers();
  //   }, []);

  return (
    <UsersContext.Provider value={{ query, setQuery }}>
      {children}
    </UsersContext.Provider>
  );
};

export const useUsersContext = () => {
  const context = useContext(UsersContext);
  if (!context) {
    throw new Error('useUsersContext must be used within UsersProvider');
  }
  return context;
};

export default UsersProvider;
