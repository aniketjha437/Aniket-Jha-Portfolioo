import Lottie from "lottie-react";
import animationData from "../assets/coding-animation.json";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="min-h-screen pt-24 px-6 md:px-20 grid grid-cols-1 md:grid-cols-2 gap-10 items-center ">
      {/* Left: Lottie Animation */}
      <div className="animation flex justify-center ">
        <Lottie
          animationData={animationData}
          loop={true}
          className="w-72 md:w-[400px]"
        />
      </div>

      {/* Right: About Text */}
      <div className="about-text text-left space-y-6 ">
        <div className="heading  place-content-center flex">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-600 ">
            About Me
          </h2>
        </div>

        <p className="text-gray-500 text-lg leading-relaxed ">
          I'm <span className="font-semibold text-blue-500">Aniket Jha</span>, a
          passionate frontend developer who loves crafting responsive and
          user-friendly web experiences. I specialize in building dynamic
          interfaces using modern frameworks like{" "}
          <strong className="text-yellow-500">React</strong>, and I'm always
          excited to learn new tools and technologies.
        </p>

        <p className="text-pink-400 text-lg leading-relaxed">
          Whether it’s turning a Figma design into clean code or optimizing user
          experience, I bring creativity and attention to detail in every
          project I work on.
        </p>

        <div className="w-full  flex place-content-center">
          <Link
            to="/contact"
            className="  bg-blue-400 w-36 flex place-content-center text-black font-semibold rounded-2xl p-1.5 hover:bg-orange-400"
          >
            Let’s Connect
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;
