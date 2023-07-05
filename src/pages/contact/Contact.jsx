import React from 'react'
import './contact.css'

import { 
  FaEnvelopeOpen,
  FaPhoneSquareAlt,
  FaFacebookF,
  FaTwitter,
  FaYoutube,
  FaDribbble
} from 'react-icons/fa'

import { FiSend } from 'react-icons/fi'

const Contact = () => {
  return (
    <section className="contact section">
      <h2 className="section__title">
        Send Me <span>a Message</span>
      </h2>

      <div className="contact__container container__grid">
        <div className="contact__data">
          <h3 className="contact__title">Don't be shy!</h3>
          <p className="content__description">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta repellendus, quisquam ad voluptatum, illum excepturi non placeat repudiandae incidunt voluptates, voluptate cupiditate id dolor suscipit animi odio corrupti culpa ipsum!</p>

          <div className="contact__info">
            <div className="info__item">
              <FaEnvelopeOpen className='info__icon'/>

              <div>
                <span className="info__title">Mail me</span>
                <span className="info__desc">marioluciosantosjunior@outlook.com.br</span>
              </div>
            </div>

            <div className="info__item">
              <FaPhoneSquareAlt className='info__icon'/>
              <div>
                <span className="info__title">Call me</span>
                <span className="info__desc">+55 034 999461238</span>
              </div>
            </div>
          </div>

          <div className="contact__socials">
            <a href="" className="contact__social-link">
              <FaFacebookF/>
            </a>
            <a href="" className="contact__social-link">
              <FaTwitter/>
            </a>
            <a href="" className="contact__social-link">
              <FaDribbble/>
            </a>
            <a href="" className="contact__social-link">
              <FaYoutube/>
            </a>
          </div>
        
        </div>

        <form className="contact__form">
          <div className="form__input-group">
            <div className="form__input-div">
              <input 
              type="text" 
              placeholder='Your Name'
              className="form__control" />
            </div>

            <div className="form__input-div">
              <input 
              type="email" 
              placeholder='Your Email'
              className="form__control" />                
            </div>

            <div className="form__input-div">
              <input 
              type="text"
              placeholder='Your Subject'
              className="form__control" />                
            </div>
          </div>

          <div className="form__input-div">
            <textarea 
            placeholder='Your Message'
            className="form__control textarea"></textarea>
          </div>

          <button className="button">
            Send Message
            <span className="button__icon contact__button-icon">
              <FiSend/>
            </span>
          </button>
        </form>
      </div>
    </section>
  )
}

export default Contact