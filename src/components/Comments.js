import { makeStyles } from "@material-ui/core";
import React from "react";
import { useState, useEffect } from "react";
import 'tachyons';
import img from '../images/1.jpg';
import img1 from '../images/2.jpg';
import img2 from '../images/3.jpg';
import img4 from '../images/space scenery.jpg';
import { CommentBlank } from "../assets/vendor/Pages";

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        padding: theme.spacing(2)
    }
}))



const Comments = ({ handleShut, text, file }) => {

    const [data, setData] = useState({})

    const token = localStorage.getItem("token")

    useEffect(() => {
        fetch(`https://shopbeta-app.herokuapp.com/feed/${data._id}/comments`, {
            method: "GET",
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
    }, [data._id, token])

    const addComment = async (text, file) => {

        const comment = {
            text: text,
            file: file
        }

        await fetch(`https://shopbeta-app.herokuapp.com/feed/${data._id}/comments`, {
            method: "POST",
            headers: {
                'Authorization' : 'Bearer ' + token,
                'Accept' : 'application/json, text/plain',
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify(comment)
        })
        .catch((err) => {
            console.log(err.message)
        })
    }


//     // display

//     const display = () => {
//         const my_div = document.getElementById('hide')
//         my_div.style['display'] = 'none'
//     }
        
//     // create a new list item

// const newComment = () => {

//     const div = document.createElement("div", {id: 'element', style: {color: ""} , className: ''}) 
//     // div.style.backgroundColor = 'lightblue'
//     div.className = 'pv3 pv2 tj pb3 bg-light-blue pa3 br4'

//     const inputValue = document.querySelector(".myInput").value

//     const t =  document.createTextNode(inputValue)

//     div.appendChild(t);

//     if (inputValue === '') {
//     alert("Send a message to start a conversaton!");
//     } else {
        
//     const p = document.createElement("p");

//     const txt = document.createTextNode("You");
//     p.className = "code pl2 pv1 f4";
//     p.appendChild(txt);
//     document.getElementById('myUL').appendChild(p);

//     document.getElementById("myUL").appendChild(div);
//     }

//     const p = document.createElement("p");

//     const Time = new Date()
//         Time.getTime()
//         Time.getDay()

//     const txt = document.createTextNode(Time.toLocaleString());
//     p.className = "code pl2 pv2 fw5 f7";
//     p.appendChild(txt);
//     document.getElementById('myUL').appendChild(p);

// }

    const classes = useStyles()
    const handleSubmit = e => {
        e.preventDefault()
        handleShut()
        addComment(text, file)
    }

        data.map((data, i) => {
            return(
                    <div className={classes.root}>
                        <div className="tr pb2">
                            <small onClick={handleShut} className="icon-close f3 hover-red"></small>
                        </div>
                        <div id="myUL" style={{ overflowY: 'auto', height: '400px'}} className="pa3 pv3 tj">
                        <div id="hide" style={{ display: 'contents'}}>
                                <CommentBlank />
                            </div>    
                        <div class="pv2">
                            <div className="">
                                <div>
                                    <div className="tj flex flex-wrap">
                                        <img src={img} alt="avatar" className="br-100" width="50px" height="50px" />
                                        <span className="pa2 fw5 f5">
                                                Ronel Michael
                                            <p className="f6 code fw3">
                                                Santiago, CA
                                            </p>
                                        </span>
                                    </div>
                                </div>
                                    <div className="pv2">
                                        <div className="bg-light-blue pa3 br4">
                                            {data.text}
                                            {/* But I must explain to you how all this mistaken
                                            idea of denouncing pleasure and praising pain was born and I will
                                            give you a complete account of the system. */}
                                        </div>
                                            <small className="opacity-6 code">
                                                <i className="pr2"></i>
                                                    {data.time}
                                                    {/* 11:01 AM | Yesterday */}
                                            </small>
                                        </div>
                                    </div>
                                </div>                 
                        <div class="chat-wrapper">
                            <div className="">
                                <div>
                                    <div className="tj flex flex-wrap">
                                        <img src={img1} alt="avatar" className="br-100" width="50px" height="50px" />
                                        <span className="pa2 fw5 f5">
                                            Ronel Michael
                                            <p className="f6 code fw3">
                                                Vancouver, BC
                                            </p>
                                        </span>
                                            </div>
                                                </div>
                                                    <div className="pv2">
                                                        <div className="bg-light-blue pa3 br4">
                                                            {data.text}
                                                            {/* But I must explain to you how all this mistaken
                                                            idea of denouncing pleasure and praising pain was */}
                                                        </div>
                                                        <small class="opacity-6 code">
                                                            <i class="pr2"></i>
                                                            {data.time}
                                                            {/* 11:01 AM | Yesterday */}
                                                        </small>
                                                    </div>
                                                </div>
                                            </div> 
                        <div class="chat-wrapper">
                            <div className="pt2">
                                <div>
                                    <div className="tj flex flex-wrap">
                                        <img src={img2} alt="avatar" className="br-100" width="50px" height="50px" />
                                        <span className="pa2 fw5 f5">
                                            Harry Styles
                                            <p className="f6 code fw3">
                                                Vancouver, BC
                                            </p>
                                        </span>
                                            </div>
                                                </div>
                                                    <div className="pv1">
                                                        <div className="pa2 br-pill">
                                                        <img src={img4} alt="avatar" className="br4" width="200px" height="200px" />
                                                        </div>
                                                        <small class="opacity-6 code">
                                                            <i class="pr2"></i>
                                                            {data.time}
                                                            {/* 11:01 AM | Yesterday */}
                                                        </small>
                                                    </div>
                                                </div>
                                            </div>
                                    </div>
                                    <div className="pa2 tc">
                                        <form onSubmit={handleSubmit}>
                                            <span className="pv2">
                                                {/* <img src={img1} alt="avatar" className="br-100" width="50px" height="50px" /> */}
                                            </span>
                                            <span className="pv2 ph2">
                                                <input id="myInput" name="text" value={text} type="text" className="myInput pa3 br-pill b--black-50 w-70" placeholder="Comment here..." />
                                            </span>
                                            <span className="ph2">
                                                <button type="submit" className="icon-paper-plane bg-transparent b--transparent pointer f3 blue"></button>
                                            </span>
                                            <span className="ph2">
                                                <small type='file' value={file} name="file" className="icon-camera pointer f3 blue"></small>
                                            </span>
                                        </form>
                                    </div>
                    </div>
            )
        })
}

export default Comments;