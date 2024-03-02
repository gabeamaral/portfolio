import { DATA_TECH } from '../../data'
import A from './A'
import Tech from './Tech'

export default function Home() {
  return (
    <>
      <section id="home">
        <h1>Front-End Developer</h1>
        <p>
          Hi, I'm Gabriel Amaral. A passionate Front-End Reat Developer based in
          São Paulo, Brazil.
        </p>
        <span>
          <A
            href="https://github.com/gabeamaral"
            target="_blank"
            src="https://github.com/tandpfun/skill-icons/raw/main/icons/Github-Dark.svg"
            alt="github"
          />
          <A
            href="https://www.linkedin.com/in/gabriel-amaral-1a8954207/"
            target="_blank"
            src="https://github.com/tandpfun/skill-icons/raw/main/icons/LinkedIn.svg"
            alt="linkedin"
          />
        </span>
      </section>
      <section id="tech">
        <h2>Tech Stack</h2>
        <ul>
          {DATA_TECH.map(tech => (
            <Tech key={tech.id} {...tech} />
          ))}
        </ul>
      </section>
    </>
  )
}
