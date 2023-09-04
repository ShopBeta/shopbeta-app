import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import 'tachyons';
import { Carousell, Item } from "../containers/ImageCarousel";


const Details = () => {

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


    return(
           <div className="tc w-100 pv3">
                <div style={{width: '360px'}} className="dib pa3">
                    <div className="tj">
                        <div className="tc">
                            <Carousell>
                                <Item />
                            </Carousell>
                        </div>
                        <div className="f4 pv2">
                            <h3>{product.name}</h3>
                        </div>
                        <div style={{lineHeight: "20px", fontSize: "13.5px"}} className="">
                            {product.description}
                        </div>
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
                    <div className="f4 pv3 tl code">
                        <span className="bg-light-blue ph3 f3 pa2 br-pill">{product.currency}{product.price}</span> 
                        <span className="pa2 code line-through">{product.currency}{product.oldprice}</span>
                    </div>
                    <div className="pv2 tr">
                        <p className="ph2 code f4 fw6 red">-{percentage}%</p>
                    </div>
                    <div className="pv1 tc grow">
                        <Link onClick={() => {window.localStorage.setItem("productId", productId)}} className="link" to={"/components/Purchase"}>
                            <button type="submit" variant="contained" className="ph5 white pa3 pointer bg-orange ba hover-bg-mid-gray br-pill">
                                <small className="icon-handbag f6 pr2"></small>
                                Buy now
                            </button>
                        </Link>
                    </div>
                </div>
           </div>
    )
}

export default Details;