import React from 'react'
import { InfiniteMovingCards } from './ui/infiinite-moving-cards'
import { testimonials } from '@/data'
import { companies } from '@/data'

const Clients = () => {
  return (
    <div className="py-20" id="projects">
        <h1 className="heading">
            Our clients have
            <span className="text-purple">great things to say!</span>
        </h1>
        <div className="flex flex-col items-center max-lg:mt-10">
          <InfiniteMovingCards
            items={testimonials}
            direction='right'
            speed='slow'
          />
          <div>
            {companies.map(({ id, img, name, nameImg }) => (
              <div key={id} className='flex md:max-w-60 max-w-32 gap-2'>
                <img src={img} alt={name} className='md:w-10 w-5'/>
              </div>
            ))} 
          </div>
        </div>

    </div>
  )
}

export default Clients