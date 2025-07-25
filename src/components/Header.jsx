import { ArrowDownToLine } from "lucide-react";
import Experience from "./Experience";

const Header = () => {
  return (
    <div className="flex justify-between items-center m-3">
      {/* Logo */}
      <div>
        <h1 className="font-bold text-4xl">as.</h1>
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex items-center gap-x-6 mr-4 font-dm-sans">
        <a href="#experience" className="cursor-pointer">
          Experience
        </a>
        <a href="#projects" className="cursor-pointer">
          Projects
        </a>
        <a href="#contact" className="cursor-pointer">
          Contact
        </a>
      </div>

      {/* Resume Button */}
      <div className="md:flex items-center gap-6">
        <a
          href="https://drive.google.com/file/d/1d-7u59fORO4H0XEgnGgSQlX9uvcM4FZs/view?usp=drive_link" // path to your resume
          download="Aman_Sinha_Resume.pdf"
          className="button flex gap-x-1 items-center"
        >
          Resume <ArrowDownToLine />
        </a>
      </div>
    </div>
  );
};

export default Header;
