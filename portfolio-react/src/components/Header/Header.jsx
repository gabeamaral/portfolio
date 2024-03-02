import { DATA_A } from '../../data.js'
import ListMenu from './ListMenu.jsx'

export default function Header() {
  return (
    <header>
      <h1>Gabriel.dev</h1>
      <nav>
        <ul>
          {DATA_A.map(items => (
            <ListMenu key={items.id} {...items} />
          ))}
        </ul>
      </nav>
    </header>
  )
}
