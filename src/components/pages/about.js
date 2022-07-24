import React from 'react';

export default function About() {
  return (
    <section className="section container">
      <div className="row">
        <div className="col s12 m3 l3">
          <h2 className="about-text white-text">About Me</h2>
        </div>

        <div className="col m9 l9">
          <p className="about-text">
          I am an aspiring web developer with a background in the arts; having received a Bachelors of Fine Arts from Illinois State University and a Masters of Fine Arts from Indian University, and finally continuing my education with a full-stack web development certificate from the University of Denver in 2022.
          <br></br>
          <br></br>
          My artistic work focused on building paintings through developing an algorithm-like set of rules, adding in variables (such as starting and ending colors for a gradient), which are then executed to get the final result.
          <br></br>
          This process of logical problem solving continues in my programming work; wherein I most enjoy the development process that involves algorithmically solving problems or manipulating data.
          <br></br>
          <br></br>
          I am originally from Arizona, was raised in Illinois, and have lived in New York as well as Indiana.
          I currently live and work in Colorado with my two sweet daughters and lovely wife.
          </p>
        </div>
      </div>
    </section>
  );
}
