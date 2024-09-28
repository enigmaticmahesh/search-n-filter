import { createContext, useContext, useState } from 'react';

const UsersContext = createContext(null);

const UsersProvider = ({ children }) => {
  const [query, setQuery] = useState('');

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
