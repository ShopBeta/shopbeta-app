 import React from "react";
 import 'tachyons';

const CreditCard = () => {
    return(
        <div className="dib tj b--black tc">
            <div className="flex flex-wrap bg-white br3 pa1 mars ma1 bw2 shadow-5">
                <div>
                    <span className="tr grow code pl6">
                        <small className="bg-light-blue red pa2 br3 ph3">
                            MasterCard
                        </small>
                    </span>
                <div className="pv2">
                    <div className="fw7 code f5">
                        <span className="pr3">4358</span>
                        <span className="pr3">4358</span>
                        <span className="">.....</span>
                    </div>
                    <div>
                        
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
}

export default CreditCard;