import React from "react"
import Heading from "../../common/Heading"
import "./Featured.css"
import FeaturedCard from "./FeaturedCard"

const Featured = () => {
  return (
    <>
      <section className='featured background'>
        <div className='container'>
          <Heading title='Secure Blockchain Property Features' subtitle='Experience transparent ownership, automated contracts, and tamper-proof records powered by blockchain technology.' />
          <FeaturedCard />
        </div>
      </section>
    </>
  )
}

export default Featured
