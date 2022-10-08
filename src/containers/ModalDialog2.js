import React from "react";
import { Dialog } from "@material-ui/core";
import PostProduct from "../components/PostProduct";

const ModalDialog2 = ({ handleShow, handleShut}) => {
    return(
        //Props recieved from app.js
        <Dialog open={handleShow} onClose={handleShut}>
            <PostProduct handleShut={handleShut} />
        </Dialog>
    )
}

export default ModalDialog2;