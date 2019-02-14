import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import logo from './logo.png'

const Header = (props) => {
    const {branding} = props;
    return (
        <nav className="navbar navbar-expand-sm navbar-light bg-light mb-3 py-0">
            <div className="container">
                <div className="row">
                <img src={logo} className="img-thumbnail"></img>
                    <div class="col align-self-center">
                <a href={"/"} className="navbar-brand">
                    {branding}
                </a> </div>
                    </div>
                <div>
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <Link to="/" className="nav-link" style={{cursor: 'pointer'}}>
                                Главная
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/contact/add" className="nav-link" style={{cursor: 'pointer'}}>
                                Тренировки
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/about" className="nav-link" style={{cursor: 'pointer'}}>
                                About
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

Header.defaultProps = {
    branding: 'My App'
};

Header.propTypes = {
    branding: PropTypes.string.isRequired
};

export default Header;