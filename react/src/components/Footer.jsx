const Footer = () => {
  return (
    <footer className=" py-6 mt-10">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <p className="text-sm md:text-base">
          &copy; {new Date().getFullYear()} <span role="img" aria-label="heart">❤️</span> Aniket. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
