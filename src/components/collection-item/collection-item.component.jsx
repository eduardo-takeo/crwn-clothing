import React, { useState } from 'react';

import './collection-item.styles.scss';
import CustomButton from 'components/custom-button/custom-button.component';

const CollectionItem = ({ id, name, price, imageUrl }) => {
  const [showAddToCart, setShowAddToCart] = useState(false);

  return (
    <div className='collection-item'>
      <div
        className='image'
        style={{
          backgroundImage: `url(${imageUrl})`
        }}
        onMouseEnter={() => setShowAddToCart(true)}
        onMouseLeave={() => setShowAddToCart(false)}
      >
        {showAddToCart &&
          <CustomButton inverted className='custom-button'> ADD TO CART</CustomButton>
        }
      </div>
      <div className='collection-footer'>
        <span className='name'>{name}</span>
        <span className='price'>{price}</span>
      </div>
    </div>
  )
}

export default CollectionItem;
