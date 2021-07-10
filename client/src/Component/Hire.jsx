import React, { Component } from 'react';
import image from './../Image/flower.jpg'

class Hire extends Component {
    state = {  }
    render() { 
        return (
            <div>
            <div className='contain'>
                <img className='hire' src={image} alt="Profile"/>
                <div className="cen">
                    <h1>I Am Available For Freelancer.</h1>
                    <a type="button" 
                    class="btn btn-outline-dark" 
                    href="mailto:rupamsahriar@gmail.com"
                    style={{fontSize:'18px'}}>
                        Hire Me
                    </a>
                </div>
            </div>
            </div> 
         );
    }
}
 
export default Hire;