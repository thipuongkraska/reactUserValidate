import React from "react";
import {useState} from "react";
import ValidateUser from "../constant/ValidateUser";


function App() {
    const [user, setUser] = useState({
        email: "",
        password: "",
    });
    const [errors, setErrors] = useState({
        email: "",
        password: "",
    });

    function handleChangeInput(event) {
        const {name, value} = event.target;
        setUser((pre) => {
            if(name==="email") {
                return{email: value,
                password: pre.password}
            }
            else if (name==="password") {
                return {email: pre.email,
                password: value}
            }
        });
        const isValid = ValidateUser(name, value);
        if (!isValid) {
        setErrors((preErrors) => {
        return {
          ...preErrors,
          [name]: `${name} is not valid`,
        };
        });
        } else {
        setErrors((preErrors) => {
        return {
          ...preErrors,
          [name]: ``,
        };
      });
    }
    };

    function handleBlurInput(event) {
         const {name, value} = event.target;
         if (!value) {
            setErrors((preErrors) => {
              return {
                ...preErrors,
                [name]: `${name} is required`,
              };
            });
          }
    }

    const isEnable = !errors.email && !errors.password && !!user.email && !!user.password;
    return (
        <div>
          <form>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                value={user.email}
                onChange={handleChangeInput}
                onBlur={handleBlurInput}
              />
              <br />
              <span>{errors.email}</span>
            </div>
            <br />
            <div className="form-group">
              <label htmlFor="password">password</label>
              <input
                type="password"
                name="password"
                value={user.password}
                onChange={handleChangeInput}
                onBlur={handleBlurInput}
              />
              <br />
              <span>{errors.password}</span>
            </div>
            <button className="btn" disabled={!isEnable}>
              Login
            </button>
          </form>
        </div>
      );
}

export default App;