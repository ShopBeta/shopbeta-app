import React from "react";
import { useState, useEffect } from "react";
import img from '../images/macbook.jpg';
import ModalDialog from "../containers/ModalDialog";
import PurchaseModal from "../containers/PurchaseModal";

const HomeCard = () => {

    const [product, setProduct] = useState({})
    useEffect(() => {
        fetch(`https://shopbeta-app.herokuapp.com/products`, {
            method: "GET",
            headers: {
                'Accept' : 'application/json, text/plain',
                'Content-Type' : 'application/json'
            },
        })
        .then((res) => res.json())
        .then((data) => setProduct(data))
        .catch((err) => {
            console.log(err.message)
        })
    }, [])

    const [open, setOpen] = useState(false)

    const [show, setShow] = useState(false)

      //functon to handle payment modal close
      const handleShut= () => {
        setOpen(false)
    }

     //functon to handle payment modal open
    const handleShow = () => {
        setShow(true)
    }

    //functon to handle details modal close
    const handleClose= () => {
        setShow(false)
    }
    
    //functon to details payment modal open
    const handleOpen = () => {
        setOpen(true)
    }


    return(
        <div className="dib w-100">
                <PurchaseModal handleShow={open} handleShut={handleShut} />
                <ModalDialog handleOpen={show} handleClose={handleClose} />
            <p className="f4 tl pl2 code orange">Sponsored</p>
            <div className="flex flex-wrap h6 bg-white b--black br3 ma2 pa2 bw2 shadow-4">
                <div className="dtc w-50 tl pv3 ph2">
                <p className="pv1 code f5">
                    by Ronel
                </p>
                <div className="tc pt5 pa2 code">
                   <h3>
                        {/* {product.name} */}
                        White Macbook Laptop
                   </h3>
                </div>
                   <div className="bg pa2 pv3 br3 b--black">
                        <span className="tl f3 pv3 code fw5">
                            $250
                            {/* {product.currency}{product.price} */}
                        </span>
                        <div className="pv2 tr">
                            <span className="icon-star"></span>
                            <span className="icon-star"></span>
                            <span className="icon-star"></span>
                            <span className="icon-star"></span>
                            <span className="icon-star"></span>
                            <span className="pl2 code fw6 f5">4.5</span>
                        </div>
                        <div onClick={() => {window.history.pushState(null, "", product._id)}} className="tc">
                          <button onClick={handleShow} className="bg-orange white pointer ba w-100 pa3 br-pill grow"><small className="tc">Purchase</small></button>
                        </div>
                   </div>
                </div>
                <div onClick={handleOpen} className="dtc w-50 pointer">
                    <img src={img} alt="sponsored" className="br3 w-100 pointer" width="500px" height="240px" />
                </div>
            </div>
        </div>
    )
}

export default HomeCard;