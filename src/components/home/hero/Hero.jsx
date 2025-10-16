import React from "react"
import Heading from "../../common/Heading"
import "./hero.css"

const Hero = () => {
  return (
    <>
      <section className='hero'>
        <div className='container'>
          <Heading title='Manage Properties Securely With Blockchain ' subtitle='Verify ownership and automate rentals with blockchain.' />

          <form className='flex'>
            <div className='box-x'>
              <span>Property ID / Address</span>
              <input type='text' placeholder='ID / Address' />
            </div>
            <div className='box-x'>
              <span>Ownership Status</span>
              <input type='text' placeholder='Status' />
            </div>
            <div className='box-x'>
              <span>Contract Type</span>
              <input type='text' placeholder='Write the type' />
            </div>
            <div className='box-x'>
              <h4>Verified Records</h4>
            </div>
            <button className='btn1'>
              <i className='fa fa-search'></i>
            </button>
          </form>
        </div>
      </section>
    </>
  )
}

export default Hero
