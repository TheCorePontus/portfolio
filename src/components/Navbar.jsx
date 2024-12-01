import {FaLinkedin} from "react-icons/fa"
import {FaGithub} from "react-icons/fa"
import {FaTwitterSquare} from "react-icons/fa"
import {FaInstagram} from "react-icons/fa"

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center hover:cursor-pointer">
        {/* <img className="mx-2 w-10" src={logo} alt="logo" /> */}
        <h1 className="mx-3 w-10 text-4xl text-white">Pj</h1>
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a href="https://github.com/TheCorePontus"><FaGithub /></a>
        <a href="https://www.linkedin.com/in/pritish-jadon-025451250/"><FaLinkedin /></a>
        <a href="https://twitter.com/Hitsugayatt"><FaTwitterSquare /></a>
        <a href="#"><FaInstagram /></a>
      </div>
    </nav>
  )
}

export default Navbar