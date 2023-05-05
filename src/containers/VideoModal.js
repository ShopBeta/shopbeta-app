import React from "react";
import { Dialog } from "@material-ui/core";
import PostVideo from "./PostVideo";

const VideoModal = ({ handleShow, handleShut}) => {
    return(
        //Props recieved from app.js
        <Dialog open={handleShow} onClose={handleShut}>
            <PostVideo handleShut={handleShut} />
        </Dialog>
    )
}

export default VideoModal;