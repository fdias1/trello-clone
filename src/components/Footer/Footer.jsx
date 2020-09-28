import React from 'react'
import './Footer.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub } from "@fortawesome/free-brands-svg-icons"

export default props => (
    <footer id="footer">
        <a href="http://github.com/fdias1/trello-clone" target="_blank" rel="noopener noreferrer" className="link-github">
            Visite a página do projeto no <span className="github-logo"><FontAwesomeIcon icon={faGithub} /> GitHub</span>            
        </a>
    </footer>
)