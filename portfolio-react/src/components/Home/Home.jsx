import { DATA_TECH } from '../../data'
import A from '../A'
import Tech from './Tech'
import profile from '../../assets/profile.png'
import github from '../../assets/github.svg'
import linkedin from '../../assets/linkedin.svg'
import './Home.css'

export default function Home() {
  return (
    <>
      <section id="home">
        <h1>Front-End Developer 👋</h1>
        <p>
          Hi, I'm Gabriel Amaral. A passionate Front-End React Developer based
          in São Paulo, Brazil. 📍
        </p>
        <span>
          <A
            id="img"
            href="https://github.com/gabeamaral"
            target="_blank"
            src={github}
            alt="github"
          />
          <A
            id="img"
            href="https://www.linkedin.com/in/gabriel-amaral-1a8954207/"
            target="_blank"
            src={linkedin}
            alt="linkedin"
          />
        </span>
        <span>
          <img id="img-profile" src={profile} alt="profile-pic" />
        </span>
      </section>
      <div>
        <section id="tech">
          <h2>Tech Stack</h2>
          <ul>
            {DATA_TECH.map(tech => (
              <Tech key={tech.id} {...tech} />
            ))}
          </ul>
        </section>
      </div>
    </>
  )
}
