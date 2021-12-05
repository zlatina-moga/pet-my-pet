import {useState, useEffect} from 'react'
import { Routes, Route } from 'react-router-dom';

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

function App() {
    const [user, setUser] = useState({
        _id: '',
        accessToken: '',
        email: ''
    })

    const onLogin = (authData) => {
        setUser(authData)
    }
    

    const onLogout = () => {

    }


  return (
    <AuthContext.Provider value={true}>
      <div id="container">
       <Header email={user.email}/>

        <main id="site-content">
            <Routes>
                <Route path='/' element={<Dashboard/>} />
                <Route path='/login' element={<Login onLogin={onLogin}/>} />
                <Route path='/logout' element={<Logout onLogout={onLogout}/>}/>
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
