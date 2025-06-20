import CompanionCard from '@/components/CompanionCard'
import CompanionList from '@/components/CompanionList'
import CTA from '@/components/CTA'
// import { Button } from '@/components/ui/button'
import React from 'react'

const companions = [
  {
    id: '973829',
    name: 'Langy the Modern Speaker',
    topic: 'An introduction to languate',
    subject: 'language',
    duration: 45,
    color: '#E5D0FF',
    bookmarked: false,
  },
  {
    id: '234173',
    name: 'Mathsy the Number Wizard',
    topic: 'Addition and Simple Arithmetic',
    subject: 'maths',
    duration: 45,
    color: '#BDE7FF',
    bookmarked: false,
  },
  {
    id: '172493',
    name: 'Babayo the Biological Baba',
    topic: 'An introduction to Human Anatomy',
    subject: 'science',
    duration: 45,
    color: '#FFDA6E',
    bookmarked: false,
  },
]

const Page = () => {
  return (
    <main>
      <h1>
        Popular Companions
      </h1>

      <section className='home-section'>
        {companions.map((companion)=>(
          <CompanionCard 
            key={companion.id} 
            {...companion}
          />
        ))}
      </section>

      <section className='home-section'>
        <CompanionList 
          title='Recently completed lessons'
          companions={companions}
          classNames='w-2/3 max-lg:w-full'
          />
        <CTA/>
      </section>
    </main>
  )
}

export default Page