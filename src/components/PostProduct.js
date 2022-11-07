import { makeStyles } from "@material-ui/core";
import React from "react";
import { useState } from "react";
import 'tachyons';
import Dialog from "../containers/Dialog";

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        padding: theme.spacing(2)
    }
}))



const PostProduct = ({ handleShut, name, images, description, price, oldprice, category }) => {

    const [open, setOpen] = useState(false)

    const handClick = () => {
        handleShut()
        setOpen(false)
    }
    
    const handClickShow = () => {
        setOpen(true)
    }

    const token = localStorage.getItem("token")
    
    const product = async () => {
        const product = {
            name: document.querySelector('.name').value,
            images: document.querySelector('.images').value,
            description: document.querySelector('.description').value,
            category: document.querySelector('.category').value,
            currency: document.querySelector('.currency').value,
            price: document.querySelector('.price').value,
            oldprice: document.querySelector('.oldprice').value
        }

        await fetch("https://shopbeta-app.herokuapp.com/products", {
            method: "POST",
            headers: {
                'Authorization' : 'Bearer ' + token,
                'Accept' : 'application/json, text/plain',
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify(product)
        })
        .then((res) => res.json())
        .then((data) => console.log(data))
        .catch((err) => {
            console.log(err.message)
        })
    }

    const classes = useStyles()
    const handleSubmit = e => {
        e.preventDefault()
        product()
    }
    return(
            <div className={classes.root}>
                <form onSubmit={handleSubmit}>  
                    <Dialog open={open} handClick={handClick} />
                    <div className="tr w-100 pb2">
                        <small onClick={handleShut} className="icon-close f3 hover-red"></small>
                    </div>
                    <div style={{ overflowY: 'scroll', height: '400px', width: '500px'}} className="pa3 code pv3 tj">
                            <div className="tl pv2">
                                <p className="pv1 f5 fw5">Product's Name</p>
                                <input type="text" name="name" value={name} className="name br3 ba pa2 w-100" required placeholder="Product's name" />
                            </div>
                            <div className="tl pv2">
                                <p className="pv1 f5 fw5">Description</p>
                                <p className="pv2">
                                    <textarea id="myInput" value={description} name="description" className="description br3 ba pa2 w-100 h3" required placeholder="What's on your mind?" aria-label="With textarea"></textarea>
                                </p>
                            </div>
                            <p className="f5 fw5 pv2" for="Category">Category</p>
                            <select className="category f5 pa1 br3 ba w-100" value={category} name="category" id="Category">
                                <option id="Women Fashion" name="Women Fashion">Women Fashion</option>
                                <option id="Men Clothing" name="Men Clothing">Men Clothing</option>
                                <option id="Phone and Accessories" name="Phone and Accessories">Phone and Accessories</option>
                                <option id="Consumer Electronics" name="Consumer Electronics">Consumer Electronics</option>
                                <option id="Home and Garden" name="Home and Garden">Home and Garden</option>
                                <option id="Beauty and Health" name="Beauty and Health">Beauty and Health</option>
                                <option id="Sports and Entertainment" name="Sports and Entertainment">Sports and Entertainment</option>
                            </select>
                            <div className="tl pv2">
                            <p className="pv1 f5 fw5">Price</p>
                                <span>
                                <select className="currency pa2 f5 fw5 b--transparent" name="currency" id="Category">
                                    <option id="Women Fashion" name="Women Fashion">$</option>
                                    <option id="Women Fashion" name="Women Fashion">£</option>
                                    <option id="Women Fashion" name="Women Fashion">₦</option> 
                                    <option id="Women Fashion" name="Women Fashion">GH¢</option> 
                                </select>
                                </span>
                                <span>
                                    <input type="number" name="price" value={price} className="price br3 ba pa2 w-100 fw5 w-80" required placeholder="80 maybe?" />
                                </span>
                            </div>
                            <div className="tl pv2">
                            <p className="pv1 f5 fw5">Old Price</p>
                                <span>
                                    <input type="number" name="oldprice" value={oldprice} className="oldprice br3 line-through ba pa2 w-100 fw5 w-80" required placeholder="95 maybe?" />
                                </span>
                            </div>
                            <p className="pv2">
                                <p className="f5 fw5">Add Image</p>
                                <div className="pv2 br-pill">
                                    <input type="file" name="images" value={images} className="images pa3 w-90 ba br3" id="customFile" />
                                </div>
                            </p>
                            <div>
                                <div className="pv2">
                                <div className="pa3 pv1 tj f6">
                                        <h3 className="pv1">
                                        <small className="icon-info pr2 f5 blue"></small>
                                            Some tips
                                        </h3>
                                        <div className="code pa2 fw6">
                                            <p>Give as much details and description about the product or service</p>
                                            <p className="pv2">Ensure to upload high quality images</p>
                                            <p className="pv2">Image file size shouldn't exceed 5MB</p>
                                            <p>680x680 is best recommended</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
            </div>
                <div className="pv2 tc grow">
                    <button onClick={handClickShow} type="submit" variant="contained" className="ph5 pa2 white mars pointer ba hover-bg-mid-gray br-pill">
                        Post Product
                    </button>
                </div>
            </form>
        </div>
    )
}

export default PostProduct;