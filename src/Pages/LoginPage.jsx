import React, { useState } from 'react'
import '../Styles/LoginPage.css'
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { login } from '../Redux/Reducer/loginSlice';


const LoginPage = () => {

    const [showOtp, setShowOtp] = useState(false);
    const [phoneNumber, setPhoneNumber] = useState("");
    const [otp, setOtp] = useState("");
    const navigate = useNavigate();


    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(login(phoneNumber));
        navigate("/landingpage");

    }


    //validations
    const phoneNumberValidation = (e) => {
        if (phoneNumber === '') {
            setShowOtp(false);
        }
        else {
            setShowOtp(true);

        }
    }


    return (
        // <form onSubmit={handleSubmit}>
        //     <div>
        //         <div classNameName='login-container'>
        //             <input className='lc-phone-number' type='tel' value={phoneNumber} placeholder='Enter Phone Number' onChange={(e) => setPhoneNumber(e.target.value)} required={true}></input>
        //             <button className='lc-button' onClick={phoneNumberValidation}>Get OTP</button>
        //         </div>
        //     </div>

        //     {showOtp && (
        //         <form className='otp-container'>
        //             <input className='lc-phone-number' value = {otp}type='tel' placeholder='Enter OTP' onChange={(e) => setOtp(e.target.value)} required={true}></input>
        //             <button className='lc-button' type='submit' >Submit OTP</button>
        //         </form>
        //     )}
        // </form>

        <form className='form-container' onSubmit={handleSubmit}>
            <div className="form-group">
                <label for="exampleInputEmail1">Mobile Number</label>
                <input type="tel" className="form-control" id="exampleInputEmail1" value={phoneNumber} aria-describedby="emailHelp" placeholder="Enter email"  onChange={(e) => setPhoneNumber(e.target.value)} required ={true}/>
            </div>
            <div className="form-group">
                <label for="exampleInputPassword1">OTP</label>
                <input type="tel" className="form-control" value={otp} required = {true}  placeholder="Enter OTP" onChange={(e) => setOtp(e.target.value)}/>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>

    )
}

export default LoginPage