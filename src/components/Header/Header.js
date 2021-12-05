import {Link} from 'react-router-dom'

export default function Header ({
    email
}) {
    let guestNavigation = (
        <div id="guest">
            <Link className="button" to="/login">Login</Link>
            <Link className="button" to="/register">Register</Link>
        </div>
    )
    let usernavigation = (
        <div id="user">
            <span>Welcome, {email}</span>
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
                {email
                    ? usernavigation
                    : guestNavigation
                }
            </section>
        </nav>
    </header>
    )
}