import { makeStyles } from "@material-ui/core";
import React from "react";
import 'tachyons';
import img from '../images/Art painting.jpg';
import img1 from '../images/2.jpg';
import img2 from '../images/space scenery.jpg';

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        padding: theme.spacing(2)
    }
}))



const SharePost = ({ handleClose }) => {
    const classes = useStyles()
    const handleSubmit1 = e => {
        e.preventDefault()
        handleClose()
    }

    return(
        <div className={classes.root} onSubmit={handleSubmit1}>
            <div className="tr pb2">
                    <small onClick={handleClose} className="icon-close f3 hover-red"></small>
                    <div className="tl pv2">
                        <p className="f4 orange fw6 code">
                            Share Post
                        </p>
                    </div>
                </div>
                <div className="pa3 pv3 tj">
                    <p className="f5 code fw6 pb2">Ronel Guiditta</p>
                    <div>
                        <span className="dib flex flex-wrap">
                            <img src={img} className="br3 ph2" alt="post file" width="100px" height="100px" />
                            <img src={img2} className="br3 ph2" alt="post file" width="100px" height="100px" />
                        </span>
                        <span>
                            <p className="pa2 fw6">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium est assumenda distinctio sint repellat beatae dolore magnam pariatur ipsum, et deserunt asperiores doloribus sit at esse corrupti facilis aperiam nihil.
                            </p>
                        </span>
                    </div>
        </div>
        <img src={img1} className="br-100" alt="profile" width="50px" height="50px" />
        <p className="pv2">
            <textarea id="myInput" className="pa2 br3 ba w-100 h3" placeholder="What's on your mind?" aria-label="With textarea"></textarea>
        </p>
        <div className="pv2 tc grow">
                                <button
                                onClick={handleSubmit1}
                                type="submit"
                                variant="contained"
                                className="ph5 pa2 bg-orange pointer ba hover-bg-mid-gray br-pill"
                                >
                                    Post
                                </button>
                            </div>
        </div>
    )
}

export default SharePost;