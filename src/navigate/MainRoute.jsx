import React from 'react';
import { Routes, Route, Link, useLocation, Navigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import Login from '../components/SignIn';
import HomePage from '../components/HomePage';
import ProfilePage from '../components/ProfilePage';
import { logOut } from '../store/auth/actions';

function MainRoute() {
  const isAuth = useSelector((state) => state.auth.isAuth);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <nav className="navbar navbar-expand-sm navbar-light fixed-top">
        <div className="container">
          <Link className="navbar-brand" to={'/sign-in'}>
            minimalS
          </Link>
          <div className="navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link className="nav-link" to={'/'}>
                  Home
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to={'/profile'}>
                  Profile
                </Link>
              </li>
              {!isAuth && (
                <li className="nav-item">
                  <Link className="nav-link" to={'/sign-in'}>
                    Login
                  </Link>
                </li>
              )}
            </ul>

            {isAuth && (
              <button
                className="btn btn-outline"
                onClick={() => {
                  dispatch(logOut());
                }}
              >
                LogOut
              </button>
            )}
          </div>
        </div>
      </nav>

      <div className="auth-wrapper">
        <div className="auth-inner">
          <Routes>
            <Route exact path="/" element={<HomePage />} />
            <Route path="/sign-in" element={<Login />} />
            <Route
              path="/profile"
              element={
                <PrivateElement isAuth={isAuth}>
                  <ProfilePage />
                </PrivateElement>
              }
            />
          </Routes>
        </div>
      </div>
    </div>
  );
}

const PrivateElement = ({ children, isAuth }) => {
  const location = useLocation();
  return isAuth ? children : <Navigate to="/sign-in" state={{ from: location }} />;
};

export default MainRoute;
