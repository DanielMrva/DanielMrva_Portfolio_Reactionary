import React from 'react';

export default function Contact() {
  return (
    <section className='container'>
      <div className='row'>
        <form className='col s12'>
          <div className='row'>
            <div className='input-field col s12'>
              <input placeholder='name' id='name' type='text' className='validate'/>
              <label for='name'>Name</label>
            </div>
          </div>
          <div className='row'>
            <div className='input-field col s12'>
              <input placeholder='email' id='email' type='email' className='validate'/>
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

      <div className='row center-align'>
        <div className='col s12'>
          <div>
            <div className="row valign-wrapper">
              <div className="col l4 m6 s6">
                  <div className='row'>
                    <a href="https://github.com/DanielMrva" className="center-align waves-effect waves-light btn-floating btn-large social github"><i className="fa-brands fa-github"></i></a>
                  </div>
                  <br></br>
              </div>
              <div class="col l4 m6 s6">
                  <div className='row'>
                    <a href="www.linkedin.com/in/daniel-mrva-1198a671" className="center-align waves-effect waves-light btn-floating btn-large social linkedin"><i className="fa-brands fa-linkedin"></i></a>
                  </div>
              </div>
              <div class="col l4 m6 s6">
                  <div className='row'>
                    <a href="mailto:mrva.develops.gmail.com" className="center-align waves-effect btn-floating btn-large social"><i className="fa-solid fa-paper-plane"></i></a>
                  </div>
              </div>
            </div>

          </div>
        </div>
      </div>
      
    </section>
  );
}
