import axios from "axios";
import { useEffect, useState,  } from "react";
import "../App.css";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const [login, setLogin] = useState({
    username: "",
    password: "",
  });
  const handleChange = (event) => {
    // const data = event.target.value
    setLogin({ ...login, [event.target.name]: event.target.value });
    console.log(login);
  };

    const handleSubmit = async (event) => {
      event.preventDefault();

      const { username, password } = login;
      console.log(username, password);

      await axios
        .post(`${process.env.REACT_APP_API_URL}/api/v1/auth/login`, { username, password })
        .then((res) => {
          let token = res.data.token;
          console.log(res.data.token);
          localStorage.setItem("token", token);
          navigate("/");
        })
        .catch((error) => {
          console.log(error.response);
        });
    };

  return (
    <>
      <div className="hero min-h-screen">
        <div className="hero-content flex-row-reverse">
          <div className="text-left">
            <h1 className="text-5xl font-bold">Login now!</h1>
            <p className="py-6">Selamat datang di website restaurant, tempat untuk mencari restaurant favorit anda</p>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-blue-900 ">
            <div className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-white">Email</span>
                </label>
                <input type="text" name="username" placeholder="email" onChange={handleChange} className="input input-bordered" />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-white">Password</span>
                </label>
                <input type="password" name="password" placeholder="password" onChange={handleChange} className="input input-bordered" />
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary" onClick={handleSubmit}>Login</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
