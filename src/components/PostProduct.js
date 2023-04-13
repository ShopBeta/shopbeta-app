import { makeStyles } from "@material-ui/core";
import React from "react";
import 'tachyons';

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        padding: theme.spacing(2)
    }
}))



const PostProduct = ({ handleShut, name, images, description, currency, price, oldprice, category }) => {

    const me = localStorage.getItem("meId")
    console.log(me)

    const handClick = (event) => {
        event.currentTarget.innerHTML = 'Posting...';
        event.currentTarget.style.fontWeight = 'bold';
    }

    const classes = useStyles()
 
    return(
            <div className={classes.root}>
                <form action={`https://shopbeta-api.onrender.com/products/${me}`} method="post" encType="multipart/form-data">  
                    <div className="tr w-100 pb2">
                        <small onClick={handleShut} className="icon-close pointer f3 hover-red"></small>
                    </div>
                    <div style={{ overflowY: 'scroll', height: '400px'}} className="pa1 code pv3 tj">
                            <div className="tl pv2">
                                <p className="pv1 f5 fw5">Product's Name</p>
                                <input type="text" name="name" className="name br3 ba pa2 w-100" required placeholder="Product's name" />
                            </div>
                            <div className="tl pv2">
                                <p className="pv1 f5 fw5">Description</p>
                                <p className="pv2">
                                    <textarea id="myInput" name="description" className="description br3 ba pa2 w-100 h3" required placeholder="What's on your mind?" aria-label="With textarea"></textarea>
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
                                <option id="Sports" name="Sports">Sports</option>
                                <option id="Shoes" name="Shoes">Shoes</option>
                            </select>
                            <div className="tl pv2">
                            <p className="pv1 f5 fw5">Price</p>
                                <span>
                                <select className="currency pa2 f5 fw5 b--transparent" name="currency" id="Category">
                                    <option id="dollar" name="dollar">$</option>
                                    <option id="pounds" name="pounds">£</option>
                                    <option id="naira" name="naira">₦</option> 
                                    <option id="cedi" name="ghanian cedi">GH¢</option> 
                                </select>
                                </span>
                                <span>
                                    <input type="number" name="price" className="price br3 ba pa2 w-100 fw5 w-80" required placeholder="80 maybe?" />
                                </span>
                            </div>
                            <div className="tl pv2">
                            <p className="pv1 f5 fw5">Old Price</p>
                                <span>
                                    <input type="number" name="oldprice" className="oldprice br3 line-through ba pa2 w-100 fw5 w-80" required placeholder="95 maybe?" />
                                </span>
                            </div>
                            <p className="pv2">
                                <p className="f5 fw5">Add Images</p>
                                <div className="pv2 bg br3 tc">
                                    <label>
                                        <small className="icon-camera hover-mid-gay f3 orange pointer"></small><br/>
                                        <small className="hover-mid-gay f5 fw5 orange pointer">Select Images</small>
                                        <input style={{display: 'none'}} type="file" name="images" multiple="multiple" className="images pointer pa3 w-100" id="customFile" />
                                    </label>
                                </div>
                            </p>
                            <div>
                                <div className="pv2">
                                <div className="pa2 pv1 tj f6">
                                        <h3 className="pv1">
                                        <small className="icon-info pr2 f5 blue"></small>
                                            Some tips
                                        </h3>
                                        <div className="pa2 fw6">
                                            <p>Give as much details and description about the product or service</p>
                                            <p className="pv2">Ensure to upload 4 high quality images</p>
                                            <p className="pv2">Each image file size shouldn't exceed 5MB</p>
                                            <p>680x680 is best recommended</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
            </div>
                <div className="pv2 tc grow">
                    <button type="submit" onClick={handClick} variant="contained" className="ph5 pa3 index-button white fw5 pointer ba hover-bg-mid-gray br-pill">
                        Post Product
                    </button>
                </div>
            </form>
        </div>
    )
}

export default PostProduct;