import { Routes, Route } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';

import Dashboard from './components/Dashboard/Dashboard'
import Header from './components/Header/Header';
import Login from './components/Login/Login';
import Create from './components/Create/Create';
import Details from './components/Details/Details';
import Edit from './components/Edit/Edit';
import MyPets from './components/MyPets/MyPets';
import Register from './components/Register/Register';
import Logout from './components/Logout/Logout';
import ErrorBoundary from './components/Common/ErrorBoundary'

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <ErrorBoundary>
    <AuthProvider>
      <div id="container">
       <Header />

        <main id="site-content">
            <Routes>
                <Route path='/' element={<Dashboard/>} />
                <Route path='/login' element={<Login />} />
                <Route path='/logout' element={<Logout />}/>
                <Route path='/register' element={<Register/>} />
                <Route path='/my-pets' element={<MyPets/>} />
                <Route path='/create' element={<Create/>} />
                <Route path='/details/:petId' element={<Details />}/>
                <Route path='/edit/:petId' element={<Edit />}/>
            </Routes>
        </main>
        <footer id="site-footer">
            <p>@PetMyPet</p>
        </footer>

      </div>
      </AuthProvider>
      </ErrorBoundary>
  );
}

export default App;
