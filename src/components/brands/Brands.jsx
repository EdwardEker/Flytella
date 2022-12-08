import React from 'react';
import BrandsList from '../../mocks/BrandsList';

const Brands = () => {
  return (
    <section className='brands'>
      <div className='container brands__container'>
        <div className='brands__wrapper'>
          {
            BrandsList.map(({id, image}) => {
              return (
                <div key={id} className='brands__brand'>
                  <img src={image} alt="" />
                </div>
              )
            })
          }
        </div>
      </div>
    </section>
  )
}

export default Brands