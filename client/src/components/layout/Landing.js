import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const Landing = ({ isAuthenticated }) => {
  if (isAuthenticated) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <div>
      <section className="intro min-h-screen">
        <div className="flex flex-col items-center ">
          <h1 className="text-6xl mb-4 font-extrabold max-w-4xl leading-none text-center">
            Get the best articles and writings about what matters to you.
          </h1>
          <Link
            to="/register"
            className="btn bg-green-700 hover:bg-green-600 text-3xl rounded text-white mt-4 mb-1 px-20 py-2"
          >
            Get Started
          </Link>
          <p className="">
            Already have an account ?{' '}
            <Link to="/login" className="text-lg text-green-700">
              Sign in
            </Link>
          </p>
        </div>
      </section>
      {/* <section className="people">
        <div class="flex mb-4">
          <div class="w-1/4 bg-gray-500 h-12">
          <div class="py-1"><svg class="fill-current h-6 w-6 text-teal-500 mr-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z"/></svg></div>
            <p className="text-md font-bold">Wold class publications.</p>
          </div>
          <div class="w-1/4 bg-gray-400 h-12"></div>
          <div class="w-1/4 bg-gray-500 h-12"></div>
          <div class="w-1/4 bg-gray-400 h-12"></div>
        </div>
      </section> */}
      <section className="no-ads min-h-screen">
        <h1 className="text-6xl mb-4 font-extrabold max-w-4xl leading-none">
          No ads. No problems.
        </h1>
        <p className="text-xl ">
          Your privacy stays yours. We don’t sell your data or target you with
          ads. Ever.
        </p>
        <div class="flex flex-col sm:justify-between sm:mt-12 sm:flex-row">
          <div class="">
            <div className="flex mb-16 mt-8">
              <img src="https://img.icons8.com/clouds/100/000000/gun.png" />
              <img
                className=""
                src="https://img.icons8.com/ios-filled/100/000000/post-ads.png"
              />
            </div>
            <Link
              to="/register"
              className="btn bg-green-700 hover:bg-green-600 rounded text-2xl text-white px-24 py-5 mb-5"
            >
              Get Started
            </Link>
          </div>
          <div class="sm:w-1/2">
            <h4 className="text-lg mb-12 underline">
              We do things differently.
            </h4>
            <p className="text-xl">
              Medium is not like any other platform on the internet. Our sole
              purpose is to help you find compelling ideas, knowledge, and
              perspectives. We don’t serve ads—we serve you, the curious reader
              who loves to learn new things. Medium is home to thousands of
              independent voices, and we combine humans and technology to find
              the best reading for you—and filter out the rest.
            </p>
          </div>
        </div>
      </section>
      <section className="subscribe flex flex-col items-center">
        <h4 className="text-lg text-center mb-8">
          One subscription. Unlimited knowledge.
        </h4>
        <div>
          <h4 className="text-lg max-w-xl text-center">
            Read unlimited stories with an optional subscription of $5/month. If
            it's not for you, cancel anytime.
          </h4>
        </div>

        <div
          className="separator max-w-sm w-full bg-gray-800 mt-10 mb-10 "
          style={{ height: '1px' }}
        ></div>
        <h1 className="text-6xl mb-4 font-extrabold max-w-4xl leading-none text-center ">
          Expand your reading.
        </h1>
        <h1 className="text-6xl mb-4 font-extrabold max-w-4xl leading-none text-center ">
          Expand your mind.
        </h1>
        <Link
          to="/register"
          className="btn bg-green-700 hover:bg-green-600 rounded text-2xl text-white px-24 py-5 mt-10 mb-10"
        >
          Get Started
        </Link>
      </section>
    </div>
  );
};

Landing.propTypes = {
  isAuthenticated: PropTypes.bool
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps)(Landing);
