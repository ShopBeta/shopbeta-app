import { makeStyles } from "@material-ui/core";
import React from "react";
import { useState, useEffect } from "react";
import 'tachyons';
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

    const pathname = window.location.pathname.split('/')
    const path = pathname[3]
    console.log(path)

    const token = localStorage.getItem("token")
    
    const [product, setProduct] = useState({})
    useEffect(() => {
        fetch(`https://shopbeta-api.onrender.com/products/${path}`, {
            method: "GET",
            headers: {
                'Authorization' : 'Bearer ' + token,
                'Accept' : 'application/json, text/plain',
                'Content-Type' : 'application/json'
            },
        })
        .then((res) => res.json())
        .then((data) => setProduct(data))
        .catch((err) => {
            console.log(err.message)
        })
    }, [path, token])

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
                        <small onClick={handleClose} className="icon-close pointer f3 hover-red"></small>
                    </div>
                    <div style={{ overflow: 'auto', height: '330px'}} className="pv3 tj">
                    <div className="tc">
                        <Carousell>
                            <Item />
                        </Carousell>
                    </div>
                    <div className="tl pv2">
                        <h3>{product.name}</h3>
                    </div>
                        <p className="pv2 fw7">Description</p>
                            <p>
                                {product.description}
                            </p>
                    <div className="pa2 f6">
                        <h3 className="pv2">
                            <small className="icon-info pr2 f5 blue"></small>
                                Item Review
                        </h3>
                            <div style={{lineHeight: "20px", fontSize: "13.5px"}} className="fw5">
                                <p className="pa2">Check the quality of item(s) and make sure it meets your expectations before making payment.</p>
                                <p className="pa2">Avoid anything that appears too good to be true, such as unrealistically low price and promises of making quick money.</p>
                                <p className="pa2">Never give out you financial information including bank account details, eBay/PayPal info and any other information that could be misused.</p>
                            </div>
                        </div> 
                    </div>
                    <div className="f4 pv3 code">
                        <span className="bg-light-blue ph3 f3 pa2 br-pill">{product.currency}{product.price}</span> 
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
                        <button onClick={handleShow} type="submit" variant="contained" className="ph5 white pa3 pointer bg-orange ba hover-bg-mid-gray br-pill">
                            Buy now
                        </button>
                    </div>
            </div>
    )
}

export default Details;