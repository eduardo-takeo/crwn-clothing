import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import './collection-item.styles.scss';
import CustomButton from 'components/custom-button/custom-button.component';
import { addItem } from 'redux/ducks/cart';

const CollectionItem = ({ item }) => {
  const { id, name, price, imageUrl } = item;
  const dispatch = useDispatch();

  function addToCart(item) {
    dispatch(addItem(item));
  }

  return (
    <div className='collection-item'>
      <div
        className='image'
        style={{
          backgroundImage: `url(${imageUrl})`
        }}
      />
      <div className='collection-footer'>
        <span className='name'>{name}</span>
        <span className='price'>{price}</span>
      </div>
      <CustomButton
        inverted
        className='custom-button'
        onClick={() => addToCart(item)}
      >
        ADD TO CART
      </CustomButton>
    </div>
  )
}

export default CollectionItem;
