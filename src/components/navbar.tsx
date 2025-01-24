import profilePic from '../assets/me.jpg';

function Navbar() {
    return (
      <nav className="fixed top-0 left-0 w-full bg-neutral-800 shadow-md z-50">
        <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
          <img src={profilePic} alt="Marcel" className="w-10 h-10 rounded-full" />
          {/* <h1 className="text-xl font-bold tracking-wide">Marcel</h1> */}
          <ul className="flex space-x-6 text-sm">
            <li><a href="#about" className="hover:text-cyan-400">About</a></li>
            <li><a href="#projects" className="hover:text-cyan-400">Projects</a></li>
            <li><a href="#skills" className="hover:text-cyan-400">Skills</a></li>
            <li><a href="#contact" className="hover:text-cyan-400">Contact</a></li>
          </ul>
        </div>
      </nav>
    );
  }
  
  export default Navbar;
  