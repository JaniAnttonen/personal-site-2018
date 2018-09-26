import React from 'react'
import './contact.css'

const Contact = () => (
  <div className="animated fadeIn">
    <div className="contact-info">
      <div className="contact-info-item">
        <span className="description">Email: </span>
        <span className="address">janianttonen@gmail.com</span>
      </div>
    </div>
    <hr />
    <div className="link-list">
      <span className="list-title">Social Media:</span>
      <div className="link-item">
        <a
          className="social-link"
          href="https://www.linkedin.com/in/janttonen/"
          target="_blank"
          rel="noopener"
        >
          LinkedIn
        </a>
        <span className="separator"> – </span>
        <span className="description">
          Network or contact me in work-related stuff.
        </span>
      </div>
      <div className="link-item">
        <a
          className="social-link"
          href="https://twitter.com/janianttonen"
          target="_blank"
          rel="noopener"
        >
          Twitter
        </a>
        <span className="separator"> – </span>
        <span className="description">Sharing links and thoughts.</span>
      </div>
    </div>
    <hr />
    <div className="link-list">
      <span className="list-title">Additional Links:</span>
      <div className="link-item">
        <a
          className="social-link"
          href="https://keybase.io/jantto"
          target="_blank"
          rel="noopener"
        >
          Keybase
        </a>
        <span className="separator"> – </span>
        <span className="description">
          Yes, it's me. You can find the proof here.
        </span>
      </div>
      <div className="link-item">
        <a
          className="social-link"
          href="https://refer.bandcamp.com"
          target="_blank"
          rel="noopener"
        >
          Bandcamp
        </a>
        <span className="separator"> – </span>
        <span className="description">My musical endeavors.</span>
      </div>
    </div>
  </div>
)

export default Contact
