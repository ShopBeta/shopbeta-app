import React from "react";
import { Dialog } from "@material-ui/core";
import Comments from "../components/Comments";

const CommentModal = ({ handleShow, handleShut}) => {
    return(
        //Props recieved from app.js
        <Dialog open={handleShow} onClose={handleShut}>
            <Comments handleShut={handleShut} />
        </Dialog>
    )
}

export default CommentModal;