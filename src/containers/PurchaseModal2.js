import React from "react";
import { Dialog } from "@material-ui/core";
import Purchase from "../components/Purchase2";

const PurchaseModal = ({ handleShow, handleShut}) => {
    return(
        //Props recieved from payment.js
        <Dialog open={handleShow} onClose={handleShut}>
            <Purchase handleShut={handleShut} />
        </Dialog>
    )
}

export default PurchaseModal;