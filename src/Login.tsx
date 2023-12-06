const Login = () => {
  return (
    <>
      <form className="loginForm">
        <div className="mb-3">
          <label htmlFor="loginEmail" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="loginEmail"
            aria-describedby="emailHelp"
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="loginPassword" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="loginPassword"
          />
        </div>
        <div className="mb-3 form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="exampleCheck1"
          />
          <label className="form-check-label" htmlFor="save-login">
            Remember me
          </label>
        </div>
        <button type="submit" className="btn btn-primary">
          Login
        </button>
      </form>
    </>
  );
};
export default Login;
