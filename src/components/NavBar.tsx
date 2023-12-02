import { useState } from "react";
import { Link } from "react-router-dom";
import { useCoffeeContext } from "../context/useCoffeeContext";
const NavBar = () => {

  const { favouriteCoffees } = useCoffeeContext();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  }

  return (
    <nav className="p-6 bg-transparent absolute w-full z-50">
      <div className="flex items-center justify-between">
        <h2 className="text-white title font-bold text-xl">Coffee Store</h2>

        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-black focus:outline-none">
            <svg
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="h-6 w-6 text-white transition-all hover:text-coffee hover:scale-125"
            >
              <path d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>
        <div className={`md:hidden ${isMenuOpen ? "block bg-black opacity-50 fixed top-0 left-0 z-30 h-full w-full " : "hidden"}`}></div>
        <div
          className={`md:hidden fixed top-0 right-0 w-[300px] h-full bg-white z-40 transition-transform transform ${isMenuOpen ? "translate-x-0" : "translate-x-full"}`}>
          <div className="p-4 flex flex-col gap-6 justify-end items-end">
            <button onClick={toggleMenu} className="text-black focus:outline-none">
              Cerrar
            </button>
            <ul className="mt-4 flex flex-col gap-4 pr-4 text-coffee font-bold w-full items-center">
              <Link to="/" onClick={toggleMenu} className="transition-all border-b-2 border-transparent hover:border-black hover:text-black text-xl">
                Home
              </Link>
              <a href="#about" onClick={toggleMenu} className="transition-all border-b-2 border-transparent hover:border-black hover:text-black text-xl">
                About
              </a>
              <Link to="/coffee-store" onClick={toggleMenu} className="transition-all border-b-2 border-transparent hover:border-black hover:text-black text-xl">
                Store
              </Link>
              <Link to="/favourite-coffees" className=" flex items-center justify-center gap-2 bg-yellow p-4 w-32 rounded-2xl text-xl text-black transition-all hover:bg-beige hover:shadow-lg font-bold border-2 border-transparent hover:border-2 hover:border-coffee hover:font-bold">
                <svg className="w-6 h-6t ext-black" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
                  <path d="M17.947 2.053a5.209 5.209 0 0 0-3.793-1.53A6.414 6.414 0 0 0 10 2.311 6.482 6.482 0 0 0 5.824.5a5.2 5.2 0 0 0-3.8 1.521c-1.915 1.916-2.315 5.392.625 8.333l7 7a.5.5 0 0 0 .708 0l7-7a6.6 6.6 0 0 0 2.123-4.508 5.179 5.179 0 0 0-1.533-3.793Z" />
                </svg>
                {favouriteCoffees.length}
              </Link>
            </ul>
          </div>
        </div>

        <div className={`md:flex hidden ${isMenuOpen ? "block" : "hidden"}`}>
          <ul className="mt-4 flex gap-4 pr-4 text-coffee font-bold items-center">
            <Link to="/" className="transition-all border-b-2 border-transparent hover:border-black hover:text-black text-xl">
              Home
            </Link>
            <a href="#about" className="transition-all border-b-2 border-transparent hover:border-black hover:text-black text-xl">
              About
            </a>
            <Link to="/coffee-store" className="transition-all border-b-2 border-transparent hover:border-black hover:text-black text-xl">
              Store
            </Link>
            <Link to="/favourite-coffees" className=" flex items-center justify-center gap-2 bg-yellow p-4 w-32 rounded-2xl text-xl text-black transition-all hover:bg-beige hover:shadow-lg font-bold border-2 border-transparent hover:border-2 hover:border-coffee hover:font-bold">
              <svg className="w-6 h-6t ext-black" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
                <path d="M17.947 2.053a5.209 5.209 0 0 0-3.793-1.53A6.414 6.414 0 0 0 10 2.311 6.482 6.482 0 0 0 5.824.5a5.2 5.2 0 0 0-3.8 1.521c-1.915 1.916-2.315 5.392.625 8.333l7 7a.5.5 0 0 0 .708 0l7-7a6.6 6.6 0 0 0 2.123-4.508 5.179 5.179 0 0 0-1.533-3.793Z" />
              </svg>
              {favouriteCoffees.length}
            </Link>
          </ul>

        </div>
      </div>
    </nav>
  )
}

export default NavBar