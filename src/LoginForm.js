import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGoogle } from '@fortawesome/free-brands-svg-icons';
import backgroundImage from './login.png';  

const containerStyle = {
  backgroundImage: `url(${backgroundImage})`,
  backgroundSize: 'cover',
  height: '100vh',
  width: '250vw',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
};

const formStyle = {
  maxWidth: '300px',
  padding: '20px',
  border: '1px solid #ccc',
  borderRadius: '10px',
  background: 'rgba(255, 255, 255, 0.8)',
};

const buttonStyle = {
  backgroundColor: '#4285f4',
  color: 'white',
  padding: '10px',
  width: '100%',
  border: 'none',
  borderRadius: '3px',
  cursor: 'pointer',
  marginTop: '8px',
};

const linkStyle = {
  color: '#007bff',
  textDecoration: 'none',
  fontSize: '13px',
};

const orTextStyle = {
  textAlign: 'center',
  margin: '10px 0',
  fontSize: '14px',
};

const socialButtonStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  marginTop: '10px',
};

const socialLoginButtonStyle = {
  width: '48%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '10px',
  borderRadius: '3px',
  cursor: 'pointer',
};

const iconStyle = {
  marginRight: '8px',
};

const Login = () => {
  return (
    <div style={containerStyle}>
      <div style={formStyle}>
        <h2 style={{ textAlign: 'center' }}>Login</h2>
        <form>
          <input type="email" placeholder="Email" style={{ width: '95%', padding: '8px', margin: '8px 0px',}} />
          <input type="password" placeholder="Password" style={{ width: '95%', padding: '8px', margin: '8px 0px',}} />

          <div style={{ textAlign: 'center' }}>
            <a href="#" style={linkStyle}>Forgot Password?</a>
          </div>
          <button type="submit" style={buttonStyle}>
            Login
          </button>
        </form>
        <div style={{ textAlign: 'center', marginTop: '10px' }}>
          <p style={{ fontSize: '13px' }}>
            Don't have an account? <a href="#" style={linkStyle}>Sign Up</a>
          </p>
        </div>
        <div style={orTextStyle}>OR</div>
        
        <div style={socialButtonStyle}>
          <button type="submit" style={{ ...socialLoginButtonStyle, backgroundColor: '#4267B2', border: '1px solid #ccc', color: 'white'}}>
            <FontAwesomeIcon icon={faFacebook} style={iconStyle} />
            Login with Facebook
          </button>
          <button type="submit" style={{ ...socialLoginButtonStyle, backgroundColor: '#fff', color: '#000', border: '1px solid #ccc' }}>
            <FontAwesomeIcon icon={faGoogle} style={iconStyle} />
            Login with Google
          </button>
        </div>

      </div>
    </div>
  );
};

export default Login;
