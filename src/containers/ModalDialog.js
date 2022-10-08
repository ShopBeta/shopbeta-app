import React from "react";
import { Dialog } from "@material-ui/core";
import Details from "../components/Details";

const ModalDialog = ({ handleOpen, handleClose}) => {
    return(
        //Props recieved from detail.js
        <Dialog open={handleOpen} onClose={handleClose}>
            <Details handleClose={handleClose} />
        </Dialog>
    )
}

export default ModalDialog;