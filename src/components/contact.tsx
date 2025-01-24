import { useMutation } from '@tanstack/react-query';
import axios from 'axios';
import { useState } from 'react';
import PortfolioMessage from '../models/portfolio-message';

function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const mutation = useMutation({
    mutationFn: (message: PortfolioMessage) => axios.post('http://localhost:8080/api/portfolio/email', message),
  })

  return (
    <section id='contact' className='py-20'>
      <div className='max-w-4xl mx-auto text-center'>
        <h2 className='text-4xl font-bold mb-6'>Get In Touch</h2>
        <p className='text-gray-300 mb-6'>Have a project in mind or just want to say hi? Feel free to reach out!</p>
        <div className='space-y-4'>
          <input
            type='text'
            placeholder='Your Name'
            className='w-full px-4 py-2 bg-gray-800 text-gray-300 rounded-md'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type='email'
            placeholder='Your Email'
            className='w-full px-4 py-2 bg-gray-800 text-gray-300 rounded-md'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type='text'
            placeholder='Your Subject'
            className='w-full px-4 py-2 bg-gray-800 text-gray-300 rounded-md'
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
          />
          <textarea
            placeholder='Your Message'
            className='w-full px-4 py-2 bg-gray-800 text-gray-300 rounded-md'
            rows={5}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <button
            type='submit'
            className='px-6 py-2 bg-cyan-400 text-gray-300 font-bold rounded-md hover:bg-cyan-300'
            onClick={() => mutation.mutate({ name, email, subject, message })}
          >
            Send Message
          </button>
        </div>
      </div>
      {/* <div className="badge-base LI-profile-badge" data-locale="en_US" data-size="medium" data-theme="dark" data-type="HORIZONTAL" data-vanity="marcel-marihot-putra-aritonang" data-version="v1">
          <a className="badge-base__link LI-simple-link" href="https://id.linkedin.com/in/marcel-marihot-putra-aritonang?trk=profile-badge">Marcel Marihot Putra Aritonang</a>
        </div> */}
    </section>
  );
}

export default Contact;
