import React from "react";
import { useState, useEffect } from "react";
import 'tachyons';
import moment from "moment";
import img2 from '../images/home_wallpaper_2.jpg';
import imgP from '../images/nike.jpg';
import './simple-line-icons/css/simple-line-icons.css';
import CommentModal from "../containers/CommentModal";
import ShareModal from "../containers/ShareModal";
import { Link } from "react-router-dom";


const TextPost = ({ name, id, owner, media, text, hearts, time}) => {

    const token = localStorage.getItem("token")
    const me = localStorage.getItem("meId")
    console.log(me)
    console.log(owner)
    console.log(time)

    const [user, setUser] = useState({})
    useEffect(() => {
        fetch(`https://shopbeta-app.herokuapp.com/users/${owner}`, {
            method: "GET",
            headers: {
                'Accept' : 'application/json, text/plain',
                'Content-Type' : 'application/json'
            },
        })
        .then((res) => res.json())
        .then((data) => setUser(data))
        .catch((err) => {
            console.log(err.message)
        })
    }, [owner])

    const [comment, setComment] = useState({})
    useEffect(() => {
        fetch(`https://shopbeta-app.herokuapp.com/feed/${id}/comments`, {
            method: "GET",
            headers: {
                'Accept' : 'application/json, text/plain',
                'Content-Type' : 'application/json'
            },
        })
        .then((res) => res.json())
        .then((data) => setComment(data))
        .catch((err) => {
            console.log(err.message)
        })
    }, [id])

    const buttonClick = async event => {

        event.currentTarget.style.backgroundColor = 'transparent';
        event.currentTarget.style.color = 'orange';
        event.currentTarget.style.fontWeight = 'bold';
        event.currentTarget.innerHTML = 'following';

           await fetch(`https://shopbeta-app.herokuapp.com/user/${user._id}/follow/${me}`, {
                method: "POST",
                headers: {
                    'Content-Type' : 'application/json'
                },
            })
            .then((res) => res.json())
            .then((data) => console.log(data))
            .catch((err) => {
                console.log(err.message)
            })

    }

    const heartClick = async event => {
            event.currentTarget.style.color = 'orange';
            event.currentTarget.style.fontWeight = 'bold';

            const count = {
                hearts: hearts + 1
            }

            await fetch(`https://shopbeta-app.herokuapp.com/feed/${id}/hearts`, {
                method: "POST",
                headers: {
                    'Authorization' : 'Bearer ' + token,
                    'Accept' : 'application/json, text/plain',
                    'Content-Type' : 'application/json'
                },
                body: JSON.stringify(count)
            })
            .then((res) => res.json())
            .then((data) => console.log(data))
            .catch((err) => {
                console.log(err.message)
            })
    }

    const [show, setShow] = useState(false)

    //functon to handle payment modal close
    const handleShut= () => {
        setShow(false)
    }

     //functon to handle payment modal open
    const handleShow = () => {
        setShow(true)
    } 
    
    return(
        <div style={{width: '450px'}} className="">
            <CommentModal handleShow={show} handleShut={handleShut} />
            {/* <ShareModal handleOpen={open} handleClose={handleClose} /> */}
            <div className="bg-white b--black br3 ma3 pa2 bw2 shadow-5">
                <div className="tj flex f4 flex-wrap">
                    <span onClick={() => {window.history.pushState(null, "", id)}}>
                        <Link onClick={() => {window.localStorage.setItem("userId", owner)}} className="link black" to={"/assets/vendor/User"}>
                            <img src={`https://shopbeta-app.herokuapp.com/users/${owner}/avatar`} alt="Accessories..." className="br-100" width="55px" height="55px" />
                        </Link>
                    </span>
                    <span onClick={() => {window.history.pushState(null, "", id)}} className="pa2 f5 pointer fw5">
                        <Link onClick={() => {window.localStorage.setItem("userId", owner)}} className="link black" to={"/assets/vendor/User"}>
                            <span>{user.username}</span>
                        </Link>
                        <p className="f6 code fw3">{user.location}.<small className="icon-globe ph2"></small></p>
                        <p className="f6 pa1 code fw3">
                            {moment(time).from()}
                            <span class="ph2">{moment(time).format('h:mm a')}</span>
                        </p>
                    </span>
                    <span className="tr">
                        <button onClick={buttonClick} className="bg-transparent f5 pointer ba hover-bg-mid-gray pa2 tc br-pill ph4 ma1 grow b fw6">Follow</button>
                    </span>
                </div>
                <div className="pa2">
                <div style={{ height: 'auto', textAlign: 'justify'}} className="pa2">
                    <p style={{lineHeight: "20px"}} className="f5">
                        {text}
                    </p>
                </div>
                </div>
                <div className="side2">
                    <img src={`https://shopbeta-app.herokuapp.com/feed/${id}/media`} alt="post..." className="br4"  />
                    <div className="pa2">
                        <span onClick={heartClick} className="pa2 fw5 ph3 icon-heart pointer f4 grow">
                            <small id="increment" className="pa1 code">{hearts}</small>
                        </span>
                        <span onClick={() => {window.history.pushState(null, "", id)}} className="pa2 pointer f4 fw5 grow icon-bubble">
                            <small onClick={handleShow} className="pa1 code">{comment.length}</small>
                        </span>
                        {/* <span onClick={() => {window.history.pushState(null, "", id)}} disabled className="pa2 fw5 f4 grow pointer disabled icon-share">
                            <small className="pa1 code"></small>
                        </span> */}
                        <span onClick={() => {window.history.pushState(null, "", id)}}>
                            <input onClick={handleShow} type="text" className="pa3 br-pill b--black-50 w-70" placeholder="Comment here..." />
                        </span>
                    </div>
                </div>
                </div>
            </div>
    )
}

const VideoPost = ({ id, owner, media, text, hearts, time}) => {

    const token = localStorage.getItem("token")
    const me = localStorage.getItem("meId")
    console.log(me)
    console.log(owner)
    console.log(time)

    const [user, setUser] = useState({})
    useEffect(() => {
        fetch(`https://shopbeta-app.herokuapp.com/users/${owner}`, {
            method: "GET",
            headers: {
                'Accept' : 'application/json, text/plain',
                'Content-Type' : 'application/json'
            },
        })
        .then((res) => res.json())
        .then((data) => setUser(data))
        .catch((err) => {
            console.log(err.message)
        })
    }, [owner])

    const [comment, setComment] = useState({})
    useEffect(() => {
        fetch(`https://shopbeta-app.herokuapp.com/video/${id}/comments`, {
            method: "GET",
            headers: {
                'Accept' : 'application/json, text/plain',
                'Content-Type' : 'application/json'
            },
        })
        .then((res) => res.json())
        .then((data) => setComment(data))
        .catch((err) => {
            console.log(err.message)
        })
    }, [id])

    const buttonClick = async event => {

        event.currentTarget.style.backgroundColor = 'transparent';
        event.currentTarget.style.color = 'orange';
        event.currentTarget.style.fontWeight = 'bold';
        event.currentTarget.innerHTML = 'following';

           await fetch(`https://shopbeta-app.herokuapp.com/user/${user._id}/follow/${me}`, {
                method: "POST",
                headers: {
                    'Content-Type' : 'application/json'
                },
            })
            .then((res) => res.json())
            .then((data) => console.log(data))
            .catch((err) => {
                console.log(err.message)
            })

    }

    const heartClick = async event => {
            event.currentTarget.style.color = 'orange';
            event.currentTarget.style.fontWeight = 'bold';

            const count = {
                hearts: hearts + 1
            }

            await fetch(`https://shopbeta-app.herokuapp.com/video/${id}/hearts`, {
                method: "POST",
                headers: {
                    'Authorization' : 'Bearer ' + token,
                    'Accept' : 'application/json, text/plain',
                    'Content-Type' : 'application/json'
                },
                body: JSON.stringify(count)
            })
            .then((res) => res.json())
            .then((data) => console.log(data))
            .catch((err) => {
                console.log(err.message)
            })
    }

    const [show, setShow] = useState(false)

    //functon to handle payment modal close
    const handleShut= () => {
        setShow(false)
    }

     //functon to handle payment modal open
    const handleShow = () => {
        setShow(true)
    } 
    
    return(
            <div style={{Height: '600px', width: '450px'}} className="">
                <CommentModal handleShow={show} handleShut={handleShut} />
                    <div className="bg-white b--black br3 ma3 pa2 bw2 shadow-5">
                        <div className="side2">
                            <video style={{Height: 'auto', width: '100%'}} className="br4" controls>
                                <source src={`https://shopbeta-app.herokuapp.com/video/${id}/video`} type="video/mp4"></source>
                            </video>
                            <div className="f4">
                                <span className="icon-eye pr2"></span>
                                <span className="pr7"> 
                                    <small class="opacity-6 code">
                                        <i class="pr2"></i>
                                        2K | Views
                                    </small>
                                </span>
                                <span className="f6 pa1 code fw3">
                                    {moment(time).from()}
                                    {/* <span class="ph2">{moment(time).format('h:mm a')}</span> */}
                                </span>
                            </div>
                          <div className="">
                            <div className="pa2">
                                <div style={{ height: 'auto', textAlign: 'justify'}} className="pa2">
                                    <div style={{lineHeight: "18px"}} className="f6">
                                        {text}
                                    </div>
                                    <div className="pa2 tr">
                                            <p onClick={heartClick} className="pa2 fw5 ph3 pointer icon-heart pointer f3">
                                                <small id="increment" className="pa1 code">{hearts}</small>
                                            </p>
                                            <p onClick={() => {window.history.pushState(null, "", id)}} className="pa2 pointer f3 fw5 icon-bubble">
                                                <small onClick={handleShow} className="pa1 f5 code">{comment.length}</small>
                                            </p>
                                            <p className="tr">  
                                                <Link onClick={() => {window.localStorage.setItem("userId", owner)}} className="link black" to={"/assets/vendor/User"}>
                                                    <img src={`https://shopbeta-app.herokuapp.com/users/${owner}/avatar`} alt="Accessories..." className="br-100 pointer" width="55px" height="55px" />
                                                </Link>
                                                <Link onClick={() => {window.localStorage.setItem("userId", owner)}} className="link black" to={"/assets/vendor/User"}>
                                                    <p className="pa2 pointer fw5">
                                                        <p>{user.username}</p>
                                                    </p>
                                                </Link>
                                                <p onClick={buttonClick} className="bg-transparent f5 pointer blue hover-orange tr br-pill ph2 b fw6">
                                                    Follow
                                                </p>
                                            </p>
                                    </div>
                                </div>
                            </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

const SharedPost = ({ name }) => {
    
    const token = localStorage.getItem("token")
    
    const [data, setData] = useState({})
    
   
    const buttonClick = async event => {

        event.currentTarget.style.backgroundColor = 'transparent';
        event.currentTarget.style.color = 'orange';
        event.currentTarget.style.fontWeight = 'bold';
        event.currentTarget.innerHTML = 'following';

           await fetch(`https://shopbeta-app.herokuapp.com/user/${data._id}/follow`, {
                method: "POST",
                headers: {
                    'Authorization' : 'Bearer ' + token,
                    'Accept' : 'application/json, text/plain',
                    'Content-Type' : 'application/json'
                },
            })
            .then((res) => res.json())
            .then((data) => console.log(data))
            .catch((err) => {
                console.log(err.message)
            })
    }

    const heartClick = async event => {
            event.currentTarget.style.color = 'orange';
            event.currentTarget.style.fontWeight = 'bold';

            const count = {
                hearts: data.hearts + 1
            }

            await fetch(`https://shopbeta-app.herokuapp.com/feed/${data._id}/hearts`, {
                method: "POST",
                headers: {
                    'Authorization' : 'Bearer ' + token,
                    'Accept' : 'application/json, text/plain',
                    'Content-Type' : 'application/json'
                },
                body: JSON.stringify(count)
            })
            .then((res) => res.json())
            .then((data) => setData(data))
            .catch((err) => {
                console.log(err.message)
            })
    }


    const [open, setOpen] = useState(false)

    //functon to handle payment modal close
    const handleShut= () => {
        setOpen(false)
    }

     //functon to handle payment modal open
    const handleShow = () => {
        setOpen(true)
    }
       

    return(
        <div className="dib">
            <CommentModal handleShow={open} handleShut={handleShut} />
            <div className="flex flex-wrap bg-white b--black br3 ma3 pa2 bw2 shadow-5">
                <div className="w-50 f6">
                    <p className="orange pa1 icon-share"></p>
                    <div  style={{ overflowY: 'auto', height: '280px'}}  className="ma2 pa3 ba br4">
                        <div className="tj flex flex-wrap">
                            <Link to={"/Assets/Vendor/Profile"} className="link black">
                                <img src={img2} alt="Accessories..." className="br-100" width="50px" height="50px" />
                            </Link>
                            <span className="pa2 fw5 f5">
                                <Link className="black link" to={"/Assets/Vendor/Profile"}>{name}</Link>
                                <p className="f6 code fw3">Santiago, CA .<small className="icon-globe ph2"></small></p>
                                <p className="f6 pa1 code fw3">12min ago</p>
                            </span>
                            <span className="tr">
                                <button onClick={buttonClick} className="pa1 pointer ph3 bg hover-bg-mid-gray code b--black-50 br-pill">Follow</button>
                            </span>
                        </div>
                    <div className="pa2 pv3 tj">
                        <p className="f6">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium est assumenda distinctio sint repellat beatae dolore magnam pariatur ipsum, et deserunt asperiores doloribus sit at esse corrupti facilis aperiam nihil.
                        </p>
                        <div className="pv2">
                            <img src={img2} alt="Accessories..." className="w-100 br3" height="auto" />
                            </div>
                        </div>
                </div>
            </div>
                <div className="w-50 tl">
                    <div className="tj flex flex-wrap">
                        <img src={img2} alt="Accessories..." className="br-100" width="50px" height="50px" />
                        <span className="pa2 fw5 f5">
                            {name}
                            <p className="f6 code fw3">Santiago, CA .<small className="icon-globe ph2"></small></p>
                            <p className="f6 pa1 code fw3">12min ago</p>
                        </span>
                        <span className="tr">
                            <button onClick={buttonClick} className="pa1 pointer ph3 bg hover-bg-mid-gray code b--black-50 br-pill">Follow</button>
                        </span>
                    </div>
                    <div style={{ overflowY: 'auto', height: '200px'}} className="pa2 tj">
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium est assumenda distinctio sint repellat beatae dolore magnam pariatur ipsum, et deserunt asperiores doloribus sit at esse corrupti facilis aperiam nihil.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum alias qui eaque mollitia, iure totam fugit possimus, harum necessitatibus odio non, consequuntur laudantium. Est iste sequi suscipit laboriosam dolorum repellat.
                        </p>
                    </div>
                    <div className="pa2">
                        <span onClick={heartClick} className="pa2 fw5 ph3 icon-heart pointer f4 grow">
                            <small id="increment" className="pa1 code">{data.hearts}</small>
                        </span>
                        <span onClick={handleShow} className="pa2 pointer f4 fw5 grow icon-bubble">
                            <small className="pa1 code">26</small>
                        </span>
                        <input onClick={handleShow} type="text" className="pa2 br-pill b--black-50 w-60" placeholder="Comment here..." />
                    </div>
                </div>
            </div>
        </div>
    )
}

const ProfilePost = ({ name, id, owner, text, media }) => {
    
    const token = localStorage.getItem("token")

    const [data, setData] = useState({})

   
    const buttonClick = async event => {

        event.currentTarget.style.backgroundColor = 'transparent';
        event.currentTarget.style.color = 'orange';
        event.currentTarget.style.fontWeight = 'bold';
        event.currentTarget.innerHTML = 'following';

           await fetch(`https://shopbeta-app.herokuapp.com/user/${data._id}/follow`, {
                method: "POST",
                headers: {
                    'Authorization' : 'Bearer ' + token,
                    'Accept' : 'application/json, text/plain',
                    'Content-Type' : 'application/json'
                },
            })
            .then((res) => res.json())
            .then((data) => console.log(data))
            .catch((err) => {
                console.log(err.message)
            })
    }

    const heartClick = async event => {
            event.currentTarget.style.color = 'orange';
            event.currentTarget.style.fontWeight = 'bold';

            const count = {
                hearts: data.hearts + 1
            }

            await fetch(`https://shopbeta-app.herokuapp.com/feed/${data._id}/hearts`, {
                method: "POST",
                headers: {
                    'Authorization' : 'Bearer ' + token,
                    'Accept' : 'application/json, text/plain',
                    'Content-Type' : 'application/json'
                },
                body: JSON.stringify(count)
            })
            .then((res) => res.json())
            .then((data) => setData(data))
            .catch((err) => {
                console.log(err.message)
            })
    }

    const buttonClick1 = async event => {

        event.currentTarget.style.backgroundColor = 'transparent';
        event.currentTarget.style.color = 'orange';
        event.currentTarget.style.fontWeight = 'bold';
        event.currentTarget.innerHTML = 'following';

        await fetch(`https://shopbeta-app.herokuapp.com/user/${data._id}/follow`, {
            method: "POST",
            headers: {
                'Authorization' : 'Bearer ' + token,
                'Accept' : 'application/json, text/plain',
                'Content-Type' : 'application/json'
            },
        })
        .then((res) => res.json())
        .then((data) => console.log(data))
        .catch((err) => {
            console.log(err.message)
        })
    }

    const [open, setOpen] = useState(false)

    //functon to handle payment modal close
    const handleShut= () => {
        setOpen(false)
    }

     //functon to handle payment modal open
    const handleShow = () => {
        setOpen(true)
    }

    return(
        <div className="dib">
             <CommentModal handleShow={open} handleShut={handleShut} />
            <div className="flex flex-wrap bg-white br3 ma3 pa2 bw2 shadow-5">
                <div className="w-50 pa2 f6">
                    <p className="orange icon-share pa1"></p>
                    <div className="ba br4">
                    <div className="tc">
                        <iframe 
                            title="maps"
                            height="270"
                            className="w-100 b--black-10 br3"
                            loading="lazy"
                            allowFullScreen
                            referrerPolicy="no-referrer-when-downgrade"
                            src="https://www.google.com/maps/embed/v1/place?key=API_KEY
                            &q=Space+Needle,Seattle+WA"
                        />
                    </div>
                </div>
            </div>
                <div className="w-50 pl2 tl">
                    <div className="tj flex flex-wrap">
                        <Link to={"/Assets/Vendor/Profile"} className="link black">
                            <img src={img2} alt="Accessories..." className="br-100" width="50px" height="50px" />
                        </Link>
                        <span className="pa2 fw5 f5">
                            <Link className="black link" to={"/Assets/Vendor/Profile"}>{owner}</Link>
                                <p className="f6 code fw3">Santiago, CA .<small className="icon-globe ph2"></small></p>
                                <p className="f6 pa2 code fw3">12min ago</p>
                        </span>
                        <span className="tr">
                            <button onClick={buttonClick} className="pa1 pointer ph3 bg hover-bg-mid-gray code b--black-50 br-pill">Follow</button>
                        </span>
                    </div>
                    <div className="flex flex-wrap pv1 pa2 tl">
                        <img src={imgP} alt="Accessories..." className="br-100" width="100px" height="100px" />
                        <span className="pa2 f3 fw5">
                            <Link to={"/Assets/Vendor/Profile"} className="link black">Sammy Joe</Link>
                            <p className="f6 code fw3">Santiago, CA .<small className="icon-globe ph2"></small></p>
                            <p className="code ph2 pv2 f5">+234 0805675889</p>
                            <p className="code ph2 f5">beautyshop23@gmail.com</p>
                        </span>     
                    <div className="pt3 f6">
                        <span className="b">
                            <button onClick={buttonClick1} className="bg-transparent ba hover-bg-mid-gray pa2 tc br-pill ph5 ma1 pointer grow f6 fw6">Follow</button>
                        </span>
                        <span className="b">
                            <Link to={"../Assets/Vendor/Profile"}><button className="bg-transparent ba hover-bg-mid-gray pa2 tc br-pill ph5 ma1 pointer grow f6 fw6">Items</button></Link>
                        </span>
                        </div>
                    </div>
                    <div className="pt5 pa2">
                        <span onClick={heartClick} className="pa2 fw5 ph3 icon-heart pointer f4 grow icon-share">
                            <small id="increment" className="pa1 code">{data.hearts}</small>
                        </span>
                        <span onClick={handleShow} className="pa2 pointer f4 fw5 grow icon-bubble">
                            <small className="pa1 code">26</small>
                        </span>
                        <input onClick={handleShow} type="text" className="pa2 br-pill b--black-50 w-60" placeholder="Comment here..." />
                    </div>
                </div>
            </div>
        </div>
    )
}

export { VideoPost, SharedPost, TextPost, ProfilePost };