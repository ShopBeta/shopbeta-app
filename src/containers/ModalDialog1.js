import React from "react";
import { Dialog } from "@material-ui/core";
import Payment from "../components/Payment";

const ModalDialog1 = ({ handleShow, handleShut}) => {
    return(
        //Props recieved from payment.js
        <Dialog open={handleShow} onClose={handleShut}>
            <Payment handleShut={handleShut} />
        </Dialog>
    )
}

export default ModalDialog1;