import React from "react";
import { Dialog } from "@material-ui/core";
import Success from "../components/Alerts";

const Dialog1 = ({open, handClick}) => {
    return(
        <div>
            <Dialog open={open} onClose={handClick}>
                <Success handClick={handClick} />
            </Dialog>
        </div>
    )
}

export default Dialog1;