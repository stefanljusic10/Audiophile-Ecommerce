import React from 'react'
import Logo from '../Logo/Logo'
import NavList from '../Navbar/NavList'
import SocialMedia from './SocialMedia'

function Footer() {
  return (
    <div className='footer'>
      <div className='footer__box'>
        <div className='footer__left'>
          <Logo />
          <div className='footer__left-text text margin-top-small'>
            Audiophile is an all in one stop to fulfill your audio needs.
            We're a small team of music lovers and sound specialists who
            are devoted to helping you get the most out of personal audio.
            Come and visit our demo facility - we're open 7 days a week.
          </div>
          <div className='footer__left-text text margin-top-small'>
            Copyright 2021. All Rights Reserved
          </div>
        </div>
        <div className='footer__right'>
          <NavList />
          <SocialMedia />
        </div>
      </div>
    </div>
  )
}

export default Footer
