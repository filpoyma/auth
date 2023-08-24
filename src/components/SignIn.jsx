import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { checkAuth, setError } from '../store/auth/actions';
import { Navigate, useLocation } from 'react-router-dom';

const Login = () => {
  const [formData, setFormData] = React.useState({ name: '', password: '' });
  const { isLoading, authErr, isAuth } = useSelector((state) => state.auth);

  const dispatch = useDispatch();
  const location = useLocation();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (e.target.checkValidity()) dispatch(checkAuth(formData));
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (authErr) dispatch(setError(null));
  };

  const handleOnClickForm = () => {
    if (authErr) dispatch(setError(null));
  };

  if (isAuth) return <Navigate to="/profile" state={{ from: location }} />;

  return (
    <form
      id="signInForm"
      className="row g-3 needs-validation"
      onSubmit={handleSubmit}
      onClick={handleOnClickForm}
    >
      <h3>Sign In</h3>

      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Email address
        </label>
        <div className="input-group has-validated">
          <input
            id="name"
            type="name"
            name="name"
            className="form-control"
            placeholder="Enter email"
            aria-describedby="inputGroupPrepend"
            required
            value={formData.email}
            onChange={handleChange}
            disabled={isLoading}
          />
        </div>
      </div>

      <div className="mb-3">
        <label>Password</label>
        <input
          type="password"
          name="password"
          className="form-control"
          placeholder="Enter password"
          aria-describedby="inputGroupPrepend"
          required
          value={formData.password}
          onChange={handleChange}
          disabled={isLoading}
        />
        <div className="invalid-server-feedback">{authErr}</div>
      </div>

      <div className="d-grid">
        <button type="submit" className="btn btn-primary" disabled={isLoading}>
          Submit
        </button>
      </div>
      <p className="forgot-password text-right">
        Forgot <a href="https://papertoilet.com/">password?</a>
      </p>
    </form>
  );
};

export default Login;
