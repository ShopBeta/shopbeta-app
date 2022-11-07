import React from "react";

const ErrorPage = () => {
    return(
        <div>
            <div className="tc code orange ph6 pv6">
                <p className="icon-feed f4 pv2"></p>
                <p>Seems there's a problem...</p>
            </div>
        </div>
    )
}

const AdBlank = () => {
    return(
        <div>
            <div className="pv6 ph2 orange code">
                <p className="pb2"><small className="icon-like f3 ph2"></small>Here's some tips to get you started</p>
                <div>
                    <p>- Go to the Home page to follow users to get Ads</p>
                    <p className="pv2 tr icon-info"></p>
                    <p>- follow profiles that match your interest</p>
                    <p>- get updates on product listing of every profile you follow</p>
                    <p className="pv2 tr"><button className="pa2 mars grow f6 br-3 ba">Get started</button></p>
                    <p>- Enjoy the best experiences on ShopBeta</p>
                </div>
            </div>
        </div>
    )
}



const CommentBlank = () => {
    return(
        <div>
            <div className="pv6 code pa4 ph6 code">
                    <p className="icon-bubbles mid-gray tc f1"></p>
                    <p className="f4 tc orange pv2">No Comments yet</p>
            </div>
        </div>
    )
}



const MessageBlank = () => {
    return(
        <div className="ph6">
            <div className="pv6 code pa4 ph2 code">
                    <p className="icon-bubbles mid-gray tc f1"></p>
                    <p className="f4 tc pv2">No Messages yet</p>
                    <p className="pv2 orange code f5">"Send a message to start a conversation"</p>
            </div>
        </div>
    )
}

export { ErrorPage, AdBlank, CommentBlank, MessageBlank };