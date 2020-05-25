import React from "react"
import { IoMdDocument } from "react-icons/io"
import { FaLinkedinIn, FaGithub, FaTwitter, FaEnvelope } from "react-icons/fa"
import { FiSun, FiMoon } from "react-icons/fi"
import { GrGatsbyjs } from "react-icons/gr"

import { useDarkMode } from "../hooks/useDarkMode"
import { useModeContext } from "../contexts/ModeContext"

import Resume from "../documents/resume.pdf"

const Footer = () => {
  const footerStyle = {
    position: `absolute`,
    bottom: 0,
    right: 0,
    padding: `1.5rem 1.5rem 1rem`,
    display: `flex`,
    flexDirection: `column`,
    alignItems: `center`,
  }

  const footerLinksStyle = {
    width: `32rem`,
    display: `flex`,
    justifyContent: `space-between`,
    fontSize: "2rem",
  }

  const toggleStyle = {
    cursor: "pointer",
  }

  const footerCopyrightStyle = {
    marginTop: `0.5rem`,
    fontSize: `1.1rem`,
  }

  const [darkMode, setDarkMode] = useDarkMode(false)

  const { dispatch } = useModeContext()

  const toggleMode = e => {
    e.preventDefault()
    setDarkMode(!darkMode)
    dispatch({ type: "SET_MODE", payload: darkMode })
  }

  return (
    <footer style={footerStyle}>
      <div style={footerLinksStyle}>
        <a href={Resume} target="_blank" rel="noopener noreferrer">
          <IoMdDocument className="footer-icon" />
        </a>
        <a
          href="https://www.linkedin.com/in/jonathan-y-ho/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedinIn className="footer-icon" />
        </a>
        <a
          href="https://github.com/Jonathan-YungHsin-Ho"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub className="footer-icon" />
        </a>
        <a
          href="https://twitter.com/JonathanHoDev"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaTwitter className="footer-icon" />
        </a>
        <a
          href="mailto:jonathan.yunghsin.ho@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaEnvelope className="footer-icon" />
        </a>
        {darkMode ? (
          <FiSun
            onClick={toggleMode}
            style={toggleStyle}
            className="footer-icon"
          />
        ) : (
          <FiMoon
            onClick={toggleMode}
            style={toggleStyle}
            className="footer-icon"
          />
        )}
      </div>
      <div style={footerCopyrightStyle}>
        © {new Date().getFullYear()}, Built with
        {` `}
        <a
          href="https://www.gatsbyjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          <GrGatsbyjs className="footer-icon" />
        </a>
      </div>
    </footer>
  )
}

export default Footer
