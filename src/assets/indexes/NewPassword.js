import React from "react";
import '../Home.css'
import img from '../../images/shopbeta logo.png'
import Preloader from "../../components/Preloader";


const NewPassword = () => {

const token = localStorage.getItem("token")
const me = localStorage.getItem("meId")
    
console.log(token)
console.log(me)
    
const newPassword = async () => {

    const password = {
        oldPassword: document.querySelector('.old-password').value,
        newPassword: document.querySelector('.new-password').value,
    }
    
    await fetch(`https://shopbeta-api.onrender.com/users/changePassword/${me}`, {
        method: "POST",
        headers: {
            'Authorization' : 'Bearer ' + token,
            'Accept' : 'application/json, text/plain',
            'Content-Type' : 'application/json'
        },
        body: JSON.stringify(password)
    })
    .then((res) => res.json())
    .then((data) => {
        console.log(data)

        const button_password = document.getElementById('password')
        button_password.style['display'] = 'none'
    
        const button_login = document.getElementById('login')
        button_login.style['display'] = 'contents'

        const error = document.getElementById('error')
        error.style['display'] = 'none'
            
    })
    .catch((err) => {
        console.log(err.message)

        const error = document.getElementById('error')
        error.style['display'] = 'contents'
    })
}

const handClick = (event) => {
    event.currentTarget.innerHTML = 'Loading...';
    event.currentTarget.style.fontWeight = 'bold';
}

const handleSubmit = e => {
    e.preventDefault()
    newPassword()
}

        return(
            <div className="">
                <Preloader />
                    <div className="tc">
                      <div style={{width: '360px'}} className="dib pa3 tc pt5">
                        <div className="pv3">
                            <div className='tc code' style={{fontSize: '27px', fontWeight: '500'}}><img src={img} alt="logo" className="tc" width="75px" height="75px" /></div>
                            <p className="pv2 fw6 tc"><small className="orange f4">Change Password</small><br/> input your new<small className="green f4"> password</small> using the form below</p>
                                <form onSubmit={handleSubmit}>
                                    <div className="tl pv2">
                                        <p className="pv1 f5 fw5">Old password</p>
                                        <small className="icon-lock f4 fw5"></small>
                                        <input type="password" name="old-password" className="old-password br3 ba pa3 w-100" placeholder="Input old password..." required autoComplete="current-password" />
                                    </div>
                                    <div className="tl pv2">
                                        <p className="pv1 f5 fw5">New password</p>
                                        <small className="icon-lock f4 fw5"></small>
                                        <input type="password" name="new-password" className="new-password br3 ba pa3 w-100" placeholder="Input new password..." required />
                                    </div>
                                    <div id="error" style={{display: 'none'}} className="orange fw5 pv3 f5 red">
                                        <small className="icon-info red f5 ph2"></small>
                                        Couldn't set new password, try again later!
                                    </div>
                                    <div className="tl pv2">
                                        <input name="check" id="exampleCheck" type="checkbox" className="pr2" /><label for="exampleCheck" className="form-check-label ph2">Remember password</label>
                                    </div>
                                    <div>
                                        <div className="pv2">
                                            <div className="pv2">
                                                <p id="password" className="tc">
                                                    <button onClick={handClick} type="submit" className="index-button hover-bg-mid-gray pa2 tc br-pill ba pointer ph5 ma1 grow pv3 b fw6">Update Password</button>
                                                </p>
                                                <div id="login" style={{display: 'none'}} className="tc">
                                                    <p className="tc green fw6 pv3 f4">
                                                        <small className="ph2 f4 icon-check orange"></small>
                                                        New password saved <br/>
                                                        <small className="fw6 orange f4 fw4 pointer"> successfully</small>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
    );
}

export default NewPassword;