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
    const pathname = window.location.pathname.split('/')
    const path = pathname[2]
    console.log(path)

    const [comment, setComment] = useState([])
    useEffect(() => {
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
    }, [path])

    const [user, setUser] = useState({})
    useEffect(() => {
        fetch(`https://shopbeta-app.herokuapp.com/users/me`, {
            method: "GET",
            headers: {
                'Authorization' : 'Bearer ' + token,
                'Accept' : 'application/json, text/plain',
                'Content-Type' : 'application/json'
            },
        })
        .then((res) => res.json())
        .then((data) => setUser(data))
        .catch((err) => {
            console.log(err.message)
        })
    }, [token])

    const addComment = async () => {

        const comment = {
            text: document.querySelector('#text').value,
            file: document.querySelector('.file').value,
            owner: user._id
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
                    <div style={{width: '460px'}} className={classes.root}>
                        <Dialog open={open} handClick={handClick} />
                        <div className="tr pb2">
                            <small onClick={handleShut} className="icon-close f3 hover-red"></small>
                        </div>
                        <div id="myUL" style={{ overflowY: 'auto', height: '400px'}} className="pa3 pv3 tj">
                        {/* <div id="hide" style={{ display: 'contents'}}>
                                <CommentBlank />
                            </div>     */}
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
                                                <input id="text" name="text" value={text} type="text" className="text pa3 br-pill b--black-50 w-70" placeholder="Comment here..." />
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