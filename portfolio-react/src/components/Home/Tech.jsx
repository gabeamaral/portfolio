import PropTypes from 'prop-types'

export default function Tech({ src, alt }) {
  return (
    <li>
      <img src={src} alt={alt} />
    </li>
  )
}

Tech.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired
}
