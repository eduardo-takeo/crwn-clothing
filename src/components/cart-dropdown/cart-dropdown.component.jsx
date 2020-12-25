import React from 'react';

import './cart-dropdown.styles.scss';
import CustomButton from 'components/custom-button/custom-button.component.jsx';

function CartDropdown() {
    return (
        <div className='cart-dropdown'>
            <div className="cart-items" />
            <CustomButton>GO TO CHECKOUT</CustomButton>
        </div>
    )
}

export default CartDropdown
