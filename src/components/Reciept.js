import React from "react";

const Receipt = ({handleShut}) => {

    return(
        <div className="w-100 code pv2">
                <div className="tr pa1">
                    <span className="pa2 grow icon-printer hover-blue red f4"></span>
                    <span onClick={handleShut} className="pa2 grow icon-close hover-red f4"></span>
                        </div>
                        <p className="code pa2 fw6">145003</p>
                    <div className="tc pa2 orange f2">
                        <p className="icon-check ph2"></p>
                        <p className="ph5">Receipt</p>
                    </div>
                    <div className="pv1 pa2">
                                <div className="pv2 br4 pa2 earth">
                                    <p>
                                        <p className="tr f4"><small className="icon-check b"></small></p>
                                        <small className="icon-credit-card pr2 f4"></small>
                                        Payed with Credit Card
                                    <p className="tr fw6"><small>Saved Card: ...0854 Master</small></p>
                                    </p>
                                </div>
                            </div>
                            <div>
                                <p className="pa2 pr2 f6 fw6">STATUS:<small className="orange f5 ph2">success</small></p>
                                <p className="pa2 pr2 f6 fw6">ACCOUNT NAME:<small className="orange f5 ph2">Ronel Michael</small></p>
                                <p className="pa2 pr2 f6 fw6">PRODUCT ID:<small className="orange f5 ph2">DGM2324400</small></p>
                                <p className="pa2 pr2 f6 fw6">PRODUCT NAME:<small className="orange f5 ph2">Jordan shoes</small></p>
                                <div className="tr">
                                    <p className="pa1 pr2 f7 fw6">COLOR:<small className="orange f5 ph2">blue</small></p>
                                    <p className="pa1 pr2 f7 fw6">SIZE:<small className="orange f5 ph2">45</small></p>
                                </div>
                                <p className="pa2 pr2 f6 fw6">PRICE:<small className="orange f5 ph2">$40.99</small></p>
                                <p className="pa2 pr2 f6 fw6">QT:<small className="orange f5 ph2">5</small></p>
                                <p className="pa2 pr2 f6 fw6">DATE, TIME:<small className="orange f6 ph1">3:00pm GMT</small>
                                <small className="orange f5 ph2">14th May, 2022</small></p>
                                <p className="pa2 pr2 f6 fw6">STORE:<small className="orange f5 ph2">Zara Malls</small></p>
                            </div>
                </div>
    )
}

export default Receipt;