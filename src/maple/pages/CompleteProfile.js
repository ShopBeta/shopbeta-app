import React from "react";
// import { useState } from "react";
import { Link } from "react-router-dom";


const CompleteProfile = () => {

const me = localStorage.getItem("meId")

const token = localStorage.getItem("token")
console.log(me)
console.log(token)

// const update = async () => {

//     const update = {
//         bio: document.querySelector('.bio').value,
//         phonenumber: document.querySelector('.phonenumber').value,
//         location: document.querySelector('.location').value,
//         link: document.querySelector('.link').value,
//     }

//     await fetch(`https://shopbeta-api.onrender.com/users/update/${me}`, {
//         method: 'PATCH',
//         headers: {
//             'Accept' : 'application/json, text/plain',
//             'Content-Type' : 'application/json'
//         },
//         body: JSON.stringify(update)
//     })
//     .then((res) => res.json())
//     .then((data) => {
//         console.log(data)
             
//         const button_update = document.getElementById('update')
//         button_update.style['display'] = 'none'

//         const button_next = document.getElementById('next')
//         button_next.style['display'] = 'contents'

//         const check = document.getElementById('check')
//         check.style['display'] = 'none'

//         const error = document.getElementById('error')
//         error.style['display'] = 'none'
//     })
//     .catch((err) => {
//         console.log(err.message)

//         const error = document.getElementById('error')
//         error.style['display'] = 'contents'
//     })

// }

const handClick = (event) => {
    event.currentTarget.innerHTML = 'Loading...';
    event.currentTarget.style.fontWeight = 'bold';
}

const handleSubmit = e => {
    e.preventDefault()
    // update()
}

        return(
                <div className="">
                    <div className="navbar navbar-expand-lg tc">
                        <div style={{fontSize: '29px'}} className="pv2 container">
                            <span className="pointer">
                                <Link 
                                    to={"../maple/pages/signup"} className="link black pointer">
                                    <small style={{fontSize: '35px'}} className="icon-arrow-left-circle"></small>
                                </Link>
                            </span>
                            <span className="navbar-brand pointer">
                                <small className="f5"></small>
                            </span>
                            <span className="navbar-brand pointer">
                                <Link 
                                    to={"../maple/pages/verifycode"} className="link black">
                                    <small style={{fontSize: '35px'}} className=""></small> 
                                </Link>
                            </span>
                        </div>
                    </div>

                    <main>
                        <div className="tc">
                            <p className="f3 pv3">Complete Your Profile</p>
                            <p className="f5">Don't worry only you can see your personal<br /> data. No one else will be able to see it</p>
                        </div>
                       
                        <form onSubmit={handleSubmit} className="pa3 container" style={{width: '360px'}}>
                            <div className="tc">
                                <div className="tc pv5 container">
                                    <p className="pointer">
                                        <small className="f2 red br-pill field-color tc pa4 bw2 icon-camera"></small>
                                    </p>
                                </div>
                            </div>
                            <div className="tl pv2">
                                <p className="pv2 f5">Name</p>
                                <input type="text" name="name" className="name b--transparent ba field-color br3 pa3 w-100" placeholder="Ex. John Doe" required autoComplete="name" />
                            </div>
                            <div className="tl pv2">
                                <p className="pv2 f5">Phone Number</p>
                                <div className="br4 field-color bw2">
                                    <span className="">
                                        <select style={{width: '25%'}} name="country-code" className="country-code b--transparent ba field-color br3 pa3" required >
                                            <option>+1</option>
                                            <option>+27</option>
                                            <option>+234</option>
                                        </select>
                                    </span>
                                    <span className="gray">
                                        |
                                    </span>
                                    <span className="">
                                        <input style={{width: '73%'}} type="tel" name="phonenumber" className="phonenumber b--transparent ba field-color br3 pa3" placeholder="Enter Phone Number" required autoComplete="email" />
                                    </span>
                                </div>
                            </div>
                            <div className="tl pv2">
                                <p className="pv2 f5">Gender</p>
                                <select name="gender" className="gender b--transparent ba field-color br3 pa3 w-100" required >
                                    <option>Male</option>
                                    <option>Female</option>
                                </select>
                            </div>
                            <div className="pv3 tc">
                                <div id="profile" className="">
                                    <Link 
                                        to={"../maple/pages/home"} className="link black pointer">
                                        <button onClick={handClick} type="submit" className="button-bg bg-red b--transparent white pa2 tc br-pill ba pointer w-100 pv3">
                                            Complete Profile
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </form>
                    </main>
                </div>
    );
}

export default CompleteProfile;