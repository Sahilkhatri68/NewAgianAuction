import React from 'react'
import { FaUserAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default function NavView() {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-secondary">
                <Link to="/" className="navbar-brand ml-5"  >
                    Auction
                </Link>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <Link to="/profile" className="nav-link"  >
                              <FaUserAlt/><span className="sr-only">(current)</span>
                            </Link>
                        </li>
                        {/* <li className="nav-item">
                            <a className="nav-link" href="#">
                                Link
                            </a>
                        </li> */}
                        
                         
                    </ul>
                    <form className="form-inline my-2 my-lg-0">
                        <input
                            className="form-control mr-sm-2"
                            type="search"
                            placeholder="Search"
                            aria-label="Search"
                        />
                        <button className="btn btn-outline-success my-2 mr-sm-5 py-1 px-2"  >
                            Search
                        </button>
                    </form>
                </div>
            </nav> 
        </>
    )
}