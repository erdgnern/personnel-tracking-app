import React from "react";

const Navbar = () => {
  return (
    <React.Fragment>
      <div className="container my-2">
        <nav className="navbar nav-masthead navbar-expand-lg justify-content-center">
          <a className="navbar-brand" href="/">
            <i
              className="fa fa-address-card-o fa-4x fa-fw mr-5"
              style={{ color: "#ffc107" }}
              aria-hidden="true"
            ></i>
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>

          <a class="nav-link active" href="/">
            Dashboard
          </a>
          <a class="nav-link" href="/">
            Personnel List
          </a>
          <a class="nav-link" href="/">
            Performance
          </a>
          <a class="nav-link" href="/">
            Schedule
          </a>
          <form className="form-inline ml-5">
            <i
              class="fa fa-search fa-2x fa-fw mr-2"
              style={{ color: "#ffc107" }}
              aria-hidden="true"
            ></i>
            <input
              className="form-control border-warning border-top-0 border-right-0 border-left-0 rounded-0 mr-sm-2 topsearchform "
              type="search"
              placeholder="Search"
              aria-label="Search"
              style={{ backgroundColor: "transparent" }}
            />
            <button className="btn btn-warning text-white" type="submit">
              Search
            </button>
          </form>
        </nav>
      </div>
    </React.Fragment>
  );
};

export default Navbar;
