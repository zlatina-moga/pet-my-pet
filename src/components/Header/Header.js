import { Link } from 'react-router-dom';
import { useAuthContext } from '../../contexts/AuthContext';

export default function Header () {
    const { user } = useAuthContext()

    let guestNavigation = (
        <div id="guest">
            <Link className="button" to="/login">Login</Link>
            <Link className="button" to="/register">Register</Link>
        </div>
    )
    let usernavigation = (
        <div id="user">
            <span>Welcome, {user.email}</span>
            <Link className="button" to="/my-pets">My Pets</Link>
            <Link className="button" to="/create">Add Pet</Link>
            <Link className="button" to="/logout">Logout</Link>
    </div>
    )
    
    return (
        <header id="site-header">
        <nav className="navbar">
            <section className="navbar-dashboard">
                <Link to="/">Dashboard</Link>
                {user.email
                    ? usernavigation
                    : guestNavigation
                }
            </section>
        </nav>
    </header>
    )
}