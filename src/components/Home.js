import React from 'react'

export default function Home() {
  return (
    <div>
      <header>Kristin Levine</header>
      <p>Software Engineer</p>

    <div className="socials-container">
      <a href={"https://github.com/KristinLevine"}>
        <i className="fa fa-github fa-social github" />
      </a>
      <a href={"https://www.linkedin.com/in/kristin-levine/"}>
        <i className="fa fa-linkedin-square fa-social linkedin" />
      </a>
    </div>
  </div>
  );
}


