import React from "react";
import { useState, useEffect } from "react";
import 'tachyons';
import vid from "../images/Often Whatsapp status.mp4"
import img2 from '../images/space scenery.jpg';
import imgP from '../images/nike.jpg';
import './simple-line-icons/css/simple-line-icons.css';
import CommentModal from "../containers/CommentModal";
import ShareModal from "../containers/ShareModal";
import { Link } from "react-router-dom";
import { Carousell, Item } from "../containers/ImageCarousel";


const TextPost = ({ name, id, owner, text, hearts }) => {

    const token = localStorage.getItem("token")

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
    }, [comment._id])

    const [data, setData] = useState({})

    const buttonClick = async event => {

        event.currentTarget.style.backgroundColor = 'transparent';
        event.currentTarget.style.color = 'orange';
        event.currentTarget.style.fontWeight = 'bold';
        event.currentTarget.innerHTML = 'following';

           await fetch(`https://shopbeta-app.herokuapp.com/user/${owner}/follow`, {
                method: "POST",
                headers: {
                    'Authorization' : 'Bearer ' + token,
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

    const [open, setOpen] = useState(false)

    const [show, setShow] = useState(false)

    //functon to handle payment modal close
    const handleShut= () => {
        setShow(false)
    }

     //functon to handle payment modal open
    const handleShow = () => {
        setShow(true)
    }

       //functon to handle payment modal close
       const handleClose= () => {
        setOpen(false)
    }

     //functon to handle payment modal open
    const handleOpen = () => {
        setOpen(true)
    }       
    return(
        <div className="dib">
            <CommentModal handleShow={show} handleShut={handleShut} />
            <ShareModal handleOpen={open} handleClose={handleClose} />
                <div className="flex flex-wrap bg-white b--black br3 ma3 pa2 bw2 shadow-5">
                    <div className="w-40 f6">
                        <div className="tc ba ma3 br4">
                            <p className="f2 mid-gray pa6">Aa</p>
                        </div>
                </div>
                <div className="w-60 tl">
                <div className="tj flex flex-wrap">
                    <Link to={"/Assets/Vendor/Profile"} className="link black">
                        <img src={img2} alt="Accessories..." className="br-100" width="50px" height="50px" />
                    </Link>
                    <span className="pa2 fw5 f5">
                        <Link className="black link" to={"/Assets/Vendor/Profile"}>{owner}</Link>
                        <p className="f6 code fw3">Santiago, CA .<small className="icon-globe ph2"></small></p>
                        <p className="f6 pa1 code fw3">12min ago</p>
                    </span>
                    <span className="tr">
                        <button onClick={buttonClick} className="pa1 pointer ph3 bg hover-bg-mid-gray code b--black-50 br-pill">Follow</button>
                    </span>
                </div>
                <div style={{ overflowY: 'auto', height: '200px'}} className="pa2 tj">
                    <p className="w-100">
                        {text}
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium est assumenda distinctio sint repellat beatae dolore magnam pariatur ipsum, et deserunt asperiores doloribus sit at esse corrupti facilis aperiam nihil.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum alias qui eaque mollitia, iure totam fugit possimus, harum necessitatibus odio non, consequuntur laudantium. Est iste sequi suscipit laboriosam dolorum repellat.
                    </p>
                </div>
                <div className="pa2">
                    <span onClick={heartClick} className="pa2 fw5 ph3 icon-heart pointer f4 grow icon-share">
                        <small id="increment" className="pa1 code">{hearts}</small>
                    </span>
                    <span onClick={handleShow} className="pa2 pointer f4 fw5 grow icon-bubble">
                        <small className="pa1 code">{comment.length}</small>
                    </span>
                    <span onClick={handleOpen} className="pa2 fw5 f4 grow pointer icon-share">
                        <small className="pa1 code"></small>
                    </span>
                        <input onClick={handleShow} type="text" className="pa2 br-pill b--black-50 w-50" placeholder="Comment here..." />
                    </div>
                </div>
            </div>
        </div>
    )
}

const PostCard = ({ id, name, owner, text, media }) => {

    const token = localStorage.getItem("token")

    const [data, setData] = useState({})
    
    const [feed, setFeed] = useState({})

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
                .then((data) => setData(data))
                .catch((err) => {
                    console.log(err.message)
                })
    }

    const heartClick = async event => {
            event.currentTarget.style.color = 'orange';
            event.currentTarget.style.fontWeight = 'bold';

            const count = {
                hearts: feed.hearts + 1
            }
    
            await fetch(`http://localhost:3000/feed/${feed._id}/hearts`, {
                method: "POST",
                headers: {
                    'Authorization' : 'Bearer ' + token,
                    'Accept' : 'application/json, text/plain',
                    'Content-Type' : 'application/json'
                },
                body: JSON.stringify(count)
            })
            .then((res) => res.json())
            .then((data) => setFeed(data))
            .catch((err) => {
                console.log(err.message)
            })
    }

    const [open, setOpen] = useState(false)

    const [show, setShow] = useState(false)

    //functon to handle payment modal close
    const handleShut= () => {
        setShow(false)
    }

     //functon to handle payment modal open
    const handleShow = () => {
        setShow(true)
    }

       //functon to handle payment modal close
       const handleClose= () => {
        setOpen(false)
    }

     //functon to handle payment modal open
    const handleOpen = () => {
        setOpen(true)
    }
        return(
            <div className="dib">
                 <CommentModal handleShow={show} handleShut={handleShut} />
                 <ShareModal handleOpen={open} handleClose={handleClose} />
                <div className="flex flex-wrap bg-white b--black br3 ma3 pa2 bw2 shadow-5">
                    <div className="w-50">
                        <div className="w-100">
                            <Carousell><Item /></Carousell>
                        </div>
                        <div className="ma2">
                            <div>
                                {/* <video className="w-100 h-80 br3" controls>
                                    <source src={vid} type="video/mp4"></source>
                                </video> */}
                                {/* <img src={media} className="br3 w-100 h-80 br3" alt="First slide" /> */}
                            </div>
                        </div>
                    </div>
                    <div className="w-50">
                        <div className="tj flex flex-wrap">
                        <Link to={"/Assets/Vendor/Profile"} className="link black">
                            <img src={img2} alt="Accessories..." className="br-100" width="50px" height="50px" />
                            </Link>
                            <span className="pa2 fw5 f5">
                                <Link className="black link" to={"/Assets/Vendor/Profile"}>{owner}</Link>
                                <p className="f6 code fw3">Santiago, CA .<small className="icon-globe ph2"></small></p>
                                <p className="f6 pa1 code fw3">12min ago</p>
                            </span>
                            <span className="tr">
                                <button onClick={buttonClick} className="pa1 pointer ph3 bg hover-bg-mid-gray code b--black-50 br-pill">Follow</button>
                            </span>
                        </div>
                        <div style={{ overflowY: 'auto', height: '190px'}} className="pa2 pv2 tj">
                        <p>
                            {text}
                            {/* Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium est assumenda distinctio sint repellat beatae dolore magnam pariatur ipsum, et deserunt asperiores doloribus sit at esse corrupti facilis aperiam nihil.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum alias qui eaque mollitia, iure totam fugit possimus, harum necessitatibus odio non, consequuntur laudantium. Est iste sequi suscipit laboriosam dolorum repellat. */}
                        </p>
                    </div>
                    <div className="pv1">
                        <span onClick={heartClick} className="pa2 fw5 ph3 icon-heart pointer f4 grow icon-share">
                            <small id="increment" className="pa1 code">{feed.hearts}</small>
                        </span>
                        <span onClick={handleShow} className="pa2 f4 pointer fw5 grow icon-bubble">
                            <small className="pa1 code">26</small>
                        </span>
                        <span onClick={handleOpen} className="pa2 fw5 pointer f4 grow icon-share">
                            <small className="pa1 code"></small>
                        </span>
                        <input onClick={handleShow} type="text" className="pa2 br-pill b--black-50 w-50" placeholder="Comment here..." />
                    </div>
                </div>
            </div>
        </div>
    );
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

            await fetch(`http://localhost:3000/feed/${data._id}/hearts`, {
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

export { PostCard, SharedPost, TextPost, ProfilePost };