import './App.scss'
import React, { useState } from 'react'
import { Spinner } from './spinner/spinner'
import { ToastContainer, toast } from 'material-react-toastify'
import 'material-react-toastify/dist/ReactToastify.css'
import 'bootstrap/dist/css/bootstrap.min.css'

const App = () => {
  const [isLoading, setisLoading] = useState(false)
  const [state, setstate] = useState({
    name: null,
    email: null,
    password: null,
    confirmpassword: null,
  })

  const onSubmitHandler = (event) => {
    event.preventDefault()
    if (state.confirmpassword === state.password) {
      if (state.password.lenght || state.confirmpassword.length < 6) {
        toast.error('Password Length Must be at least 6 character Long')
        return
      }
      // setUser(state)
      var myHeaders = new Headers()
      myHeaders.append('Content-Type', 'application/json')

      var raw = JSON.stringify({
        name: state.name,
        email: state.email,
        password: state.password,
        phone: '032482304923',
      })

      var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow',
      }

      fetch('http://localhost:5000/api/user/register/', requestOptions)
        .then((response) => response.json())
        .then((result) => {
          if (result.success) {
            toast.success('User Registered Successfully')
          } else {
            throw new Error(result.message)
          }
        })
        .catch((error) => toast.error(error.message))
    } else {
      toast.error('Password and confirm does not match')
    }
  }
  const handleChange = (event) => {
    setstate({
      ...state,
      [event.target.name]: event.target.value,
    })
  }
  return (
    <section className="vh-100" style={{ backgroundColor: '#eee' }}>
      <div className="container h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-lg-12 col-xl-11">
            <div className="card text-black" style={{ borderRadius: '25px' }}>
              <div className="card-body p-md-5">
                <div className="row justify-content-center">
                  <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                    <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                      Sign up
                    </p>
                    <form className="mx-1 mx-md-4" onSubmit={onSubmitHandler}>
                      <div className="d-flex flex-row align-items-center mb-4">
                        <i className="fas fa-user fa-lg me-3 fa-fw" />
                        <div className="form-outline flex-fill mb-0">
                          <label
                            className="form-label"
                            htmlFor="form3Example1c"
                          >
                            Your Name
                          </label>
                          <input
                            required
                            type="text"
                            id="form3Example1c"
                            name="name"
                            className="form-control"
                            value={state.name}
                            onChange={handleChange}
                          />
                        </div>
                      </div>
                      <div className="d-flex flex-row align-items-center mb-4">
                        <i className="fas fa-envelope fa-lg me-3 fa-fw" />
                        <div className="form-outline flex-fill mb-0">
                          <label
                            className="form-label"
                            htmlFor="form3Example3c"
                          >
                            Your Email
                          </label>
                          <input
                            required
                            type="email"
                            id="form3Example3c"
                            className="form-control"
                            name="email"
                            value={state.email}
                            onChange={handleChange}
                          />
                        </div>
                      </div>
                      <div className="d-flex flex-row align-items-center mb-4">
                        <i className="fas fa-lock fa-lg me-3 fa-fw" />
                        <div className="form-outline flex-fill mb-0">
                          <label
                            className="form-label"
                            htmlFor="form3Example4c"
                          >
                            Password
                          </label>
                          <input
                            required
                            type="password"
                            id="form3Example4c"
                            className="form-control"
                            name="password"
                            value={state.password}
                            onChange={handleChange}
                          />
                        </div>
                      </div>
                      <div className="d-flex flex-row align-items-center mb-4">
                        <i className="fas fa-key fa-lg me-3 fa-fw" />
                        <div className="form-outline flex-fill mb-0">
                          <label
                            className="form-label"
                            htmlFor="form3Example4cd"
                          >
                            Repeat your password
                          </label>
                          <input
                            required
                            type="password"
                            id="form3Example4cd"
                            className="form-control"
                            name="confirmpassword"
                            value={state.confirmpassword}
                            onChange={handleChange}
                          />
                        </div>
                      </div>
                      <div className="form-check d-flex justify-content-center mb-5">
                        <input
                          required
                          className="form-check-input me-2"
                          type="checkbox"
                          defaultValue
                          id="form2Example3c"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="form2Example3"
                        >
                          I agree all statements in{' '}
                          <a href="#!">Terms of service</a>
                        </label>
                      </div>
                      <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                        <button
                          type="submit"
                          className="btn btn-primary btn-lg"
                        >
                          Register
                        </button>
                      </div>
                    </form>
                  </div>
                  <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                    <img
                      src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                      className="img-fluid"
                      alt="Sample image"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {isLoading ? <Spinner /> : null}
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </section>
  )
}

export default App
