import { makeStyles } from "@material-ui/core";
import React from "react";
import { useState, useEffect } from "react";
import 'tachyons';
import { Carousell, Item } from "../containers/ImageCarousel";
import Dialog from "../containers/Dialog";

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        padding: theme.spacing(2)
    }
}))



const SharePost = ({ handleClose, text }) => {

    const token = localStorage.getItem("token")
    const [feed, setFeed] = useState({})
    const pathname = window.location.pathname.split('/')
    const path = pathname[2]
    console.log(path)

    useEffect(() => {
        fetch(`https://shopbeta-app.herokuapp.com/feed/${path}`, {
            method: "GET",
            headers: {
                'Authorization' : 'Bearer ' + token,
                'Accept' : 'application/json, text/plain',
                'Content-Type' : 'application/json'
            },
        })
        .then((res) => res.json())
        .then((data) => setFeed(data))
        .catch((err) => {
            console.log(err.message)
        })
    }, [path, token])

    const [user, setUser] = useState({})
    useEffect(() => {
        fetch(`https://shopbeta-app.herokuapp.com/users/${feed.owner}`, {
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
    }, [feed.owner])

    const post = async () => {

        const feed = {
            text: document.querySelector('.text').value,
        }

        await fetch("https://shopbeta-app.herokuapp.com/feed", {
            method: "POST",
            headers: {
                'Authorization' : 'Bearer ' + token,
                'Accept' : 'application/json, text/plain',
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify(feed)
        })
        .then((res) => res.json())
        .then((data) => console.log(data))
        .catch((err) => {
            console.log(err.message)
        })
    }

    const [open, setOpen] = useState(false)

    const handClick = () => {
        setOpen(false)
        handleClose()
    }
    
    const handClickShow = () => {
        setOpen(true)
    }

    const classes = useStyles()
    const handleSubmit = e => {
        e.preventDefault()
        post()
    }

    return(
        <div style={{width: '600px'}} className={classes.root} onSubmit={handleSubmit}>
            <Dialog open={open} handClick={handClick} />
            <div className="tr pb2">
                    <small onClick={handleClose} className="icon-close f3 hover-red"></small>
                    <div className="tl pv2">
                        <p className="f4 orange fw6 code">
                            Share Post
                        </p>
                    </div>
                </div>
                <div className="pa3 pv3 tj">
                    <p className="f5 code fw6 pb2">Post from {user.username}</p>
                    <div style={{ overflowY: 'scroll', height: '230px'}}>
                        <span>
                            <p style={{lineHeight: "20px", fontSize: "13.5px"}} className="pa2">
                                {feed.text}
                                {/* Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium est assumenda distinctio sint repellat beatae dolore magnam pariatur ipsum, et deserunt asperiores doloribus sit at esse corrupti facilis aperiam nihil. */}
                            </p>
                        </span>
                        <div className="w-100">
                            <Carousell>
                                <Item />
                            </Carousell>
                        </div>
                    </div>
                </div>
            <form onSubmit={handleSubmit}>
                <p className="pv2">
                    <textarea id="text" name="text" value={text} className="text pa2 br3 ba w-100 h4" placeholder="What's on your mind?" aria-label="With textarea"></textarea>
                </p>
                <div className="pv2 tc grow">
                    <button onClick={handClickShow} type="submit" variant="contained" className="white ph5 pa2 bg-orange pointer ba hover-bg-mid-gray br-pill">
                        Post
                    </button>
                </div>
            </form>
        </div>
    )
}

export default SharePost;