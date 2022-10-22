import React from 'react'
import img1 from '../images/2.jpg';


const Comment = ({ text, file, time }) => {
    return(
            <div>
                <div class="chat-wrapper">
                            <div className="">
                                <div>
                                    <div className="tj flex flex-wrap">
                                        <img src={img1} alt="avatar" className="br-100" width="50px" height="50px" />
                                        <span className="pa2 fw5 f5">
                                            Ronel Michael
                                            <p className="f6 code fw3">
                                                Vancouver, BC
                                            </p>
                                        </span>
                                            </div>
                                                </div>
                                                    <div className="pv2">
                                                        <div className="bg-light-blue pa3 br4">
                                                            {text}
                                                            {/* But I must explain to you how all this mistaken
                                                            idea of denouncing pleasure and praising pain was */}
                                                        </div>
                                                        <small class="opacity-6 code">
                                                            <i class="pr2"></i>
                                                            {time}
                                                            {/* 11:01 AM | Yesterday */}
                                                        </small>
                                                    </div>
                                                </div>
                                            </div> 
            </div>
    )
}

export default Comment; 