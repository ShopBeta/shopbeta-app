import React from "react";
import { Link } from "react-router-dom";


const VisualSearch = () => {

        return(
                <div className="pv6">
                    <main>
                        <div className="pa3 container" style={{width: '360px'}}>
                            <div className="tc container">
                                <div className="tc pv4">
                                    <p className="pv4">
                                        <i className="f2 red br-pill field-color tc pa4 bw2 icon-handbag"></i>
                                    </p>
                                </div>
                            </div>
                            <section className="container">
                                <div className='' style={{fontSize: '27px', fontWeight: '500'}}>
                                    <div className="tc">
                                        <p className="pv2 f3">Search for an item by<br/> taking a photo or uploading<br/> an image</p>
                                    </div>
                                </div>
                            </section>  
                            <div className="pv3 tc">
                                <div className="pv2">
                                    <button type="submit" className="button-bg bg-red white pa2 tc br-pill ba pointer w-100 pv3">
                                        TAKE A PHOTO
                                    </button>
                                </div>
                                <div className="pv2">
                                    <button className="button-bg bg-transparent b--gray pa2 tc br-pill ba pointer w-100 pv3">
                                        <label className="hover-white red">
                                            UPLOAD AN IMAGE
                                            <input style={{display: 'none'}}  id="file-upload" type="file" name="media" className="media pointer pa3 w-100" />
                                        </label>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </main>
                </div>
    );
}

export default VisualSearch;