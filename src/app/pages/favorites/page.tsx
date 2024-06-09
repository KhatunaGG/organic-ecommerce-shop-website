import { Hero, Nav, SignSection } from '@/app/components'
import FavoritesSection from '@/app/components/FavoritesSection/FavoritesSection'
import React from 'react'

export default function page() {
  return (
    <div>
      <SignSection />
      <Nav />
      <Hero />
      <div className='w-full px-[3%] lg:px-[7%]'>
        <FavoritesSection />
      </div>
    </div>
  )
}
