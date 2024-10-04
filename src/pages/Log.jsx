import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import bg from "../assets/sideimage.jpg";

import { FaUser } from "react-icons/fa";
// import { Link } from "react-router-dom";

export default function Log() {
  return (
    <div
      className="d-flex justify-content-center align-items-center  p-3 mb-5 rounded  col-8-lg"
      style={{ backgroundColor: "#EEEEEE" }}
    >
      <div className="d-flex justify-content-center shadow-lg">
        <div className="col-4-lg">
          <form action="" className="px-5 bg-white py-4">
            <div className="form-outline mb-4 d-flex align-items-center border rounded h-100">
              {/* <FontAwesomeIcon icon="fa-regular fa-user" /> */}
              <div>
                <FaUser />
              </div>

              <input
                type="text"
                placeholder="Username or email"
                className="form-control border-0"
              />
            </div>

            <div className="form-outline mb-4 ">
              <input
                type="password"
                placeholder="Password"
                className="form-control"
              />
            </div>

            <div className="d-flex justify-content-between align-items-center mb-4">
              <div>
                <input type="checkbox" className="" id="remember" />
                <label htmlFor="" className="" for="remember">
                  Remember me
                </label>
              </div>
              <div className="">
                {" "}
                <button
                  type="button"
                  className=" btn btn-primary btn-sm text-wrap"
                >
                  LOGIN
                </button>{" "}
              </div>
            </div>

            <div className="d-flex justify-content-between align-items-center">
              <div>
                <a href="#" className="text-decoration-none ">
                  Register now
                </a>
              </div>

              <div>
                <a
                  href="#"
                  class="link-secondary link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover text-decoration-none "
                >
                  Forget password?
                </a>
              </div>
            </div>

            <br />

            <div className="d-flex justify-content-between align-item-center">
              <hr
                style={{
                  borderTop: "1px solid #000",
                  margin: "20px 0",
                  width: "90px",
                }}
              />
              <p>or</p>
              <hr
                style={{
                  borderTop: "1px solid #000",
                  margin: "20px 0",
                  width: "90px",
                }}
              />
            </div>

            <div>
              <button
                className="btn  btn-sm d-flex align-items-center justify-content-center w-100 "
                style={{
                  backgroundColor: "#161D6F ",
                  color: "whitesmoke",
                  fontSize: "12px",
                }}
              >
                <i
                  className="fa-brands fa-square-facebook"
                  style={{ fontSize: "18px", marginRight: "8px" }}
                ></i>
                LOGIN WITH FACEBOOK
              </button>

              <br />

              <button
                className="btn  btn-sm d-flex align-items-center justify-content-center w-100 "
                style={{
                  backgroundColor: "#4379F2 ",
                  color: "whitesmoke",
                  fontSize: "12px",
                }}
              >
                <i
                  className="fa-brands fa-square-x-twitter"
                  style={{ fontSize: "18px", marginRight: "10px" }}
                ></i>
                LOGIN WITH TWITTER
              </button>

              <br />

              <button
                className="btn  btn-sm d-flex align-items-center justify-content-center w-100 "
                style={{
                  backgroundColor: "#EB5B00 ",
                  color: "whitesmoke",
                  fontSize: "12px",
                }}
              >
                <i
                  className="fa-brands fa-google"
                  style={{ fontSize: "18px", marginRight: "10px" }}
                ></i>
                LOGIN WITH GOOGLE
              </button>
            </div>
          </form>
        </div>
        <div>
          <img src={bg} alt="" style={{ width: "300px", height: "445px" }} />
        </div>
      </div>
    </div>
  );
}
