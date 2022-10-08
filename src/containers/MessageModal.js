import React from "react";
import { Dialog } from "@material-ui/core";
import Message from "../components/Message";

const MessageModal = ({ handleShow, handleShut}) => {
    return(
        //Props recieved from app.js
        <Dialog open={handleShow} onClose={handleShut}>
            <Message handleShut={handleShut} />
        </Dialog>
    )
}

export default MessageModal;