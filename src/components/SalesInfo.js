import React from "react";

const SalesInfo = () => {
    return(
        <div>
            <div className="dib">
            <div className="flex flex-wrap tl br3 pa3 ma2 ">
                <div>
                    <span className="f4 orange code">$3,300</span>
                <div className="pv3">
                    <p className="f7 fw5">Your current balance</p>
                    <div className="f6 pv2">
                        <span className="pr2 fw7 code pv1">+15%</span>
                        <span className="pv1 code fw6">($250)</span>
                        <p className="pv2 tc">
                            <p className="f5 fw5 pa1 br2 ph6">
                                <small>Add credit</small>
                            </p>
                        </p>
                    </div>
                </div>
               <div className="dtc pv3 code dt--fixed">
                <span className="pr6 dib">
                        <p className="f7 fw5">ORDERS<small className="f4 pa2">1867</small></p>
                        <div className="fw7 f5">
                            <p>40%</p>
                        </div>
                    </span>
                <span className="dib">
                        <p className="f7 fw5">SALES<small className="f4 pa2">$3M</small></p>
                        <div className="fw7 f5">
                            <p>60%</p>
                        </div>                 
                    </span>
                </div>
                </div>
            </div>
        </div>
        </div>
    )
}

export default SalesInfo;