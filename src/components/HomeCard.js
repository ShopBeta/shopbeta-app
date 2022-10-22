import React from "react";
import { useState, useEffect } from "react";
import img from '../images/macbook.jpg';
import ModalDialog from "../containers/ModalDialog";
import PurchaseModal from "../containers/PurchaseModal";

const HomeCard = () => {

    const [product, setProduct] = useState({})

    const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzRlODRkMDllNmQ0NTcwNzZiZTYzN2QiLCJpYXQiOjE2NjYyODYxNDJ9.Tl_cK7rmzYsdXmfFFzGVaBstGSRRZVhN8NrDvCh77HA"

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
            <h3 className="f4 tl code orange">Sponsored</h3>
            <div className="flex flex-wrap h5 bg-white b--black br3 ma2 pa2 bw2 shadow-4">
                <div className="dtc w-50 tl pv4 ph2">
                    <button className="bg-red br4 white ba ph3 pv1 b"><small>-5%</small></button>
                <div className="tc pa3 code">
                   <h3>
                        {product.name}
                        {/* White Tesla Roadstar */}
                   </h3>
                </div>
                   <div className="bg pa2 pv3 br3 b--black">
                        <span className="tl f3 pv3 code fw5">${product.price}</span>
                        <div className="tc">
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