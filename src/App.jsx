import './App.css';
import Listing from './components/listing.component';
import Search from './components/search.component';
import UsersProvider from './contexts/UsersContext';

function App() {
  return (
    <>
      <UsersProvider>
        <Search />
        <Listing />
      </UsersProvider>
    </>
  );
}

export default App;
