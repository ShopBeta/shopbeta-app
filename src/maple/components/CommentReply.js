import React from "react";
// import { useState } from "react";
import { Link } from "react-router-dom";
import img from '../assets/images/nike.jpg'


const CommentReply = () => {

        return(
                <div className="pv2">
                    <div className="tj flex flex-wrap">
                        <Link className="link black" to={"maple/pages/userprofile"}>
                            <img src={img} alt="avatar" className="br-100 pa2" width="30px" height="30px" />
                        </Link>
                        <div className="">
                            <div style={{width: '240px'}} className="field-color br4">
                                <div className="navbar navbar-expand-lg">
                                    <div style={{fontSize: '29px'}} className="container">
                                        <span className="navbar-brand pointer">
                                            <small class="f6 fw6">John Doe</small>
                                            <p class="f6 pv1 gray">@John Doe</p>
                                        </span>
                                        <span className="navbar-brand pointer">
                                            <small class="f6 gray">3hr ago</small>
                                        </span>
                                    </div>
                                </div>
                                <div className="ph3 pb3 f6">
                                    This HTML file is a template. If you open it directly in the browser, you will see an empty page.
                                </div>
                            </div>
                            <div className="">
                                <nav className="navbar navbar-expand-lg">
                                    <div style={{fontSize: '29px'}} className="container">
                                        <span className="navbar-brand pointer">
                                            <i className="f5 fi fi-rs-heart"></i>
                                            <small className="f6 pl1">5</small> 
                                        </span>
                                        <span className="navbar-brand pointer">
                                            <i className="f5 fi fi-rs-arrows-retweet"></i>
                                            <small className="f6 pl2">Reply</small> 
                                        </span>
                                        <span className="navbar-brand pointer">
                                            <i className="f5 fi fi-rs-at"></i>
                                        </span>
                                        <span className="navbar-brand pointer">
                                            <small className="f6 gray pl2">190 Replies</small> 
                                        </span>
                                    </div>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
    );
}


export default CommentReply;