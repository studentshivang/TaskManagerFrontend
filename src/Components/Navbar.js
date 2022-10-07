import logo from "../images/list.png";

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top " background="#165baa">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
          <img src={logo} alt="Company logo" width="30" height="30" className="d-inline-block align-text-top"/>
            Taskify
          </a>
          <div>
            <button className="btn btn-primary ms-auto">
              Login/Signup
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
