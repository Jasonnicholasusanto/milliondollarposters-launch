import React, { useState } from 'react';
import './Newsletter.scss';
import axios from 'axios';

const Newsletter = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
  
    const handleSubmit = (event) => {
      event.preventDefault();
  
      const data = {
        name: name,
        email: email,
      };
  
      axios.post('http://localhost:1337/newsletter-subscriptions', data)
        .then(response => {
          console.log(response.data);
          // Do something here if you want to notify the user that their sign-up was successful
        })
        .catch(error => {
          console.error(error);
          // Do something here if there was an error with the sign-up process
        });
    };

  return (
    <div className="newsletter">
        <h1 className='newsletterH1'>Our Newsletter</h1>

        <form onSubmit={handleSubmit}>
            <input type="text" className="nameInput" placeholder="Your Name" value={name} onInput={e => setName(e.target.value)}/>
            <br/>
            <input type="text" className="emailInput" placeholder="Your Email" value={email} onInput={e => setEmail(e.target.value)}/>
            <br/>
            <button className="btn" type="submit">Send</button>
            <br/>
        </form>
    </div>

  )
}

export default Newsletter