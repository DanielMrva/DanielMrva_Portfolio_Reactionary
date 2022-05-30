import React from 'react';
import ProjectCard from './cards/ProjectCard';
import {Accretion, Moonr8ker, Password, Weather, Jate, SqlTeam6, CTech, Tach} from '../../image/index';

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
  },
  {
    id: 5,
    name: "Jate",
    image: Jate,
    desc: "A PWA text editor with IndexedDB and Local storage for persistent offline use, and Vs-code-like text coloration",
    git: "https://github.com/DanielMrva/Only_a_Jate",
    dep: "https://ancient-tundra-72845.herokuapp.com/"
  },
  {
    id: 6,
    name: "Tach Blag Wobesite",
    image: Tach,
    desc: "Tach Blag Wobesite is a basic blogging website built using Node, Express, Sequelizie, and Handlebars. The site utilizes the MVC file structure, and a simple relational database.",
    git: "https://github.com/DanielMrva/Tach_blag_wobesite",
    dep: "https://tach-blag-wobesite.herokuapp.com/"
  },
  {
    id: 7,
    name: "C-line Tech Team",
    image: CTech,
    desc: "C_Line_Tech_Team is a command line javascript program used to create very basic html pages to have team member contact data. Technologies utilized include Inquirer, Node.js, Jest (for testing).",
    git: "https://github.com/DanielMrva/c_line_tech_team",
    dep: "https://watch.screencastify.com/v/NiIu2nOoXON0lsOaEFYC"
  },
  {
    id: 8,
    name: "Sql Team 6",
    image: SqlTeam6,
    desc: "Sql_Team_6 is a basic command-line employee database access and update app that uses Node JS, Inquirer, MySql2, and Console.Table.",
    git: "https://github.com/DanielMrva/Sql-Team-6",
    dep: "https://watch.screencastify.com/v/5DouxBvx9CNRdEuAK1Zd"
  }
];

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
