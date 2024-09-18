import { NavLink } from 'react-router-dom';
import './login.css'

const LoginPage = ()=>{
    return (
        <div className="login-container">
      <div className="login-box">
        <h1 className="login-title">Login</h1>
        <p className="login-subtitle">Hey there!<br />Let's create your account.</p>
        <form className="login-form">
          <input type="email" placeholder="Email Address or your number" className="login-input" />
          <input type="password" placeholder="Enter your Password" className="login-input" />
          <div className='login-forgot'>
            <NavLink to={'/register'}>Already have an account ?</NavLink>
            <NavLink to={'#'}>forgot password</NavLink>
          </div>
          <button className="login-button">Continue</button>
        </form>
        <div className="login-or">Or</div>
        <div className="social-buttons">
          <button className="social-button">CONTINUE WITH APPLE</button>
          <button className="social-button">CONTINUE WITH GOOGLE</button>
          <button className="social-button">CONTINUE WITH FACEBOOK</button>
        </div>
      </div>
    </div>
    )
}

export default LoginPage;