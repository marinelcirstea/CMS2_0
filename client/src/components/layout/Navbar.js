import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from '../../actions/auth';

const Navbar = ({ auth: { isAuthenticated, loading }, logout }) => {
  const authLinks = (
    <div className="w-full block flex-grow sm:flex justify-end sm:items-center sm:w-auto">
      <div className="text-sm sm:mr-4">
        <Link
          to="/profiles"
          className="block mt-4 sm:inline-block sm:mt-0 text-base font-semibold mr-4"
        >
          Subscribe
        </Link>
        <Link
          to="/profiles"
          className="block mt-4 sm:inline-block sm:mt-0 text-base font-semibold mr-4"
        >
          Writers
        </Link>
        <Link
          to="/posts"
          className="block mt-4 sm:inline-block sm:mt-0 text-base font-semibold mr-4"
        >
          Posts
        </Link>
        <Link
          to="/dashboard"
          className="block mt-4 sm:inline-block sm:mt-0 text-base font-semibold mr-4"
        >
          Dashboard
        </Link>
      </div>
      <div>
        <a
          onClick={logout}
          href="#!"
          className="inline-block text-sm px-8 py-3 leading-none rounded bg-green-600 text-white"
        >
          Logout
        </a>
      </div>
    </div>
  );

  const guestLinks = (
    <div className="w-full block flex-grow sm:flex justify-end sm:items-center sm:w-auto">
      <div className="text-sm sm:mr-4">
        <Link
          to="/profiles"
          className="block mt-4 sm:inline-block sm:mt-0 text-base font-semibold mr-4"
        >
          Subscribe
        </Link>
        <Link
          to="/profiles"
          className="block mt-4 sm:inline-block sm:mt-0 text-base font-semibold mr-4"
        >
          Writers
        </Link>
        <Link
          to="/login"
          className="block mt-4 sm:inline-block sm:mt-0 text-base font-semibold"
        >
          Sign in
        </Link>
      </div>
      <div>
        <Link
          to="/register"
          className="inline-block text-sm px-8 py-3 leading-none rounded bg-green-600 text-white"
        >
          Get started
        </Link>
      </div>
    </div>
  );

  return (
    <nav
      style={{ backgroundColor: 'rgba(255,255,255,0.9)' }}
      className="fixed w-full flex items-center justify-between flex-wrap sm:px-24 sm:py-5"
    >
      <div className="flex items-center flex-shrink-0 mr-6">
        <svg
          className="fill-current h-8 w-8 mr-2"
          width="54"
          height="54"
          viewBox="0 0 54 54"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z" />
        </svg>
        <span className="font-semibold text-2xl tracking-tight">
          Writer.com
        </span>
      </div>
      <div className="block sm:hidden">
        <button className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
          <svg
            className="fill-current h-3 w-3"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>
      {!loading && (
        <Fragment>{isAuthenticated ? authLinks : guestLinks}</Fragment>
      )}
    </nav>
  );
};

Navbar.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  auth: state.auth
});

export default connect(mapStateToProps, { logout })(Navbar);
