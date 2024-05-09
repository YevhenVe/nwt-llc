import React, { useContext, useState } from "react";
import { doSignInWithEmailAndPassword } from "components/auth/Auth";
import { AuthContext } from "contexts/Context";
import { doSignOut } from "components/auth/Auth";
import "./Login.scss";
const Login = () => {
    const { userLoggedIn, currentUser } = useContext(AuthContext);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isSigningIn, setIsSigningIn] = useState(false);
    const [errorMessage, setErrorMessage] = useState(null);
    const onSubmit = async (e) => {
        e.preventDefault();
        setIsSigningIn(true);
        setErrorMessage(null); // Reset error message on new submission

        try {
            await doSignInWithEmailAndPassword(email, password);
        } catch (error) {
            if (error.response && error.response.status === 400) {
                setErrorMessage("An error occurred. Please try again later.");
            } else {
                setErrorMessage("Please check your Email or Password.");
            }
        } finally {
            setIsSigningIn(false);
        }
    };

    const handleLogout = async () => {
        doSignOut();
        setIsSigningIn(false);
    };

    return (
        <div className="login-wrapper">
            {!userLoggedIn ? (
                <form
                    onSubmit={onSubmit}
                    className="login"
                >
                    <h1>Login please</h1>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Email"
                        required
                    />
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Password"
                        required
                    />
                    <button>{isSigningIn ? "Signing in..." : "Sign in"}</button>
                    <p className="error-message">{errorMessage}</p>
                </form>
            ) : (
                <div className="logged-in-wrapper">
                    <p>Hello {currentUser.email.split("@")[0].charAt(0).toUpperCase() + currentUser.email.split("@")[0].slice(1)}, you are logged in.</p>
                    <button
                        className="lougout-button"
                        onClick={handleLogout}
                    >
                        Logout
                    </button>
                </div>
            )}
        </div>
    );
};

export default Login;
