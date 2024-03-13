import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { GoLocation } from "react-icons/go";
import { GiTie } from "react-icons/gi";

const Sidebar = () => {
  const handleOpenGmail = () => {
    window.open("mailto:kanchan1070bit@gmail.com");
  };

  return (
    <div>
      <img
        src="profile-pic.jpg"
        alt="profile picture"
        className="w-32 h-32 mx-auto rounded-full"
      />
      <h3 className="my-4 text-2xl font-medium tracking-wider kaushan-script-regular ">
        <span className="text-green-500">Kanchan </span>Kumari
      </h3>
      <p className="px-2 py-1 my-3 bg-gray-200 rounded-full">Web Developer</p>
      <a
        href="https://drive.google.com/file/d/1G3q5XHpdTUEPHdlxWWQJC314vk58JQzg/view?usp=drive_link"
        className="flex items-center justify-center px-2 py-1 my-5 bg-gray-200 rounded-full"
      >
        <GiTie className="w-6 h-6" />
        Download Resume
      </a>

      {/* social media Icons */}
      <div className="flex justify-around w-9/12 mx-auto my-3 text-green-500 md:w-full">
        <a href="https://github.com/kanchan-git-projects">
          <AiFillGithub className="w-8 h-8 cursor-pointer" />
        </a>
        <a href="https://www.linkedin.com/in/kanchan-kumari-webdeveloper/?original_referer=https%3A%2F%2Fwww%2Egoogle%2Ecom%2F&originalSubdomain=in">
          <AiFillLinkedin className="w-8 h-8 cursor-pointer" />
        </a>
      </div>

      {/* Contact details: Address, email, phone */}
      <div
        className="py-2 my-3 bg-gray-200"
        style={{ marginLeft: "-1rem", marginRight: "-1rem" }}
      >
        <div className="flex items-center justify-center space-x-2">
          <GoLocation />
          <span>Bengaluru, India</span>
        </div>
        <p className="my-2">kanchan1070bit@gmail.com</p>
        <p className="my-2"> +91-7004266381</p>
      </div>

      {/* Buttons: Email and Light UI */}
      <button
        onClick={handleOpenGmail}
        className="w-8/12 px-5 py-2 my-2 text-white rounded-full bg-gradient-to-r from-green-400 to-blue-400"
      >
        Email Me
      </button>

      {/* <button className="w-8/12 px-5 py-2 my-2 text-white rounded-full bg-gradient-to-r from-green-400 to-blue-400">
        Theme
      </button> */}
    </div>
  );
};

export default Sidebar;
