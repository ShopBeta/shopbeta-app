import React from "react";
import { Link } from "react-router-dom";


const SelectLocation = () => {

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
                        <form className="pa3 container" style={{width: '360px'}}>
                            <div className="tc container">
                                <div className="tc pv4">
                                    <p className="pv4">
                                        <i className="f1 red br-pill field-color tc pa4 bw2 fi fi-rs-map-marker-home"></i>
                                    </p>
                                </div>
                            </div>
                            <section className="tc">
                                <div className='tc' style={{fontSize: '27px', fontWeight: '500'}}>
                                    <div className="container">
                                        <p className="pv2 f3">Select country/region</p>
                                        <p className="pv3 f6 tc">We'll use this to show items & services available<br /> in your country/region</p>
                                    </div>
                                </div>
                                <div className="tl pv2">
                                    <select name="gender" className="gender b--transparent ba field-color br3 pa3 w-100" placeholder="Enter Phone Number" required >
                                        <option>United States</option>
                                        <option>Nigeria</option>
                                    </select>
                                </div>
                            </section>  
                            <div className="pv3 tc">
                                <div className="pv2">
                                    <Link 
                                        to={"../maple/pages/home"} className="link black pointer">
                                        <button type="submit" className="button-bg bg-red white pa2 tc br-pill ba pointer w-100 pv3">
                                            Continue
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </form>
                    </main>
                </div>
    );
}

export default SelectLocation;