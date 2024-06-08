import { Hero, SignSection } from '@/app/components'
import React from 'react'

export default function page() {
  return (
    <div>
      <SignSection />
      <Hero />
      <div className='w-full px-[3%] lg:px-[7%]'></div>
    </div>
  )
}
