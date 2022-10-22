import { makeStyles } from "@material-ui/core";
import React from "react";
import { useState, useEffect } from "react";
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

    const [product, setProduct] = useState({})
    const token = localStorage.getItem("token")

    useEffect(() => {
        fetch(`https://shopbeta-app.herokuapp.com/products/${product._id}`, {
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
    }, [product._id, token])

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
                        <h3>{product.name}</h3>
                    </div>
                        <p className="pv2 fw7">Description</p>
                            <p>
                                {product.description}
                                {/* Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium est assumenda distinctio sint repellat beatae dolore magnam pariatur ipsum, et deserunt asperiores doloribus sit at esse corrupti facilis aperiam nihil.
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum alias qui eaque mollitia, iure totam fugit possimus, harum necessitatibus odio non, consequuntur laudantium. Est iste sequi suscipit laboriosam dolorum repellat. */}
                            </p>
                    <div className="pa3 f6">
                        <h3 className="pv2">
                            <small className="icon-info pr2 f5 blue"></small>
                                Item Review
                        </h3>
                            <div className="lh3 code fw5 f5">
                                <p className="pa2">Check the quality of item(s) and make sure it meets your expectations before making payment.</p>
                                <p className="pa2">Avoid anything that appears too good to be true, such as unrealistically low price and promises of making quick money</p>
                                <p className="pa2">Never give out you financial information including bank account details , eBay/PayPal info and any other information that could be misused.</p>
                            </div>
                        </div> 
                    </div>
                    <div className="f4 pv3 code">
                        <span className="bg-light-blue ph3 f3 pa2 br-pill">${product.price}</span> 
                        <span className="pa2 code line-through">${product.oldprice}</span>
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
                        <button onClick={handleShow} type="submit" variant="contained" className="ph5 white pa2 bg-orange ba hover-bg-mid-gray br-pill">
                            Buy now
                        </button>
                    </div>
            </div>
    )
}

export default Details;