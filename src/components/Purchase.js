import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import img from '../images/online-shopping-checkout.jpg'
import 'tachyons';

const Purchase = () => {

    const token = localStorage.getItem("token")
    const productId = localStorage.getItem("productId")
   
    const [product, setProduct] = useState({})
    useEffect(() => {
        fetch(`https://shopbeta-api.onrender.com/products/${productId}`, {
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
    }, [productId, token])

    
    const price = product.price
    const oldprice = product.oldprice 

    // calculate the percentage of income that we spent
    const newPrice = oldprice - price  
    const percentage = Math.round((newPrice / oldprice) * 100);
    
    // format represention of product prices
    let newNum = Math.abs(price);
    const num1 = newNum.toFixed(2);
    
    let oldNum = Math.abs(oldprice);
    console.log(oldNum)
    const num2 = oldNum.toFixed(2);

    const newSplit = num1.split('.');
    const oldSplit = num2.split('.');

    let intNew = newSplit[0];
    if(intNew.length > 3) {
        intNew = intNew.substr(0, intNew.length - 3) + ',' + intNew.substr(intNew.length - 3, 3); // input 2310, output 2,310
    }

    let intOld = oldSplit[0];
    if(intOld.length > 3) {
        intOld = intOld.substr(0, intOld.length - 3) + ',' + intOld.substr(intOld.length - 3, 3); // input 2310, output 2,310
    }

    return(
            <div className="tc w-100 pv2">
                <div style={{width: '360px'}} className="dib pa3">
                <div className="">
                    <div className="tl f4">
                        <p>
                            <b>{product.name}</b>
                        </p>
                    </div>
                </div>
                <div className="pv3 tj">
                    <div>
                        <div className="pv2 pa2">
                            <img src={img} className="br4" alt="online-shopping-checkout" />
                        </div>
                        <div className="pv2">
                            <div className="pa2 f6">
                                <h3 className="pv1">
                                    <small className="icon-info pr2 f5 blue"></small>
                                    Disclaimer
                                </h3>
                                <div className="lh3 f5 fw6 pa2">
                                    <p style={{lineHeight: "20px", fontSize: "13.5px"}} className="fw6">
                                        <p className="">
                                            No returns allowed on any FINAL SALE items, except for if flaws in products are found in the event
                                            that you are not 100% satisfied with any item you purchase. 
                                        </p>
                                        <p className="pv1">This implies that any product shipped or delivered by us (ShopBeta couriers) with defects or material. Please contact us at <small className="orange f5">info@shopbetaonline.com</small> to approve your return.</p>
                                        <p className="">We reserve the right to deny any refund to sender without prior return approval. </p>
                                        <p className="pv1">Only worn out items will be accepted for returns/exchange within 30 days at when item was delivered to you.</p>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="f4 tl pv2">
                    <span className="bg-light-blue ph3 f3 code pa2 br-pill">{product.currency}{intNew}</span> 
                    <span className="pa2 code line-through">{product.currency}{intOld}</span>
                </div>
                <div className="pv2 tr">
                    <p className="ph2 code f4 fw6 red">-{percentage}%</p>
                </div>
                <div className="pv1 tc grow">
                    <Link onClick={() => {window.localStorage.setItem("userId", product.owner)}} className="link black" to={"/assets/vendor/User"}>
                        <button type="submit" variant="contained" className="ph5 white pa3 bg-orange pointer ba hover-bg-mid-gray br-pill">
                            Contact Seller
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Purchase;