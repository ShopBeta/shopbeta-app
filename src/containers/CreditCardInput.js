import React from "react";
import 'tachyons';

const CreditCardInput = () => {
   return(
        <div className="dtc w-25">
            <div className="dib tj pl3">
                <h3 className="f4 orange code pl2"><small>Add new CreditCard</small></h3>
           <div className="flex flex-wrap tl br3 pa3 ma2">
               <div>
                   <span className="pr6 blue icon-credit-card f3"></span>
                   <span className="tr pl3">
                   </span>
                   <div className="pv3">
                       <input type="text" className="pa2 br3 ba w5" placeholder="Name on Card" />
                   </div>
                   <div className="pv2">
                       <input type="text" className="pa2 br3 code ba w5" placeholder="Card Number" />
                   </div>
                   <div className="pv3">
                   <span>
                       <input type="text" className="pa2 br3 code ba w4" placeholder="MM/YY" />
                   </span>
                   <span className="pl5">
                        <input type="text" className="pa2 br3 code ba w3" placeholder="CCV"/>
                   </span>
                   </div>
                   <div className="pv2 tc">
                       <button type="button" className="pa3 ba grow br-pill mars hover-bg-mid-gray">
                           <small className="ph5 fw7 f6">Save new card</small>
                       </button>
                   </div>
                </div>
           </div>
       </div>
    </div>       
   )
}

export default CreditCardInput;