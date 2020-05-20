import React from 'react';

const Cat = ({ cat }) => {
  return (
    <div className="cat-img-container">
      <img src={`./images/cats/${cat.imgSrc}`} alt="cat"/>
    </div>
  );
}
 
export default Cat;