import React, { useState } from 'react'
import '../Styles/LoginPage.css'
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { login } from '../Redux/Reducer/loginSlice';
import { RecaptchaVerifier, signInWithPhoneNumber } from 'firebase/auth';
import { auth } from '../Firebase/setup';


const LoginPage = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [phoneNumber, setPhoneNumber] = useState("");
    const [user, setUser] = useState(null);
    const [otp, setOtp] = useState("")



    const sendOTP = () => {
        try {
            const recaptcha = new RecaptchaVerifier(auth, "recaptcha", {});
            signInWithPhoneNumber(auth, phoneNumber, recaptcha)
            .then((res)=>{
                setUser(res);
            })
        } catch (err) {
            console.error(err)
        }
    }

    const verifyOTP = async() => {

        try {
            await user.confirm(otp);
            dispatch(login(phoneNumber));
            navigate("/landingpage");
            

        } catch (error) {
            console.log(error)
        }

    }



    return (

        <div className='form-container' >
            <div className="form-group">
                <label for="exampleInputEmail1">Mobile Number</label>
                <input type="tel" value={phoneNumber} placeholder="Enter Phone Number" onChange={(e) => setPhoneNumber(e.target.value)} required={true} />
                <button className="btn btn-primary" onClick={sendOTP}>Send OTP</button>
                <div id='recaptcha'></div>

            </div>
            <div className="form-group">
                <label for="exampleInputPassword1">OTP</label>
                <input type="tel"  value={otp} required={true} placeholder="Enter OTP" onChange={(e) => setOtp(e.target.value)} />
            </div>
            <button type="submit"  onClick={verifyOTP}>Submit OTP</button>
        </div>

    )
}

export default LoginPage