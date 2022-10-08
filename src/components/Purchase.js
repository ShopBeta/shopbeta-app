import { makeStyles } from "@material-ui/core";
import React from "react";
import { useState } from "react";
import 'tachyons';
import MessageModal from "../containers/MessageModal";

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        padding: theme.spacing(2)
    }
}))


const Purchase = ({ handleShut }) => {

     //declare a new state variable for modal to open
     const [open, setOpen] = useState(false)

     //functon to handle payment modal close
     const handleClose = () => {
        setOpen(false)
    }

     //functon to handle payment modal open
    const handleShow = (event) => {
        setOpen(true)
    }

    const classes = useStyles()
    const handleSubmit1 = e => {
        e.preventDefault()
        handleShut()
    }
    return(
            <div className={classes.root} onSubmit={handleSubmit1}>
                <MessageModal handleShow={open} handleShut={handleClose} />
                <div className="tr pb2">
                    <small onClick={handleShut} className="icon-close f3 hover-red"></small>
                    <div className="tl f4">
                        <p>
                            <b>Logo T-shirt White</b>
                        </p>
                    </div>
                </div>
                <div style={{ overflowY: 'scroll', height: '340px'}} className="pa3 pv3 tj">
                    
                    <div>
                    <div className="tl pv2">
                        <p className="code b f5 pv2">Check to see if Product is available</p>
                        <p className="fw5 f5"></p>
                    </div>
                            <div className="pv2 pa3">
                                <div className="br4 b--orange ba pv2 pa2 bg-light-blue">
                                    <p>
                                        <p className="tr f4"><small className="icon-check b grow hover-red"></small></p>
                                        <small className="icon-bubbles pr2 f4"></small>
                                        Contact Seller
                                    <p className="tr fw6"><small>Media: Chat interface</small></p>
                                    </p>
                                </div>
                            </div>
                            <div className="pv2 pa3">
                                <div className="pv2 br4 pa2 bg-light-blue">
                                    <p>
                                        <p className="tr f4"><small className="icon-check b grow hover-red"></small></p>
                                        <small className="icon-credit-card pr2 f4"></small>
                                        Pay with Credit Card
                                    <p className="tr fw6"><small>Saved Card</small></p>
                                    </p>
                                </div>
                            </div>
                            <div className="tl pv2">
                            <p className="f5 code b pv2">Chat with seller to buy Product</p>
                            </div>
                        <div className="tc">
                            <div className="code pa4 ph6 code">
                                <p className="icon-bubbles mid-gray tc f1"></p>
                                <p className="f4 tc pv2">Message Seller</p>
                                <p className="pv2 orange code f5">"Send a message to start a conversation"</p>
                            </div>
                        </div>
                        <div className="pv2">
                        <p className="fw5 f4 pv2">Disclaimer</p>
                        <div className="pa3 f6">
                                <h3 className="pv1">
                                <small className="icon-info pr2 f5 blue"></small>
                                    Policy Review
                                </h3>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium est assumenda distinctio sint repellat beatae dolore magnam pariatur ipsum, et deserunt asperiores doloribus sit at esse corrupti facilis aperiam nihil.
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum alias qui eaque mollitia, iure totam fugit possimus, harum necessitatibus odio non, consequuntur laudantium. Est iste sequi suscipit laboriosam dolorum repellat.
                                </p>
                            </div>
                        </div>
                    </div>
        </div>
        <div className="f4 pv2">
                            <span className="bg-light-blue ph3 f3 code pa2 br-pill">$24</span> 
                            <span className="pa2 code line-through">$29</span>
                        </div>
                        <div className="pv2 tr">
                            <span className="icon-star"></span>
                            <span className="icon-star grow"></span>
                            <span className="icon-star grow"></span>
                            <span className="icon-star grow"></span>
                            <span className="icon-star grow"></span>
                            <span className="pl2 code fw6 f5">4.7</span>
                        </div>
        <div className="pv1 tc grow">
                                <button
                                onClick={handleShow}
                                type="submit"
                                variant="contained"
                                className="ph5 white pa2 bg-orange pointer ba hover-bg-mid-gray br-pill"
                                >
                                    Contact Seller
                                </button>
                            </div>
            </div>
    )
}

export default Purchase;