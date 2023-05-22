import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { Context } from '../store/AppContext'


const Navbar = () => {
    const { store: { currentUser }, actions: { logout } } = useContext(Context);
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">ENERGYM</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button><img src="images/logo.png" alt="" />
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        {
                            !!currentUser ?
                                (
                                    <>
                                        <li className="nav-item">
                                            <Link className="nav-link" to="/Profile">Profile</Link>
                                        </li>
                                        <li className="nav-item dropdown">
                                            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                { currentUser?.user?.username || 'Username'}
                                            </a>
                                            <ul className="dropdown-menu">
                                                <li><Link className="dropdown-item" to="/">Home</Link></li>
                                                <li><Link className="dropdown-item" to="/About">About</Link></li>
                                                <li><Link className="dropdown-item" to="/Service">Services</Link></li>
                                                <li><Link className="dropdown-item" to="/Contact">Contact us</Link></li>
                                                <li><hr className="dropdown-divider" /></li>
                                                <li><button className="dropdown-item" onClick={logout}>Logout</button></li>
                                            </ul>
                                        </li>
                                    </>
                                ) : (
                                    <>
                                       <li className="nav-item active">
                                            <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link" to="/About">About </Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link" to="/Service">Services </Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link" to="/Contact">Contact Us</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link" to="/Login">Login</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link" to="/Register">Register</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link" to="/Profile">Profile</Link>
                                        </li>
                                        
                                    </>
                                )
                        }


                    </ul>
                    
                </div>
            </div>
        </nav>
    )
}



export default Navbar