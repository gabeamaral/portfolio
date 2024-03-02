import PropTypes from 'prop-types'

export default function ListMenu({ href, title }) {
  return (
    <li>
      <a href={href}>{title}</a>
    </li>
  )
}

ListMenu.propTypes = {
  href: PropTypes.string,
  title: PropTypes.string
}
