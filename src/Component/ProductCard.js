import React, { useState } from 'react';

const ProductCard = ({item}) => {
  const [isListHover, setIsListHover] = useState(true);
  return (
    <div>
      <img src={isListHover === true ? item?.img : item?.img2 } onMouseOver={() => setIsListHover(false)} onMouseOut={() => setIsListHover(true)} />
      <div>{item?.title}</div>
      <div>₩{item?.price}</div>
      <div style={{color : 'red'}}>{item?.new === true ? '신제품' : ''}</div>
    </div>
  );
};

export default ProductCard;