import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar bg-base-100 shadow-lg">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li>
              <Link to={"/hook-use-state"}>Le hook useState</Link>
            </li>
            <li>
              <Link to={"/flux"}>Flux de données</Link>
            </li>
            <li>
              <Link to={"/formulaire"}>Les formulaires</Link>
            </li>
            <li>
              <Link to={"/exercice"}>Exercice</Link>
            </li>
            <li>
              <Link to={"/use-effect"}>use-effect</Link>
            </li>
            <li>
              <Link to={"/cycle-de-vie"}>Cycle de vie</Link>
            </li>
            <li>
              <Link to={"/requete"}>Les requêtes HTTP</Link>
            </li>
            <li>
              <Link to={"/hook-perso"}>Les hooks personnalisés</Link>
            </li>
            <li>
              <Link to={"/exercice-api"}>Exercice API</Link>
            </li>
            <li>
              <Link to={"/hook-use-memo"}>Hook useMemo()</Link>
            </li>
          </ul>
        </div>
        <Link className="btn btn-ghost text-xl" to={"/"}>
          Accueil
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link to={"/hook-use-state"}>Le hook useState</Link>
          </li>
          <li>
            <Link to={"/flux"}>Flux de données</Link>
          </li>
          <li>
            <Link to={"/formulaire"}>Les formulaires</Link>
          </li>
          <li>
            <Link to={"/exercice"}>Exercice</Link>
          </li>
          <li>
            <Link to={"/use-effect"}>use-effect</Link>
          </li>
          <li>
            <Link to={"/cycle-de-vie"}>Cycle de vie</Link>
          </li>
          <li>
            <Link to={"/requete"}>Les requêtes HTTP</Link>
          </li>
          <li>
            <Link to={"/hook-perso"}>Les hooks personnalisés</Link>
          </li>
          <li>
            <Link to={"/exercice-api"}>Exercice API</Link>
          </li>
          <li>
            <Link to={"/hook-use-memo"}>Hook useMemo()</Link>
          </li>
        </ul>
      </div>
      {/* <div className="navbar-end">
        <a className="btn">Button</a>
      </div> */}
    </div>
  );
}

export default Navbar;
