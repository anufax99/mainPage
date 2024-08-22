import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopyright, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faCopyright as faCopyrightRegular } from '@fortawesome/free-regular-svg-icons';

const Footer = () => {
  return (
<footer>
  <div className="footer">
    <h2 className="ftHeading">Get in touch</h2>
    <hr style={{ color: "white" }} />

    <div className="footer-content">
      {/* 1st box */}
      <div className="cpr boxes">
        <div className="logoName">
          <svg width="500" height="50" viewBox="-45 0 520 106" fill="none" xmlns="http://www.w3.org/2000/svg">
            {<svg width="500" height="50" viewBox="-45 0 520 106" fill="none" xmlns="http://www.w3.org/2000/svg" >
                    <path d="M220.5 5L220.5 101" stroke="black" stroke-width="10" stroke-linecap="sqaure" style="transform-origin: center;" class="line"/>
                    <path d="M18.075 80V33.575H1.35V27.5H41.55V33.575H24.9V80H18.075ZM48.1752 80V27.5H67.0752C72.0752 27.5 76.0752 28.825 79.0752 31.475C82.0752 34.125 83.5752 37.65 83.5752 42.05C83.5752 45.25 82.7002 48.05 80.9502 50.45C79.2502 52.8 76.8752 54.5 73.8252 55.55L88.9752 80H80.9502L66.7752 56.6H55.0002V80H48.1752ZM55.0002 50.45H66.3252C69.5752 50.45 72.1002 49.725 73.9002 48.275C75.7002 46.775 76.6002 44.7 76.6002 42.05C76.6002 39.4 75.7002 37.325 73.9002 35.825C72.1002 34.325 69.5752 33.575 66.3252 33.575H55.0002V50.45ZM114.615 36.5L105.24 60.575H123.915L114.615 36.5ZM90.6896 80L111.465 27.5H117.69L138.54 80H131.415L126.24 66.65H102.915L97.7396 80H90.6896ZM166.051 80.6C158.951 80.6 152.926 78.275 147.976 73.625C143.026 68.925 140.551 62.3 140.551 53.75C140.551 45.2 143.026 38.6 147.976 33.95C152.976 29.25 159.001 26.9 166.051 26.9C171.751 26.9 176.576 28.4 180.526 31.4C184.526 34.35 187.076 38.375 188.176 43.475L181.426 44.975C180.576 41.175 178.801 38.225 176.101 36.125C173.451 34.025 170.076 32.975 165.976 32.975C160.476 32.975 156.026 34.8 152.626 38.45C149.276 42.1 147.601 47.2 147.601 53.75C147.601 60.3 149.276 65.4 152.626 69.05C156.026 72.65 160.476 74.45 165.976 74.45C170.026 74.45 173.351 73.45 175.951 71.45C178.601 69.45 180.401 66.625 181.351 62.975L188.176 64.4C186.826 69.4 184.201 73.35 180.301 76.25C176.401 79.15 171.651 80.6 166.051 80.6Z" fill="black"/>
                    <path d="M277.575 80.6C270.475 80.6 264.45 78.275 259.5 73.625C254.55 68.925 252.075 62.3 252.075 53.75C252.075 45.2 254.55 38.6 259.5 33.95C264.5 29.25 270.525 26.9 277.575 26.9C283.275 26.9 288.1 28.4 292.05 31.4C296.05 34.35 298.6 38.375 299.7 43.475L292.95 44.975C292.1 41.175 290.325 38.225 287.625 36.125C284.975 34.025 281.6 32.975 277.5 32.975C272 32.975 267.55 34.8 264.15 38.45C260.8 42.1 259.125 47.2 259.125 53.75C259.125 60.3 260.8 65.4 264.15 69.05C267.55 72.65 272 74.45 277.5 74.45C281.55 74.45 284.875 73.45 287.475 71.45C290.125 69.45 291.925 66.625 292.875 62.975L299.7 64.4C298.35 69.4 295.725 73.35 291.825 76.25C287.925 79.15 283.175 80.6 277.575 80.6ZM326.554 36.5L317.179 60.575H335.854L326.554 36.5ZM302.629 80L323.404 27.5H329.629L350.479 80H343.354L338.179 66.65H314.854L309.679 80H302.629ZM356.501 80V27.5H375.401C380.401 27.5 384.401 28.825 387.401 31.475C390.401 34.125 391.901 37.65 391.901 42.05C391.901 45.25 391.026 48.05 389.276 50.45C387.576 52.8 385.201 54.5 382.151 55.55L397.301 80H389.276L375.101 56.6H363.326V80H356.501ZM363.326 50.45H374.651C377.901 50.45 380.426 49.725 382.226 48.275C384.026 46.775 384.926 44.7 384.926 42.05C384.926 39.4 384.026 37.325 382.226 35.825C380.426 34.325 377.901 33.575 374.651 33.575H363.326V50.45ZM413.12 80V33.575H396.395V27.5H436.595V33.575H419.945V80H413.12Z" fill="black"/>
            </svg>}
          </svg>
          <h3 style={{ color: "white", fontWeight: 400 }}> traccart.in </h3>
        </div>

        <div className="copyright">
          <FontAwesomeIcon icon={faCopyright} style={{ color: "white" }} />
          <h4 style={{ color: "white", fontWeight: 350 }}>2024 All Rights Reserved.</h4>
        </div>

        <div className="links">
          <h3 style={{ color: "white", fontWeight: 350, display: "inline", marginRight: "1rem" }}>Follow us</h3>
          {/* <a href="#" className="linkden"><FontAwesomeIcon icon={faLinkedin} /></a> */}
          {/* <a href="#" className="discord"><FontAwesomeIcon icon={faDiscord} /></a> */}
        </div>
      </div>

      {/* 2nd box */}
      <div className="mail boxes">
        <label htmlFor="">Leave us a message.</label>
        <textarea className="txt" type="text" name="message" id="message" placeholder="write here" />
        <div className="textButton">
          <input className="sbmt S" type="button" value="submit" />
          <input className="sbmt R" type="button" value="Reset" />
        </div>

        <div className="contact">
          <h3>Contacts</h3>
          <a href="#"><FontAwesomeIcon icon={faEnvelope} /></a>
          <a href="#" className="phone"><FontAwesomeIcon icon={faPhone} /></a>
        </div>
      </div>

      {/* 3rd box */}
      <div className="help boxes">
        <h3>Help</h3>
        <ul>
          <li><a href="#">Terms and conditions</a></li>
          <li><a href="#">Privacy policy</a></li>
          <li><a href="#">Payment methods</a></li>
        </ul>
      </div>
    </div>
  </div>
</footer>
  )
}

export default Footer