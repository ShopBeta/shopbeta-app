import { makeStyles } from "@material-ui/core";
import React from "react";
import { useState, useEffect } from "react";
import 'tachyons';
import { CommentBlank } from "../assets/vendor/Pages";
import CommentList from "../containers/CommentList";

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        padding: theme.spacing(2)
    }
}))



const Comments = ({ handleShut, text, file }) => {

    const token = localStorage.getItem("token")

    const [feed, setFeed] = useState([])
    useEffect(() => {
        fetch("https://shopbeta-app.herokuapp.com/feed", {
            method: "GET",
        })
        .then((res) => res.json())
        .then((data) => setFeed(data))
        .catch((err) => {
            console.log(err.message)
        })
    }, [])

  
    const [comment, setComment] = useState([])

    useEffect(() => {
        fetch(`https://shopbeta-app.herokuapp.com/feed/${feed._id}/comments`, {
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
    }, [feed._id])

    const addComment = async () => {

        const comment = {
            text: document.querySelector('.text').value,
            file: document.querySelector('.file').value
        }

        await fetch(`https://shopbeta-app.herokuapp.com/feed/${feed._id}/comments`, {
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
        addComment()
    }

            return(
                    <div className={classes.root}>
                        <div className="tr pb2">
                            <small onClick={handleShut} className="icon-close f3 hover-red"></small>
                        </div>
                        <div id="myUL" style={{ overflowY: 'auto', height: '400px'}} className="pa3 pv3 tj">
                        <div id="hide" style={{ display: 'contents'}}>
                                <CommentBlank />
                            </div>    
                                <div>
                                    <CommentList comment={comment}/>
                                </div>
                                    </div>
                                    <div className="pa2 tc">
                                        <form onSubmit={handleSubmit}>
                                            <span className="pv2">
                                                {/* <img src={img1} alt="avatar" className="br-100" width="50px" height="50px" /> */}
                                            </span>
                                            <span className="pv2 ph2">
                                                <input id="myInput" name="text" value={text} type="text" className="text myInput pa3 br-pill b--black-50 w-70" placeholder="Comment here..." />
                                            </span>
                                            <span className="ph2">
                                                <button type="submit" className="icon-paper-plane bg-transparent b--transparent pointer f3 blue"></button>
                                            </span>
                                            <span className="ph2">
                                                <small type='file' value={file} name="file" className="file icon-camera pointer f3 blue"></small>
                                            </span>
                                        </form>
                                    </div>
                    </div>
            )
}

export default Comments;