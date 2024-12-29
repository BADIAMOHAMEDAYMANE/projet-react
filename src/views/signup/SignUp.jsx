import { useState, useRef } from 'react';
import { Eye } from 'lucide-react';
import styles from './SignUp.module.css';
import { Link, useNavigate } from 'react-router';
import { register } from '../../services/userServices';

const SignUp = () => {
  const navigate = useNavigate('/')
  
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [errors, setErrors] = useState({});

  const lastNameRef = useRef(null);
  const firstNameRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const confirmPasswordRef = useRef(null);

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePassword = (password) => {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
    return passwordRegex.test(password);
  };

  const validateField = (name, value) => {
    switch (name) {
      case 'lastName':
        return value.trim() ? '' : 'Last name is required';
      case 'firstName':
        return value.trim() ? '' : 'First name is required';
      case 'email':
        return !value.trim() 
          ? 'Email is required'
          : !validateEmail(value)
          ? 'Please enter a valid email address'
          : '';
      case 'password':
        return !value.trim()
          ? 'Password is required'
          : !validatePassword(value)
          ? 'Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, and one number'
          : '';
      case 'confirmPassword':
        return !value.trim()
          ? 'Please confirm your password'
          : value !== passwordRef.current.value
          ? 'Passwords do not match'
          : '';
      default:
        return '';
    }
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    
    // Validate all fields
    const newErrors = {
      lastName: validateField('lastName', lastNameRef.current.value),
      firstName: validateField('firstName', firstNameRef.current.value),
      email: validateField('email', emailRef.current.value),
      password: validateField('password', passwordRef.current.value),
      confirmPassword: validateField('confirmPassword', confirmPasswordRef.current.value),
    };

    setErrors(newErrors);

    // Check if there are any errors
    if (Object.values(newErrors).some(error => error)) {
      return;
    }

    const user = {
      lastName: lastNameRef.current.value,
      firstName: firstNameRef.current.value,
      email: emailRef.current.value,
      password: passwordRef.current.value,
    }
    try {
      const response = await register(user)
      const token = response.token;
      localStorage.setItem('token',token)
      navigate('/')
    }catch(e) {
      alert(e)
    }
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    setErrors(prev => ({
      ...prev,
      [name]: validateField(name, value)
    }));
  };

  const handleFocus = (e) => {
    const { name } = e.target;
    setErrors(prev => ({
      ...prev,
      [name]: ''
    }));
  };

  return (
    <div className={styles.container}>
      <div className={styles.formContainer}>
        <h1 className={styles.title}>Create Account</h1>
        <p className={styles.subtitle}>Please fill in the details below</p>

        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.inputGroup}>
            <label>Last Name</label>
            <input
              type="text"
              name="lastName"
              ref={lastNameRef}
              onBlur={handleBlur}
              onFocus={handleFocus}
              className={errors.lastName ? styles.inputError : ''}
            />
            {errors.lastName && <span className={styles.errorMessage}>{errors.lastName}</span>}
          </div>

          <div className={styles.inputGroup}>
            <label>First Name</label>
            <input
              type="text"
              name="firstName"
              ref={firstNameRef}
              onBlur={handleBlur}
              onFocus={handleFocus}
              className={errors.firstName ? styles.inputError : ''}
            />
            {errors.firstName && <span className={styles.errorMessage}>{errors.firstName}</span>}
          </div>

          <div className={styles.inputGroup}>
            <label>Email</label>
            <input
              type="email"
              name="email"
              ref={emailRef}
              onBlur={handleBlur}
              onFocus={handleFocus}
              className={errors.email ? styles.inputError : ''}
            />
            {errors.email && <span className={styles.errorMessage}>{errors.email}</span>}
          </div>

          <div className={styles.inputGroup}>
            <label>Password</label>
            <div className={styles.passwordWrapper}>
              <input
                type={showPassword ? 'text' : 'password'}
                name="password"
                ref={passwordRef}
                onBlur={handleBlur}
                className={errors.password ? styles.inputError : ''}
              />
              <button
                type="button"
                className={styles.eyeIcon}
                onClick={() => setShowPassword(!showPassword)}
              >
                <Eye size={20} color="#666" />
              </button>
            </div>
            {errors.password && <span className={styles.errorMessage}>{errors.password}</span>}
          </div>

          <div className={styles.inputGroup}>
            <label>Confirm Password</label>
            <div className={styles.passwordWrapper}>
              <input
                type={showConfirmPassword ? 'text' : 'password'}
                name="confirmPassword"
                ref={confirmPasswordRef}
                onBlur={handleBlur}
                className={errors.confirmPassword ? styles.inputError : ''}
              />
              <button
                type="button"
                className={styles.eyeIcon}
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              >
                <Eye size={20} color="#666" />
              </button>
            </div>
            {errors.confirmPassword && <span className={styles.errorMessage}>{errors.confirmPassword}</span>}
          </div>

          <button type="submit" className={styles.signUpButton}>
            Sign Up
          </button>

          <div className={styles.loginPrompt}>
            <span>Already have an account? </span>
            <Link to="/login" className={styles.loginLink}>Sign in</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;