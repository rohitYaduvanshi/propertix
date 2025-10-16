import React from "react"
import Back from "../common/Back"
import Heading from "../common/Heading"
import img from "../images/about.jpg"
import "./about.css"

const About = () => {
  return (
    <>
      <section className='about'>
        <Back name='About Us' title='About Us - Who We Are?' cover={img} />
        <div className='container flex mtop'>
          <div className='left row'>
            <Heading 
              title='Our Agency Story' 
              subtitle='Check out our company story and work process' 
            />

            <p>
              At Propertix, we are redefining the future of property management using advanced blockchain technology. Our platform ensures transparent, secure, and efficient property transactions for owners, tenants, and managers. We believe that real estate should be simple, trusted, and accessible to everyone.
            </p>
            <p>
              Our journey began with a vision to eliminate fraud, manual paperwork, and process inefficiencies in real estate. By leveraging smart contracts and decentralized verification, we empower users to manage assets, automate rental payments, and track ownership history with complete confidence. Every transaction is tamper-proof and instantly recorded on the blockchain, giving peace of mind to both property owners and tenants.
            </p>
            <p>
              Join us as we transform property management into a seamless, tech-driven experience. At Propertix, innovation and integrity are at the heart of everything we do.
            </p>
            <button className='btn2'>More About Us</button>
          </div>
          <div className='right row'>
            <img src='./immio.jpg' alt='' />
          </div>
        </div>
      </section>
    </>
  )
}

export default About
