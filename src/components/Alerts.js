import React from "react";

const Success = ({handClick}) => {

    return(
        <div className="w-100">
                <div className="tr pa1">
                    <small onClick={handClick} className="pa2 grow icon-close pointer red f4"></small>
                        </div>
                    <div className="tc pa3 orange f2">
                        <p className="icon-check ph2"></p>
                        <p className="ph5">Success</p>
                    </div>
                </div>
    )
}

export default Success;