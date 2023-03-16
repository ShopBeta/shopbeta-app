import React from "react";
import { Dialog } from "@material-ui/core";
import PostVideo from "../containers/PostVideo";

const VideoDialog = ({ handleShow, handleShut}) => {
    return(
        //Props recieved from app.js
        <Dialog open={handleShow} onClose={handleShut}>
            <PostVideo handleShut={handleShut} />
        </Dialog>
    )
}

export default VideoDialog;