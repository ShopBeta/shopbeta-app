import React from "react";
import { Dialog } from "@material-ui/core";
import Receipt from "../components/Reciept";

const ReceiptModal = ({ handleShow, handleShut}) => {
    return(
        //Props recieved from receipt.js
        <Dialog open={handleShow} onClose={handleShut}>
            <Receipt handleShut={handleShut} />
        </Dialog>
    )
}

export default ReceiptModal;