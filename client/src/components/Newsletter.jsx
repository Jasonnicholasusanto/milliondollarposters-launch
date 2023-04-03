import React, { useState } from 'react';
import './Newsletter.scss';
import { postSubscriber } from '../hooks/postSubcriber';
import useFetch from '../hooks/useFetch';

const Newsletter = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [submitted, setSubmitted] = useState(false);

    const { data, loading, error } = useFetch(
      `/subscribers?populate=*`
    );

    const handleSubmit = async (e) => {
      e.preventDefault();
      await postSubscriber(name, email);
      setName('');
      setEmail('');

      setSubmitted(true);
    };

    return (
      <div className="newsletter">
          <h1 className='newsletterH1'>Our Newsletter</h1>

          <form onSubmit={handleSubmit}>
              <input type="text" className="nameInput" placeholder="Your Name" value={name} onChange={e => setName(e.target.value)}/>
              <br/>
              <input type="text" className="emailInput" placeholder="Your Email" value={email} onChange={e => setEmail(e.target.value)}/>
              <br/>
              <button className="btn" type="submit">Send</button>
              <br/>
          </form>

          {submitted && <p className='message'>Thank you for subscribing!</p>}
      </div>

    )
}

export default Newsletter