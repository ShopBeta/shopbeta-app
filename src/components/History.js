import React from "react";
import { useState } from "react";
import ReceiptModal from "../containers/ReceiptModal";

const History= () => {

      // delete history
      const deleteItem = () => {
        const div = document.querySelectorAll('.hide')
         div.style.display = "none";
     }

     
    //declare a new state variable for modal to open
    const [open, setOpen] = useState(false)

    //functon to handle payment modal close
    const handleShut= () => {
       setOpen(false)
   }

    //functon to handle payment modal open
   const handleShow = () => {
       setOpen(true)
   }

    return (
        <div style={{display: 'contents'}}>
            <ReceiptModal handleShow={open} handleShut={handleShut} />
                                <div id="hide" className="pv2 pointer hide grow pa3">
                                <div className="pv2 pa2 bg-white br3 b--black shadow-5">
                                        <p onClick={handleShow}>
                                            <p className="tr pointer f4"><small onClick={deleteItem} className="icon-close b grow hover-red"></small></p>
                                            Beautiful Jordan shoes
                                        <p className="tr fw6">
                                        <small className="icon-clock pr2"></small>
                                            <small>Date: 16th May, 2022</small>
                                            </p>
                                        </p>
                                    </div>
                                </div>
                            </div>
    )
}

export default History;