import { makeStyles } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import 'tachyons';

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        padding: theme.spacing(2)
    }
}))


const Purchase = ({ handleShut, id }) => {

    const pathname = window.location.pathname.split('/')
    const path = pathname[3]
    console.log(path)

    const [product, setProduct] = useState({})
    useEffect(() => {
        fetch(`https://shopbeta-api.onrender.com/products/${path}`)
        .then(res => res.json())
        .then(data => setProduct(data))
        .catch((err) => {
            console.log(err.message)
        })
    }, [path])

    const [user, setUser] = useState({})
    useEffect(() => {
        fetch(`https://shopbeta-api.onrender.com/users/${product.owner}`, {
            method: "GET",
            headers: {
                'Accept' : 'application/json, text/plain',
                'Content-Type' : 'application/json'
            },
        })
        .then((res) => res.json())
        .then((data) => setUser(data))
        .catch((err) => {
            console.log(err.message)
        })
    }, [product.owner])


    const classes = useStyles()
    const handleSubmit1 = e => {
        e.preventDefault()
        handleShut()
    }
    return(
            <div className={classes.root} onSubmit={handleSubmit1}>
                <div className="tr pb2">
                    <small onClick={handleShut} className="icon-close pointer f3 hover-red"></small>
                    <div className="tl f4">
                        <p>
                            <b>{product.name}</b>
                        </p>
                    </div>
                </div>
                <div style={{ overflowY: 'scroll', height: '340px'}} className="pv3 tj">
                    <div>
                        <div className="tl pv2">
                            <p className="b f5 pv2">Check to see if Product is available</p>
                            <p className="fw5 f5"></p>
                        </div>
                        <div className="pv2 pa2">
                                <div className="br4 b--yellow ba pv2 pa2 mars white">
                                    <p>
                                        <p className="tr f4"><small className="icon-check b grow hover-red"></small></p>
                                        <small className="icon-bubbles pr2 f4"></small>
                                        Message Seller
                                    <p className="tr fw6"><small>Media: Chat interface</small></p>
                                    </p>
                                </div>
                            </div>
                            <div className="pv2 pa2">
                                <div className="pv2 br4 pa2 mercury white">
                                    <p>
                                        <p className="tr f4"><small className="icon-check b grow hover-red"></small></p>
                                        <small className="icon-phone pr2 f4"></small>
                                        {user.phonenumber}
                                    <p className="tr fw6"><small>Phone number</small></p>
                                    </p>
                                </div>
                            </div>
                            <div className="pv2">
                            <div className="pa2 f6">
                                <h3 className="pv1">
                                <small className="icon-info pr2 f5 blue"></small>
                                   Disclaimer
                                </h3>
                                <div className="lh3 f5 fw6 pa2">
                                <p style={{lineHeight: "20px", fontSize: "13.5px"}} className="fw6">
                                    No returns allowed on any FINAL SALE items, except for if flaws in products are found in the event
                                    that you are not 100% satisfied with any item you purchase, we accept returns on any item (other than FINAL). This implies that any product shipped or delivered with defects or material. Please contact us at info@shopbetaonline.com to approve your return.
                                    We reserve the right to deny any refund to sender without prior return approval. Only warn out items will be accepted for returns/exchange within 30 days at when item was delivered to you.
                                </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="f4 pv2">
                    <span className="bg-light-blue ph3 f3 code pa2 br-pill">{product.currency}{product.price}</span> 
                        <span className="pa2 code line-through">{product.currency}{product.oldprice}</span>
                </div>
                <div className="pv2 tr">
                    <span className="icon-star"></span>
                    <span className="icon-star grow"></span>
                    <span className="icon-star grow"></span>
                    <span className="icon-star grow"></span>
                    <span className="icon-star grow"></span>
                    <span className="pl2 code fw6 f5">{product.rating}</span>
                </div>
                <div className="pv1 tc grow">
                   <Link onClick={() => {window.localStorage.setItem("userId", product.owner)}} className="link black" to={"/assets/vendor/User"}>
                        <button type="submit" variant="contained" className="ph5 white pa3 bg-orange pointer ba hover-bg-mid-gray br-pill">
                            Contact Seller
                        </button>
                    </Link>
                </div>
            </div>
    )
}

export default Purchase;