import React from "react";
import 'tachyons'
import '../Home.css'
// import blank_img1 from '../../images/photo-sharing-concept-illustration_114360-405.avif'
// import blank_img2 from '../../images/illustration-content-marketing-flat-vector_203633-1592.jpg'
import blank_img3 from '../../images/messenger-concept-illustration_114360-860.avif'
import blank_img4 from '../../images/online-wishes-list-concept-illustration_114360-3900.avif'
// import blank_img5 from '../../images/ecommerce-web-page-concept-illustration_114360-8204.avif'
import blank_img6 from '../../images/browsing-online-concept-illustration_114360-4684.jpg'
import blank_img7 from '../../images/messages-concept-illustration_114360-583.avif'


const ChatsBlank = () => {

    return(
        <div className="bg-white tc">
            <div className="pa2 pv4">
                <div className="tc">
                    <div className="pa2">
                        <div className="">
                            <img src={blank_img3} alt="blank img" className="tc" />
                            <p className="f4 fw5 pv2">You don't have any chats yet</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
);
}

const CartBlank = () => {

    return(
        <div className="bg-white tc">
            <div className="pa2">
                <div className="tc">
                    <div className="pa2">
                        <div className="">
                            <img src={blank_img4} alt="blank img" className="tc" />
                            <p className="f4 fw5 pv2">No saved items <br/> Save products from marketplace</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
);
}

const SearchBlank = () => {

    return(
        <div className="bg-white tc">
            <div className="pa2">
                <div className="tc">
                    <div className="pa2">
                        <div className="">
                            <img src={blank_img6} alt="blank img" width="400px" height="400px" className="tc" />
                    </div>
                </div>
            </div>
        </div>
    </div>
);
}

const MessagesBlank = () => {

    return(
        <div className="bg-white tc">
            <div className="pa2">
                <div className="tc">
                    <div className="pa2">
                        <div className="">
                            <img src={blank_img7} alt="blank img" className="tc" />
                            <p className="f4 fw5 pv2">No messages <br/> Send a message to start a conversion</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
);
}


export {
    ChatsBlank,
    CartBlank,
    SearchBlank,
    MessagesBlank
}