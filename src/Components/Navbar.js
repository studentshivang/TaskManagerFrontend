import logo from "../images/list.png";

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light" background="#165baa">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
          <img src={logo} alt="Company logo" width="30" height="30" className="d-inline-block align-text-top"/>
            Taskify
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <button className="btn btn-primary btn-outline-light ms-auto">
              Login/Signup
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
