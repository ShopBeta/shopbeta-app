import React from "react";
import { Dialog } from "@material-ui/core";
import User from "./User";

const UserModal = ({ handleOpen, handleClose}) => {
    return(
        //Props recieved from payment.js
        <Dialog open={handleOpen} onClose={handleClose}>
            <User handleClose={handleClose} />
        </Dialog>
    )
}

export default UserModal;