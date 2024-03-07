import A from '../A'

export default function Footer() {
  return (
    <footer>
      <h2>Gabriel Amaral Duarte - Front-End Dev</h2>
      <h3>Copyright @. All rights are reserved</h3>
      <span>
        <A
          href="https://github.com/gabeamaral"
          target="_blank"
          className="footer-icon"
          src="https://github.com/tandpfun/skill-icons/raw/main/icons/Github-Dark.svg"
          alt="github"
        />
        <A
          href="https://www.linkedin.com/in/gabriel-amaral-1a8954207/"
          target="_blank"
          className="footer-icon"
          src="https://github.com/tandpfun/skill-icons/raw/main/icons/LinkedIn.svg"
          alt="linkedin"
        />
      </span>
    </footer>
  )
}
