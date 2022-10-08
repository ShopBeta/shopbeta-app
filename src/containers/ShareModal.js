import React from "react";
import { Dialog } from "@material-ui/core";
import SharePost from "../components/SharePost";

const ShareModal = ({ handleOpen, handleClose}) => {
    return(
        //Props recieved from sharepost.js
        <Dialog open={handleOpen} onClose={handleClose}>
            <SharePost handleClose={handleClose} />
        </Dialog>
    )
}

export default ShareModal;