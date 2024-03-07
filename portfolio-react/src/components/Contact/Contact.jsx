import './Contact.css'
import email from '../../assets/email.svg'
import location from '../../assets/location.svg'

export default function Contact() {
  return (
    <div id="contact" className="contact_title">
      <h4 id="p-contact">CONTACT</h4>
      <h3>Don't be shy! Hit me up! 👇</h3>
      <div className="contact">
        <img className="img-content" src={location} alt="location" />
        <p className="style">Location</p>
        <p id="button">São Paulo, Brazil</p>
      </div>
      <div className="contact">
        <img className="img-content" src={email} alt="email" />
        <p className="style">Mail</p>
        <p
          id="button"
          onClick={() =>
            (window.location = 'mailto:gabrielduarte1405@gmail.com')
          }
        >
          gabrielduarte1405@gmail.com
        </p>
      </div>
    </div>
  )
}
