import { render } from "@testing-library/react";
import React from "react";
import '../assets/css/global.css'
import { ViewPost } from "../components/Posts";
// import { NetworkError }from "./indexes/ErrorPages"


const ViewFeed = () => {

    render()
        return(
                <div className="">
                    <div>                        
                        <main>
                            <div className="pb5">
                                <ViewPost />
                            </div>
                        </main>

                        <footer style={{position: 'fixed', width: '100%', backgroundColor: '#ffffff', borderBottom: '1px thin black', borderTop: '1px thick black', bottom: '0', left: '0', marginTop: '1rem', padding: '1rem'}}>
                            <div className="br-pill field-color bw2 tc">
                                <div className="pv1">
                                    <span className="">
                                        <label className="hover-red">
                                            <i className="f3 pointer gray pa3 fi fi-rs-link"></i>
                                            <input style={{display: 'none'}}  id="file-upload" type="file" name="media" className="media pointer pa3 w-100" />
                                        </label>
                                    </span>
                                    <span className="">
                                        <input type="text" name="comment" className="comment b--transparent br-pill ba field-color w-70 pa3" placeholder="Comment here" required />
                                    </span>
                                    <span className="">
                                        <i className="f3 pointer gray pa3 fi fi-rs-paper-plane-top"></i>
                                    </span>
                                </div>
                            </div>
                        </footer>
                    </div>
                </div>
            );
        }

export default ViewFeed;