import React from 'react'
import './intro.css'
import './nav.css'

import pixelavatar from './pixelavatar.png'
import '../../node_modules/pattern.css/dist/pattern.css'

const Intro = ({ location }) =>
  location &&
  location.pathname === '/' && (
    <header className='intro animated fadeIn'>
      <div className='avatarWrapper'>
        <div className='avatarUnderlay crt' />
        <img src={pixelavatar} alt='borfile' className='crt' />
        <div className='avatarOverlay crt' />
      </div>
      <span>
        <strong>Jani Anttonen</strong> – A creative mind with a broad view of
        cutting edge technologies. Expert in designing and building the web with
        over a decade of experience.
      </span>
    </header>
  )

export default Intro
