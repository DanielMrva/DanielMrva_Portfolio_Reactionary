import React from 'react';

const projectsArray = [
  {
    id: 1,
    name: "Accretion",
    image: "accretion.png",
    desc: "text",
    git: "https://github.com/DanielMrva/accretion",
    dep: "https://accretion2022.herokuapp.com/"
  },
  {
    id: 2,
    name: "Lunar Activities",
    image: "lunar.png",
    desc: "text",
    git: "https://github.com/DanielMrva/Lunar-Activities",
    dep: "https://danielmrva.github.io/Lunar-Activities/"
  },
  {
    id: 3,
    name: "Javascript Password Generator",
    image: "jsPass.png",
    desc: "text",
    git: "https://github.com/DanielMrva/JS_Password_Generator",
    dep: "https://danielmrva.github.io/JS_Password_Generator/"
  },
  {
    id: 4,
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
        {projectsArray.map(project => (
          <projectCard id={project.id} image={project.image} name={project.name} desc={project.desc} git={project.git} dep={project.dep} />
        ))}

      </div>
    </section>
  );
}
