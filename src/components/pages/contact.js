import React from 'react';

export default function Contact() {
  return (
    <section className='container'>
      <div className='row'>
        <form className='col s12'>
          <div className='row'>
            <div className='input-field col s12'>
              <input placeholder='name' id='name' type='text' class='validate'/>
              <label for='name'>Name</label>
            </div>
          </div>
          <div className='row'>
            <div className='input-field col s12'>
              <input placeholder='email' id='email' type='email' class='validate'/>
              <label for='email'>Email</label>
            </div>
          </div>
          <div className='row'>
            <div className='input field col s12'>
              <textarea id='message' className='materialize-textarea'>
              </textarea>
              <label for='message'>Your Message to me!</label>
            </div>
          </div>
        </form>
      </div>

      <div className='row'>
        <div className='col s12'>
          <div>
              <ul id="links" >
                  <li><a target="_blank" href="https://github.com/DanielMrva" ><i className="fa-brands fa-github"></i></a></li>
                  <li><a target="_blank" href="https://www.linkedin.com/in/daniel-mrva-1198a671/"><i className="fa-brands fa-linkedin"></i></a></li>
                  <li><a href="mailto:mrva.develops@gmail.com" ><i className='fa-solid fa-paper-plane'></i></a></li>
                  {/* <li><a href="./Assets/docs/Daniel-Mrva-Resume.pdf" download>Resume Download</a></li> */}
              </ul>
          </div>
        </div>
      </div>
      
    </section>
  );
}
