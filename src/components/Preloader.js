import { render } from '@testing-library/react'
import React, { Component} from 'react'
import 'tachyons'

class Preloader extends Component {
    state = {
        preloading:true
    }
    componentDidMount() {
        setTimeout(
            () => this.setState(() => ({ preloading: false})),
            1500
        );
    } 
       render() {
            const { preloading } = this.state
            return(
                    <div>
                        { preloading &&
                            <section class="preloader">
                                <div class="spinner">
                                    <span class="spinner-rotate">
                                        <div className='tc' style={{color: '#ee9617', fontSize: '27px', fontWeight: '500', letterSpacing: '-1px'}}>ShopBeta</div>
                                    </span>
                                </div>
                            </section>
                        }
                    </div>
                )
    }
      
}


export default Preloader