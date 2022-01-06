import { Routes, Route } from 'react-router-dom';

import { AuthProvider } from './contexts/AuthContext';
import { NotificationProvider } from './contexts/NotificationContext'

import Dashboard from './components/Dashboard/Dashboard'
import Header from './components/Header/Header';
import Login from './components/Login/Login';
import Create from './components/Create/Create';
import Details from './components/Details/Details';
import Edit from './components/Edit/Edit';
import MyPets from './components/MyPets/MyPets';
import Register from './components/Register/Register';
import Logout from './components/Logout/Logout';
import ErrorBoundary from './components/Common/ErrorBoundary';
import Notification from './components/Common/Notification';
import PrivateRoute from './components/Common/PrivateRoute';
import GuardedRoute from './components/Common/GuardedRoute';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <ErrorBoundary>
    <AuthProvider>
      <NotificationProvider>
      <div id="container">
       <Header />
       <Notification />

        <main id="site-content">
            <Routes>
                <Route path='/' element={<Dashboard/>} />
                <Route path='/login' element={<Login />} />
                <Route path='/logout' element={<Logout />}/>
                <Route path='/register' element={<Register/>} />
                <Route path='/my-pets' element={<PrivateRoute> <MyPets/> </PrivateRoute>} />
                <Route path='/details/:petId' element={<Details />}/>                
                <Route element={<GuardedRoute />}>
                  <Route path='/create' element={<Create/>} />
                  <Route path='/edit/:petId' element={<Edit />}/>
                </Route>
            </Routes>
        </main>
        <footer id="site-footer">
            <p>@PetMyPet</p>
        </footer>

      </div>
      </NotificationProvider>
      </AuthProvider>
      </ErrorBoundary>
  );
}

export default App;
