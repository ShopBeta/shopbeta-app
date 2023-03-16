import { makeStyles } from "@material-ui/core";
import React from "react";
import { useState, useEffect } from "react";
import 'tachyons';
// import { CommentBlank } from "../assets/vendor/Pages";
import Dialog from "../containers/Dialog";
import CommentList from "../containers/CommentList";

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        padding: theme.spacing(2)
    }
}))


const Comments = ({ handleShut, text, file, owner }) => {

    const token = localStorage.getItem("token")
    const me = localStorage.getItem("meId")
    console.log(me)

    const pathname = window.location.pathname.split('/')
    const path = pathname[2]
    console.log(path)

    const [comment, setComment] = useState([])
    useEffect(() => {
        setInterval(function() {
            fetch(`https://shopbeta-app.herokuapp.com/feed/${path}/comments`, {
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
        }, 2000); // every 5 minutes (100000)
    }, [path])

    const addComment = async () => {

        const comment = {
            text: document.querySelector('#text').value,
            file: document.querySelector('.file').value,
            owner: me
        }

        await fetch(`https://shopbeta-app.herokuapp.com/feed/${path}/comments`, {
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

    const [open, setOpen] = useState(false)

    const handClick = () => {
        setOpen(false)
    }
    
    const handClickShow = () => {
        setOpen(true)
    }

    const classes = useStyles()
    const handleSubmit = e => {
        e.preventDefault()
        addComment()
    }

            return(
                    <div style={{width: '385px'}} className={classes.root}>
                        <Dialog open={open} handClick={handClick} />
                        <div className="tr pb2">
                            <small onClick={handleShut} className="icon-close pointer f3 hover-red"></small>
                        </div>
                        <div id="myUL" style={{ overflowY: 'auto', height: '400px'}} className="pa3 f5 pv3 tj">
                            <div className="tl pv2">
                                    <p className="f5 code b pv2">Comment here to join the conversation</p>
                                </div>
                                <div className="tc f5">
                                    <div className="code pa4 ph5 code">
                                        <p className="icon-bubbles mid-gray tc f1"></p>
                                        <p className="f4 tc pv2">Comments Section</p>
                                        <p className="pv2 orange code f5">"Type to a send a comment"</p>
                                    </div>
                                </div>  
                                <div>
                                    <CommentList comment={comment}/>
                                </div>
                                    </div>
                                    <div className="pa2 tc">
                                        <form onSubmit={handleSubmit}>
                                            <span className="pv2 ph2">
                                                <input id="text" name="text" value={text} type="text" className="text pa3 br-pill b--black-50 w-75" placeholder="Comment here..." />
                                            </span>
                                            <span onClick={handClickShow} className="ph2">
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