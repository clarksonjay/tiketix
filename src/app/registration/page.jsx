"use client"

import { useState } from 'react';
import style from "./register.module.css"
import { IoMailOutline, IoLockClosedOutline, IoPersonOutline, IoEyeOutline, IoEyeOffOutline } from "react-icons/io5";

export default function Registration() {
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword); 
  };

  return (
    <div className={style.wrapper}>

      <div className={style.wrapperTop}>
        <h3 className={style.name}>TICKETIX</h3>
        <h2>Create an Account</h2>
        <p>Please fill this detail to create an account</p>
      </div>

      <div className={style.userInput}>
       <div className={style.inputBox}>
          <IoPersonOutline className={style.iconUser}/>
          <input type="text" placeholder="Enter Username" required/>
        </div>

        <div className={style.inputBox}>
          <IoMailOutline className={style.iconEmail}/><input type="email" placeholder="Enter Email address" required/>
        </div>

        <div className={style.inputBox}>
          <IoLockClosedOutline className={style.iconLock}/> <input className={style.lockInput}
            type={showPassword ? "text" : "password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter Password"
            required
          />

          <span onClick={togglePasswordVisibility} className={style.eyeIcon}>
            {showPassword ? <IoEyeOffOutline /> : <IoEyeOutline />}
          </span>
       </div>
        <br />

        <button className={style.signupBtn}>Signup</button>
      </div>

      <p className={style.hr}>Or</p>

      <div className={style.socialBtn}>
        <button>Login with Facebook</button>
        <button>Login with Google</button>
      </div>

      <p className={style.login}>Already have an account? <a href="">Login</a></p>
    </div>
  
  );
}
