import React from "react";
import { Link } from "react-router-dom";


const EnableNotification = () => {

const me = localStorage.getItem("meId")
const token = localStorage.getItem("token")

console.log(me)
console.log(token)

const handleSubmit = e => {
    e.preventDefault()
    // update()
}

        return(
                <div className="pv6">
                    <main>
                        <div className="pa3 container" style={{width: '360px'}}>
                            <div className="tc container">
                                <div className="tc pv4">
                                    <p className="pv4">
                                        <i className="f2 red br-pill field-color tc pa4 bw2 fi fi-rs-bell"></i>
                                    </p>
                                </div>
                            </div>
                            <section className="container tc">
                                <div className='tc' style={{fontSize: '27px', fontWeight: '500'}}>
                                    <div className="">
                                        <p className="pv2 f3">Enable Notification Access</p>
                                        <p className="pv3 f6 tc">Enable notifications to receive real-time<br /> updates on your order.</p>
                                    </div>
                                </div>
                            </section>  
                            <div className="pv3 tc">
                                <div className="pv2">
                                    <button type="submit" className="button-bg bg-red b--transparent white pa2 tc br-pill ba pointer w-100 pv3">
                                        Allow Notification
                                    </button>
                                </div>
                                <div className="pv2">
                                    <button className="bg-transparent b--transparent red pa2 tc br-pill ba pointer w-100 pv3">
                                        Maybe Later
                                    </button>
                                </div>
                            </div>
                        </div>
                    </main>
                </div>
    );
}

export default EnableNotification;