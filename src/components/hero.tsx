import profilePic from '../assets/me.jpg';
import { FaLinkedin, FaGithub, FaWhatsapp, FaEnvelope, FaItchIo } from 'react-icons/fa';

function Hero() {
  const socials = [
    {
      id: 1,
      name: 'LinkedIn',
      icon: <FaLinkedin />,
      link: 'https://www.linkedin.com/in/marcel-marihot-putra-aritonang?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BF5kU8Hc3S%2Bi%2FCF3b%2FUaZ3g%3D%3D',
    },
    { id: 2, name: 'GitHub', icon: <FaGithub />, link: 'https://github.com/MarcelArt' },
    { id: 3, name: 'WhatsApp', icon: <FaWhatsapp />, link: 'https://wa.me/08873317730' },
    { id: 4, name: 'Email', icon: <FaEnvelope />, link: 'mailto:marcel.aritonang@gmail.com' },
    { id: 5, name: 'Email', icon: <FaItchIo />, link: 'https://googolplanck.itch.io/' },
  ];

  return (
    <section id='hero' className='h-screen flex items-center justify-center bg-gradient-to-b from-neutral-900 to-neutral-800'>
      <div className='text-center px-4'>
        <img src={profilePic} alt='Marcel' className='w-32 h-32 rounded-full mx-auto mb-4' />
        <div className='flex justify-center gap-6 mb-6'>
          {socials.map(({ id, name, icon, link }) => (
            <a
              key={id}
              href={link}
              target='_blank'
              rel='noopener noreferrer'
              className='text-3xl text-cyan-400 hover:text-cyan-300 transition duration-300'
              aria-label={name}
            >
              {icon}
            </a>
          ))}
        </div>
        <h1 className='text-5xl md:text-7xl font-extrabold mb-4'>
          Hello, I'm <span className='text-cyan-400'>Marcel Marihot Putra Aritonang</span>
        </h1>
        <p className='text-lg md:text-xl text-gray-300 mb-6'>
          A passionate Flexible Adaptable Software Developer building amazing applications mostly on server side of things.
        </p>
        <div className='flex flex-row w-fit mx-auto gap-4'>
          <a type='button' href='#about' className='px-6 py-3 bg-cyan-400 rounded-lg text-white font-bold hover:bg-cyan-300'>
            More about me
          </a>
          <a type='button' href='#projects' className='px-6 py-3 bg-cyan-400 rounded-lg text-white font-bold hover:bg-cyan-300'>
            View My Work
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
