import { makeStyles } from "@material-ui/core";
import React from "react";
import { useState } from "react";
import 'tachyons';
// import img from '../Images/Puma Sneekers.jpg'
import { Carousell, Item } from "../containers/ImageCarousel";
import PurchaseModal from "../containers/PurchaseModal";

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        padding: theme.spacing(2)
    }
}))



const Details = ({ handleClose }) => {

    const [open, setOpen] = useState(false)

     //functon to handle payment modal close
     const handleShut= () => {
        setOpen(false)
    }

     //functon to handle payment modal open
    const handleShow = () => {
        setOpen(true)
    }


    const classes = useStyles()
    const handleSubmit = e => {
        e.preventDefault()
        handleClose()
    }
    return(
            <div className={classes.root} onSubmit={handleSubmit}>
                <PurchaseModal handleShow={open} handleShut={handleShut} />
                <div className="tr pb2">
                    <small onClick={handleClose} className="icon-close f3 hover-red"></small>
                </div>
                <div style={{ overflow: 'auto', height: '350px'}} className="pa3 pv3 tj">
                    <div className="tc">
                        <Carousell>
                            <Item />
                        </Carousell>
                        {/* <img src={img} alt="shoes" className="br4 pv2" width="310px" height="230px"></img> */}
                    </div>
                    <div className="tl pv2">
                            <h3>Logo T-shirt White</h3>
                    </div>
                        <p className="pv2 fw7">Description</p>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium est assumenda distinctio sint repellat beatae dolore magnam pariatur ipsum, et deserunt asperiores doloribus sit at esse corrupti facilis aperiam nihil.
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum alias qui eaque mollitia, iure totam fugit possimus, harum necessitatibus odio non, consequuntur laudantium. Est iste sequi suscipit laboriosam dolorum repellat.
                            </p>
                            <p className="pv2 fw7">Review</p>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium est assumenda distinctio sint repellat beatae dolore magnam pariatur ipsum, et deserunt asperiores doloribus sit at esse corrupti facilis aperiam nihil.
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum alias qui eaque mollitia, iure totam fugit possimus, harum necessitatibus odio non, consequuntur laudantium. Est iste sequi suscipit laboriosam dolorum repellat.
                            </p>
                            <p className="pv2 fw7">How to use</p>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium est assumenda distinctio sint repellat beatae dolore magnam pariatur ipsum, et deserunt asperiores doloribus sit at esse corrupti facilis aperiam nihil.
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum alias qui eaque mollitia, iure totam fugit possimus, harum necessitatibus odio non, consequuntur laudantium. Est iste sequi suscipit laboriosam dolorum repellat.
                            </p>
                            <div className="pa3 f6">
                                <h3 className="pv2">
                                <small className="icon-info pr2 f5 blue"></small>
                                    Shop Policy Review
                                </h3>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium est assumenda distinctio sint repellat beatae dolore magnam pariatur ipsum, et deserunt asperiores doloribus sit at esse corrupti facilis aperiam nihil.
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum alias qui eaque mollitia, iure totam fugit possimus, harum necessitatibus odio non, consequuntur laudantium. Est iste sequi suscipit laboriosam dolorum repellat.
                                </p>
                            </div> 
        </div>
        <div className="f4 pv3 code">
                            <span className="bg-light-blue ph3 f3 pa2 br-pill">$24</span> 
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
                                className="ph5 white pa2 bg-orange ba hover-bg-mid-gray br-pill"
                                >
                                    Buy now
                                </button>
                            </div>
            </div>
    )
}

export default Details;