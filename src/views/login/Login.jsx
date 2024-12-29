import { useEffect, useRef, useState } from "react";
import { Eye } from "lucide-react";
import styles from "./Login.module.css";
import { Link, useNavigate } from "react-router";
import { login, verifyToken } from "../../services/userServices";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const navigate = useNavigate("/");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const user = {
      email: emailRef.current.value,
      password: passwordRef.current.value,
    };
    try {
      const response = await login(user);
      localStorage.setItem("token", response.token);
      navigate("/");
    } catch (e) {
      alert(e);
    }
  };

  const checkTokenValidity = async () => {
    const token = localStorage.getItem("token");
    if (token) {
      try {
        const verification = await verifyToken(token);
        if (verification.isValid) {
          navigate("/");
        }
      } catch (e) {
        alert(e);
      }
    }
  };

  useEffect(() => {
    checkTokenValidity();
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.formContainer}>
        <h1 className={styles.title}>Welcome Back</h1>
        <p className={styles.subtitle}>Please sign in to continue</p>

        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.inputGroup}>
            <label>Email</label>
            <input type="email" name="email" ref={emailRef} />
          </div>

          <div className={styles.inputGroup}>
            <label>Password</label>
            <div className={styles.passwordWrapper}>
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                ref={passwordRef}
              />
              <button
                type="button"
                className={styles.eyeIcon}
                onClick={() => setShowPassword(!showPassword)}
              >
                <Eye size={20} color="#666" />
              </button>
            </div>
          </div>

          <button type="submit" className={styles.signInButton}>
            Sign In
          </button>

          <div className={styles.signupPrompt}>
            <span>{"Don't have an account? "}</span>
            <Link to="/signup" className={styles.signupLink}>
              Sign up
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
