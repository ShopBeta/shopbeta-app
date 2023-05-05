import React from "react";
import { Dialog } from "@material-ui/core";
import PostAd from "./PostAd";

const AdModal = ({ handleShow, handleShut}) => {
    return(
        //Props recieved from app.js
        <Dialog className="w-100" open={handleShow} onClose={handleShut}>
            <PostAd handleShut={handleShut} />
        </Dialog>
    )
}

export default AdModal;