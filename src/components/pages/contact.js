import React from 'react';

export default function Contact() {
  return (
    <section id="contact">
        <div className="section-heading">
            <h2>Contact Me</h2>
        </div>
        <div className="section-content">
            <ul id= "links" >
                <li><a target="_blank" href="https://github.com/DanielMrva" >GitHub</a></li>
                <li><a target="_blank" href="https://www.linkedin.com/in/daniel-mrva-1198a671/">LinkdIn</a></li>
                <li><a href="mailto:mrva.develops@gmail.com">Email</a></li>
                <li><a href="./Assets/docs/Daniel-Mrva-Resume.pdf" download>Resume Download</a></li>
            </ul>
        </div>
    </section>
  );
}
