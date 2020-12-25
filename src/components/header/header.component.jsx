import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import './header.styles.scss';
import { auth } from '../../firebase/firebase.utils';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import CartIcon from 'components/cart-icon/cart-icon.component';
import CartDropdown from 'components/cart-dropdown/cart-dropdown.component';

const Header = ({ currentUser }) => {
  const { isVisible } = useSelector(state => state.cart);

  return (
    <div className='header'>
      <Link className='logo-container' to='/'>
        <Logo className='logo' />
      </Link>
      <div className='options'>
        <Link className='option' to='/shop'>
          SHOP
        </Link>
        <Link className='option' to='/shop'>
          CONTACT
        </Link>

        {currentUser
          ? <div className="option" onClick={() => auth.signOut()} >SIGN OUT</div>
          : <Link className="option" to="/signin">SIGN IN</Link>
        }
        <CartIcon />
      </div>
      {isVisible && <CartDropdown />}
    </div>
  );
};

export default Header;
