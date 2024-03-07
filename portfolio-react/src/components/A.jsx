import PropTypes from 'prop-types'

export default function A({ src, alt, ...props }) {
  return (
    <a {...props}>
      <img {...props} src={src} alt={alt} />
    </a>
  )
}
// Adicionar ao footer dps
A.propTypes = {
  href: PropTypes.string,
  src: PropTypes.string,
  alt: PropTypes.string
}
