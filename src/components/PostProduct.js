import React from "react";
import 'tachyons';
// import img from '../images/tst-image3.jpg'


const PostProduct = ({ name, images, description, currency, price, oldprice, category }) => {

    const me = localStorage.getItem("meId")
    console.log(me)

    const fileInput = () => {
        document.querySelector('#file-upload').onchange = function() {
           const input = document.querySelector('#file-upload')
           const list = document.querySelector('#file-name')
           list.innerHTML = '<ul>'
                for (var i = 0; i < input.files.length; ++i ) {
                    list.innerHTML += '<li>' + input.files.item(i).name + '</li>';
                }
           list.innerHTML += '</ul>'
        }
    }

    const handClick = (event) => {
        event.currentTarget.innerHTML = 'Posting...';
        event.currentTarget.style.fontWeight = 'bold';
    }
 
    return(
            <div className="tc w-100">
                <div style={{width: '360px'}} className="dib tc pa2">
                    <p className="tc">
                        <img src={`https://shopbeta-api.onrender.com/users/${me}/avatar`} alt="avatar" className="br-100 ph2" width="60px" height="60px" />
                    </p>
                    <form action={`https://shopbeta-api.onrender.com/products/${me}`} method="post" encType="multipart/form-data">  
                        <div style={{ overflowY: 'scroll'}} className="pa1 code pv3 tj">
                            <div className="tl pv2">
                                <p className="pv1 f5 fw5">Product's name</p>
                                <input type="text" name="name" className="name br3 ba pa3 w-100" required placeholder="Product's name" />
                            </div>
                            <div className="tl pv2">
                                <p className="pv1 f5 fw5">Description</p>
                                <p className="pv2">
                                    <textarea id="myInput" name="description" className="description br3 ba pa3 w-100 h4" required placeholder="Write a short description about your product or service" aria-label="With textarea"></textarea>
                                </p>
                            </div>
                            <p className="f5 fw5 pv2" for="Category">Category</p>
                            <select className="category f5 pa3 br3 w-100" name="category" id="Category">
                                <option id="Clothing & accessories" name="Clothing & accessories">Clothing & accessories</option>
                                <option id="Electronics" name="Electronics">Electronics</option>
                                <option id="Home & garden" name="Home & garden">Home & garden</option>
                                <option id="Health & beauty" name="Health & beauty">Health & beauty</option>
                                <option id="Entertainment" name="Entertainment">Entertainment</option>
                                <option id="Sports & outdoors" name="Sports & outdoors">Sports & outdoors</option>
                                <option id="Antique & collectibles" name="Antique & collectibles">Antique & collectibles</option>
                                <option id="Vehicles" name="Vehicles">Vehicles</option>
                                <option id="Housing" name="Housing">Housing</option>
                                <option id="Miscellaneous" name="Miscellaneous">Miscellaneous</option>
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
                                    <input type="number" name="price" className="price br3 ba pa3 w-100 fw5 w-80" required placeholder="Product's price" />
                                </span>
                            </div>
                            <div className="tl pv2">
                            <p className="pv1 f5 fw5">Old Price</p>
                                <span>
                                    <input type="number" name="oldprice" className="oldprice br3 line-through ba pa3 w-100 fw5 w-80" required placeholder="Old price" />
                                </span>
                            </div>
                            <p className="pv2">
                                <p className="f5 fw5">Add Images</p>
                                <div className="pv2 bg br3 tc">
                                    <label>
                                        <small className="icon-camera hover-mid-gay f3 orange pointer"></small><br/>
                                        <div id="file-name" className="hover-mid-gay f5 fw5 orange pointer">Select Images</div>
                                        <input style={{display: 'none'}} onClick={fileInput} id="file-upload" type="file" name="images" multiple="multiple" className="images pointer pa3 w-100" required/>
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
                                        <div className="pa2 mid-gray fw6">
                                            <p>Give much detail and description about your product or service</p>
                                            <p className="pv2">Ensure to upload 4 high quality images</p>
                                            <p className="pv2">Each image file size shouldn't exceed 5MB</p>
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
            </div>
    )
}

export default PostProduct;