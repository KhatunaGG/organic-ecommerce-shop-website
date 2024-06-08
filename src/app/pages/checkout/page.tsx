import { CheckoutSection, Hero, SignSection } from '@/app/components'
import React from 'react'

export default function page() {
  return (
    <main>
      <SignSection />
      <Hero />

      <section className="max-w-screen-xl  mx-auto  px-[3%] lg:px-[7%] ">
        <CheckoutSection />
      </section>
      

    </main>
  )
}
