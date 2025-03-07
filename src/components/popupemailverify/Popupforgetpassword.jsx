import { toast } from "react-toastify";
import "./PopupforgetPassword.css";
import React, { useState } from "react";
import axios from "axios";
import { FiMail, FiX, FiLock } from "react-icons/fi";

const API_URL = "http://localhost:5000";
const PopupForgetPassword = ({ setPopuptoggle }) => {
    const [fpemail, setFpemail] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const validateEmail = (email) => {
        return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
    };

    const handleResendResetPassword =async () => {
        setLoading(true)
        if (!fpemail) {
            setError("Email is required");
            toast.error("Please enter your email address");
            setLoading(false)
            return; 
        }
        if (!validateEmail(fpemail)) {
            setError("Invalid email format");
            toast.error("Please enter a valid email address");
            setLoading(false)
            return;
        }
       try{
        await axios.post(`${API_URL}/api/users/forgot-password`,{
            email:fpemail
        })
        setPopuptoggle(false)
        toast.success("Reset password link has been sent to your email");
       }catch(err){
        toast.error(err.response.data.error);
       }finally{
         setError("");
         setLoading(false)
       }
      
    };
 
    return (
        <div className="popup-overlay">
            <div className="popup-container animate-in">
                <button 
                    className="close-btn" 
                    onClick={() => setPopuptoggle(false)}
                    aria-label="Close"
                >
                    <FiX size={24} />
                </button>

                <div className="popup-header">
                    <div className="icon-circle">
                        <FiLock size={32} className="lock-icon" />
                    </div>
                    <h2>Reset Password</h2>
                    <p>Enter your email to receive a reset link</p>
                </div>

                <div className="popup-body">
                    <div className="input-group">
                        <label htmlFor="email">
                            <FiMail className="input-icon" />
                            Email Address
                        </label>
                        <input
                            id="email"
                            type="email"
                            value={fpemail}
                            onChange={(e) => {
                                setFpemail(e.target.value);
                                setError("");
                            }}
                            placeholder="name@example.com"
                            className={error ? "error" : ""}
                            disabled={loading}
                        />
                        {error && <div className="error-message">{error}</div>}
                    </div>

                    <button 
                        className="reset-btn"
                        onClick={handleResendResetPassword}
                        disabled={loading}
                    >
                        {loading ? (
                            <div className="spinner"></div>
                        ) : (
                            <>
                                <FiMail className="btn-icon" />
                                Send Reset Link
                            </>
                        )}
                    </button>
                </div>

                <div className="popup-footer">
                    <p>Remember your password?{" "}
                        <button 
                            className="text-link"
                            onClick={() => setPopuptoggle(false)}
                        >
                            Login here
                        </button>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default PopupForgetPassword;