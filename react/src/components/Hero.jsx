import EmailIcon from "@mui/icons-material/Email";
import CallIcon from "@mui/icons-material/Call";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import XIcon from "@mui/icons-material/X";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="min-h-screen grid grid-cols-1 md:grid-cols-2 gap-8 text-center pt-36 px-4  pb-15">
      {/* Left section */}
      <div className="left flex flex-col justify-center items-center gap-6">
        <p className="text-2xl md:text-3xl font-medium text-gray-400">
          Hello, It's Me
        </p>
        <h1 className="text-4xl md:text-5xl font-bold text-blue-500">
          Aniket Jha
        </h1>
        <p className="text-xl md:text-2xl font-medium text-gray-400">
          And I'm a Frontend Developer
        </p>
        <p className="text-indigo-400 text-lg">
          I specialize in building clean, responsive,{" "}
          <span className="text-emerald-700 block">
            user-focused websites...
          </span>
        </p>

        {/* Social icons */}
        <div className="flex justify-center gap-5 text-2xl">
          <a
            href="mailto:aniketjha437@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400"
            aria-label="Send Email"
          >
            <EmailIcon />
          </a>
          <a
            href="tel:+919876543210"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400"
            aria-label="Call"
          >
            <CallIcon />
          </a>
          <a
            href="https://www.instagram.com/aniketjha437/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400"
            aria-label="Instagram Profile"
          >
            <InstagramIcon />
          </a>
          <a
            href="https://www.linkedin.com/in/aniketjha437/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400"
            aria-label="LinkedIn Profile"
          >
            <LinkedInIcon />
          </a>
          <a
            href="https://x.com/aniketjha437"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400"
            aria-label="Twitter Profile"
          >
            <XIcon />
          </a>
        </div>

        {/* Buttons */}
        <div className="grid grid-cols-2 gap-6 w-full max-w-md pt-4">
          <Link
            to="/about"
            className="bg-blue-500 text-white font-bold rounded-2xl px-6 py-2 hover:bg-blue-600 transition text-center"
            aria-label="More About Me"
          >
            More about me
          </Link>

          <a
            href="/Aniket-Jha-Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            download
            className="bg-blue-500 text-white font-bold rounded-2xl px-6 py-2 hover:bg-blue-600 transition text-center"
            aria-label="Download Resume"
          >
            Resume
          </a>
        </div>
      </div>

      {/* Right section */}
      <div className="right flex justify-center items-center ">
        <img
          src="/img-copy.png"
          alt="Aniket Jha"
          className=" w-64 md:w-80 lg:w-90 rounded-2xl shadow-lg object-cover  "
        />
      </div>
    </div>
  );
};

export default Hero;
