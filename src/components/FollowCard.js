import React from "react";
// import { useState } from "react";
import { Link } from "react-router-dom";
import img from '../images/2.jpg';

const FollowCard = () => {

    // const [data, setData ] = useState({})

    const buttonClick = async event => {
            event.currentTarget.innerHTML = 'following';
            
            await fetch("https://shopbeta-app.herokuapp.com/user/:id/follow", {
                method: 'POST',
            })
            .then((res) => res.json())
            .then((data) => console.log(data))
            .catch((err) => {
                console.log(err.message)
            })
    }

    const heartClick = event => {
            event.currentTarget.style.color = 'orange';
            event.currentTarget.style.fontWeight = 'bold';
    }

        return(
            <div className="dib">
                <div className="flex flex-wrap tl br3 pa3 bw2 shadow-4 bg-white b--black ma2 pa2">
                    <form >
                        <div className="tj flex flex-wrap">
                            <Link to={"/Assets/Vendor/Profile"} className="link black">
                                <img src={img} alt="Accessories..." className="br-100" width="50px" height="50px" />
                            </Link>
                            <span className="pa2 fw5 f5">
                                <Link to={"/Assets/Vendor/Profile"} className="link black">Ronel Michael</Link>
                                <p className="f6 pa2 code fw3">Santiago, CA .<small className="icon-globe ph2"></small></p>
                            </span>
                            <span>
                                <small onClick={heartClick} className="icon-heart pointer ph4 f4 tc"></small>
                                    <button type="submit" onClick={buttonClick} className="bg-transparent pointer b--black-10 hover-bg-mid-gray pa1 tc br-pill ph4 ma3 grow f6 b fw6">
                                    <small>Follow</small>
                                </button>
                            </span>
                        </div>   
                    </form>
            </div>
        </div>
    )
}

export default FollowCard;