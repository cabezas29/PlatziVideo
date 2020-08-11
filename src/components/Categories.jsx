import React from 'react';
import '../assets/components/Categories.scss';

const Categories = ({ children, titleItem }) => (
  <div className='categories'>
    <h3 className='categories__title'>{titleItem}</h3>
    {children}
  </div>
);

export default Categories;
