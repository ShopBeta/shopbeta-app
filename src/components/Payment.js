import { makeStyles } from "@material-ui/core";
import React from "react";
import { useState, useEffect } from "react";
import 'tachyons';
import CreditCard from "./CreditCard";

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        padding: theme.spacing(2)
    }
}))


const Payment = ({ handleShut }) => {

    const [data, setData] = useState({})

    useEffect(() => {
        fetch("https://shopbeta-api.onrender.com/products/:id")
        .then(res => res.json())
        .then(data => setData(data))
        .catch((err) => {
            console.log(err.message)
        })
    }, [])

    const classes = useStyles()
    const handleSubmit1 = e => {
        e.preventDefault()
        handleShut()
    }
    return(
            <div className={classes.root} onSubmit={handleSubmit1}>
                <div className="tr pb2">
                    <small onClick={handleShut} className="icon-close f3 hover-red"></small>
                </div>
                <div style={{ overflowY: 'scroll', height: '340px'}} className="pa3 pv3 tj">
                    <div className="tl pv2">
                        <p>
                            <b>Logo T-shirt White</b>
                        </p>
                    </div>
                <div>
                <div className="tl pv2">
                    <p className="fw5 f4 pv2">Step 1</p>
                    <p className="fw5 f5">Select payment method</p>
                </div>
                <div className="pv2 pa3">
                    <div className="grow br4 pv2 pa2 bg-light-blue">
                        <p>
                            <p className="tr f4"><small className="icon-check b grow hover-red"></small></p>
                                <small className="icon-wallet pr2 f4"></small>
                                    Pay with Coin Wallet
                            <p className="tr fw6"><small>Saved Wallet: Trust Wallet</small></p>
                        </p>
                    </div>
                </div>
                <div className="pv2 pa3">
                    <div className="grow pv2 br4 pa2 ba b--orange bg-light-blue">
                        <p>
                            <p className="tr f4"><small className="icon-check b grow hover-red"></small></p>
                                <small className="icon-credit-card pr2 f4"></small>
                                    Pay with Credit Card
                                <p className="tr fw6"><small>Saved Card: ...0854 Master</small></p>
                            </p>
                    </div>
                </div>
                <div className="tl pv2">
                    <p className="fw5 f4 pv2">Step 2</p>
                    <p className="fw5 f5">Complete payment</p>
                </div>
                <div className="tc">
                    <CreditCard />
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
            <div className="f4 pv3">
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
            <div className="pv2 tc grow">
                <button type="submit" variant="contained" className="ph5 pa2 bg-orange pointer ba hover-bg-mid-gray br-pill">
                    Purchase
                </button>
            </div>
        </div>
    )
}

export default Payment;