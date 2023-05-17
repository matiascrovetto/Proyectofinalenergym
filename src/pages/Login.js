import React from "react";
import { Link } from 'react-router-dom';

export const Login = () => {
  return (
    <section className="vh-50 bg-image my-5" style={{ backgroundImage: 'url("")' }}>
      <div className="mask d-flex align-items-center h-100 gradient-custom-3">
        <div className="container h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-12 col-md-9 col-lg-7 col-xl-6">
              <div className="card" style={{ borderRadius: '15px' }}>
                <div className="card-body p-5">
                  <h2 className="text-uppercase text-center mb-5">Log In</h2>
                  <form>

                    <div className="form-outline mb-4">
                      <input type="email" id="form3Example3cg" className="form-control form-control-lg" />
                      <label className="form-label" htmlFor="form3Example3cg">Email address</label>
                    </div>
                    <div className="form-outline mb-4">
                      <input type="password" id="form3Example4cg" className="form-control form-control-lg" />
                      <label className="form-label" htmlFor="form3Example4cg">Password</label>
                    </div>
                    <div className="d-flex justify-content-center">
                      <button type="button" className="btn btn-warning btn-block btn-lg gradient-custom-4 text-body">Register</button>
                    </div>
                    <p className="text-center text-muted mt-5 mb-0">Don't have an account? <Link to="/Register" className="fw-bold text-body"><u>Register here</u></Link></p>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
)
}

export default Login;