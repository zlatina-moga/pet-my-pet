import {useState, useEffect} from 'react'
import { Routes, Route } from 'react-router-dom';

import useLocalStorage from './hooks/useLocalStorage';
import {AuthContext} from './contexts/AuthContext'
import Dashboard from './components/Dashboard/Dashboard'
import Header from './components/Header/Header';
import Login from './components/Login/Login';
import Create from './components/Create/Create';
import Details from './components/Details/Details';
import Edit from './components/Edit/Edit';
import MyPets from './components/MyPets/MyPets';
import Register from './components/Register/Register';
import Logout from './components/Logout/Logout';

const initialAuthState = {
  _id: '',
  accessToken: '',
  email: ''
}

function App() {
    const [user, setUser] = useLocalStorage('user', initialAuthState)

    const login = (authData) => {
        setUser(authData)
    }
    

    const logout = () => {
      setUser(initialAuthState)
    }


  return (
    <AuthContext.Provider value={{user, login, logout}}>
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
            </Routes>
        </main>
        <footer id="site-footer">
            <p>@PetMyPet</p>
        </footer>

      </div>
    </AuthContext.Provider>
  );
}

export default App;
