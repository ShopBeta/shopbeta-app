import React from "react";
import { useState } from "react";
import 'tachyons';
import vid from "../images/Often Whatsapp status.mp4"
import img2 from '../images/space scenery.jpg';
import './simple-line-icons/css/simple-line-icons.css';
import CommentModal from "../containers/CommentModal";
import ShareModal from "../containers/ShareModal";
import { Link } from "react-router-dom";
// import { Carousell, Item } from "../containers/ImageCarousel";


const PostCard = ({ name }) => {

    const buttonClick = event => {

            event.currentTarget.style.backgroundColor = 'transparent';
            event.currentTarget.style.color = 'orange';
            event.currentTarget.style.fontWeight = 'bold';
            event.currentTarget.innerHTML = 'following';
    }

    const heartClick = event => {
            event.currentTarget.style.color = 'orange';
            event.currentTarget.style.fontWeight = 'bold';
            document.querySelector('#increment').innerHTML = + 1
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
                    {/* <div className="w-100">
                        <Carousell><Item /></Carousell>
                    </div> */}
                    <div className="ma2">
                        <div>
                            <video className="w-100 h-80 br3" controls>
                                <source src={vid} type="video/mp4"></source>
                            </video>
                        </div>
                        </div>
                </div>
                <div className="w-50">
                    <div className="tj flex flex-wrap">
                    <Link to={"/Assets/Vendor/Profile"} className="link black">
                        <img src={img2} alt="Accessories..." className="br-100" width="50px" height="50px" />
                        </Link>
                        <span className="pa2 fw5 f5">
                            <Link className="black link" to={"/Assets/Vendor/Profile"}>{name}</Link>
                            <p className="f6 pa2 code fw3">12min ago</p>
                        </span>
                        <span className="tr">
                            <button onClick={buttonClick} className="pa1 pointer ph3 bg hover-bg-mid-gray code b--black-50 br-pill">Follow</button>
                        </span>
                    </div>
                    <div style={{ overflowY: 'auto', height: '190px'}} className="pa2 pv2 tj">
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium est assumenda distinctio sint repellat beatae dolore magnam pariatur ipsum, et deserunt asperiores doloribus sit at esse corrupti facilis aperiam nihil.
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum alias qui eaque mollitia, iure totam fugit possimus, harum necessitatibus odio non, consequuntur laudantium. Est iste sequi suscipit laboriosam dolorum repellat.
                            </p>
                    </div>
                    <div className="pv1">
                        <span onClick={heartClick} className="pa2 fw5 ph3 icon-heart pointer f4 grow icon-share">
                            <small id="increment" className="pa1 code">0</small>
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

    
    const buttonClick = event => {
        
            event.currentTarget.style.backgroundColor = 'transparent';
            event.currentTarget.style.color = 'orange';
            event.currentTarget.style.fontWeight = 'bold';
            event.currentTarget.innerHTML = 'following';
    }

    const heartClick = event => {
            event.currentTarget.style.color = 'orange';
            event.currentTarget.style.fontWeight = 'bold';
            document.querySelector('#increment').innerHTML = + 1
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
                            <p className="f6 pa2 code fw3">12min ago</p>
                        </span>
                        <span className="tr">
                            <button onClick={buttonClick} className="pa1 pointer ph3 bg hover-bg-mid-gray code b--black-50 br-pill">Follow</button>
                        </span>
                    </div>
           <div className="pa2 pv3 tj">
                   <p className="f6">
                       Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium est assumenda distinctio sint repellat beatae dolore magnam pariatur ipsum, et deserunt asperiores doloribus sit at esse corrupti facilis aperiam nihil.
                   </p>
                   {/* <div className="pv2">
                        <img src={img} alt="Accessories..." className="w-100 br3" height="auto" />
                    </div> */}
           </div>
           </div>
       </div>
       <div className="w-50 tl">
       <div className="tj flex flex-wrap">
                        <img src={img2} alt="Accessories..." className="br-100" width="50px" height="50px" />
                        <span className="pa2 fw5 f5">
                            {name}
                            <p className="f6 pa2 code fw3">12min ago</p>
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
                   <small id="increment" className="pa1 code">44</small>
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

const TextPost = ({ name }) => {

    const buttonClick = event => {
            event.currentTarget.style.backgroundColor = 'transparent';
            event.currentTarget.style.color = 'orange';
            event.currentTarget.style.fontWeight = 'bold';
            event.currentTarget.innerHTML = 'following';
    }

    const heartClick = event => {
            event.currentTarget.style.color = 'orange';
            event.currentTarget.style.fontWeight = 'bold';
            document.querySelector('#increment').innerHTML = + 1
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
                            <Link className="black link" to={"/Assets/Vendor/Profile"}>{name}</Link>
                            <p className="f6 pa2 code fw3">12min ago</p>
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
               <span onClick={heartClick} className="pa2 fw5 ph3 icon-heart pointer f4 grow icon-share">
                   <small id="increment" className="pa1 code">44</small>
               </span>
               <span onClick={handleShow} className="pa2 pointer f4 fw5 grow icon-bubble">
                   <small className="pa1 code">26</small>
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


const ProfilePost = ({ name }) => {

    
    const buttonClick = event => {
            event.currentTarget.style.backgroundColor = 'transparent';
            event.currentTarget.style.color = 'orange';
            event.currentTarget.style.fontWeight = 'bold'
            event.currentTarget.innerHTML = 'following';
    }

    const buttonClick1 = event => {
            event.currentTarget.style.backgroundColor = 'lightblue';
            event.currentTarget.style.color = 'orange';
            event.currentTarget.style.fontWeight = 'bold';
            event.currentTarget.innerHTML = 'following';
    }

    const heartClick = event => {
            event.currentTarget.style.color = 'orange';
            event.currentTarget.style.fontWeight = 'bold';
            document.querySelector('#increment').innerHTML = 1
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
                        height="280"
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
                            <Link className="black link" to={"/Assets/Vendor/Profile"}>{name}</Link>
                            <p className="f6 pa2 code fw3">12min ago</p>
                        </span>
                        <span className="tr">
                            <button onClick={buttonClick} className="pa1 pointer ph3 bg hover-bg-mid-gray code b--black-50 br-pill">Follow</button>
                        </span>
                    </div>
           <div className="pv1 tj">
            <div className="flex flex-wrap pa2 tj">
            <span className="pl2">
            <div className="tj flex flex-wrap">
                        <span className="pa2 tc fw5 f5">
                        <Link to={"/Assets/Vendor/Profile"} className="link black">LandPocl</Link>
                            <p className="f6 code fw3">Fashion industry</p>
                            <p className="pv2 b f6 icon-location-pin tj"><small className="ph2 code">No 17 Isa Kaita Road Malalali, Kaduna, Nigeria</small></p>
                            <p className="icon-phone b"><small className="ph2 code f7">+234 0805675889</small></p>
                            <p className="icon-envelope b pv1"><small className="ph2 code f7">beautyshop23@gmail.com</small></p>
                        </span>     
           <div className="tc pt3 f6">
           <span className="b">
                <button onClick={buttonClick1} className="bg-orange white ba hover-bg-mid-gray pa2 tc br-pill ph5 ma1 pointer grow f6 fw6">Follow</button>
            </span>
            <span className="b">
                <Link to={"../Assets/Vendor/Profile"}><button className="bg-orange white ba hover-bg-mid-gray pa2 tc br-pill ph5 ma1 pointer grow f6 fw6">Items</button></Link>
            </span>
           </div>
           </div>
            </span>
            </div>
           </div>
           <div className="pa2">
               <span onClick={heartClick} className="pa2 fw5 ph3 icon-heart pointer f4 grow icon-share">
                   <small id="increment" className="pa1 code">44</small>
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