import React from 'react'
import ItemCard from './ItemCard'
import data from '../Data/Data'

function Home() {
  return (
      <>
          <h1 className='text-center mt-3'>All Items</h1>
          <section className='py-4 container'>
              <div className='row justify-content-center'>
                  {data.map((item,index) => {
                      return (
                          <ItemCard title={item.title}
                              img={item.img}
                              desc={item.desc}
                              price={item.price}
                              key={index}
                              item={item } />
                      )
                  }) }
                  
              </div>
            </section>
          
    </>
  )
}

export default Home