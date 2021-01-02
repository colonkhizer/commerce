import React from 'react'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { Link } from 'react-router-dom';
import { useStateValue } from './StateProvider';
import { auth } from './firebase'

function Header() {
    const [{basket , user },dispatch] = useStateValue()

    const handleAuthentication = () => {
        if(user){
            auth.signOut()
        }
    }

    return (
        <div>
        <nav className="fixed-top navbar navbar-expand-lg navbar-dark default-color">
                <Link to="/" className="navbar-brand" >
                    <img src="https://upload.wikimedia.org/wikipedia/commons/2/26/Daraz_logo_color.png" className="img-fluid" alt="mdb logo"/>
                </Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent-3" aria-controls="navbarSupportedContent-3" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent-3">
                    
                    <ul className="navbar-nav ml-auto nav-flex-icons">
                    <li className="nav-item">
                    <Link to={!user && './login'}>
                    <div className="header__option" onClick={handleAuthentication}>
                        <div className="header__optionLineOne">
                                Hello {!user ? 'Guest' : ( <div> {user.email}  </div> ) }
                        </div>
                        <span className="header__optionLineTwo">
                            {user ? 'Sign Out' : 'Sign In'}
                        </span>
                    </div>
                    </Link>
                    </li>
                    <li className="nav-item d-flex align-items-center">
                    <Link to="/checkout">
                <div className="header__optionBasket">
                    <ShoppingBasketIcon/>
                    <span className="header__optionLineTwo header__BasketCount">{basket?.length}</span>
                </div>
                </Link>
                    </li>
                    </ul>
                </div>
                </nav>

    </div>
    )
}

export default Header
