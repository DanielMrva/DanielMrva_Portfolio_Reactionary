import React from 'react';

const projectsArray = [
  {
    name: "Accretion",
    image: "accretion.png",
    desc: "text",
    git: "https://github.com/DanielMrva/accretion",
    dep: "https://accretion2022.herokuapp.com/"
  },
  {
    name: "Lunar Activities",
    image: "lunar.png",
    desc: "text",
    git: "https://github.com/DanielMrva/Lunar-Activities",
    dep: "https://danielmrva.github.io/Lunar-Activities/"
  },
  {
    name: "Javascript Password Generator",
    image: "jsPass.png",
    desc: "text",
    git: "https://github.com/DanielMrva/JS_Password_Generator",
    dep: "https://danielmrva.github.io/JS_Password_Generator/"
  },
  {
    name: "Weather Forecast Site",
    image: "weather.png",
    desc: "text",
    git: "https://github.com/DanielMrva/Weather_Dashboard",
    dep: "https://danielmrva.github.io/Weather_Dashboard/"
  }
]

export default function projects() {
  return (
    <section className='section' id='projects'>
      <div className='row'>
        <projectCard projects={projectsArray}></projectCard>
      </div>
    </section>
  );
}
