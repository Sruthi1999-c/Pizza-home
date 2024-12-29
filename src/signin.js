import React from 'react';


const Signin = ()=>{
    return(

<div className = "signindiv">
    <h1 style = {{fontSize: '30px',margin: '10px'}}>Sign In</h1>
    <p style = {{fontSize: '15px',margin: '10px'}}>We need to send a One Time Password to your phone to help us keep your account safe.</p>
    <p style = {{fontSize: '15px', fontWeight: 'bold', color: '#708090',margin: '10px'}}>Mobile Number</p>
    <input style = {{width: '500px', height : '50px', margin: '10px', borderRadius: '5px', borderColor: '#708090', boxShadow: 'none'}} type = "text" placeholder='Enter your mobile number'></input>
    <button className = "button" style = {{margin: '10px', width: '510px', height: '40px', borderColor: 'white' ,borderRadius: '5px'}} >Send One Time Password(OTP)</button>
</div>


    )
}

export default Signin;