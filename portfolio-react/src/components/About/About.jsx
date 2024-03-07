import PropTypes from 'prop-types'
export default function About({ src, alt }) {
  return (
    <div id="about">
      <img src={src} alt={alt} />
      <h3>ABOUT ME</h3>
      <h2>Front-End Developer based in São Paulo, Brazil 📍</h2>
      <p>
        Hey, I am Gabriel Amaral, a driven and dedicated Front-end web developer
        with a strong foundation in computer science. My passion is to create
        responsive sites and develop the best product for my users.
      </p>
      <p>
        My main stack currently is React/Vite.js in combination with Tailwind
        CSS and JavaCript
      </p>
    </div>
  )
}

About.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired
}
