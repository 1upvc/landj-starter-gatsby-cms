import React from 'react'
import { Link } from 'gatsby'

import logo from '../img/logo2.svg'
import facebook from '../img/social/facebook.svg'
import instagram from '../img/social/instagram.svg'
import vimeo from '../img/social/vimeo.svg'
import linkedin from '../img/social/linkedin.svg'

const Footer = class extends React.Component {
  render() {
    return (
      <footer className="footer has-background-black has-text-white-ter">
        <div className="content has-text-centered">
          <img
            src={logo}
            alt="L&J Family Foods"
            style={{ width: '14em', height: '10em' }}
          />
        </div>
        <div className="content has-text-centered has-background-black has-text-white-ter">
          <div className="container has-background-black has-text-white-ter">
              <div className="columns">
                <div className="column is-4">
                <section className="menu">
                    <ul className="menu-list">
                      <li><Link to="/" className="navbar-item">Home</Link></li>
                      <li><Link className="navbar-item" to="/about">About</Link></li>
                      <li><Link className="navbar-item" to="/products">
                        Products
                      </Link>
                    </li>
                    <li>
                    <Link className="navbar-item" to="/about">
                      Contact Us
                    </Link>
                    </li>
                    <li><a
                      className="navbar-item"
                      href="/admin/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      ©2019 All Rights Reserved
                    </a></li>
                    </ul>
                  </section>
                </div>
                <div className="column is-4">
                <section>
                  <ul className="menu-list">
                  <li>
                    <Link className="navbar-item" to="/media">
                      How to Eat
                    </Link>
                  </li>
                  <li>
                    <Link className="navbar-item" to="/shop">
                      Where to Buy
                    </Link>
                  </li>
                  <li>
                    <Link className="navbar-item" to="/legal">
                      Legal
                    </Link>
                  </li>
                  </ul>
                </section>
                </div>
                <div className="column is-4 social">
                </a>
                  <a title="twitter" href="https://vimeo.com/landjfamilyfoods">
                  <img
                    className="fas fa-lg"
                    src={vimeo}
                    alt="Vimeo"
                    style={{ width: '1em', height: '1em' }}
                  />
                </a>
                <a title="instagram" href="https://www.instagram.com/junieloves/">
                  <img
                  src={instagram}
                  alt="Instagram"
                  style={{ width: '1em', height: '1em' }}
                  />
                </a>
                <a title="linkedin" href="https://www.linkedin.com/company/landjfamilyfoods/about/">
                  <img
                  src={linkedin}
                  alt="LinkedIn"
                  style={{ width: '1em', height: '1em' }}
                  />
                </a>
                </div>
              </div>
            </div>
        </div>
      </footer>
    )
  }
}

export default Footer
