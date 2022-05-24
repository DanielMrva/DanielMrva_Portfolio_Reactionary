import React from 'react';
import ProjectCard from './cards/ProjectCard';
import {Accretion, Moonr8ker, Password, Weather} from '../../image/index';

const projectsArray = [
  {
    id: 1,
    name: "Accretion",
    image: Accretion,
    desc: "Accretion is a weekly report submission and database app developed as part of a group with Lindsey Choi, Al Garraffa, and Amber Zimmerman. It uses handlebars, express, MySQL, Sequelize, BCrypt, and PDF Generator packages",
    git: "https://github.com/DanielMrva/accretion",
    dep: "https://accretion2022.herokuapp.com/"
  },
  {
    id: 2,
    name: "Lunar Activities",
    image: Moonr8ker,
    desc: "Moonr8ker is a randomized activity generator and planner using moon phase mapping and random activity generating APIs built as a group project with Al Garraffa and Amber Zimmerman",
    git: "https://github.com/DanielMrva/Lunar-Activities",
    dep: "https://danielmrva.github.io/Lunar-Activities/"
  },
  {
    id: 3,
    name: "Javascript Password Generator",
    image: Password,
    desc: "A java-script focused password generator, which also uses RegEx for password-requirement validation",
    git: "https://github.com/DanielMrva/JS_Password_Generator",
    dep: "https://danielmrva.github.io/JS_Password_Generator/"
  },
  {
    id: 4,
    name: "Weather Forecast Site",
    image: Weather,
    desc: "A weather dashboard app that utilizes programatic html rendering alongside an API call for data.",
    git: "https://github.com/DanielMrva/Weather_Dashboard",
    dep: "https://danielmrva.github.io/Weather_Dashboard/"
  }
]

export default function Projects() {
  return (
    <section className='section container'>
      <div className='row'>
      {projectsArray.map(project => (
              <ProjectCard key={project.id} image={project.image} name={project.name} desc={project.desc} git={project.git} dep={project.dep} />
            )
          )
        }
      </div>
    </section>
  )
}
